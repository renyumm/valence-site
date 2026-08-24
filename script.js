const i18n = {
  zh: {
    "nav.runtime": "统一 Runtime", "nav.products": "三款产品", "nav.scenarios": "反应链", "nav.integration": "开放接入", "nav.about": "了解 Valence",
    "hero.eyebrow": "ENTERPRISE INTELLIGENCE RUNTIME",
    "hero.title": "从数据，到智能，<br><span class=\"gradient-text\">再到控制。</span>",
    "hero.lead": "ION 让工业数据成为可用的原子；Catalyst 在 VALENCE 中协调 AI、专家与 Skill，促成信息重组；REACTOR 将新的决策结构转化为受控行动。三款产品共享同一 Runtime，可单独使用，也可组合成完整反应链。",
    "hero.ctaPrimary": "查看三款产品", "hero.ctaSecondary": "了解 Valence",
    "hero.ionRole": "数据原子", "hero.valenceRole": "AI 价键中枢", "hero.reactorRole": "工业控制", "hero.catalystRole": "AI 协调与催化",
    "hero.visualText": "离子化数据，在 Catalyst 作用下改变连接方式，由 VALENCE 形成新智能，再由 REACTOR 作用于现场。",
    "tags.runtime": "三款独立产品", "tags.plugins": "按需组合购买", "tags.open": "插件与 API 双向开放",

    "runtime.eyebrow": "THREE PRODUCTS · ONE RUNTIME", "runtime.title": "三款产品，可以单买，也可以组合成完整反应链。",
    "runtime.subtitle": "ION、VALENCE 与 REACTOR 都是可独立交付的产品，并共享一致的 Runtime。客户可以从一个问题开始，随后按业务需要增加第二款或第三款产品，而不必推倒重来。",
    "runtime.buyOneTitle": "单产品", "runtime.buyOneDesc": "只购买当前最需要的数据、AI 或控制能力。",
    "runtime.buyTwoTitle": "自由组合", "runtime.buyTwoDesc": "任意两款产品共享上下文、接口与运行结果。",
    "runtime.buyAllTitle": "完整反应链", "runtime.buyAllDesc": "ION → VALENCE → REACTOR 贯通数据、AI 与控制。",
    "runtime.ion": "连接、治理并理解企业数据，让数据成为可被 AI 调用的高活性“离子”。",
    "runtime.valence": "作为智能中枢连接人、Agent、专家、Skill 与任务。Catalyst 在其中负责理解、协调、委派与汇总。",
    "runtime.reactor": "把智能决策转化为可验证、受约束的控制策略，并将现场反馈送回 Runtime。",
    "runtime.catalyst": "Catalyst 不是第四款产品，而是 VALENCE 的 AI 协调者：它发现可用能力，选择 Agent 与 Skill，并让任务持续向结果推进。",
    "runtime.flow": "理解 → 协调 → 委派 → 汇总",

    "products.eyebrow": "DATA · AI · CONTROL", "products.title": "每款产品解决一个清晰问题。",
    "products.subtitle": "ION 负责数据，VALENCE 负责智能协作，REACTOR 负责控制。边界清楚，所以能独立交付；Runtime 一致，所以能自然组合。",
    "products.ionSub": "让企业数据可连接、可理解、可追溯",
    "products.ionDesc": "ION 面向数据库、指标、报表与领域数据，把分散的信息整理成稳定的数据语义，并让业务人员和 AI 都能安全地调用。",
    "products.ionF1": "连接企业数据库与业务数据源", "products.ionF2": "统一字段、指标与领域语义", "products.ionF3": "自然语言问数、下钻与分析", "products.ionF4": "独立部署，或作为数据插件接入 VALENCE",
    "products.valenceSub": "连接人、AI 与专业能力的智能中枢",
    "products.valenceDesc": "VALENCE 让 Agent、专家、Skill、任务和自动化共享同一上下文。Catalyst 负责判断该调用谁、何时推进，以及如何把结果带回现场。",
    "products.valenceF1": "Catalyst 统一理解意图并协调执行", "products.valenceF2": "Agent、专家、Skill 与任务持续协作", "products.valenceF3": "ION、REACTOR 及第三方能力插件化接入", "products.valenceF4": "自身可作为 API 嵌入其他系统", "products.valenceLink": "了解 VALENCE →",
    "products.reactorSub": "把智能决策转化为受控行动",
    "products.reactorDesc": "REACTOR 面向设备、系统与现场控制，在明确目标、约束和安全边界后生成并运行策略，让 AI 的判断真正作用于业务与物理世界。",
    "products.reactorF1": "映射设备、对象与可控变量", "products.reactorF2": "建立目标、约束与控制策略", "products.reactorF3": "仿真验证、上线运行与状态反馈", "products.reactorF4": "独立部署，或作为控制插件接入 VALENCE",

    "scenarios.eyebrow": "ONE REACTION CHAIN", "scenarios.title": "工业智能沿着数据、AI、控制持续流动。",
    "scenarios.s1Title": "ION · 数据进入反应", "scenarios.s1Desc": "连接业务与工业数据，统一口径和语义，让原始信息成为可理解、可追溯、可调用的数据原子。",
    "scenarios.s2Title": "VALENCE · 智能重新成键", "scenarios.s2Desc": "Catalyst 协调 Agent、专家与 Skill，在共享上下文中分析信息、形成判断，并推动任务持续完成。",
    "scenarios.s3Title": "REACTOR · 决策作用现场", "scenarios.s3Desc": "把形成的决策转化为经过约束与安全校验的控制策略，再将执行反馈送回下一轮反应。",

    "integration.eyebrow": "OPEN BY DESIGN", "integration.title": "向内接插件，向外成为 API。",
    "integration.lead": "以 VALENCE 为核心，ION、REACTOR 和第三方产品都可以作为插件进入 Runtime，持续扩展数据、知识、模型与控制能力；同时，VALENCE 也可以整体化身为 API，把 AI 协作与任务执行能力提供给现有门户、业务系统和工业现场。",
    "integration.cta": "了解 Valence", "footer.desc": "三款产品，一套从数据到控制的 Runtime。",

    "modal.eyebrow": "ABOUT VALENCE", "modal.title": "三产品体系中的 AI 中枢",
    "modal.lead": "VALENCE 位于 ION 数据与 REACTOR 控制之间。它让数据进入 Agent、专家和 Skill 的协作过程，再把形成的决策送往控制与执行；Catalyst 是其中负责协调这场“反应”的 AI 角色。",
    "modal.m1Title": "核心中枢", "modal.m1Desc": "连接上下文、Agent、专家、Skill、任务与自动化，让复杂工作持续推进。",
    "modal.m2Title": "插件容器", "modal.m2Desc": "ION、REACTOR 与第三方产品都能作为插件进入，扩展 VALENCE 的能力边界。",
    "modal.m3Title": "API 能力", "modal.m3Desc": "VALENCE 也能整体作为 API，将协调、任务与执行能力提供给其他系统。"
  },

  en: {
    "nav.runtime": "Runtime", "nav.products": "Products", "nav.scenarios": "Reaction Chain", "nav.integration": "Integrations", "nav.about": "About Valence",
    "hero.eyebrow": "ENTERPRISE INTELLIGENCE RUNTIME",
    "hero.title": "From data, to intelligence,<br><span class=\"gradient-text\">then into control.</span>",
    "hero.lead": "ION turns industrial data into usable atoms. Inside VALENCE, Catalyst coordinates AI, experts and Skills so information can recombine. REACTOR converts the resulting decisions into controlled action. Three products share one Runtime and can be used alone or as a complete reaction chain.",
    "hero.ctaPrimary": "Explore the Products", "hero.ctaSecondary": "About Valence",
    "hero.ionRole": "Data atoms", "hero.valenceRole": "AI bond core", "hero.reactorRole": "Industrial control", "hero.catalystRole": "AI coordination",
    "hero.visualText": "Ionized data changes its connections under Catalyst; VALENCE forms new intelligence, and REACTOR applies it to the operating world.",
    "tags.runtime": "Three standalone products", "tags.plugins": "Buy and combine as needed", "tags.open": "Plugins and APIs",

    "runtime.eyebrow": "THREE PRODUCTS · ONE RUNTIME", "runtime.title": "Buy one product or combine all three into a complete reaction chain.",
    "runtime.subtitle": "ION, VALENCE and REACTOR are independently deliverable products built on one Runtime. Start with the problem in front of you, then add a second or third product without rebuilding the foundation.",
    "runtime.buyOneTitle": "One product", "runtime.buyOneDesc": "Choose only the data, AI or control capability needed now.",
    "runtime.buyTwoTitle": "Combine freely", "runtime.buyTwoDesc": "Any two products share context, interfaces and run results.",
    "runtime.buyAllTitle": "Complete chain", "runtime.buyAllDesc": "ION → VALENCE → REACTOR connects data, AI and control.",
    "runtime.ion": "Connects, governs and understands enterprise data, turning it into active ions that AI can call safely.",
    "runtime.valence": "The intelligence hub connecting people, agents, experts, Skills and tasks. Catalyst coordinates understanding, delegation and synthesis inside it.",
    "runtime.reactor": "Turns intelligent decisions into verifiable, constrained control policies and returns operating feedback to the Runtime.",
    "runtime.catalyst": "Catalyst is not a fourth product. It is the AI coordinator inside VALENCE: discovering capabilities, selecting agents and Skills, and keeping work moving toward a result.",
    "runtime.flow": "Understand → Coordinate → Delegate → Synthesize",

    "products.eyebrow": "DATA · AI · CONTROL", "products.title": "Each product owns one clear problem.",
    "products.subtitle": "ION owns data. VALENCE owns intelligent collaboration. REACTOR owns control. Clear boundaries make each product complete; one Runtime makes them naturally composable.",
    "products.ionSub": "Make enterprise data connected, understandable and traceable",
    "products.ionDesc": "ION works across databases, metrics, reports and domain data, organizing fragmented information into stable semantics that both people and AI can use safely.",
    "products.ionF1": "Connect enterprise databases and business sources", "products.ionF2": "Unify fields, metrics and domain semantics", "products.ionF3": "Natural-language analysis and drilldown", "products.ionF4": "Deploy alone or plug into VALENCE as the data product",
    "products.valenceSub": "The intelligence hub connecting people, AI and expertise",
    "products.valenceDesc": "VALENCE keeps agents, experts, Skills, tasks and automations in shared context. Catalyst decides what to invoke, when to advance, and how to return results to the workspace.",
    "products.valenceF1": "Catalyst understands intent and coordinates execution", "products.valenceF2": "Agents, experts, Skills and tasks work continuously", "products.valenceF3": "ION, REACTOR and third-party capabilities plug in", "products.valenceF4": "Expose VALENCE itself as an API to other systems", "products.valenceLink": "About VALENCE →",
    "products.reactorSub": "Turn intelligent decisions into controlled action",
    "products.reactorDesc": "REACTOR serves equipment, systems and operational control. With objectives, constraints and safety bounds made explicit, it runs policies that bring AI decisions into business and physical operations.",
    "products.reactorF1": "Map equipment, objects and controllable variables", "products.reactorF2": "Define objectives, constraints and control policies", "products.reactorF3": "Simulate, roll out and return operating feedback", "products.reactorF4": "Deploy alone or plug into VALENCE as the control product",

    "scenarios.eyebrow": "ONE REACTION CHAIN", "scenarios.title": "Industrial intelligence keeps moving through data, AI and control.",
    "scenarios.s1Title": "ION · Data enters the reaction", "scenarios.s1Desc": "Connect business and industrial data, align definitions and turn raw information into understandable, traceable and callable atoms.",
    "scenarios.s2Title": "VALENCE · Intelligence forms new bonds", "scenarios.s2Desc": "Catalyst coordinates agents, experts and Skills in shared context to analyze information, form decisions and keep work moving.",
    "scenarios.s3Title": "REACTOR · Decisions act on operations", "scenarios.s3Desc": "Translate decisions into constraint- and safety-checked control policies, then return execution feedback to the next reaction cycle.",

    "integration.eyebrow": "OPEN BY DESIGN", "integration.title": "Plugins come in. VALENCE goes out as an API.",
    "integration.lead": "With VALENCE at the core, ION, REACTOR and third-party products can plug into the Runtime to extend data, knowledge, models and control. VALENCE can also expose the complete AI collaboration and task-execution layer as an API to portals, business software and industrial systems.",
    "integration.cta": "About Valence", "footer.desc": "Three products. One Runtime from data to control.",

    "modal.eyebrow": "ABOUT VALENCE", "modal.title": "The AI core of a three-product system",
    "modal.lead": "VALENCE sits between ION data and REACTOR control. It brings data into collaboration among agents, experts and Skills, then sends resulting decisions toward control and execution. Catalyst is the AI role coordinating that reaction.",
    "modal.m1Title": "Core hub", "modal.m1Desc": "Connect context, agents, experts, Skills, tasks and automations so complex work keeps moving.",
    "modal.m2Title": "Plugin host", "modal.m2Desc": "ION, REACTOR and third-party products plug in to extend the boundary of VALENCE.",
    "modal.m3Title": "API capability", "modal.m3Desc": "VALENCE can also act as an API, providing coordination, tasks and execution capabilities to other systems."
  }
};

const requestedLang = new URLSearchParams(window.location.search).get('lang');
let currentLang = i18n[requestedLang] ? requestedLang : (localStorage.getItem('valence_lang') || 'zh');

function setLanguage(lang) {
  currentLang = i18n[lang] ? lang : 'zh';
  localStorage.setItem('valence_lang', currentLang);
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = i18n[currentLang][el.dataset.i18n];
    if (!value) return;
    if (value.includes('<')) el.innerHTML = value;
    else el.textContent = value;
  });
  document.getElementById('langZh').classList.toggle('active', currentLang === 'zh');
  document.getElementById('langEn').classList.toggle('active', currentLang === 'en');
  document.title = currentLang === 'zh' ? 'VALENCE — 从数据到智能再到控制' : 'VALENCE — From Data to Intelligence to Control';
}

function initDialog() {
  const dialog = document.getElementById('valenceDialog');
  const close = document.getElementById('dialogClose');
  const open = () => {
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('modal-open');
  };
  const shut = () => {
    if (dialog.open) dialog.close();
    document.body.classList.remove('modal-open');
  };
  document.querySelectorAll('.modal-trigger').forEach((button) => button.addEventListener('click', open));
  close.addEventListener('click', shut);
  dialog.addEventListener('click', (event) => {
    const box = dialog.getBoundingClientRect();
    const inside = event.clientX >= box.left && event.clientX <= box.right && event.clientY >= box.top && event.clientY <= box.bottom;
    if (!inside) shut();
  });
  dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
}

function initNavigation() {
  const toggle = document.getElementById('mobileToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => anchor.addEventListener('click', (event) => {
    const id = anchor.getAttribute('href');
    const target = id === '#top' ? document.body : document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    const top = id === '#top' ? 0 : target.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: 'smooth' });
  }));

  const sections = [...document.querySelectorAll('main section[id]')];
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.nav-links a').forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-20% 0px -65% 0px' });
  sections.forEach((section) => sectionObserver.observe(section));
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('langZh').addEventListener('click', () => setLanguage('zh'));
  document.getElementById('langEn').addEventListener('click', () => setLanguage('en'));
  setLanguage(currentLang);
  initDialog();
  initNavigation();

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .09, rootMargin: '0px 0px -35px' });
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
  }
});
