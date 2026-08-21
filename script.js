/**
 * VALENCE — Interactive Engine & Bilingual i18n
 */

// Comprehensive i18n Dictionary (Chinese Default / English)
const i18n = {
  zh: {
    "nav.story": "故事",
    "nav.products": "产品体系",
    "nav.scenarios": "工业场景",
    "nav.architecture": "系统闭环",
    "nav.cta": "联系我们",

    "hero.eyebrow": "ENTERPRISE INTELLIGENCE FOR ADVANCED INDUSTRY",
    "hero.title": "让企业智能<br/><span class="gradient-text">真正发生反应。</span>",
    "hero.lead": "VALENCE 将数据、领域知识、智能体网络与物理控制深度熔接，构建从感知到执行的自主演进闭环。",
    "hero.ctaPrimary": "探索产品体系",
    "hero.ctaSecondary": "了解反应链",

    "tags.materials": "先进材料与制造",
    "tags.agents": "Multi-Agent 协同",
    "tags.optimization": "运筹优化与根因溯源",
    "tags.closedloop": "工业级执行闭环",

    "node.ion": "数据智能",
    "node.catalyst": "调度催化",
    "node.reactor": "控制执行",

    "story.eyebrow": "ONE REACTION CHAIN. ONE INTELLIGENCE SYSTEM.",
    "story.title": "从数据，到智能，到行动。",
    "story.subtitle": "我们以一条化学反应链，定义企业智能从“理解信息”跨越到“控制闭环”的完整进化范式。",

    "story.ionRole": "Data Intelligence · 离子化数据",
    "story.ionDesc": "让异构工业数据转化为可自由流动、可语义理解的“高活性离子”，自然语言秒级穿透指标与明细。",
    "story.ionTag1": "Text2SQL",
    "story.ionTag2": "语义指标库",
    "story.ionTag3": "自动洞察",

    "story.valenceRole": "Enterprise Intelligence · 价键网络",
    "story.valenceDesc": "构建 Agent、Skill、专家知识与业务上下文的“化合价键”，使单点模型与零散资产共振出群体智能。",
    "story.valenceTag1": "Agent 编排",
    "story.valenceTag2": "领域 RAG",
    "story.valenceTag3": "知识图谱",

    "story.catalystRole": "Chief Orchestrator · 首席催化体",
    "story.catalystDesc": "作为企业智能中枢的总调度，精准识别高维意图、分派领域专家、调用运筹工具，催化长周期任务极速收敛。",
    "story.catalystTag1": "意图分发",
    "story.catalystTag2": "长程规划",
    "story.catalystTag3": "运筹决策",

    "story.reactorRole": "Control & Feedback · 反应执行体",
    "story.reactorDesc": "将上层智能决策转化为经过安全约束校验的控制指令，直达生产线与业务系统，并将执行效果实时回流。",
    "story.reactorTag1": "PLC/SCADA 下发",
    "story.reactorTag2": "安全围栏",
    "story.reactorTag3": "闭环回馈",

    "products.eyebrow": "PRODUCT ECOSYSTEM",
    "products.title": "四大支柱，构筑企业智能闭环",
    "products.subtitle": "每一个组件皆可独立赋能业务，组合使用则迸发出前所未有的化学反应级能量。",

    "products.ionSub": "工业语义与对话式数据探索",
    "products.ionDesc": "打通生产 MES、ERP、IoT 与实验数据孤点，通过企业级语义层让每位工程师与管理者都能用自然语言与数据自由对话。",
    "products.ionF1": "支持大跨度多表 Text2SQL 与复杂指标穿透",
    "products.ionF2": "企业级指标字典与动态语义上下文维护",
    "products.ionF3": "自动生成异常归因诊断与可视化分析看板",
    "products.ionF4": "支持毫秒级向量召回与企业数据库私有化接入",
    "products.ionVisual": "实时指标智能流",

    "products.valenceSub": "企业 Agent 协作与专业技能网络",
    "products.valenceDesc": "以“价键网络”为拓扑结构，编排跨业务域的领域专家 Agent、工具链与行业知识库，让隐性工程经验转化为企业显性智能。",
    "products.valenceF1": "基于 LangGraph 与图拓扑的 Multi-Agent 灵活协作",
    "products.valenceF2": "混合知识检索（Graph RAG + 稠密/稀疏混合向量）",
    "products.valenceF3": "标准化企业 Skill 插件市场与权限隔离",
    "products.valenceF4": "支持工程工艺卡片、配方规程等非结构化沉淀",

    "products.catalystSub": "首席智能体与运筹协同中枢",
    "products.catalystDesc": "统领复杂任务规划与动态解耦，将高维度业务目标拆解为可求解的运筹规划（MIP/NSGA-II）与算法流水线。",
    "products.catalystF1": "意图理解与多专家自适应路由（Expert Routing）",
    "products.catalystF2": "支持长周期异步任务追踪与动态纠偏机制",
    "products.catalystF3": "嵌入混合整数规划与多目标启发式求解引擎",
    "products.catalystF4": "统一自然语言对话交互与自动化作业分派",
    "products.catalystTyping": "[OK] 320 约束满足，正在委派排程求解...",

    "products.reactorSub": "工业控制执行与闭环反馈",
    "products.reactorDesc": "将上层算法模型生成的决策与优化参数，转化为安全合规的设备控制参数与系统指令，完成从“算”到“做”的最后一公里。",
    "products.reactorF1": "工业控制指令生成与参数安全边界（Safety Bounds）校验",
    "products.reactorF2": "支持冷水机组、空压、光伏制造等场景的 MPC 模型预测控制",
    "products.reactorF3": "双重审核机制：人工确认（HITL）与自动化托管模式自由切换",
    "products.reactorF4": "执行状态秒级遥测与效果自动回溯学习",

    "scenarios.eyebrow": "HIGH-STAKES APPLICATIONS",
    "scenarios.title": "让核心 Know-how 沉淀为可执行资产",
    "scenarios.subtitle": "从新能源制造到先进材料研发，同一套反应体系深度融入高价值工业现场。",

    "scenarios.s1Title": "材料研发与实验反推",
    "scenarios.s1Desc": "结构化沉淀配方、实验参数与表征文献，基于 Agent 协同实现配方预测、工艺窗口缩小与逆向设计。",
    "scenarios.s2Title": "光伏与半导体智能排产",
    "scenarios.s2Desc": "针对复杂选托配单、硅片切割与炉台分配，采用混合整数规划（MIP）实现秒级多目标排程优化。",
    "scenarios.s3Title": "质量根因分析与追溯",
    "scenarios.s3Desc": "基于贝叶斯网络与时序异常检测，自适应构建缺陷因果图谱，从百万级参数中分钟级锁定波动根因。",
    "scenarios.s4Title": "HVAC 暖通与厂务能效优化",
    "scenarios.s4Desc": "结合分段线性拟合（PWLF）与模型预测控制（MPC），实现冷站与动力的秒级负荷寻优，显著压降综合能耗。",
    "scenarios.s5Title": "经营敏捷决策与对话式 BI",
    "scenarios.s5Desc": "业务人员直接以自然语言提问营收、交付周期与物料库存，系统自动关联底层数仓并生成穿透式看板。",
    "scenarios.s6Title": "工业风控、合规与智能巡检",
    "scenarios.s6Desc": "融合工业规程规范与多模态感知数据，智能识别工艺偏差、操作合规风险并联动下发告警处置策略。",

    "arch.eyebrow": "THE AUTONOMOUS FEEDBACK LOOP",
    "arch.title": "不仅是生成回答，<br/>更是驱动持续优化的生命闭环",
    "arch.lead": "真正的工业智能绝不停止在“给出文本建议”。VALENCE 架构将感知（Sense）、理解（Understand）、决策（Decide）、执行（Act）与学习（Learn）闭合为一个自我迭代的动态轮环。",
    "arch.b1Title": "实时状态感知与度量",
    "arch.b1Desc": "从 IoT 遥测与业务数据库中不间断提取高价值特征向量。",
    "arch.b2Title": "运筹决策与多重安全验证",
    "arch.b2Desc": "大模型调度数学规划求解器，输出确定性与最优解，并经由物理边界安全校验。",
    "arch.b3Title": "执行回流与强化自愈",
    "arch.b3Desc": "控制反馈数据自动注入记忆网络，推动专家 Agent 技能持续自我更新。",
    "arch.l1": "01 感知",
    "arch.l2": "02 理解",
    "arch.l3": "03 决策",
    "arch.l4": "04 执行",
    "arch.l5": "05 进化",
    "arch.centerSub": "闭环引擎",

    "closing.eyebrow": "NEXT-GEN INDUSTRIAL INTELLIGENCE",
    "closing.title": "让企业智能反应，即刻发生。",
    "closing.subtitle": "诚邀工业制造、先进材料及高科技企业同行，共同探索下一代企业级 Agentic AI 落地实践。",

    "footer.desc": "面向先进材料与工业制造的企业智能基础设施平台",
    "footer.products": "产品矩阵",
    "footer.quickLinks": "快捷导航"
  },

  en: {
    "nav.story": "Story",
    "nav.products": "Products",
    "nav.scenarios": "Scenarios",
    "nav.architecture": "Architecture",
    "nav.cta": "Contact",

    "hero.eyebrow": "ENTERPRISE INTELLIGENCE FOR ADVANCED INDUSTRY",
    "hero.title": "Make Enterprise Intelligence<br/><span class="gradient-text">Truly React.</span>",
    "hero.lead": "VALENCE fuses heterogeneous data, domain knowledge, agent networks, and physical control into an autonomous closed-loop operating system.",
    "hero.ctaPrimary": "Explore Products",
    "hero.ctaSecondary": "The Reaction Chain",

    "tags.materials": "Advanced Materials & Mfg",
    "tags.agents": "Multi-Agent Fabric",
    "tags.optimization": "Operations Research & Root Cause",
    "tags.closedloop": "Closed-Loop Execution",

    "node.ion": "Data",
    "node.catalyst": "Orchestrate",
    "node.reactor": "Action",

    "story.eyebrow": "ONE REACTION CHAIN. ONE INTELLIGENCE SYSTEM.",
    "story.title": "From Data to Intelligence to Action.",
    "story.subtitle": "We define enterprise AI as a continuous chemical chain — transcending passive answers into active physical and business control.",

    "story.ionRole": "Data Intelligence · Ionized Data",
    "story.ionDesc": "Transforms rigid operational data into dynamic, semantically activated ions. Query metrics and root records in natural language instantly.",
    "story.ionTag1": "Text-to-SQL",
    "story.ionTag2": "Semantic Metrics",
    "story.ionTag3": "Automated Insights",

    "story.valenceRole": "Enterprise Intelligence · Valence Bonds",
    "story.valenceDesc": "Forms chemical-like bonds across Agent experts, skills, and domain knowledge graphs, turning isolated models into synergistic collective intelligence.",
    "story.valenceTag1": "Agent Orchestration",
    "story.valenceTag2": "Domain RAG",
    "story.valenceTag3": "Knowledge Graph",

    "story.catalystRole": "Chief Orchestrator · The Catalyst",
    "story.catalystDesc": "The central coordinator that understands high-level intent, delegates to specialized agents, and executes operations research pipelines with speed.",
    "story.catalystTag1": "Intent Routing",
    "story.catalystTag2": "Long-term Planning",
    "story.catalystTag3": "MIP Optimization",

    "story.reactorRole": "Control & Feedback · The Reactor",
    "story.reactorDesc": "Translates high-level decisions into safety-verified commands executed in MES, PLC, and SCADA, continuously recycling telemetry feedback.",
    "story.reactorTag1": "PLC/SCADA Control",
    "story.reactorTag2": "Safety Guardrails",
    "story.reactorTag3": "Feedback Loop",

    "products.eyebrow": "PRODUCT ECOSYSTEM",
    "products.title": "Four Pillars of the Enterprise Intelligence Loop",
    "products.subtitle": "Each module empowers operations independently; together, they spark unprecedented chemical-level efficiency.",

    "products.ionSub": "Industrial Semantics & Conversational Data Exploration",
    "products.ionDesc": "Unifies MES, ERP, IoT, and R&D data silos into a conversational semantic layer, enabling every engineer and executive to explore data naturally.",
    "products.ionF1": "Cross-database Text-to-SQL with multi-table metric drilldown",
    "products.ionF2": "Enterprise semantic layer and metric dictionary management",
    "products.ionF3": "Automated anomaly root-cause diagnosis and visual dashboards",
    "products.ionF4": "Sub-second vector retrieval and on-premise private deployment",
    "products.ionVisual": "Live Telemetry Feed",

    "products.valenceSub": "Agent Orchestration & Enterprise Skill Fabric",
    "products.valenceDesc": "Constructs a topological network of specialized expert agents, tooling, and domain knowledge, transforming implicit engineering know-how into explicit assets.",
    "products.valenceF1": "Graph-based Multi-Agent collaboration powered by LangGraph",
    "products.valenceF2": "Hybrid retrieval (Graph RAG + Dense/Sparse vector search)",
    "products.valenceF3": "Standardized Enterprise Skill Hub with fine-grained RBAC",
    "products.valenceF4": "Unstructured knowledge ingestion for SOPs and formulation logs",

    "products.catalystSub": "Chief AI Agent & Optimization Dispatcher",
    "products.catalystDesc": "Deconstructs complex organizational objectives into solvable mathematical programming models (MIP/NSGA-II) and automated execution workflows.",
    "products.catalystF1": "Intent recognition with dynamic Expert Routing",
    "products.catalystF2": "Long-running asynchronous task tracking and self-correction",
    "products.catalystF3": "Integrated Mixed Integer Programming & heuristic solvers",
    "products.catalystF4": "Unified natural language dispatch and workflow orchestration",
    "products.catalystTyping": "[OK] 320 constraints verified. Dispatching solver...",

    "products.reactorSub": "Industrial Control & Autonomous Feedback",
    "products.reactorDesc": "Bridges the last mile by translating optimization results into safety-bounded setpoints and commands dispatched to industrial equipment.",
    "products.reactorF1": "Automated control command synthesis with safety bounds validation",
    "products.reactorF2": "MPC (Model Predictive Control) for HVAC, chillers, and wafer lines",
    "products.reactorF3": "Dual-mode operation: Human-in-the-loop (HITL) and Autonomous",
    "products.reactorF4": "Telemetry tracking and reinforcement self-healing",

    "scenarios.eyebrow": "HIGH-STAKES APPLICATIONS",
    "scenarios.title": "Turn Core Know-How into Actionable Assets",
    "scenarios.subtitle": "From solar wafer manufacturing to advanced materials R&D, one unified system operates on mission-critical shopfloors.",

    "scenarios.s1Title": "Materials R&D & Formulation Inverse Design",
    "scenarios.s1Desc": "Structures recipe parameters, experimental logs, and literature to accelerate recipe prediction and narrow process windows.",
    "scenarios.s2Title": "Solar & Semiconductor Smart Scheduling",
    "scenarios.s2Desc": "Solves complex pallet matching, wafer slicing, and furnace allocation using Mixed Integer Programming in seconds.",
    "scenarios.s3Title": "Quality Root Cause Analysis & Tracing",
    "scenarios.s3Desc": "Constructs dynamic causal Bayesian networks to pinpoint root causes among millions of parameters in minutes.",
    "scenarios.s4Title": "HVAC & Facility Energy Management",
    "scenarios.s4Desc": "Combines Piecewise Linear Fitting (PWLF) and MPC to optimize real-time chiller loads and slash energy consumption.",
    "scenarios.s5Title": "Agile Business Intelligence & Conversational BI",
    "scenarios.s5Desc": "Enables business teams to ask questions about revenue, inventory, and yields in plain language, rendering interactive drill-down views.",
    "scenarios.s6Title": "Industrial Risk Control & Smart Auditing",
    "scenarios.s6Desc": "Fuses SOP regulations and multimodal sensor streams to detect process deviations and trigger automated mitigation workflows.",

    "arch.eyebrow": "THE AUTONOMOUS FEEDBACK LOOP",
    "arch.title": "Beyond Answering Questions:<br/>An Autonomous Continuous Evolution Loop",
    "arch.lead": "Real industrial AI never stops at generating text. The VALENCE architecture closes Sense, Understand, Decide, Act, and Learn into a self-evolving operational loop.",
    "arch.b1Title": "Realtime Sensing & Telemetry",
    "arch.b1Desc": "Extracts continuous high-dimensional feature vectors from IoT streams and operational databases.",
    "arch.b2Title": "Operations Research & Multi-tier Safety",
    "arch.b2Desc": "LLMs delegate to mathematical solvers to guarantee optimality, verified by physical safety boundaries.",
    "arch.b3Title": "Feedback & Reinforcement Self-Healing",
    "arch.b3Desc": "Execution results feed directly back into long-term memory, continuously refining Agent skill weights.",
    "arch.l1": "01 Sense",
    "arch.l2": "02 Understand",
    "arch.l3": "03 Decide",
    "arch.l4": "04 Act",
    "arch.l5": "05 Learn",
    "arch.centerSub": "Closed-Loop Engine",

    "closing.eyebrow": "NEXT-GEN INDUSTRIAL INTELLIGENCE",
    "closing.title": "Ignite Enterprise Intelligence Reaction Today.",
    "closing.subtitle": "Partnering with leaders in advanced manufacturing, materials, and high-tech to deploy enterprise-grade Agentic AI.",

    "footer.desc": "Enterprise Intelligence Platform for Advanced Materials & Manufacturing",
    "footer.products": "Product Matrix",
    "footer.quickLinks": "Quick Links"
  }
};

// State
let currentLang = localStorage.getItem('valence_lang') || 'zh';

// Apply Language
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('valence_lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // Update button active state
  document.getElementById('langZh').classList.toggle('active', lang === 'zh');
  document.getElementById('langEn').classList.toggle('active', lang === 'en');

  // Update text nodes
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      // Check if value has HTML tags (like <br/> or <span>)
      if (i18n[lang][key].includes('<')) {
        el.innerHTML = i18n[lang][key];
      } else {
        el.textContent = i18n[lang][key];
      }
    }
  });
}

// Initialise on load
document.addEventListener('DOMContentLoaded', () => {
  // Bind language toggle buttons
  document.getElementById('langZh').addEventListener('click', () => setLanguage('zh'));
  document.getElementById('langEn').addEventListener('click', () => setLanguage('en'));
  
  // Set default language
  setLanguage(currentLang);

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // Scroll reveal observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // Smooth anchor scrolling with header offset
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;
      e.preventDefault();
      const navHeight = 76;
      const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });

  // Active section highlighting in navigation
  const sections = document.querySelectorAll('main section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });
});
