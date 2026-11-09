# 当前教学安排：Figma、产品评估、网页编程与 AI 素养

更新：2026-11-03。适用：Full Stack 普通班、编程与英文阅读基础较弱的学生。

这是本次课程调整的入口。保留原有课程目标、00–32课号、GitHub 工作流和45分钟课堂结构；课号表示教学主题，不表示只能用一次课完成。Figma 技能训练、测评、Skill Board 测试和编程练习可以增加练习课。

## 1. 学习顺序

| 阶段 | 学习内容 | 必须留下的证据 |
|---|---|---|
| 已有 HCI 基础 | Needfinding → 表达需求 → individual/group brainstorming → design alternatives → prototyping | 需求证据、不同方案、选定的核心任务 |
| Figma | 基础工具 → 可点击线框图 → 布局与样式 → Auto Layout → Components/基础 Variants | 原型链接、图层与组件结构、技能操作证据 |
| Figma 技能检查 | 分技能短 Quiz＋独立操作测试 | 知识20分＋操作80分的技能记录 |
| 两种评估方法 | Heuristic Evaluation＋Usability Testing | 原则检查表、无引导任务、观察记录 |
| 共同案例 | 评估 Morgan 的 Skill Board，再迁移到自己的原型 | 问题位置、观察证据、影响、修改建议 |
| HTML/CSS | 学习网页结构和样式，并把 Figma 设计转成网页 | 语义化、可访问、响应式页面 |
| JavaScript 交互 | 学习编程基础、DOM 与事件，再实现网页交互 | 可运行的交互页面、代码解释、独立修改与测试 |
| 回到自己的项目 | 将事件、状态、反馈等知识用于设计项目 | 核心交互、测试记录、修复与复测 |

低保真原型一旦能验证核心任务，就可以测试；不用等所有视觉功能学完。Skill Board 是共同评估练习，不能代替学生自己项目的测试与迭代。

## 2. Figma 选学与测评

- [Coursera 三部分选学表与配套文件入口](../02_Class_Missions/03-figma-product-design/coursera-learning-map.md)
- [Figma 技能 Quiz＋操作测试（100分）](../04_Assessment/Figma_Skills_Quiz_and_Practical.md)
- [原有设计循环测试（30分）](../04_Assessment/Figma_Design_Cycle_Unit_Test.md)

技能测试检查“会不会使用 Figma”；设计循环测试检查“能不能选择原型、评估、依据证据修改与复测”。两张成绩表分开记录，不把30分测试冒充新的20分 Quiz。

按技能块学习、检查、补练。基础操作与简单连线先过关，Auto Layout、Components和状态在后续技能课检查，避免把全部训练塞进一次45分钟课。

## 3. 两种评估＋Skill Board

- Heuristic Evaluation：按明确的可用性原则检查界面，先独立记录，再汇总。
- Usability Testing：目标用户实际完成任务，主持人观察，不告诉对方点击路径。
- [共同案例任务与记录模板](../02_Class_Missions/03-figma-product-design/skill-board-evaluation-lab.md)

原课程 Core 3（Affordance/signifier、Mapping、Constraints）继续使用。Nielsen 原则中的状态可见性、一致性与标准、用户控制与自由作为本次启发式检查的补充，不把两套名称混成同一套原则。

对于同一批第一次使用 Skill Board 的参与者，先测试再做原则检查；提前检查过界面的同学可以主持或观察，由尚未接触界面的人参加首次使用测试。不要为了顺序要求耽误修复学生自己原型的明显故障。

## 4. ## 4. 网页编程：Coursera 上的 Scrimba 与 Figma-to-Code

按以下顺序使用三门课程：

1. [Scrimba：Learn HTML and CSS](https://www.coursera.org/learn/learn-html-and-css)——入门学习 HTML 结构、CSS 样式和响应式网页基础。
2. [Scrimba：Learn JavaScript](https://www.coursera.org/learn/learn-javascript)——学习变量、函数、条件、循环、数组、DOM 和事件，制作交互页面。
3. [Build Websites with Figma, HTML, and CSS（From Figma to Code）](https://www.coursera.org/learn/from-figma-to-code)——把已有 Figma 设计转成网页，作为设计到代码的综合练习。先完成 HTML/CSS 和 JavaScript 基础，再做本课程的项目。

课程不是要求刷完整个前端或全栈职业路径。当前必修范围为 HTML、CSS、JavaScript 和网页交互；不把 React、Next.js、TypeScript、FastAPI、Node.js 或数据库列为本阶段必修技术栈。

具体模块选择、先修顺序和学生交付见[编程基础与 Figma-to-Code 学习路径](../02_Class_Missions/05-javascript-interaction/programming-foundations-path.md)。

AI 素养：读书研讨、分组教学与综合展示

核心读物为 Melanie Mitchell 的 *Artificial Intelligence: A Guide for Thinking Humans*。当前规划改为八次45分钟的读书研讨，放在21–24编号单元中；课号表示主题，不限制只能用一次课完成。学生课前按小组阅读指定章节、制作专家讲解 PPT，课堂通过同伴教学、证据讨论与迁移活动完成学习。教师提供短段落、术语支持和核查问题，不要求每位学生独自读完全书或每章都上台。

| 次数 | 阅读与小组主题 | 课堂重点 |
|---|---|---|
| 1 | 第1章：AI 的起源、历史与不同研究路径 | 比较规则方法与学习方法；建立全书问题 |
| 2 | 第2章：神经网络与机器学习兴起 | 说明 AI、机器学习、深度学习的关系及能力边界 |
| 3 | 第7章 A 组：The Great AI Trade-Off；The Ethics of Face Recognition | 公平、隐私、收益与代价 |
| 4 | 第7章 B 组：Regulating AI；Moral AI | 监管、责任与道德判断 |
| 5 | 第11–12章：Words；Translation as Encoding and Decoding | 词语表示、翻译与语言处理 |
| 6 | 第13章：Ask Me Anything | 问答系统、WATSON、基准测试与实际理解的差别 |
| 7 | 第14–15章：On Understanding；Knowledge, Abstraction, and Analogy in AI | 理解、知识、抽象与类比 |
| 8 | 第16章：Questions, Answers, and Speculations；全班综合 PPT 展示 | 汇总全书主张、证据、限制与负责任使用原则 |

每组做约5页专家讲解 PPT：提出本节核心问题和作者主张，给出书中案例与页码，解释 AI 的能力和局限，联系现实应用或 Full Stack 项目，并留一个讨论问题。听众用记录单写下主张、证据和自己的问题。最终全班综合 PPT 要形成统一论证与叙事，不能只是把各组幻灯片首尾拼接；建议结构为 AI 的发展路径 → 学习与能力 → 信任、伦理和治理 → 语言与问答 → 理解、知识和类比 → 尚未解决的问题 → 生成式 AI 的当代补充 → 与 Full Stack 项目及负责任使用的联系。

每次45分钟可按“问题导入4分钟、两组专家分享约12分钟、问答7分钟、迁移活动12分钟、联系当代 AI／Weather App 6分钟、离堂反思4分钟”组织。根据分享组数、学生英文阅读速度和课堂规模调整，不必强行完成所有环节。详细任务、分组方式、证据标准和评价见 [读书研讨实施方案](../02_Class_Missions/06-ai-literacy/book-reading-seminar.md)。

Prompting 作为当代实践补充，与书中观点明确区分。教学生用 **Define → Plan → Try → Iterate**：
1. **Define**：说明要完成的问题、使用者、已有上下文和成功标准。
2. **Plan**：先请 AI 提出步骤、假设和需要确认的问题，不急着索要整份代码。
3. **Try**：只实现或尝试一个小步骤，由学生亲自运行、阅读或核验。
4. **Iterate**：把真实结果、错误或不符合处反馈给 AI，再修改并复测。

学生需对最后的代码、事实和作品负责；不输入个人敏感信息，并按课程要求披露 AI 帮助。Ch.13 的问答系统内容不应讲成 ChatGPT 内容；2019年原书之外的生成式 AI 案例要标明是教师提供的当代补充。

- [八次读书研讨路径、分组 PPT 和最终综合展示要求](../02_Class_Missions/06-ai-literacy/book-reading-seminar.md)
- [六主题基础路径（排课或阅读条件不适合研讨时的备选方案）](../02_Class_Missions/06-ai-literacy/foundation-path.md)
- [AI 素养检查表](../04_Assessment/AI_Literacy_Checklist.md)
- [中英双语课程海报](../08_Public_Documents/AI_Literacy_Full_Stack_Bilingual_Poster.pptx)

两种教学路径择一安排，不把六主题路径和八次读书研讨累计为全班必修。AI 素养仍然是课程要求，即使学生的最终网页项目不包含 AI 功能，也要能说明用途、限制、核查方法与责任边界。

## 6. 课堂节奏与交付

每次45分钟沿用：Skill Warm-up → Talk Robin 1 → Entry Check → Core Pattern → Guided Practice → Independent Rebuild → Talk Robin 2 + Evidence。

学生先体验、观察或阅读，分享一个例子和发现，再独立完成迁移任务。默认无固定课前阅读作业；未完成的证据按课程既有短时补交规则处理。

本次安排不要求新框架、完整设计系统、AI模型训练或强制AI功能。完成核心任务、解释自己的操作／代码、用证据修正作品，是过关依据。
