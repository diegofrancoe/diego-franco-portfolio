import { useEffect, useRef, useState } from "react";
import { BsOpenai } from "react-icons/bs";
import { LuBoxes, LuCalendarCheck, LuCircleDollarSign, LuFileText, LuSparkles, LuTarget, LuTrendingUp, LuUsers } from "react-icons/lu";
import { SiMake, SiN8N, SiNextdotjs, SiReact, SiSupabase, SiTypescript, SiVercel } from "react-icons/si";

const projects = [
  {
    number: "01",
    name: "Ceniza",
    type: "AI-POWERED OPERATIONAL CRM",
    description:
      "A CRM-first system that keeps clients, quotes, productions, rentals, inventory and finance in one operational view — supported by Asistente Ceniza.",
    tags: ["AI SOLUTIONS ENGINEERING", "CRM SYSTEM", "OPERATIONS", "AUTOMATION"],
    path: "/proyectos/ceniza",
    visual: "ceniza",
    headline: "Every client, quote and operation in one place.",
    industry: "Creative production + equipment rental",
    role: "AI Solutions Engineer · Product & UX/UI · CRM · Data · Automation",
    brief:
      "Ceniza needed a digital home that could explain its offer with clarity and turn interest into a useful commercial conversation. The experience had to connect content, services and products without making visitors choose between disconnected paths.",
    challenge:
      "Services, product discovery, WhatsApp conversations and customer follow-up needed to feel like one continuous journey instead of separate touchpoints.",
    solution:
      "I shaped a conversion-focused web experience that gives every service and product a clear place, guides visitors toward the right action and carries each conversation into an organized CRM follow-up.",
    outcome:
      "The final product connects the commercial and operational journey in one responsive system, with shared context, controlled AI assistance and traceability from opportunity to financial follow-up.",
    insights: [
      "The offer needed a clearer hierarchy so visitors could understand what Ceniza does at a glance.",
      "WhatsApp had to become a contextual handoff, not an isolated button at the end of the page.",
      "Every new conversation needed enough information to continue through an organized CRM follow-up.",
    ],
    system: [
      { label: "Discover", title: "A structured offer", text: "Services, products and content are organized around the questions a potential client brings to the site." },
      { label: "Convert", title: "A guided conversation", text: "Calls to action carry the right context into WhatsApp so the next step feels immediate and specific." },
      { label: "Continue", title: "A connected follow-up", text: "Leads move into a CRM flow that keeps the origin, interest and next action visible to the team." },
    ],
    flow: ["Discover services", "Explore the offer", "Continue in WhatsApp", "Follow up in CRM"],
  },
  {
    number: "02",
    name: "40+",
    type: "COMMERCE EXPERIENCE + AUTOMATION",
    description:
      "A responsive product journey that explains the ritual, prepares WhatsApp-assisted orders and automates experience capture and e-book delivery.",
    tags: ["COMMERCE", "MAKE AUTOMATION", "MOBILE UX", "UX/UI"],
    path: "/proyectos/40-plus",
    visual: "forty",
    headline: "A simpler path from product interest to action.",
    industry: "Wellness + direct-to-consumer",
    role: "Web strategy · UX/UI · Responsive experience",
    brief:
      "40+ needed a focused website where product education and a warm brand story could support the same journey. The goal was to make the collagen easy to understand, easy to imagine as a daily ritual and comfortable to explore on any screen.",
    challenge:
      "Product details, ways to use it and the emotional story of the brand had to feel like one experience instead of separate content blocks.",
    solution:
      "I designed a responsive product website that connects the home story, detailed product information and practical daily-use content through one consistent visual system.",
    outcome:
      "A working digital journey that helps people understand 40+, prepare an order in WhatsApp and receive useful content through an automated, consent-based flow.",
    insights: [
      "Product information and brand content needed to work together instead of competing for attention.",
      "The website needed to answer practical product questions without interrupting the brand story.",
      "The mobile version had to preserve the impact of the packaging, typography and content hierarchy.",
    ],
    system: [
      { label: "Engage", title: "Content with a purpose", text: "Editorial and product content create a useful path from inspiration to a clear purchase decision." },
      { label: "Explain", title: "Product with context", text: "Benefits, format and ways to use the product are presented inside the same visual story." },
      { label: "Adapt", title: "One responsive experience", text: "Desktop and mobile preserve the same hierarchy, tone and product confidence." },
    ],
    flow: ["Discover the brand", "Understand the product", "Explore the ritual", "Take the next step"],
  },
  {
    number: "03",
    name: "Naval",
    type: "B2B WEBSITE + ERP",
    description:
      "A B2B catalog and ERP demonstration designed to bring product demand, production, purchasing, inventory, quality and reporting into one operating model.",
    tags: ["ERP", "OPERATIONS", "B2B WEBSITE", "SYSTEM DESIGN"],
    path: "/proyectos/naval",
    visual: "naval",
    headline: "One operational core for a connected business.",
    industry: "Manufacturing + B2B operations",
    role: "System design · ERP UX/UI · Operational architecture",
    brief:
      "Naval needed more than a new interface. Its commercial and operational areas had to work from one connected structure, while the website and automated customer touchpoints remained tied to the same business information.",
    challenge:
      "Sales, production, purchasing, logistics, finance and reporting needed a shared operational structure, with customer-facing tools connected to the same information.",
    solution:
      "I structured an ERP demonstration and a B2B product experience around the same operating logic, so the commercial and internal journeys can evolve toward one source of truth.",
    outcome:
      "A tested product direction with a working ERP demo and public catalog. Production data, secure access and verified integrations remain the next stage before operational use.",
    insights: [
      "Operational information was valuable only if every area could see the same current status.",
      "Commercial demand needed a direct connection to production, purchasing and delivery planning.",
      "AI and automation had to support real workflows rather than operate as separate tools.",
    ],
    system: [
      { label: "Centralize", title: "A shared operational core", text: "The ERP structures sales, production, purchasing, logistics, finance and reporting in one system." },
      { label: "Connect", title: "Demand into operations", text: "The B2B website and chatbot bring customer context into the same workflows used by internal teams." },
      { label: "Evolve", title: "Automation in the flow", text: "The model leaves clear connection points for verified automation without presenting future capabilities as finished." },
    ],
    flow: ["Capture demand", "Plan and produce", "Coordinate logistics", "Report and improve"],
  },
];

const projectTranslationsEs = {
  ceniza: {
    type: "CRM OPERATIVO POTENCIADO CON IA",
    description:
      "Un sistema centrado en el CRM que reúne clientes, cotizaciones, producciones, alquileres, inventario y finanzas en una vista operativa, con el apoyo del Asistente Ceniza.",
    tags: ["AI SOLUTIONS ENGINEERING", "SISTEMA CRM", "OPERACIONES", "AUTOMATIZACIÓN"],
    headline: "Cada cliente, cotización y operación en un solo lugar.",
    industry: "Producción creativa + alquiler de equipos",
    role: "AI Solutions Engineer · Producto y UX/UI · CRM · Datos · Automatización",
    outcome:
      "El producto final conecta el recorrido comercial y operativo en un sistema responsive, con contexto compartido, asistencia de IA controlada y trazabilidad desde la oportunidad hasta el seguimiento financiero.",
  },
  forty: {
    type: "EXPERIENCIA DE COMERCIO + AUTOMATIZACIÓN",
    description:
      "Un recorrido adaptable que explica el ritual, prepara pedidos asistidos por WhatsApp y automatiza la captura de experiencias y la entrega del e-book.",
    tags: ["COMERCIO", "AUTOMATIZACIÓN MAKE", "UX MÓVIL", "UX/UI"],
    headline: "Un camino más simple del interés a la acción.",
    industry: "Bienestar + venta directa al consumidor",
    role: "Estrategia web · UX/UI · Experiencia adaptable",
    outcome:
      "Un recorrido digital funcional que ayuda a entender 40+, preparar un pedido en WhatsApp y recibir contenido útil mediante un flujo automatizado y con consentimiento.",
  },
  naval: {
    type: "SITIO B2B + ERP",
    description:
      "Un catálogo B2B y una demostración de ERP diseñados para reunir demanda, producción, compras, inventario, calidad e informes dentro de un mismo modelo operativo.",
    tags: ["ERP", "OPERACIONES", "SITIO B2B", "DISEÑO DE SISTEMAS"],
    headline: "Un núcleo operativo para un negocio conectado.",
    industry: "Manufactura + operaciones B2B",
    role: "Diseño de sistemas · UX/UI de ERP · Arquitectura operativa",
    outcome:
      "Una dirección de producto validada con un ERP demostrable y un catálogo público. Los datos productivos, el acceso seguro y las integraciones verificadas pertenecen a la siguiente etapa.",
  },
};

const copy = {
  en: {
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    backHome: "Diego Franco, back to home",
    mainNavigation: "Main navigation",
    languageSelector: "Language",
    english: "English",
    spanish: "Spanish",
    roleTitle: "AI SOLUTIONS ENGINEER",
    portfolio: "PORTFOLIO",
    heroLines: ["I turn disconnected", "operations into business", "systems that"],
    heroAccent: "work.",
    heroDescription:
      "I design CRM, ERP and web products that centralize information, automate repetitive work and help teams act with clearer context.",
    viewCases: "View case studies",
    heroFooter: "Systems Design · AI Integration · Automation · API Integration · UX/UI",
    howIWork: "How I Work",
    process: "DISCOVER → DESIGN → BUILD → INTEGRATE",
    processAria: "Discover, design, build and integrate",
    projects: "PROJECTS",
    projectsTitle: <>Systems built around<br />real work.</>,
    caseStudies: "03 CASE STUDIES",
    viewCase: "View case study",
    disciplines: "Disciplines",
    coreStack: "CORE STACK",
    toolsTitle: "Tools behind the systems.",
    toolsCopy: "A focused stack for designing, building and scaling intelligent ecosystems.",
    toolsAria: "Tools in my current workflow",
    workTogether: "LET’S WORK TOGETHER",
    contactTitle: <>Let’s make business<br />flow.</>,
    contactCopy: "Available for digital products, business systems, AI automation and connected experiences.",
    getInTouch: "Get in touch",
    ideasIntoSystems: "IDEAS INTO SYSTEMS",
    profile: "PROFILE",
    profileTitle: <>Ideas into <span>systems.</span></>,
    profileLead:
      "I’m Diego Franco, an AI Solutions Engineer. I turn complex operations into clear digital systems: products that organize information, reduce manual work and help teams know what to do next.",
    letsTalk: "Let’s talk",
    profileVisual: "Portrait of Diego Franco connected to the visual system",
    profileResources: "Profile resources",
    downloadCv: "Download CV",
    whatICreate: "WHAT I CREATE",
    resultsTitle: <>Built to work<br /><em>as one.</em></>,
    resultsCopy: "I connect platforms, workflows and AI to make everyday operations clearer, faster and easier to manage.",
    faq: "FAQ",
    allProjects: "All projects",
    caseStudy: "Case study",
    projectScope: "Project scope",
    project: "Project",
    industry: "Industry",
    myRole: "My role",
    theProject: "The project",
    desktopExperience: "Desktop experience",
    responsiveExperience: "Responsive experience",
    mobileTitle: <>Three views.<br />One clear system.</>,
    designLogic: "Design logic",
    keyDecisions: "Key design decisions",
    connectedWorkflow: "Connected workflow",
    workflowOf: "Workflow for the project",
    outcome: "Outcome",
    nextCase: "Next case study",
    desktopAlt: "home page on desktop",
    mobileAlt: "on mobile",
    documentPortfolio: "Portfolio | Diego Franco Echeverri",
    documentProfile: "Profile | Diego Franco",
    documentCase: "Case Study",
  },
  es: {
    navProjects: "Proyectos",
    navAbout: "Perfil",
    navContact: "Contacto",
    backHome: "Diego Franco, volver al inicio",
    mainNavigation: "Navegación principal",
    languageSelector: "Idioma",
    english: "Inglés",
    spanish: "Español",
    roleTitle: "INGENIERO DE SOLUCIONES DE IA",
    portfolio: "PORTAFOLIO",
    heroLines: ["Convierto operaciones", "desconectadas en sistemas", "de negocio que"],
    heroAccent: "funcionan.",
    heroDescription:
      "Diseño productos CRM, ERP y web que centralizan la información, automatizan el trabajo repetitivo y ayudan a los equipos a actuar con mayor contexto.",
    viewCases: "Ver casos de estudio",
    heroFooter: "Diseño de sistemas · Integración de IA · Automatización · Integración API · UX/UI",
    howIWork: "Cómo trabajo",
    process: "DESCUBRIR → DISEÑAR → CONSTRUIR → INTEGRAR",
    processAria: "Descubrir, diseñar, construir e integrar",
    projects: "PROYECTOS",
    projectsTitle: <>Sistemas construidos para<br />el trabajo real.</>,
    caseStudies: "03 CASOS DE ESTUDIO",
    viewCase: "Ver caso de estudio",
    disciplines: "Disciplinas",
    coreStack: "HERRAMIENTAS CLAVE",
    toolsTitle: "Herramientas detrás de los sistemas.",
    toolsCopy: "Un conjunto enfocado para diseñar, construir y escalar ecosistemas inteligentes.",
    toolsAria: "Herramientas en mi flujo de trabajo actual",
    workTogether: "TRABAJEMOS JUNTOS",
    contactTitle: <>Hagamos que el negocio<br />fluya.</>,
    contactCopy: "Disponible para productos digitales, sistemas empresariales, automatización con IA y experiencias conectadas.",
    getInTouch: "Hablemos",
    ideasIntoSystems: "IDEAS CONVERTIDAS EN SISTEMAS",
    profile: "PERFIL",
    profileTitle: <>Ideas convertidas en <span>sistemas.</span></>,
    profileLead:
      "Soy Diego Franco, Ingeniero de Soluciones de IA. Convierto operaciones complejas en sistemas digitales claros: productos que organizan información, reducen trabajo manual y ayudan a los equipos a saber qué hacer después.",
    letsTalk: "Hablemos",
    profileVisual: "Retrato de Diego Franco conectado al sistema visual",
    profileResources: "Recursos del perfil",
    downloadCv: "Descargar CV",
    whatICreate: "LO QUE CONSTRUYO",
    resultsTitle: <>Construido para funcionar<br /><em>como uno solo.</em></>,
    resultsCopy: "Conecto plataformas, flujos de trabajo e IA para que las operaciones diarias sean más claras, rápidas y fáciles de gestionar.",
    faq: "PREGUNTAS FRECUENTES",
    allProjects: "Todos los proyectos",
    caseStudy: "Caso de estudio",
    projectScope: "Alcance del proyecto",
    project: "Proyecto",
    industry: "Industria",
    myRole: "Mi rol",
    theProject: "El proyecto",
    desktopExperience: "Experiencia en computador",
    responsiveExperience: "Experiencia adaptable",
    mobileTitle: <>Tres vistas.<br />Un sistema claro.</>,
    designLogic: "Lógica de diseño",
    keyDecisions: "Decisiones clave de diseño",
    connectedWorkflow: "Flujo conectado",
    workflowOf: "Flujo del proyecto",
    outcome: "Resultado",
    nextCase: "Siguiente caso de estudio",
    desktopAlt: "página principal en computador",
    mobileAlt: "en celular",
    documentPortfolio: "Portafolio | Diego Franco Echeverri",
    documentProfile: "Perfil | Diego Franco",
    documentCase: "Caso de estudio",
  },
};

function localizeProject(project, language) {
  return language === "es" ? { ...project, ...projectTranslationsEs[project.visual] } : project;
}

const workflowTools = [
  { name: "Codex", icon: BsOpenai, color: "#111111", slug: "codex" },
  { name: "Figma", icon: FigmaBrandMark, color: "#F24E1E", slug: "figma" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", slug: "typescript" },
  { name: "Next.js", icon: SiNextdotjs, color: "#111111", slug: "next" },
  { name: "React", icon: SiReact, color: "#149ECA", slug: "react" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", slug: "supabase" },
  { name: "OpenAI", icon: BsOpenai, color: "#10A37F", slug: "openai" },
  { name: "n8n", icon: SiN8N, color: "#EA4B71", slug: "n8n" },
  { name: "Make", icon: SiMake, color: "#6D00CC", slug: "make" },
  { name: "Vercel", icon: SiVercel, color: "#111111", slug: "vercel" },
];

function FigmaBrandMark() {
  return (
    <span className="figma-brand-mark" aria-hidden="true">
      <i /><i /><i /><i /><i />
    </span>
  );
}

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function SoftButton({ children, href, primary = false, external = false }) {
  return (
    <a
      className={`soft-button${primary ? " primary" : ""}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function TypewriterText({ text, threshold = 0.75, rootMargin = "0px 0px -12% 0px" }) {
  const [visibleText, setVisibleText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleText(text);
      setHasStarted(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasStarted(true);
        observer.disconnect();
      }
    }, { threshold, rootMargin });

    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, [rootMargin, text, threshold]);

  useEffect(() => {
    if (!hasStarted || visibleText === text) return undefined;

    setIsTyping(true);

    let characterIndex = 0;
    let timer;

    const typeNextCharacter = () => {
      characterIndex += 1;
      setVisibleText(text.slice(0, characterIndex));

      if (characterIndex < text.length) {
        timer = window.setTimeout(typeNextCharacter, characterIndex === 10 ? 150 : 68);
      } else {
        timer = window.setTimeout(() => setIsTyping(false), 850);
      }
    };

    timer = window.setTimeout(typeNextCharacter, 220);
    return () => window.clearTimeout(timer);
  }, [hasStarted, text]);

  return (
    <span ref={textRef} className={`typewriter-text${isTyping ? " is-typing" : ""}`} style={{ minWidth: `${text.length}ch` }} aria-hidden="true">
      {visibleText}
    </span>
  );
}

const projectVisualAssets = {
  naval: "/project-naval-n-v3.png",
  forty: "/project-40-4-v3.png",
  ceniza: "/project-ceniza-c-v3.png",
};

const projectFolderLabels = {
  naval: "Naval",
  forty: "40+",
  ceniza: "Ceniza",
};

const caseStudyDetails = {
  ceniza: {
    accent: "#efbe00",
    dark: "#080808",
    wash: "#eee7d5",
    demoUrl: "https://ceniza-crm.vercel.app/",
    demoLabel: "Try the demo",
    title: <>The operation,<br />visible in <em>one place.</em></>,
    introTitle: "A digital product built around Ceniza's real operation.",
    intro:
      "The project involved designing and building a custom CRM for Ceniza Producciones, a creative studio that also rents production equipment. It turns requests from email, WhatsApp and the website into organized work, helping the team manage clients, quotes, productions, rentals and resources without losing context.",
    story: [
      {
        label: "WHAT I ANALYZED",
        title: "Scattered information. Delayed decisions.",
        text: "Requests, dates, equipment and payments were separated, without clear ownership or priorities.",
      },
      {
        label: "WHAT I CONTRIBUTED",
        title: "One connected operating model.",
        text: "I unified clients, agenda, quotes, operations, inventory and finance so the dashboard and AI share the same context.",
      },
      {
        label: "FINAL PRODUCT",
        title: "A CRM for operating and deciding.",
        text: "The team manages opportunities, work, resources and financial results from one responsive application.",
      },
    ],
    currentLabel: "THE SOFTWARE · ONE ECOSYSTEM",
    crmTitle: "The entire workflow lives in one application.",
    crmCopy:
      "The CRM brings clients, agenda, quotes, operations, inventory, finance and Asistente Ceniza into the same ecosystem. Information moves forward once: each area sees the context it needs, the dashboard concentrates control and the team acts without switching tools.",
    crmMetrics: [
      { value: "8", label: "Connected record types", note: "Clients, opportunities, quotes, operations, inventory, finance, agenda and alerts work in one product." },
      { value: "6", label: "Operating areas", note: "Dashboard, agenda, clients, projects, inventory and finance share the same context." },
      { value: "18 + 6", label: "Inventory structure", note: "Equipment references and configurable production combos organized in the system." },
      { value: "77", label: "Automated checks", note: "Passing tests cover the product's critical commercial and operational flows." },
    ],
    benefitsTitle: "The value is continuity, not another dashboard.",
    benefits: [
      { title: "Commercial continuity", text: "The origin, interest, owner and next action travel with each opportunity." },
      { title: "Operational confidence", text: "Dates and inventory availability can be reviewed before a quote becomes an operation." },
      { title: "End-to-end traceability", text: "Clients, quotes, rentals or productions, costs and collections remain related." },
      { title: "Useful alerts", text: "Agenda and alerts point back to the record that needs attention instead of becoming isolated reminders." },
    ],
    crmMobileLabel: "REAL RESPONSIVE CRM",
    crmMobileTitle: "The same CRM, now in your pocket.",
    crmMobileCopy:
      "Mobile preserves the same information, status and actions as the desktop CRM. The team can review and manage the operation from a phone without changing systems or losing context.",
    crmMobileImages: [
      { kind: "login", src: "/case-ceniza-crm-mobile-login.png", label: "Login", benefit: "Secure access to the same operation from any device." },
      { kind: "agenda", src: "/case-ceniza-crm-mobile-agenda.png", label: "Agenda", benefit: "Tasks, deliveries, collections and owners accessible from anywhere." },
      { kind: "inventory", src: "/case-ceniza-crm-mobile-inventory-detail.png", label: "Inventory", benefit: "Product stock, availability and linked operations available in the field." },
      { kind: "assistant", src: "/case-ceniza-crm-mobile-assistant.png", label: "Asistente Ceniza", benefit: "Prioritizes alerts, summarizes the operation and prepares actions with the same desktop context." },
    ],
    assistantLabel: "ASISTENTE CENIZA · AI INSIDE THE CRM",
    assistantTitle: "From business context to the next action—inside the CRM.",
    assistantCopy:
      "The assistant reads the full operation, identifies what deserves attention and turns each signal into a traceable recommendation the team can review and confirm.",
    assistantCapabilities: [
      { title: "Sees the full context", text: "Connects clients, agenda, quotes, operations, inventory and finance." },
      { title: "Prepares the next step", text: "Turns risks and opportunities into a controlled action." },
    ],
    assistantBenefitsLabel: "BUSINESS BENEFITS",
    assistantBenefits: [
      { title: "Faster response", text: "The team sees what matters without rebuilding each case." },
      { title: "Lower operating risk", text: "Every recommendation keeps its rationale, owner and traceability." },
    ],
    predictionLabel: "PREDICTION, MADE CONCRETE",
    predictionTitle: "From operational records to a decision the team can verify.",
    predictionCopy: "The predictive layer is designed as a traceable decision loop. Each recommendation names the expected outcome, the evidence used and the action it would prepare, so the team can judge it before anything changes.",
    predictionEvidence: [
      { label: "WHAT IT ESTIMATES", title: "Commercial, cash and operating risk", text: "Quote conversion probability, expected collection timing, inventory or scheduling conflicts, and projected operating margin." },
      { label: "SIGNALS IT USES", title: "The same data that runs the CRM", text: "Opportunity stage, quote totals and approvals, due dates, client history, overdue activities, scheduled operations, availability, costs and collections." },
      { label: "HOW IT IS USED", title: "A prioritized next action", text: "Rank attention, recommend a follow-up, flag a conflict, protect margin or prepare a reservation. The team sees the rationale and confirms the action." },
    ],
    predictionNote: "Product direction: the decision logic and interaction are defined in the system. A learned forecasting model will only be presented as production-ready after it has sufficient historical data and measurable evaluation results.",
    assistantStatus: "REAL INTERFACE · CONNECTED TO THE CRM",
    webLabel: "PUBLIC WEBSITE · SUPPORTING ROLE",
    webTitle: "The website explains the offer and captures a better starting point.",
    webCopy:
      "The public experience presents the studio, equipment catalog, production combos and portfolio. Its role is focused: help a potential client understand the offer and send enough context for the team to continue inside the CRM.",
    automationTitle: "AI turns shared context into action, prediction and decisions.",
    automationLabel: "AI INTEGRATION · ONE OPERATING CONTEXT",
    automationCopy:
      "Asistente Ceniza works across the complete record: it understands the client, checks the agenda and inventory, prepares actions, monitors finance and updates the dashboard. Every response preserves traceability and improves the next recommendation.",
    automationSteps: [
      { icon: "+", title: "Client context", meta: "Origin · need · owner", status: "UNDERSTANDS" },
      { icon: "$", title: "Quote", meta: "Scope · totals · approval", status: "PREPARES" },
      { icon: "O", title: "Operation", meta: "Rental or production", status: "EXECUTES" },
      { icon: "▦", title: "Operational control", meta: "Agenda · inventory · costs", status: "MONITORS" },
      { icon: "✓", title: "Finance", meta: "Collect · pay · trace", status: "ANTICIPATES" },
      { icon: "✦", title: "Best next action", meta: "Summary · alert · decision", status: "RECOMMENDS", statusType: "next" },
    ],
    futureLabel: "FINAL SYSTEM · IN DEVELOPMENT",
    futureTitle: "Built now with the finished system in view.",
    futureCopy:
      "These capabilities are part of the product direction and are shown as the intended final state — not as live production features yet.",
    futureCards: [
      { title: "Shared cloud core", text: "Supabase persistence, secure authentication, organization roles and row-level access across authorized devices." },
      { title: "Real communication", text: "Email and WhatsApp providers connected to follow-up, quotes and operational notifications." },
      { title: "Asistente Ceniza in action", text: "Contextual queries and permitted actions, with confirmation before changes and an auditable history." },
    ],
    desktopUrl: "cenizaproducciones.com",
    desktopImage: "/case-ceniza-desktop.png",
    designTitle: "The experience moves from inspiration to a useful brief.",
    designCopy:
      "Visitors can understand the visual offer first, then choose equipment, a production setup or direct contact. The form captures date, location and production details before the lead reaches the commercial team.",
    notes: ["Editorial brand story", "Searchable equipment catalog", "Context-rich lead capture"],
    workflowTitle: "Website interest becomes structured CRM follow-up.",
    workflowCaption: "Public experience → qualified conversation → commercial continuity",
    workflow: [
      { position: "start", icon: "◎", title: "Discovery", meta: "Search · social" },
      { position: "site", icon: "W", title: "Website", meta: "Studio · catalog" },
      { position: "branch-top", icon: "↗", title: "WhatsApp", meta: "Fast questions" },
      { position: "branch-bottom", icon: "+", title: "Project form", meta: "Qualified brief" },
      { position: "system", icon: "C", title: "CRM", meta: "Lead + context" },
      { position: "end", icon: "✓", title: "Follow-up", meta: "Owner · next step" },
    ],
    outcomeTitle: "A connected operating system that turns daily information into clear decisions and coordinated action.",
  },
  forty: {
    accent: "#f15f31",
    dark: "#12514e",
    wash: "#f4ecd7",
    title: <>From product interest<br />to a <em>clear next step.</em></>,
    introTitle: "The business did not need more complexity. It needed a digital journey that matched how it actually sells.",
    intro:
      "40+ evolved from an online checkout concept into a simpler WhatsApp-assisted sales journey. The website explains the collagen, shows how it fits into a routine and captures customer experiences that trigger useful content and an organized internal record.",
    story: [
      { label: "THE PROBLEM", title: "Content, ordering and follow-up felt separate.", text: "A potential customer could understand the brand without always knowing the simplest next action." },
      { label: "THE SYSTEM", title: "One responsive journey with two clear paths.", text: "People can prepare an order for WhatsApp or share their experience through a validated form connected to Make." },
      { label: "THE VALUE", title: "A solution aligned with the real operation.", text: "The brand keeps human-assisted sales while automating e-book delivery, internal notification and the customer record." },
    ],
    desktopUrl: "cuarentamas.com",
    desktopImage: "/case-40plus-desktop.png",
    mobileImages: [
      { src: "/case-40plus-mobile-1.png", label: "Home" },
      { src: "/case-40plus-mobile-2.png", label: "Product" },
      { src: "/case-40plus-mobile-3.png", label: "Daily ritual" },
    ],
    designTitle: "The product stays clear; the next action stays practical.",
    designCopy:
      "The home page builds recognition, the product page answers practical questions and the ritual content helps people imagine daily use. Mobile preserves packaging, hierarchy and calls to action without flattening the brand.",
    notes: ["WhatsApp-assisted order", "Validated experience form", "Automated e-book delivery"],
    workflowTitle: "One website supports both the sale and the relationship after it.",
    workflowCaption: "WORKING FLOW · WEBSITE + WHATSAPP + MAKE + EMAIL + SHEETS",
    workflow: [
      { position: "start", icon: "◎", title: "Interest", meta: "Content · direct" },
      { position: "site", icon: "W", title: "Website", meta: "Product · ritual" },
      { position: "branch-top", icon: "↗", title: "WhatsApp", meta: "Prepared order" },
      { position: "branch-bottom", icon: "M", title: "Make flow", meta: "Experience form" },
      { position: "system", icon: "+", title: "Follow-up", meta: "Human + automated" },
      { position: "end", icon: "✓", title: "Continuity", meta: "Order · e-book · record" },
    ],
    outcomeTitle: "A compact digital experience that explains the product, fits the sales model and automates the follow-up that adds value.",
  },
  naval: {
    accent: "#3154b9",
    dark: "#233f98",
    wash: "#eef1f8",
    title: <>A clearer model<br />for a <em>complex operation.</em></>,
    introTitle: "Naval needs product demand and internal execution to speak the same operational language.",
    intro:
      "The current work establishes both sides of that model: a public B2B catalog for product discovery and quotation requests, plus a private ERP demonstration for production, inventory, purchasing, quality and reporting. Their verified integration is the next stage, not a finished claim.",
    story: [
      { label: "THE PROBLEM", title: "A broad catalog creates operational complexity behind every request.", text: "Commercial demand has to be translated into stock, purchasing, production, quality and delivery decisions." },
      { label: "THE SYSTEM", title: "A public product layer and a private operating layer.", text: "The website organizes discovery by product and sector; the ERP demo makes the internal work visible in one structure." },
      { label: "THE VALUE", title: "A concrete path toward one source of truth.", text: "Teams can validate the operating model before replacing demo data with secure persistence and real integrations." },
    ],
    desktopUrl: "productosnaval.com",
    desktopImage: "/case-naval-desktop.png",
    mobileImages: [
      { src: "/case-naval-mobile-1.png", label: "Company" },
      { src: "/case-naval-mobile-2.png", label: "Catalog" },
      { src: "/case-naval-mobile-3.png", label: "Product" },
    ],
    designTitle: "Public clarity on one side; operational structure on the other.",
    designCopy:
      "The website helps hotels, restaurants, schools and distributors find products by line or sector. The ERP demo organizes the internal processes required to respond. The next step is a verified bridge that turns commercial requests into operational records.",
    notes: ["B2B catalog by need", "Assisted product discovery", "ERP operating model demo"],
    workflowTitle: "The intended end-to-end model is visible, with the unfinished connection stated clearly.",
    workflowCaption: "CURRENT WEBSITE + CURRENT ERP DEMO · VERIFIED INTEGRATION NEXT",
    workflow: [
      { position: "start", icon: "B", title: "B2B need", meta: "Sector · product" },
      { position: "site", icon: "W", title: "Website", meta: "Catalog · advisor" },
      { position: "branch-top", icon: "↗", title: "Sales", meta: "Quote · order" },
      { position: "branch-bottom", icon: "AI", title: "Chatbot", meta: "Guided request" },
      { position: "system", icon: "E", title: "ERP demo", meta: "Shared operating model" },
      { position: "end", icon: "→", title: "Next stage", meta: "Integrate · secure data" },
    ],
    outcomeTitle: "A working B2B experience and ERP demonstration that make the future connected operation tangible without overstating its current maturity.",
  },
};

const caseStudyDetailsEs = {
  ceniza: {
    demoLabel: "Probar demo",
    title: <>La operación,<br />visible en <em>un solo lugar.</em></>,
    introTitle: "Un producto digital construido alrededor de la operación real de Ceniza.",
    intro:
      "El proyecto consistió en diseñar y construir un CRM a la medida para Ceniza Producciones, un estudio creativo que también alquila equipos de producción. Convierte las solicitudes que llegan por correo, WhatsApp y la web en trabajo organizado, para que el equipo gestione clientes, cotizaciones, producciones, alquileres y recursos sin perder contexto.",
    story: [
      {
        label: "LO QUE ANALICÉ",
        title: "Información dispersa. Decisiones tardías.",
        text: "Solicitudes, fechas, equipos y pagos estaban separados, sin responsables ni prioridades claras.",
      },
      {
        label: "LO QUE APORTÉ",
        title: "Un modelo operativo conectado.",
        text: "Unifiqué clientes, agenda, cotizaciones, operación, inventario y finanzas para que el dashboard y la IA compartan contexto.",
      },
      {
        label: "PRODUCTO FINAL",
        title: "Un CRM para operar y decidir.",
        text: "El equipo gestiona oportunidades, trabajo, recursos y resultados financieros desde una sola aplicación responsive.",
      },
    ],
    currentLabel: "EL SOFTWARE · UN SOLO ECOSISTEMA",
    crmTitle: "Todo el flujo vive en una sola aplicación.",
    crmCopy:
      "El CRM reúne clientes, agenda, cotizaciones, operación, inventario, finanzas y el Asistente Ceniza en el mismo ecosistema. La información avanza una sola vez: cada área ve el contexto que necesita, el dashboard concentra el control y el equipo actúa sin cambiar de herramienta.",
    crmMetrics: [
      { value: "8", label: "Tipos de registro conectados", note: "Clientes, oportunidades, cotizaciones, operaciones, inventario, finanzas, agenda y alertas funcionan en un solo producto." },
      { value: "6", label: "Áreas operativas", note: "Dashboard, agenda, clientes, proyectos, inventario y finanzas comparten el mismo contexto." },
      { value: "18 + 6", label: "Estructura de inventario", note: "Referencias de equipos y combos configurables organizados en el sistema." },
      { value: "77", label: "Validaciones automáticas", note: "Pruebas aprobadas cubren los flujos comerciales y operativos críticos del producto." },
    ],
    benefitsTitle: "El valor está en la continuidad, no en sumar otro dashboard.",
    benefits: [
      { title: "Continuidad comercial", text: "El origen, interés, responsable y siguiente acción acompañan cada oportunidad." },
      { title: "Confianza operativa", text: "Las fechas y la disponibilidad de inventario pueden revisarse antes de convertir una cotización en operación." },
      { title: "Trazabilidad completa", text: "Clientes, cotizaciones, alquileres o producciones, costos y recaudos permanecen relacionados." },
      { title: "Alertas útiles", text: "La agenda y las alertas regresan al registro que necesita atención y no quedan como recordatorios aislados." },
    ],
    crmMobileLabel: "CRM RESPONSIVE REAL",
    crmMobileTitle: "El mismo CRM, también en el celular.",
    crmMobileCopy:
      "La versión móvil conserva la misma información, estados y acciones del CRM de escritorio. El equipo puede consultar y gestionar la operación desde el celular sin cambiar de sistema ni perder contexto.",
    crmMobileImages: [
      { kind: "login", src: "/case-ceniza-crm-mobile-login.png", label: "Login", benefit: "Acceso seguro a la misma operación desde cualquier dispositivo." },
      { kind: "agenda", src: "/case-ceniza-crm-mobile-agenda.png", label: "Agenda", benefit: "Tareas, entregas, cobros y responsables accesibles desde cualquier lugar." },
      { kind: "inventory", src: "/case-ceniza-crm-mobile-inventory-detail.png", label: "Ficha de inventario", benefit: "Stock, disponibilidad y operaciones vinculadas del producto, también en campo." },
      { kind: "assistant", src: "/case-ceniza-crm-mobile-assistant.png", label: "Asistente Ceniza", benefit: "Prioriza alertas, resume la operación y prepara acciones con el mismo contexto del escritorio." },
    ],
    assistantLabel: "ASISTENTE CENIZA · IA DENTRO DEL CRM",
    assistantTitle: "Del contexto del negocio a la siguiente acción, dentro del CRM.",
    assistantCopy:
      "El asistente lee la operación completa, identifica qué merece atención y convierte cada señal en una recomendación trazable que el equipo puede revisar y confirmar.",
    assistantCapabilities: [
      { title: "Ve el contexto completo", text: "Conecta clientes, agenda, cotizaciones, operación, inventario y finanzas." },
      { title: "Prepara el siguiente paso", text: "Convierte riesgos y oportunidades en una acción controlada." },
    ],
    assistantBenefitsLabel: "BENEFICIOS PARA EL NEGOCIO",
    assistantBenefits: [
      { title: "Respuesta más rápida", text: "El equipo ve qué importa sin reconstruir cada caso." },
      { title: "Menos riesgo operativo", text: "Cada recomendación conserva su razón, responsable y trazabilidad." },
    ],
    predictionLabel: "PREDICCIÓN, EXPLICADA CON PRECISIÓN",
    predictionTitle: "De los registros operativos a una decisión que el equipo puede verificar.",
    predictionCopy: "La capa predictiva está planteada como un ciclo de decisión trazable. Cada recomendación indica el resultado esperado, la evidencia utilizada y la acción que prepararía, para que el equipo pueda evaluarla antes de modificar cualquier dato.",
    predictionEvidence: [
      { label: "QUÉ ESTIMA", title: "Riesgo comercial, de caja y operativo", text: "Probabilidad de conversión de una cotización, fecha esperada de recaudo, conflictos de agenda o inventario y margen operativo proyectado." },
      { label: "QUÉ INFORMACIÓN USA", title: "Los mismos datos que mueven el CRM", text: "Etapa de la oportunidad, valores y aprobaciones, vencimientos, historial del cliente, actividades atrasadas, operaciones programadas, disponibilidad, costos y recaudos." },
      { label: "CÓMO SE UTILIZA", title: "Una siguiente acción priorizada", text: "Ordenar la atención, recomendar un seguimiento, advertir un conflicto, proteger el margen o preparar una reserva. El equipo ve la razón y confirma la acción." },
    ],
    predictionNote: "Dirección del producto: la lógica de decisión y la interacción están definidas en el sistema. Un modelo de pronóstico aprendido solo se presentará como listo para producción cuando cuente con suficiente historial y resultados de evaluación medibles.",
    assistantStatus: "INTERFAZ REAL · CONECTADA AL CRM",
    webLabel: "SITIO WEB PÚBLICO · ROL DE SOPORTE",
    webTitle: "La web explica la oferta y captura un mejor punto de partida.",
    webCopy:
      "La experiencia pública presenta el estudio, el catálogo de equipos, los combos de producción y el portafolio. Su función es concreta: ayudar a entender la oferta y enviar suficiente contexto para que el equipo continúe dentro del CRM.",
    automationTitle: "La IA convierte el contexto compartido en acción, predicción y decisiones.",
    automationLabel: "INTEGRACIÓN DE IA · UN SOLO CONTEXTO OPERATIVO",
    automationCopy:
      "El Asistente Ceniza trabaja sobre el registro completo: entiende al cliente, revisa agenda e inventario, prepara acciones, vigila las finanzas y actualiza el dashboard. Cada respuesta conserva la trazabilidad y mejora la siguiente recomendación.",
    automationSteps: [
      { icon: "+", title: "Contexto del cliente", meta: "Origen · necesidad · responsable", status: "ENTIENDE" },
      { icon: "$", title: "Cotización", meta: "Alcance · totales · aprobación", status: "PREPARA" },
      { icon: "O", title: "Operación", meta: "Alquiler o producción", status: "EJECUTA" },
      { icon: "▦", title: "Control operativo", meta: "Agenda · inventario · costos", status: "MONITOREA" },
      { icon: "✓", title: "Finanzas", meta: "Cobrar · pagar · trazar", status: "ANTICIPA" },
      { icon: "✦", title: "Mejor siguiente acción", meta: "Resumen · alerta · decisión", status: "RECOMIENDA", statusType: "next" },
    ],
    futureLabel: "SISTEMA FINAL · EN DESARROLLO",
    futureTitle: "Construido hoy pensando en el sistema terminado.",
    futureCopy:
      "Estas capacidades hacen parte de la dirección del producto y se muestran como el estado final esperado; todavía no se presentan como funciones activas en producción.",
    futureCards: [
      { title: "Núcleo compartido en la nube", text: "Persistencia en Supabase, autenticación segura, roles por organización y acceso por fila entre dispositivos autorizados." },
      { title: "Comunicación real", text: "Proveedores de correo y WhatsApp conectados al seguimiento, las cotizaciones y las notificaciones operativas." },
      { title: "Asistente Ceniza en acción", text: "Consultas y acciones permitidas según el contexto, con confirmación antes de hacer cambios e historial auditable." },
    ],
    designTitle: "La experiencia avanza de la inspiración a un brief útil.",
    designCopy:
      "Los visitantes entienden primero la propuesta visual y luego eligen equipos, una configuración de producción o contacto directo. El formulario captura fecha, ubicación y detalles de producción antes de que el cliente potencial llegue al equipo comercial.",
    notes: ["Historia de marca editorial", "Catálogo de equipos con búsqueda", "Captura de clientes potenciales con contexto"],
    workflowTitle: "El interés del sitio se convierte en seguimiento estructurado en el CRM.",
    workflowCaption: "Experiencia pública → conversación calificada → continuidad comercial",
    workflow: [
      { position: "start", icon: "◎", title: "Descubrimiento", meta: "Búsqueda · redes" },
      { position: "site", icon: "W", title: "Sitio web", meta: "Estudio · catálogo" },
      { position: "branch-top", icon: "↗", title: "WhatsApp", meta: "Preguntas rápidas" },
      { position: "branch-bottom", icon: "+", title: "Formulario", meta: "Brief calificado" },
      { position: "system", icon: "C", title: "CRM", meta: "Contacto + contexto" },
      { position: "end", icon: "✓", title: "Seguimiento", meta: "Responsable · acción" },
    ],
    outcomeTitle: "Un sistema operativo conectado que convierte la información diaria en decisiones claras y acciones coordinadas.",
  },
  forty: {
    title: <>Del interés por el producto<br />a un <em>siguiente paso claro.</em></>,
    introTitle: "El negocio no necesitaba más complejidad. Necesitaba un recorrido digital alineado con su forma real de vender.",
    intro:
      "40+ evolucionó de una idea de checkout en línea a un recorrido de venta asistida por WhatsApp más simple. La web explica el colágeno, muestra cómo integrarlo a la rutina y captura experiencias de clientes que activan contenido útil y un registro interno organizado.",
    story: [
      { label: "EL PROBLEMA", title: "El contenido, el pedido y el seguimiento se sentían separados.", text: "Una persona podía entender la marca sin tener siempre claro cuál era la acción más simple para continuar." },
      { label: "EL SISTEMA", title: "Un recorrido responsive con dos caminos claros.", text: "Las personas pueden preparar un pedido para WhatsApp o compartir su experiencia mediante un formulario validado y conectado con Make." },
      { label: "EL VALOR", title: "Una solución alineada con la operación real.", text: "La marca conserva la venta asistida por personas y automatiza la entrega del e-book, la notificación interna y el registro del cliente." },
    ],
    mobileImages: [
      { src: "/case-40plus-mobile-1.png", label: "Inicio" },
      { src: "/case-40plus-mobile-2.png", label: "Producto" },
      { src: "/case-40plus-mobile-3.png", label: "Ritual diario" },
    ],
    designTitle: "El producto se mantiene claro; el siguiente paso sigue siendo práctico.",
    designCopy:
      "La página de inicio genera reconocimiento, la página de producto explica qué es y el contenido de ritual muestra cómo integrarlo a la vida diaria. En celular, el empaque, la información clave y las llamadas a la acción permanecen visibles sin perder el carácter de la marca.",
    notes: ["Pedido asistido por WhatsApp", "Formulario de experiencia validado", "Entrega automatizada del e-book"],
    workflowTitle: "Un mismo sitio apoya tanto la venta como la relación posterior.",
    workflowCaption: "FLUJO FUNCIONAL · WEB + WHATSAPP + MAKE + CORREO + SHEETS",
    workflow: [
      { position: "start", icon: "◎", title: "Interés", meta: "Contenido · directo" },
      { position: "site", icon: "W", title: "Sitio web", meta: "Producto · ritual" },
      { position: "branch-top", icon: "↗", title: "WhatsApp", meta: "Pedido preparado" },
      { position: "branch-bottom", icon: "M", title: "Flujo Make", meta: "Formulario de experiencia" },
      { position: "system", icon: "+", title: "Seguimiento", meta: "Humano + automático" },
      { position: "end", icon: "✓", title: "Continuidad", meta: "Pedido · e-book · registro" },
    ],
    outcomeTitle: "Una experiencia digital compacta que explica el producto, respeta el modelo de venta y automatiza el seguimiento que agrega valor.",
  },
  naval: {
    title: <>Un modelo más claro<br />para una <em>operación compleja.</em></>,
    introTitle: "Naval necesita que la demanda de producto y la ejecución interna hablen el mismo lenguaje operativo.",
    intro:
      "El trabajo actual establece ambos lados del modelo: un catálogo B2B público para descubrir productos y solicitar cotizaciones, y una demostración privada de ERP para producción, inventario, compras, calidad e informes. Su integración verificada es la siguiente etapa, no una capacidad que se presenta como terminada.",
    story: [
      { label: "EL PROBLEMA", title: "Un catálogo amplio crea complejidad operativa detrás de cada solicitud.", text: "La demanda comercial debe traducirse en decisiones de inventario, compras, producción, calidad y entrega." },
      { label: "EL SISTEMA", title: "Una capa pública de producto y una capa privada de operación.", text: "La web organiza el descubrimiento por producto y sector; el ERP demo hace visible el trabajo interno dentro de una misma estructura." },
      { label: "EL VALOR", title: "Un camino concreto hacia una única fuente de verdad.", text: "Los equipos pueden validar el modelo operativo antes de reemplazar los datos demo por persistencia segura e integraciones reales." },
    ],
    mobileImages: [
      { src: "/case-naval-mobile-1.png", label: "Empresa" },
      { src: "/case-naval-mobile-2.png", label: "Catálogo" },
      { src: "/case-naval-mobile-3.png", label: "Producto" },
    ],
    designTitle: "Claridad pública por un lado; estructura operativa por el otro.",
    designCopy:
      "El sitio ayuda a hoteles, restaurantes, colegios y distribuidores a encontrar productos por línea o sector. El ERP demo organiza los procesos internos necesarios para responder. El siguiente paso es un puente verificado que convierta las solicitudes comerciales en registros operativos.",
    notes: ["Catálogo B2B según la necesidad", "Descubrimiento asistido de productos", "Modelo operativo demostrado en el ERP"],
    workflowTitle: "El modelo integral esperado queda visible, con la conexión pendiente expresada con claridad.",
    workflowCaption: "WEB ACTUAL + ERP DEMO ACTUAL · INTEGRACIÓN VERIFICADA DESPUÉS",
    workflow: [
      { position: "start", icon: "B", title: "Necesidad B2B", meta: "Sector · producto" },
      { position: "site", icon: "W", title: "Sitio web", meta: "Catálogo · asesor" },
      { position: "branch-top", icon: "↗", title: "Ventas", meta: "Cotización · orden" },
      { position: "branch-bottom", icon: "AI", title: "Chatbot", meta: "Solicitud guiada" },
      { position: "system", icon: "E", title: "ERP demo", meta: "Modelo operativo común" },
      { position: "end", icon: "→", title: "Siguiente etapa", meta: "Integrar · proteger datos" },
    ],
    outcomeTitle: "Una experiencia B2B funcional y una demostración de ERP que hacen tangible la futura operación conectada sin exagerar su madurez actual.",
  },
};

function localizeCaseDetail(detail, visual, language) {
  return language === "es" ? { ...detail, ...caseStudyDetailsEs[visual] } : detail;
}

function ProjectVisual({ visual }) {
  const folderContents = (
    <>
      <span className="folder-surface" aria-hidden="true">
        <img src="/project-folder-glass-cropped-v2.png" alt="" />
      </span>
      <span className="folder-label">{projectFolderLabels[visual]}</span>
      {(
        <span className="folder-arrow" aria-hidden="true"><svg viewBox="0 0 36 36" focusable="false"><path d="M6 30 30 6M14 6h16v16" /></svg></span>
      )}
      <span className="folder-monogram" aria-hidden="true">D</span>
    </>
  );

  return (
    <div className={`project-visual ${visual}`}>
      <img src={projectVisualAssets[visual]} alt="" loading="lazy" decoding="async" />
      <div className="project-folder" aria-hidden="true">{folderContents}</div>
    </div>
  );
}

const profileResults = [
  {
    number: "01",
    label: "ERP SYSTEMS",
    title: "The operational core.",
    description: "Connect sales, production, purchasing, inventory, finance and reporting within one structured platform.",
  },
  {
    number: "02",
    label: "CRM",
    title: "Customer relationships, organized.",
    description: "Bring leads, conversations, tasks and follow-ups together so every interaction has context and continuity.",
  },
  {
    number: "03",
    label: "POS",
    title: "Sales connected end to end.",
    description: "Unify products, payments, inventory and customer data across physical and digital sales channels.",
  },
  {
    number: "04",
    label: "APP AND WEBS",
    title: "More than an interface.",
    description: "Create clear, responsive platforms that guide users, support business goals and connect with the tools behind the experience.",
  },
  {
    number: "05",
    label: "AUTOMATION",
    title: "Manual work, reduced.",
    description: "Automate repetitive steps, connect information between tools and keep processes moving with fewer errors and delays.",
  },
  {
    number: "06",
    label: "AI INTEGRATION",
    title: "AI inside the workflow.",
    description: "Embed intelligent assistants and context-aware actions into the systems teams already use.",
  },
];

const profileFaqs = [
  {
    question: "What can we build together?",
    answer: "From connected ERP, CRM and POS platforms to responsive apps, web experiences, automated workflows and practical AI layers built around the way your business operates.",
  },
  {
    question: "Which teams are the best fit for this work?",
    answer: "Growing businesses and operational teams that need clearer systems, better-connected information and digital products that can evolve with their processes.",
  },
  {
    question: "How does an idea become a working system?",
    answer: "We map the operation, identify the highest-impact opportunity, shape the experience and build in focused stages—testing each connection before expanding the system.",
  },
];

const profileResultsEs = [
  {
    number: "01",
    label: "SISTEMAS ERP",
    title: "El núcleo operativo.",
    description: "Conecta ventas, producción, compras, inventario, finanzas e informes dentro de una plataforma estructurada.",
  },
  {
    number: "02",
    label: "CRM",
    title: "Relaciones con clientes, organizadas.",
    description: "Reúne contactos, conversaciones, tareas y seguimientos para que cada interacción conserve contexto y continuidad.",
  },
  {
    number: "03",
    label: "POS",
    title: "Ventas conectadas de principio a fin.",
    description: "Unifica productos, pagos, inventario y datos de clientes en los canales de venta físicos y digitales.",
  },
  {
    number: "04",
    label: "APPS Y SITIOS WEB",
    title: "Más que una interfaz.",
    description: "Crea plataformas claras y adaptables que guían a los usuarios, apoyan los objetivos del negocio y se conectan con las herramientas detrás de la experiencia.",
  },
  {
    number: "05",
    label: "AUTOMATIZACIÓN",
    title: "Menos trabajo manual.",
    description: "Automatiza pasos repetitivos, conecta información entre herramientas y mantiene los procesos en movimiento con menos errores y demoras.",
  },
  {
    number: "06",
    label: "INTEGRACIÓN DE IA",
    title: "IA dentro del flujo de trabajo.",
    description: "Integra asistentes inteligentes y acciones sensibles al contexto dentro de los sistemas que los equipos ya utilizan.",
  },
];

const profileFaqsEs = [
  {
    question: "¿Qué podemos construir juntos?",
    answer: "Desde plataformas ERP, CRM y POS conectadas hasta aplicaciones adaptables, experiencias web, flujos automatizados y capas prácticas de IA construidas alrededor de la forma en que opera tu negocio.",
  },
  {
    question: "¿Qué equipos son ideales para este trabajo?",
    answer: "Empresas en crecimiento y equipos operativos que necesitan sistemas más claros, información mejor conectada y productos digitales que evolucionen junto con sus procesos.",
  },
  {
    question: "¿Cómo se convierte una idea en un sistema funcional?",
    answer: "Mapeamos la operación, identificamos la oportunidad de mayor impacto, diseñamos la experiencia y construimos por etapas enfocadas, probando cada conexión antes de ampliar el sistema.",
  },
];

function ResultsMap({ isVisible, language }) {
  const text = copy[language];
  const results = language === "es" ? profileResultsEs : profileResults;

  return (
    <section className="results-section" aria-labelledby="results-title">
      <header className="results-intro">
        <div className="results-intro-heading">
          <p className="eyebrow" aria-label={text.whatICreate}><span className="availability-dot loading-dot" /><TypewriterText text={text.whatICreate} threshold={0.2} /></p>
          <h2 id="results-title">{text.resultsTitle}</h2>
        </div>
        <p>{text.resultsCopy}</p>
      </header>

      <div className={`capabilities-map${isVisible ? " is-visible" : ""}`}>
        <svg className="capabilities-connectors" viewBox="0 0 1200 522" preserveAspectRatio="none" aria-hidden="true">
          <g className="capabilities-connector-paths">
            <path pathLength="1" d="M600 0V82" />
            <path pathLength="1" d="M200 82H1000" />
            <path pathLength="1" d="M200 82V108" />
            <path pathLength="1" d="M600 82V108" />
            <path pathLength="1" d="M1000 82V108" />
            <path pathLength="1" d="M400 82V324" />
            <path pathLength="1" d="M800 82V324" />
            <path pathLength="1" d="M200 324H1000" />
            <path pathLength="1" d="M200 324V348" />
            <path pathLength="1" d="M600 324V348" />
            <path pathLength="1" d="M1000 324V348" />
          </g>
          <g className="capabilities-connector-nodes">
            <circle cx="600" cy="82" r="4" />
            <circle cx="200" cy="108" r="3.5" />
            <circle cx="600" cy="108" r="3.5" />
            <circle cx="1000" cy="108" r="3.5" />
            <circle cx="200" cy="348" r="3.5" />
            <circle cx="600" cy="348" r="3.5" />
            <circle cx="1000" cy="348" r="3.5" />
          </g>
        </svg>

        {results.map((result, index) => (
          <article className="capability-item" data-number={result.number} style={{ "--capability-delay": `${3.18 + Math.floor(index / 3) * 0.62 + (index % 3) * 0.14}s` }} key={result.number}>
            <span className="capability-rule" aria-hidden="true" />
            <p className="capability-index"><span className="capability-number">{result.number}</span><span className="capability-label">{result.label}</span></p>
            <h3>{result.title}</h3>
            <p>{result.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProfilePage({ language }) {
  const [connectionsVisible, setConnectionsVisible] = useState(false);
  const text = copy[language];
  const faqs = language === "es" ? profileFaqsEs : profileFaqs;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setConnectionsVisible(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <main className={`profile-page${connectionsVisible ? " connections-visible" : ""}`} id="inicio">
      <section className="about-section about-page" aria-labelledby="profile-title">
        <article className="about-copy">
          <p className="eyebrow" aria-label={text.profile}><span className="availability-dot loading-dot" /><TypewriterText text={text.profile} /></p>
          <h1 id="profile-title">{text.profileTitle}</h1>
          <p className="profile-lead">{text.profileLead}</p>
          <SoftButton href="/#contacto" primary>{text.letsTalk} <Arrow /></SoftButton>
        </article>

        <div className="profile-visual" aria-label={text.profileVisual}>
          <svg className="profile-connectors" viewBox="0 0 900 680" preserveAspectRatio="none" aria-hidden="true">
            <g className="profile-circuit profile-circuit-left">
              <path pathLength="1" d="M267 153H420" />
              <path pathLength="1" d="M216 184V280H84V350" />
              <path pathLength="1" d="M84 493V570H255" />
            </g>

            <g className="profile-circuit profile-circuit-right">
              <path pathLength="1" d="M560 153H720V320H813V352" />
              <path pathLength="1" d="M813 482V600H710" />
            </g>

            <g className="profile-grid-nodes">
              <circle cx="84" cy="280" r="7.5" style={{ "--node-delay": ".72s" }} />
              <circle cx="84" cy="570" r="7.5" style={{ "--node-delay": "1.22s" }} />
              <circle cx="255" cy="570" r="7.5" style={{ "--node-delay": "1.46s" }} />
              <circle cx="720" cy="153" r="7.5" style={{ "--node-delay": ".68s" }} />
              <circle cx="813" cy="320" r="7.5" style={{ "--node-delay": ".98s" }} />
              <circle cx="813" cy="600" r="7.5" style={{ "--node-delay": "1.28s" }} />
              <circle cx="710" cy="600" r="7.5" style={{ "--node-delay": "1.42s" }} />
            </g>
          </svg>

          <span className="profile-fur-orb profile-fur-orb-mint" aria-hidden="true">
            <img className="profile-fur-base" src="/profile-fuzzy-orb-mint-v4.png" alt="" />
            <img className="profile-fur-detail" src="/profile-fuzzy-orb-mint-v3.png" alt="" />
          </span>
          <span className="profile-fur-orb profile-fur-orb-ivory" aria-hidden="true">
            <img className="profile-fur-base" src="/profile-fuzzy-orb-ivory-v4.png" alt="" />
            <img className="profile-fur-detail" src="/profile-fuzzy-orb-ivory-v3.png" alt="" />
          </span>
          <span className="profile-fur-orb profile-fur-orb-stone" aria-hidden="true">
            <img className="profile-fur-base" src="/profile-fuzzy-orb-stone-v4.png" alt="" />
            <img className="profile-fur-detail" src="/profile-fuzzy-orb-stone-v3.png" alt="" />
          </span>

          <figure className="profile-cutout">
            <img
              src="/diego-franco-cutout-final.png"
              alt="Diego Franco"
              loading="eager"
              decoding="async"
            />
          </figure>

        </div>
      </section>

      <div className="profile-system-handoff">
        <svg className="profile-system-handoff-lines profile-system-handoff-desktop" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path pathLength="1" d="M918 -18V50H600V150" />
          <circle cx="918" cy="50" r="3.5" />
          <circle cx="600" cy="50" r="3.5" />
        </svg>
        <svg className="profile-system-handoff-lines profile-system-handoff-mobile" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path pathLength="1" d="M612 0V52H-23V120" />
          <circle cx="612" cy="52" r="3.5" />
        </svg>
        <div className="profile-connector-resources" aria-label={text.profileResources}>
          <div className="profile-connector-resource" aria-disabled="true">
            <span className="profile-connector-resource-node" aria-hidden="true" />
            <span className="profile-connector-resource-label">{text.downloadCv}</span>
            <Arrow diagonal />
          </div>
          <div className="profile-connector-resource" aria-disabled="true">
            <span className="profile-connector-resource-node" aria-hidden="true" />
            <span className="profile-connector-resource-label">LinkedIn</span>
            <Arrow diagonal />
          </div>
        </div>
      </div>

      <ResultsMap isVisible={connectionsVisible} language={language} />

      <section className="profile-faq" aria-labelledby="profile-faq-title">
        <header className="profile-faq-header">
          <p className="eyebrow" id="profile-faq-title" aria-label={text.faq}>
            <span className="availability-dot loading-dot" />
            <TypewriterText text={text.faq} threshold={0.2} />
          </p>
        </header>
        <div className="profile-faq-list">
          {faqs.map((faq) => (
            <details className="profile-faq-item" key={faq.question}>
              <summary>
                <span className="profile-faq-plus" aria-hidden="true" />
                <span>{faq.question}</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

function CaseWorkflow({ project, detail, language }) {
  const text = copy[language];

  return (
    <figure className="case-workflow-canvas" aria-label={`${text.workflowOf} ${project.name}`}>
      <div className="case-workflow-map">
        <svg viewBox="0 0 1000 340" aria-hidden="true">
          <path d="M100 170H260" />
          <path d="M340 170C420 170 410 76 470 76" />
          <path d="M340 170C420 170 410 264 470 264" />
          <path d="M570 76C650 76 640 170 700 170" />
          <path d="M570 264C650 264 640 170 700 170" />
          <path d="M800 170H900" />
        </svg>
        {detail.workflow.map((node, index) => (
          <article className={`case-workflow-node node-${node.position}`} key={node.position}>
            <span className="case-workflow-icon" aria-hidden="true">{node.icon}</span>
            <div><small>{String(index + 1).padStart(2, "0")}</small><strong>{node.title}</strong><p>{node.meta}</p></div>
          </article>
        ))}
      </div>
      <figcaption>{detail.workflowCaption}</figcaption>
    </figure>
  );
}

function CenizaCrmPreview({ detail, language, label }) {
  const screens = language === "es" ? [
    { title: "Dashboard", benefit: "Control del negocio", text: "Reúne indicadores, clientes recientes, próximos hitos, oportunidades, entregas, inventario y rendimiento financiero para entender el negocio y decidir dónde actuar.", src: "/case-ceniza-laptop-dashboard.png", alt: "Indicadores y paneles operativos del dashboard del CRM de Ceniza", scale: "1", position: "center bottom" },
    { title: "Agenda", benefit: "Prioridades claras", text: "Centraliza calendario, tareas, cobros, entregas, responsables y alertas. Permite ordenar prioridades y dar a cada pendiente una fecha y un siguiente paso.", src: "/case-ceniza-laptop-agenda.png", alt: "Calendario operativo de la agenda del CRM de Ceniza", scale: "1", position: "center bottom" },
    { title: "Clientes", benefit: "Contexto compartido", text: "Guarda datos de contacto, origen, necesidad, estado, conversaciones y próxima actividad, conservando el historial completo de cada relación.", src: "/case-ceniza-laptop-clients.png", alt: "Tabla y filtros de clientes del CRM de Ceniza", scale: "1", position: "center bottom" },
    { title: "Cotizaciones", benefit: "Continuidad comercial", text: "Reúne cliente, alcance, conceptos, cantidades, precios, impuestos, condiciones de pago, responsables y fechas; al aprobarse, alimenta la operación sin duplicar datos.", src: "/case-ceniza-laptop-quotes.png", alt: "Detalle de conceptos y condiciones de una cotización de Ceniza", scale: "1", position: "center bottom" },
    { title: "Inventario", benefit: "Confianza operativa", text: "Muestra existencias, equipos disponibles, reservados y en uso, características, accesorios y operaciones vinculadas antes de confirmar un alquiler o producción.", src: "/case-ceniza-laptop-inventory.png", alt: "Ficha de disponibilidad y características de un equipo del inventario de Ceniza", scale: "1", position: "center bottom" },
    { title: "Reportes", benefit: "Lectura ejecutiva", text: "Resume resultados comerciales, operativos, financieros, de inventario y documentos en un mismo período para comparar, exportar y decidir.", src: "/case-ceniza-laptop-reports.png", alt: "Resumen ejecutivo y tabla de reportes del CRM de Ceniza", scale: "1", position: "center top" },
    { title: "Finanzas", benefit: "Trazabilidad financiera", text: "Conecta ingresos, costos, cuentas por cobrar y pagar, movimientos, recaudo y rentabilidad con la cotización u operación que originó cada valor.", src: "/case-ceniza-laptop-finance.png", alt: "Indicadores y movimientos de la página financiera del CRM de Ceniza", scale: "1", position: "center bottom" },
    { title: "Página web", benefit: "Entrada conectada", text: "Presenta los servicios y equipos de Ceniza y convierte el interés del visitante en una solicitud con contexto que continúa dentro del CRM.", src: "/case-ceniza-laptop-website.png", alt: "Página web pública de Ceniza conectada con el CRM", scale: "1", position: "center top" },
    { title: "Asistente IA", benefit: "Decisiones en contexto", text: "Lee la página activa, prioriza alertas, resume la operación y prepara el siguiente paso sin separar la asistencia del trabajo diario.", src: "/case-ceniza-laptop-assistant.png", alt: "Asistente de IA de Ceniza abierto sobre el dashboard del CRM", scale: "1", position: "center top" },
  ] : [
    { title: "Dashboard", benefit: "Business control", text: "Brings together indicators, recent clients, upcoming milestones, opportunities, deliveries, inventory and financial performance to reveal where the business needs action.", src: "/case-ceniza-laptop-dashboard.png", alt: "Operational indicators and panels in the Ceniza CRM dashboard", scale: "1", position: "center bottom" },
    { title: "Agenda", benefit: "Clear priorities", text: "Centralizes the calendar, tasks, collections, deliveries, owners and alerts so every priority has a date and a clear next step.", src: "/case-ceniza-laptop-agenda.png", alt: "Operating calendar in the Ceniza CRM agenda", scale: "1", position: "center bottom" },
    { title: "Clients", benefit: "Shared context", text: "Keeps contact details, source, need, status, conversations and next activity together, preserving the full history of every relationship.", src: "/case-ceniza-laptop-clients.png", alt: "Client table and filters in the Ceniza CRM", scale: "1", position: "center bottom" },
    { title: "Quotes", benefit: "Commercial continuity", text: "Combines the client, scope, items, quantities, pricing, taxes, payment terms, owners and dates; approval then moves the same data into the operation.", src: "/case-ceniza-laptop-quotes.png", alt: "Items and commercial terms in a Ceniza quote", scale: "1", position: "center bottom" },
    { title: "Inventory", benefit: "Operational confidence", text: "Shows stock, available, reserved and active equipment, specifications, accessories and related operations before a rental or production is confirmed.", src: "/case-ceniza-laptop-inventory.png", alt: "Equipment availability and specifications in Ceniza inventory", scale: "1", position: "center bottom" },
    { title: "Reports", benefit: "Executive view", text: "Summarizes commercial, operational, financial, inventory and document results for the same period so the team can compare, export and decide.", src: "/case-ceniza-laptop-reports.png", alt: "Executive summary and report table in the Ceniza CRM", scale: "1", position: "center top" },
    { title: "Finance", benefit: "Financial traceability", text: "Connects revenue, costs, receivables, payables, movements, collections and profitability to the quote or operation behind every amount.", src: "/case-ceniza-laptop-finance.png", alt: "Indicators and movements on the Ceniza CRM finance page", scale: "1", position: "center bottom" },
    { title: "Website", benefit: "Connected entry point", text: "Presents Ceniza's services and equipment, then turns visitor interest into a contextual request that continues inside the CRM.", src: "/case-ceniza-laptop-website.png", alt: "Public Ceniza website connected with the CRM", scale: "1", position: "center top" },
    { title: "AI Assistant", benefit: "Contextual decisions", text: "Reads the active page, prioritizes alerts, summarizes the operation and prepares the next step without separating assistance from daily work.", src: "/case-ceniza-laptop-assistant.png", alt: "Ceniza AI Assistant open over the CRM dashboard", scale: "1", position: "center top" },
  ];

  return (
    <figure className="ceniza-crm-figure">
      <figcaption>
        <span>{label}</span>
        <span>{language === "es" ? "09 VISTAS · UN SOLO SISTEMA" : "09 VIEWS · ONE SYSTEM"}</span>
      </figcaption>
      <ol className="ceniza-crm-flow-grid">
        {screens.map((screen, index) => {
          return (
              <li
                className="ceniza-crm-flow-card"
                key={screen.src}
                style={{
                  "--screen-scale": screen.scale,
                  "--screen-position": screen.position,
                }}
              >
                <div className="ceniza-crm-flow-screen">
                  <img src={screen.src} alt={screen.alt} loading="lazy" decoding="async" />
                </div>
                <span className="ceniza-crm-laptop-base" aria-hidden="true" />
                <div className="ceniza-crm-flow-caption">
                  <span>{index + 1}</span>
                  <div>
                    <em>{screen.benefit}</em>
                    <strong>{screen.title}</strong>
                    <small>{screen.text}</small>
                  </div>
                </div>
              </li>
          );
        })}
      </ol>
    </figure>
  );
}

function CenizaConnectionFlow({ language, embedded = false }) {
  const content = language === "es" ? {
    label: "INTEGRACIÓN DE IA · UN SOLO CONTEXTO OPERATIVO",
    title: "La IA convierte el contexto en acción y mejores decisiones.",
    embeddedLabel: "CÓMO FUNCIONA",
    embeddedTitle: "Una misma señal recorre toda la operación.",
    copy: "El Asistente Ceniza trabaja sobre el registro completo: entiende al cliente, prioriza la agenda, prepara cotizaciones y ejecuta acciones dentro de la operación. Al mismo tiempo vigila inventario y finanzas, actualiza el dashboard y detecta patrones para anticipar riesgos, generar predicciones y recomendar la siguiente mejor decisión.",
    nodes: [
      { position: "intake", icon: LuSparkles, title: "Asistente IA", meta: "Lee las señales" },
      { position: "client", icon: LuUsers, title: "Cliente", meta: "Contexto e historial" },
      { position: "agenda", icon: LuCalendarCheck, title: "Agenda", meta: "Prioridad y responsable" },
      { position: "quote", icon: LuFileText, title: "Cotización", meta: "Valor y estado" },
      { position: "operation", icon: LuTarget, title: "Operación", meta: "Prepara la acción" },
      { position: "inventory", icon: LuBoxes, title: "Inventario", meta: "Disponibilidad" },
      { position: "finance", icon: LuCircleDollarSign, title: "Finanzas", meta: "Flujo y margen" },
      { position: "dashboard", icon: LuTrendingUp, title: "Mejor decisión", meta: "Razón + acción" },
    ],
  } : {
    label: "AI INTEGRATION · ONE OPERATING CONTEXT",
    title: "AI turns context into action and better decisions.",
    embeddedLabel: "HOW IT WORKS",
    embeddedTitle: "One signal moves through the whole operation.",
    copy: "Asistente Ceniza works across the complete record: it understands the client, prioritizes the agenda, prepares quotes and executes actions inside the operation. At the same time, it monitors inventory and finance, updates the dashboard and detects patterns to anticipate risks, generate predictions and recommend the next best decision.",
    nodes: [
      { position: "intake", icon: LuSparkles, title: "AI assistant", meta: "Reads the signals" },
      { position: "client", icon: LuUsers, title: "Client", meta: "Context and history" },
      { position: "agenda", icon: LuCalendarCheck, title: "Agenda", meta: "Priority and owner" },
      { position: "quote", icon: LuFileText, title: "Quote", meta: "Value and status" },
      { position: "operation", icon: LuTarget, title: "Operation", meta: "Prepares the action" },
      { position: "inventory", icon: LuBoxes, title: "Inventory", meta: "Availability" },
      { position: "finance", icon: LuCircleDollarSign, title: "Finance", meta: "Cash flow and margin" },
      { position: "dashboard", icon: LuTrendingUp, title: "Better decision", meta: "Rationale + action" },
    ],
  };

  return (
    <section className={`ceniza-connection-section${embedded ? " is-embedded" : ""}`} aria-labelledby="ceniza-connection-title">
      <header className="ceniza-connection-header">
        <p className="case-label">{embedded ? content.embeddedLabel : content.label}</p>
        <h2 id="ceniza-connection-title">{embedded ? content.embeddedTitle : content.title}</h2>
        {!embedded ? <p className="ceniza-connection-copy">{content.copy}</p> : null}
      </header>
      <figure className="ceniza-connection-figure">
        <div className="ceniza-connection-canvas">
          <svg viewBox="0 0 1270 380" aria-hidden="true">
            <defs>
              <marker id="ceniza-flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" />
              </marker>
            </defs>
            <path d="M185 190H205" />
            <path d="M390 190C410 190 405 96 425 96" />
            <path d="M390 190C410 190 405 284 425 284" />
            <path d="M610 96C630 96 625 190 645 190" />
            <path d="M610 284C630 284 625 190 645 190" />
            <path d="M830 190C850 190 845 96 865 96" />
            <path d="M830 190C850 190 845 284 865 284" />
            <path d="M1050 96C1070 96 1045 190 1065 190" />
            <path d="M1050 284C1070 284 1045 190 1065 190" />
          </svg>
          <ol>
            {content.nodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <li className={`ceniza-connection-node node-${node.position}`} key={node.position}>
                  <span className="ceniza-connection-icon" aria-hidden="true"><Icon /></span>
                  <small>{index + 1}</small>
                  <strong>{node.title}</strong>
                  <p>{node.meta}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </figure>
    </section>
  );
}

function CenizaResponsiveCrm({ detail, language }) {
  return (
    <div className="ceniza-responsive-crm" aria-labelledby="ceniza-responsive-title">
      <header className="ceniza-responsive-header">
        <p className="case-label">{detail.crmMobileLabel}</p>
        <h3 id="ceniza-responsive-title">{detail.crmMobileTitle}</h3>
        <p>{detail.crmMobileCopy}</p>
      </header>
      <div className="ceniza-crm-phone-row">
        {detail.crmMobileImages.map((screen) => (
          <figure key={screen.kind || screen.src}>
            <div className="ceniza-crm-phone">
              <span className="mobile-speaker" aria-hidden="true" />
              {screen.src ? (
                <img
                  src={screen.src}
                  alt={`${screen.label} ${language === "es" ? "del CRM de Ceniza en celular" : "from Ceniza CRM on mobile"}`}
                  loading="lazy"
                  decoding="async"
                />
              ) : screen.kind === "login" ? (
                <CenizaMobileLogin language={language} />
              ) : screen.kind === "agenda" ? (
                <CenizaMobileAgenda language={language} />
              ) : null}
            </div>
            <figcaption><strong>{screen.label}</strong><small>{screen.benefit}</small></figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function CenizaMobileBrand() {
  return (
    <div className="ceniza-mobile-brand" aria-hidden="true">
      <span>C</span><i>≡</i><span>NIZA</span>
    </div>
  );
}

function CenizaMobileLogin({ language }) {
  const isEs = language === "es";
  return (
    <div className="ceniza-mobile-ui ceniza-mobile-login" aria-label={isEs ? "Vista móvil del acceso al CRM" : "Mobile CRM login view"}>
      <div className="ceniza-mobile-login-hero">
        <CenizaMobileBrand />
        <span className="ceniza-mobile-login-mark" aria-hidden="true"><LuSparkles /></span>
        <small>{isEs ? "TODO EL NEGOCIO, BAJO UNA MISMA LUZ" : "THE WHOLE BUSINESS, UNDER ONE LIGHT"}</small>
      </div>
      <div className="ceniza-mobile-login-panel">
        <p>{isEs ? "ENTORNO DE DEMOSTRACIÓN" : "DEMO ENVIRONMENT"}</p>
        <h4>{isEs ? "Bienvenido." : "Welcome."}</h4>
        <span>{isEs ? "Acceso exclusivo para el equipo de Ceniza." : "Exclusive access for the Ceniza team."}</span>
        <div className="ceniza-mobile-field"><small>{isEs ? "USUARIO O CORREO" : "USER OR EMAIL"}</small><strong>{isEs ? "Tu usuario" : "Your user"}</strong></div>
        <div className="ceniza-mobile-field"><small>{isEs ? "CONTRASEÑA" : "PASSWORD"}</small><strong>••••••••••••</strong></div>
        <div className="ceniza-mobile-login-button">{isEs ? "INGRESAR" : "SIGN IN"}<b>→</b></div>
      </div>
      <small className="ceniza-mobile-login-footer">© 2026 CENIZA PRODUCCIONES · BOGOTÁ</small>
    </div>
  );
}

function CenizaMobileAgenda({ language }) {
  const isEs = language === "es";
  const items = isEs ? [
    ["09:00", "Confirmar producción", "Lumen House", "HOY"],
    ["11:30", "Revisar cotización", "Nómada Studio", "ALTA"],
    ["14:00", "Entrega de equipos", "Foco Editorial", "RUTA"],
    ["16:30", "Seguimiento comercial", "Casa Norte", "CRM"],
  ] : [
    ["09:00", "Confirm production", "Lumen House", "TODAY"],
    ["11:30", "Review quote", "Nómada Studio", "HIGH"],
    ["14:00", "Equipment delivery", "Foco Editorial", "ROUTE"],
    ["16:30", "Commercial follow-up", "Casa Norte", "CRM"],
  ];
  return (
    <div className="ceniza-mobile-ui ceniza-mobile-agenda" aria-label={isEs ? "Vista móvil de la agenda del CRM" : "Mobile CRM agenda view"}>
      <div className="ceniza-mobile-agenda-top"><CenizaMobileBrand /><span>DF</span></div>
      <div className="ceniza-mobile-agenda-hero">
        <small>{isEs ? "AGENDA DEL EQUIPO" : "TEAM AGENDA"}</small>
        <h4>{isEs ? "Todo lo que sigue, claro." : "Everything next, clear."}</h4>
        <p>{isEs ? "Prioridades, responsables y alertas en contexto." : "Priorities, owners and alerts in context."}</p>
      </div>
      <div className="ceniza-mobile-agenda-body">
        <header><div><small>{isEs ? "HOY" : "TODAY"}</small><strong>{isEs ? "Jueves, 10 de septiembre" : "Thursday, September 10"}</strong></div><LuCalendarCheck /></header>
        <div className="ceniza-mobile-agenda-summary"><span><b>4</b>{isEs ? " actividades" : " activities"}</span><span><b>2</b>{isEs ? " alertas" : " alerts"}</span></div>
        <div className="ceniza-mobile-task-list">
          {items.map(([time, title, client, status]) => (
            <article key={time}>
              <time>{time}</time>
              <div><strong>{title}</strong><small>{client}</small></div>
              <i>{status}</i>
            </article>
          ))}
        </div>
      </div>
      <div className="ceniza-mobile-agenda-nav" aria-hidden="true"><span>⌂</span><span>✓</span><span className="is-active"><LuCalendarCheck /></span><span>◎</span></div>
    </div>
  );
}

function CenizaAssistantPreview({ detail, language }) {
  return (
    <>
      <section className="ceniza-assistant-section" aria-labelledby="ceniza-assistant-title">
        <header className="ceniza-section-header">
          <p className="case-label">{detail.assistantLabel}</p>
          <div>
            <h2 id="ceniza-assistant-title">{detail.assistantTitle}</h2>
            <p>{detail.assistantCopy}</p>
          </div>
        </header>
        <CenizaConnectionFlow language={language} embedded />
        <div className="ceniza-assistant-summary">
          <section className="is-capabilities" aria-labelledby="ceniza-assistant-does-title">
            <p className="case-label">{language === "es" ? "QUÉ ACTIVA" : "WHAT IT ENABLES"}</p>
            <h3 id="ceniza-assistant-does-title">{language === "es" ? "Ve, prioriza y prepara." : "Sees, prioritizes and prepares."}</h3>
            <ol>
              {detail.assistantCapabilities.map((capability, index) => (
                <li key={capability.title}>
                  <span>{index + 1}</span>
                  <div><strong>{capability.title}</strong><p>{capability.text}</p></div>
                </li>
              ))}
            </ol>
          </section>
          <section className="is-benefits" aria-labelledby="ceniza-assistant-benefits-title">
            <p className="case-label">{detail.assistantBenefitsLabel}</p>
            <h3 id="ceniza-assistant-benefits-title">{language === "es" ? "Decidir antes, no reaccionar tarde." : "Decide earlier instead of reacting late."}</h3>
            <ol>
              {detail.assistantBenefits.map((benefit, index) => (
                <li key={benefit.title}>
                  <span>{index + 1}</span>
                  <div><strong>{benefit.title}</strong><p>{benefit.text}</p></div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </section>

      <section className="ceniza-assistant-proof" aria-labelledby="ceniza-assistant-proof-title">
        <header className="ceniza-assistant-proof-header">
          <div>
            <p className="case-label">{language === "es" ? "INTERFAZ REAL · ASISTENCIA EN CONTEXTO" : "REAL INTERFACE · IN-CONTEXT ASSISTANCE"}</p>
            <h2 id="ceniza-assistant-proof-title">{language === "es" ? "La recomendación aparece donde ocurre el trabajo." : "The recommendation appears where the work happens."}</h2>
          </div>
          <p>{language === "es" ? "Dentro del dashboard, el asistente resume alertas, explica por qué importan y deja la siguiente acción lista para confirmar, sin abrir otra herramienta." : "Inside the dashboard, the assistant summarizes alerts, explains why they matter and leaves the next action ready to confirm—without opening another tool."}</p>
        </header>
        <figure className="ceniza-assistant-figure">
          <div className="ceniza-real-screen">
            <img
              src="/case-ceniza-assistant-desktop.png"
              alt={language === "es" ? "Interfaz real del Asistente Ceniza sobre el dashboard del CRM" : "Real Asistente Ceniza interface over the CRM dashboard"}
              loading="lazy"
              decoding="async"
            />
          </div>
        </figure>
      </section>
    </>
  );
}

function CaseNarrative({ detail, language }) {
  if (!detail.story) return null;

  return (
    <section className={`case-narrative${detail.predictionEvidence ? " is-ceniza" : ""}`} aria-label={language === "es" ? "Narrativa del proyecto" : "Project narrative"}>
      {detail.story.map((item, index) => (
        <article key={item.label}>
          <span>{detail.predictionEvidence ? index + 1 : String(index + 1).padStart(2, "0")}</span>
          <p className="case-label">{item.label}</p>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </article>
      ))}
    </section>
  );
}

function CenizaAutomation({ detail }) {
  return (
    <figure className="ceniza-automation-canvas">
      <div className="ceniza-automation-track">
        {detail.automationSteps.map((step, index) => (
          <article className={`ceniza-automation-node${step.statusType === "next" ? " is-next" : ""}`} key={step.title}>
            <span className="ceniza-automation-icon" aria-hidden="true">{step.icon}</span>
            <small>{String(index + 1).padStart(2, "0")} · {step.status}</small>
            <strong>{step.title}</strong>
            <p>{step.meta}</p>
          </article>
        ))}
      </div>
    </figure>
  );
}

function CenizaCaseContent({ project, detail, language }) {
  const text = copy[language];

  return (
    <>
      <section className="ceniza-crm-section" aria-labelledby="ceniza-crm-title">
        <header className="ceniza-section-header">
          <p className="case-label">{detail.currentLabel}</p>
          <div>
            <h2 id="ceniza-crm-title">{detail.crmTitle}</h2>
            <p>{detail.crmCopy}</p>
          </div>
        </header>
        <CenizaCrmPreview detail={detail} language={language} label={language === "es" ? "PÁGINAS DEL CRM" : "CRM PAGES"} />
        <CenizaResponsiveCrm detail={detail} language={language} />
      </section>

      <CenizaAssistantPreview detail={detail} language={language} />

      <section className="ceniza-web-section" aria-labelledby="ceniza-web-title">
        <header className="ceniza-section-header">
          <p className="case-label">{detail.webLabel}</p>
          <div>
            <h2 id="ceniza-web-title">{detail.webTitle}</h2>
            <p>{detail.webCopy}</p>
          </div>
        </header>
        <figure className="editorial-desktop-showcase ceniza-web-desktop">
          <figcaption><span>{text.desktopExperience}</span><span>WEB · 01</span></figcaption>
          <div className="desktop-browser-frame">
            <div className="desktop-browser-bar" aria-hidden="true"><span /><span /><span /><i>{detail.desktopUrl}</i></div>
            <img src={detail.desktopImage} alt={`${project.name}: ${text.desktopAlt}`} loading="lazy" decoding="async" />
          </div>
        </figure>
      </section>

      <section className="editorial-case-outcome ceniza-case-outcome">
        <p className="case-label">{text.outcome}</p>
        <h2>{detail.outcomeTitle}</h2>
        <p>{project.outcome}</p>
      </section>
    </>
  );
}

function ProjectDetailPage({ project, projectsList, onNavigate, language }) {
  const text = copy[language];
  const projectIndex = projectsList.findIndex((item) => item.path === project.path);
  const nextProject = projectsList[(projectIndex + 1) % projectsList.length];
  const detail = localizeCaseDetail(caseStudyDetails[project.visual], project.visual, language);
  const caseStyle = {
    "--case-accent": detail.accent,
    "--case-dark": detail.dark,
    "--case-wash": detail.wash,
  };

  return (
    <main className={`case-study editorial-case case-study-${project.visual}`} style={caseStyle}>
      <a className="case-back-link editorial-case-back-link" href="/#trabajo" onClick={(event) => onNavigate(event, "/#trabajo")}>
        <span aria-hidden="true">←</span> {text.allProjects}
      </a>
      <section className="editorial-case-hero" aria-labelledby="case-title">
        <div className="editorial-case-copy">
          <p className="eyebrow"><span className="availability-dot loading-dot" />{text.caseStudy} · {project.number}</p>
          <h1 id="case-title">{detail.title}</h1>
          <p>{project.description}</p>
          <ul className="editorial-case-tags" aria-label={text.projectScope}>
            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
        <div className="editorial-case-visual" aria-hidden="true">
          <span className="editorial-visual-bubble" />
          <img src={projectVisualAssets[project.visual]} alt="" />
          <span className="editorial-case-index">{project.number} / 03</span>
        </div>
      </section>

      {project.visual === "ceniza" ? (
        <div className="ceniza-demo-placement">
          <a className="ceniza-demo-button" href={detail.demoUrl} target="_blank" rel="noreferrer">
            <span>{detail.demoLabel}</span><span aria-hidden="true">↗</span>
          </a>
        </div>
      ) : null}

      <section className="editorial-case-intro" aria-labelledby="case-overview-title">
        <dl className="case-facts">
          <div><dt>{text.project}</dt><dd>{project.name}</dd></div>
          <div><dt>{text.industry}</dt><dd>{project.industry}</dd></div>
          <div><dt>{text.myRole}</dt><dd>{project.role}</dd></div>
        </dl>
        <div>
          <p className="case-label">{text.theProject}</p>
          <h2 id="case-overview-title">{detail.introTitle}</h2>
          <p>{detail.intro}</p>
        </div>
      </section>

      {project.visual === "ceniza" ? (<>
        <CaseNarrative detail={detail} language={language} />
        <CenizaCaseContent project={project} detail={detail} language={language} />
      </>
      ) : (<>
      <CaseNarrative detail={detail} language={language} />

      <figure className="editorial-desktop-showcase">
        <figcaption><span>{text.desktopExperience}</span><span>01 / 02</span></figcaption>
        <div className="desktop-browser-frame">
          <div className="desktop-browser-bar" aria-hidden="true"><span /><span /><span /><i>{detail.desktopUrl}</i></div>
          <img src={detail.desktopImage} alt={`${project.name}: ${text.desktopAlt}`} loading="lazy" decoding="async" />
        </div>
      </figure>

      <section className="editorial-mobile-showcase" aria-labelledby="case-mobile-title">
        <header>
          <p className="case-label">{text.responsiveExperience} · 02 / 02</p>
          <h2 id="case-mobile-title">{text.mobileTitle}</h2>
        </header>
        <div className="editorial-phone-row">
          {detail.mobileImages.map((screen) => (
            <figure key={screen.src}>
              <div className="editorial-phone-frame">
                <span className="mobile-speaker" aria-hidden="true" />
                <img src={screen.src} alt={`${screen.label} de ${project.name} ${text.mobileAlt}`} loading="lazy" decoding="async" />
              </div>
              <figcaption>{screen.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="editorial-case-design" aria-labelledby="case-design-title">
        <div className="editorial-design-copy">
          <p className="case-label">{text.designLogic}</p>
          <h2 id="case-design-title">{detail.designTitle}</h2>
          <p>{detail.designCopy}</p>
        </div>
        <ul className="editorial-design-notes" aria-label={text.keyDecisions}>
          {detail.notes.map((note, index) => <li key={note}><span>{String(index + 1).padStart(2, "0")}</span>{note}</li>)}
        </ul>
      </section>

      <section className="editorial-workflow-section" aria-labelledby="case-workflow-title">
        <header>
          <p className="eyebrow"><span className="availability-dot" />{text.connectedWorkflow}</p>
          <h2 id="case-workflow-title">{detail.workflowTitle}</h2>
        </header>
        <CaseWorkflow project={project} detail={detail} language={language} />
      </section>

      <section className="editorial-case-outcome">
        <p className="case-label">{text.outcome}</p>
        <h2>{detail.outcomeTitle}</h2>
        <p>{project.outcome}</p>
      </section>
      </>)}

      <a className="case-next" href={nextProject.path} onClick={(event) => onNavigate(event, nextProject.path)}>
        <span>{text.nextCase} · {nextProject.number}</span>
        <strong>{nextProject.name}</strong>
        <Arrow />
      </a>
    </main>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const [language, setLanguage] = useState(() => window.localStorage.getItem("portfolio-language") === "es" ? "es" : "en");
  const text = copy[language];
  const localizedProjects = projects.map((project) => localizeProject(project, language));

  useEffect(() => {
    const handleNavigation = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  const activeProject = localizedProjects.find((project) => project.path === currentPath);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
    document.title = activeProject
      ? `${activeProject.name} · ${text.documentCase} | Diego Franco`
      : currentPath === "/perfil"
        ? text.documentProfile
        : text.documentPortfolio;
  }, [activeProject, currentPath, language, text]);

  function navigate(event, path) {
    event.preventDefault();
    window.history.pushState({}, "", path);
    setCurrentPath(window.location.pathname);
    const targetId = window.location.hash.slice(1);
    window.requestAnimationFrame(() => {
      if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  return (
    <div className="portfolio-page">
      <header className="site-nav">
        <a className="wordmark" href="/" onClick={(event) => navigate(event, "/")} aria-label={text.backHome}>
          DIEGO <span>FRANCO</span><small aria-label={text.roleTitle}><TypewriterText text={text.roleTitle} /></small>
        </a>

        <nav aria-label={text.mainNavigation}>
          <a href="/#trabajo">{text.navProjects}</a>
          <a href="/perfil" onClick={(event) => navigate(event, "/perfil")}>{text.navAbout}</a>
          <a href="/#contacto">{text.navContact}</a>
        </nav>

        <div className="site-nav-actions">
          <div className="language-switch" role="group" aria-label={text.languageSelector}>
            <button type="button" className={language === "en" ? "is-active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"} aria-label={text.english}>EN</button>
            <span aria-hidden="true">/</span>
            <button type="button" className={language === "es" ? "is-active" : ""} onClick={() => setLanguage("es")} aria-pressed={language === "es"} aria-label={text.spanish}>ES</button>
          </div>
          <SoftButton href="https://github.com/diegofrancoe" external>
            GitHub <Arrow diagonal />
          </SoftButton>
        </div>
      </header>

      {currentPath === "/perfil" ? <ProfilePage language={language} /> : activeProject ? (
        <ProjectDetailPage project={activeProject} projectsList={localizedProjects} onNavigate={navigate} language={language} />
      ) : <main id="inicio">
        <section className="hero-panel" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow" aria-label={text.portfolio}>
              <span className="availability-dot loading-dot" />
              <TypewriterText text={text.portfolio} />
            </p>
            <h1 id="hero-title">
              <span>{text.heroLines[0]}</span>
              <span>{text.heroLines[1]}</span>
              <span>{text.heroLines[2]} <em>{text.heroAccent}</em></span>
            </h1>
            <div className="hero-description">
              <p>{text.heroDescription}</p>
            </div>
            <div className="hero-actions">
              <SoftButton href="#trabajo" primary>
                {text.viewCases} <Arrow />
              </SoftButton>
            </div>
          </div>

          <div className="hero-folder" aria-hidden="true">
            <svg className="cloud-motion-filter" width="0" height="0" focusable="false">
              <filter id="cloud-motion" x="-12%" y="-12%" width="124%" height="124%">
                <feTurbulence type="fractalNoise" baseFrequency="0.007 0.014" numOctaves="2" seed="7" result="noise">
                  <animate attributeName="baseFrequency" dur="11s" values="0.007 0.014;0.015 0.007;0.007 0.014" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="B">
                  <animate attributeName="scale" dur="8s" values="7;17;7" repeatCount="indefinite" />
                </feDisplacementMap>
              </filter>
            </svg>
            <img src="/hero-mint-cloud.png" alt="" />
          </div>

          <div className="hero-footer">
            <p>{text.heroFooter}</p>
          </div>
        </section>

        <section className="intro-strip" aria-label={text.howIWork}>
          <p className="process-title">{text.howIWork}</p>
          <p className="process-flow" aria-label={text.processAria}>
            <TypewriterText text={text.process} />
          </p>
        </section>

        <section className="projects-section" id="trabajo" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow" aria-label={text.projects}><span className="availability-dot" /><TypewriterText text={text.projects} /></p>
              <h2 id="projects-title">{text.projectsTitle}</h2>
            </div>
            <p className="section-note" aria-label={text.caseStudies}><TypewriterText text={text.caseStudies} /></p>
          </div>

          <div className="projects-grid">
            {localizedProjects.map((project) => (
              <a
                className="project-card"
                href={project.path}
                onClick={(event) => navigate(event, project.path)}
                aria-label={`${text.viewCase} ${project.name}`}
                key={project.name}
              >
                <ProjectVisual visual={project.visual} />
                <div className="project-meta">
                  <span>{project.number}</span>
                  <p>{project.type}</p>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <ul aria-label={text.disciplines}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="tools-section" aria-labelledby="tools-title">
          <div className="tools-heading">
            <p className="eyebrow" aria-label={text.coreStack}><span className="availability-dot" /><TypewriterText text={text.coreStack} /></p>
            <h2 id="tools-title">{text.toolsTitle}</h2>
            <p>{text.toolsCopy}</p>
          </div>

          <ul className="tools-constellation" aria-label={text.toolsAria}>
            {workflowTools.map((tool) => {
              const ToolIcon = tool.icon;
              return (
                <li key={tool.slug} style={{ "--brand-color": tool.color }}>
                  <span className="tool-orb" aria-hidden="true"><ToolIcon /></span>
                  <span>{tool.name}</span>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="contact-panel" id="contacto" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow" aria-label={text.workTogether}><span className="availability-dot" /><TypewriterText text={text.workTogether} /></p>
            <h2 id="contact-title">{text.contactTitle}</h2>
          </div>
          <div className="contact-actions">
            <p>{text.contactCopy}</p>
            <SoftButton href="https://github.com/diegofrancoe" primary external>
              {text.getInTouch} <Arrow diagonal />
            </SoftButton>
          </div>
        </section>
      </main>}

      <footer>
        <a className="wordmark" href="/" onClick={(event) => navigate(event, "/")}>DIEGO <span>FRANCO</span></a>
        <p className="footer-portfolio" aria-label={text.ideasIntoSystems}><TypewriterText text={text.ideasIntoSystems} threshold={0.15} rootMargin="0px 0px 8% 0px" /></p>
        <p className="footer-copyright">© 2026</p>
      </footer>
    </div>
  );
}

export default App;
