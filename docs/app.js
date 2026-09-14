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

function slug(value) {
  return encodeURIComponent(value);
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

function renderStudentList(data) {
  if (!data.students.length) {
    app.innerHTML = `
      <div class="empty">
        <strong>No student profiles yet.</strong><br>
        Add students to <code>04_Assessment/Developer_Achievement_System/config/students.json</code>,
        then run the achievement workflow.
      </div>`;
    return;
  }

  app.innerHTML = `
    <div class="grid">
      ${data.students.map((student) => {
        const badges = earnedBadges(student).slice(-4).reverse();
        return `
          <a class="card" href="#${slug(student.github)}">
            <h2>${escapeHtml(student.name)}</h2>
            <div class="github">@${escapeHtml(student.github)}</div>
            <div class="badge-row">
              ${badges.length
                ? badges.map((badge) => `<span class="badge">${escapeHtml(badge.name)}</span>`).join('')
                : '<span class="badge">Profile started</span>'}
            </div>
            <div class="total">${Number(student.total_xp || 0)} verified XP · ${earnedBadges(student).length} badges</div>
          </a>`;
      }).join('')}
    </div>`;
}

function renderProfile(student, rules) {
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

  const evidenceHtml = (student.assignments || []).map((assignment) => {
    if (assignment.status !== 'scanned') {
      return `
        <div class="evidence-item">
          <div class="evidence-title"><span>${escapeHtml(assignment.id)}</span><span>Unavailable</span></div>
          <div class="evidence-meta">${escapeHtml(assignment.repository)}</div>
        </div>`;
    }
    const evidence = assignment.evidence || {};
    const signals = [
      evidence.feature_branch ? 'branch' : null,
      evidence.commit_ahead_of_base ? 'commit' : null,
      evidence.valid_pull_request ? 'PR' : null,
      evidence.merged_pull_request ? 'merged' : null,
      evidence.ci_success ? 'CI passed' : null,
      evidence.debug_recovery ? 'debug recovery' : null,
    ].filter(Boolean).join(' · ');
    return `
      <div class="evidence-item">
        <div class="evidence-title"><span>${escapeHtml(assignment.id)}</span><span>${signals ? '✓ Verified' : 'In progress'}</span></div>
        <div class="evidence-meta">${escapeHtml(assignment.repository)}${signals ? ` · ${escapeHtml(signals)}` : ''}</div>
      </div>`;
  }).join('');

  app.innerHTML = `
    <article class="profile">
      <div class="profile-top">
        <div>
          <h2 class="profile-name">${escapeHtml(student.name)}</h2>
          <p class="profile-label">Developer Profile · @${escapeHtml(student.github)}</p>
        </div>
        <div class="total">${Number(student.total_xp || 0)} verified XP</div>
      </div>

      <h3 class="section-title">Achievements</h3>
      <div class="badge-row">${badgeHtml}</div>

      <h3 class="section-title">Skills</h3>
      <div class="skill-list">${skillsHtml}</div>

      <h3 class="section-title">Next achievements</h3>
      <div class="next-grid">${nextCards || '<div class="next-card"><strong>All current badge levels achieved.</strong></div>'}</div>

      <h3 class="section-title">Verified evidence</h3>
      <div class="evidence-list">${evidenceHtml || '<div class="evidence-meta">No assignment evidence has been scanned yet.</div>'}</div>
    </article>`;
}

async function boot() {
  try {
    const [data, rules] = await Promise.all([loadJson('data.json'), loadJson('rules.json')]);

    const render = () => {
      const github = decodeURIComponent(location.hash.replace(/^#/, ''));
      if (!github) {
        renderStudentList(data);
        return;
      }
      const student = data.students.find((item) => item.github === github);
      if (!student) {
        location.hash = '';
        return;
      }
      renderProfile(student, rules);
    };

    window.addEventListener('hashchange', render);
    render();
  } catch (error) {
    app.innerHTML = `<div class="empty"><strong>Dashboard data is not ready.</strong><br>${escapeHtml(error.message)}</div>`;
  }
}

boot();
