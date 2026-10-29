const app = document.querySelector('#app');

async function loadJson(path) {
  const response = await fetch(path, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Could not load ${path}`);
  return response.json();
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function earnedBadges(student) {
  return student.badges || [];
}

function nextBadgeFor(skillKey, xp, rules) {
  const skill = rules.skills[skillKey];
  if (!skill) return null;
  return skill.badges.find((badge) => xp < badge.xp) || null;
}

function maxThreshold(skillKey, rules) {
  const badges = rules.skills[skillKey]?.badges || [];
  return badges.length ? Math.max(...badges.map((badge) => badge.xp)) : 1;
}

function assessmentStatus(student, item) {
  const assignment = (student.assignments || []).find((entry) =>
    entry.catalog_id === item.id || entry.id === item.id
  );
  if (!assignment) return { label: 'Not started', className: 'status-muted' };
  if (assignment.status !== 'scanned') {
    return { label: 'Unavailable', className: 'status-muted', assignment };
  }

  const evidence = assignment.evidence || {};
  const verified = Boolean(
    evidence.merged_pull_request ||
    evidence.ci_success ||
    evidence.valid_pull_request ||
    evidence.commit_ahead_of_base ||
    evidence.feature_branch
  );

  if (item.type === 'practice') {
    if (assignment.score !== undefined && assignment.max_score) {
      return {
        label: `${assignment.score}/${assignment.max_score} practice`,
        className: 'status-practice',
        assignment,
      };
    }
    return {
      label: verified ? 'Practiced' : 'In progress',
      className: verified ? 'status-practice' : 'status-muted',
      assignment,
    };
  }

  if (item.type === 'quiz') {
    if (assignment.score !== undefined && assignment.max_score) {
      return {
        label: `${assignment.score}/${assignment.max_score}`,
        className: 'status-quiz',
        assignment,
      };
    }
    return {
      label: verified ? 'Completed' : 'In progress',
      className: verified ? 'status-quiz' : 'status-muted',
      assignment,
    };
  }

  return {
    label: verified ? 'Verified' : 'In progress',
    className: verified ? 'status-cp' : 'status-muted',
    assignment,
  };
}

function renderAssessmentGroup(student, items, type, catalog) {
  const definition = catalog.assessment_types?.[type] || {};
  const groupItems = items.filter((item) => item.type === type);
  if (!groupItems.length) {
    return `
      <section class="assessment-group">
        <div class="assessment-group-head">
          <div>
            <h4>${escapeHtml(definition.label || type)}</h4>
            <p>${escapeHtml(definition.purpose || '')}</p>
          </div>
          <span class="count-pill">0</span>
        </div>
        <div class="assessment-empty">No ${escapeHtml((definition.label || type).toLowerCase())} has been added yet.</div>
      </section>`;
  }

  return `
    <section class="assessment-group">
      <div class="assessment-group-head">
        <div>
          <h4>${escapeHtml(definition.label || type)}</h4>
          <p>${escapeHtml(definition.purpose || '')}</p>
        </div>
        <span class="count-pill">${groupItems.length}</span>
      </div>
      <div class="assessment-list">
        ${groupItems.map((item) => {
          const status = assessmentStatus(student, item);
          return `
            <div class="assessment-item">
              <div>
                <div class="assessment-code">${escapeHtml(item.code || item.id)}</div>
                <div class="assessment-name">${escapeHtml(item.name)}</div>
              </div>
              <span class="status-pill ${status.className}">${escapeHtml(status.label)}</span>
            </div>`;
        }).join('')}
      </div>
    </section>`;
}

function renderCourseStructure(student, catalog) {
  return (catalog.sections || []).map((section) => {
    const items = section.items || [];
    const counts = ['cp', 'practice', 'quiz'].map((type) => {
      const label = catalog.assessment_types?.[type]?.short_label || type;
      return `${items.filter((item) => item.type === type).length} ${label}`;
    }).join(' · ');

    return `
      <section class="course-section">
        <div class="course-section-head">
          <div>
            <p class="section-kicker">Course section</p>
            <h3>${escapeHtml(section.name)}</h3>
          </div>
          <div class="section-counts">${escapeHtml(counts)}</div>
        </div>
        <div class="assessment-groups">
          ${renderAssessmentGroup(student, items, 'cp', catalog)}
          ${renderAssessmentGroup(student, items, 'practice', catalog)}
          ${renderAssessmentGroup(student, items, 'quiz', catalog)}
        </div>
      </section>`;
  }).join('');
}

function renderLanding() {
  app.innerHTML = `
    <div class="access-card">
      <p class="section-kicker">Private profile view</p>
      <h2>Student profiles are no longer listed publicly.</h2>
      <p>This dashboard is being moved to authenticated GitHub access so students can open only their own profile and the teacher can open the class view.</p>
      <p class="access-note">The current GitHub Pages deployment is static, so hiding the roster is only the first step. True per-user authorization requires a sign-in/API layer before this privacy rule is considered complete.</p>
    </div>`;
}

function renderProfile(student, rules, catalog) {
  const skillEntries = Object.entries(rules.skills || {});
  const badgeHtml = earnedBadges(student).length
    ? earnedBadges(student).map((badge) => `<span class="badge">${escapeHtml(badge.name)}</span>`).join('')
    : '<span class="badge">Profile started</span>';

  const skillsHtml = skillEntries.map(([key, definition]) => {
    const xp = Number(student.skills?.[key] || 0);
    const max = maxThreshold(key, rules);
    const pct = Math.max(0, Math.min(100, (xp / max) * 100));
    const next = nextBadgeFor(key, xp, rules);
    const note = next
      ? `Next: ${escapeHtml(next.name)} · ${xp}/${next.xp} XP`
      : 'Highest badge achieved';
    return `
      <div class="skill">
        <div class="skill-head">
          <span class="skill-name">${escapeHtml(definition.label)}</span>
          <span class="skill-xp">${xp} XP</span>
        </div>
        <div class="progress" role="progressbar" aria-label="${escapeHtml(definition.label)}" aria-valuemin="0" aria-valuemax="${max}" aria-valuenow="${xp}">
          <span style="width:${pct}%"></span>
        </div>
        <p class="next-note">${note}</p>
      </div>`;
  }).join('');

  const nextCards = skillEntries.map(([key, definition]) => {
    const xp = Number(student.skills?.[key] || 0);
    const next = nextBadgeFor(key, xp, rules);
    if (!next) return '';
    return `
      <div class="next-card">
        <strong>🔒 ${escapeHtml(next.name)}</strong>
        <span>${xp} / ${next.xp} ${escapeHtml(definition.label)} XP</span>
      </div>`;
  }).filter(Boolean).join('');

  app.innerHTML = `
    <article class="profile">
      <div class="profile-top">
        <div>
          <p class="section-kicker">My achievement profile</p>
          <h2 class="profile-name">${escapeHtml(student.name)}</h2>
          <p class="profile-label">@${escapeHtml(student.github)}</p>
        </div>
        <div class="total">${Number(student.total_xp || 0)} verified XP</div>
      </div>

      <h3 class="section-title">Learning map</h3>
      <div class="course-map">${renderCourseStructure(student, catalog)}</div>

      <h3 class="section-title">Achievements</h3>
      <div class="badge-row">${badgeHtml}</div>

      <h3 class="section-title">Skills</h3>
      <div class="skill-list">${skillsHtml}</div>

      <h3 class="section-title">Next achievements</h3>
      <div class="next-grid">${nextCards || '<div class="next-card"><strong>All current badge levels achieved.</strong></div>'}</div>
    </article>`;
}

async function boot() {
  try {
    const [data, rules, catalog] = await Promise.all([
      loadJson('data.json'),
      loadJson('rules.json'),
      loadJson('catalog.json'),
    ]);

    const render = () => {
      const github = decodeURIComponent(location.hash.replace(/^#/, ''));
      if (!github) {
        renderLanding();
        return;
      }

      const student = data.students.find((item) => item.github === github);
      if (!student) {
        renderLanding();
        return;
      }
      renderProfile(student, rules, catalog);
    };

    window.addEventListener('hashchange', render);
    render();
  } catch (error) {
    app.innerHTML = `<div class="empty"><strong>Dashboard data is not ready.</strong><br>${escapeHtml(error.message)}</div>`;
  }
}

boot();
