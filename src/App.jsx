import { useEffect, useRef, useState } from "react";
import { BsOpenai } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuArrowRight, LuBoxes, LuCalendarCheck, LuCircleDollarSign, LuClipboardList, LuDatabase, LuFactory, LuFileText, LuFlaskConical, LuGlobe, LuPackageCheck, LuShieldCheck, LuShoppingCart, LuSparkles, LuTarget, LuTrendingUp, LuUserCheck, LuUsers } from "react-icons/lu";
import { SiDropbox, SiGmail, SiGooglecalendar, SiGoogledrive, SiGooglemaps, SiInstagram, SiMake, SiMercadopago, SiMeta, SiN8N, SiNextdotjs, SiPostgresql, SiReact, SiStripe, SiSupabase, SiTiktok, SiTypescript, SiVercel, SiWhatsapp, SiZoom } from "react-icons/si";

const CONTACT_EMAIL = "diegofrancoecheverri@gmail.com";
const CONTACT_WHATSAPP_NUMBER = "573113964114";
const CONTACT_LINKEDIN = "https://www.linkedin.com/in/diego-franco-338433364/";
const CONTACT_CV_URL = "/Diego_Franco_CV.pdf";
const CONTACT_WHATSAPP_MESSAGE = "Hola Diego 👋, vi tu portafolio y me gustaría conversar contigo sobre una idea o una oportunidad de trabajo. ¿Te cuento un poco más?";
const CONTACT_WHATSAPP_URL = CONTACT_WHATSAPP_NUMBER
  ? `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${encodeURIComponent(CONTACT_WHATSAPP_MESSAGE)}`
  : "";
const SITE_URL = "https://www.diegofrancoe.com";

const projects = [
  {
    number: "01",
    name: "Ceniza",
    type: "FULL STACK · CRM + AI",
    description:
      "A CRM-first system that keeps clients, quotes, productions, rentals, inventory and finance in one operational view — supported by Asistente Ceniza.",
    tags: ["CRM", "APPLIED AI", "AUTOMATION"],
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
    type: "E-COMMERCE · AUTOMATION",
    description:
      "A responsive product journey that explains the ritual, prepares WhatsApp-assisted orders and automates experience capture and e-book delivery.",
    tags: ["E-COMMERCE", "UX/UI", "MAKE"],
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
    type: "FULL STACK · ERP + B2B",
    description:
      "A B2B catalog and ERP demonstration designed to bring product demand, production, purchasing, inventory, quality and reporting into one operating model.",
    tags: ["ERP", "B2B", "OPERATIONS"],
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
    type: "FULL STACK · CRM + IA",
    description:
      "Un sistema centrado en el CRM que reúne clientes, cotizaciones, producciones, alquileres, inventario y finanzas en una vista operativa, con el apoyo del Asistente Ceniza.",
    tags: ["CRM", "IA APLICADA", "AUTOMATIZACIÓN"],
    headline: "Cada cliente, cotización y operación en un solo lugar.",
    industry: "Producción creativa + alquiler de equipos",
    role: "AI Solutions Engineer · Producto y UX/UI · CRM · Datos · Automatización",
    outcome:
      "El producto final conecta el recorrido comercial y operativo en un sistema responsive, con contexto compartido, asistencia de IA controlada y trazabilidad desde la oportunidad hasta el seguimiento financiero.",
  },
  forty: {
    type: "E-COMMERCE · AUTOMATIZACIÓN",
    description:
      "Un recorrido adaptable que explica el ritual, prepara pedidos asistidos por WhatsApp y automatiza la captura de experiencias y la entrega del e-book.",
    tags: ["E-COMMERCE", "UX/UI", "MAKE"],
    headline: "Un camino más simple del interés a la acción.",
    industry: "Bienestar + venta directa al consumidor",
    role: "Estrategia web · UX/UI · Experiencia adaptable",
    outcome:
      "Un recorrido digital funcional que ayuda a entender 40+, preparar un pedido en WhatsApp y recibir contenido útil mediante un flujo automatizado y con consentimiento.",
  },
  naval: {
    type: "FULL STACK · ERP + B2B",
    description:
      "Un catálogo B2B y una demostración de ERP diseñados para reunir demanda, producción, compras, inventario, calidad e informes dentro de un mismo modelo operativo.",
    tags: ["ERP", "B2B", "OPERACIONES"],
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
    heroLines: ["Building intelligent business systems", "where operations, data and AI", ""],
    heroAccent: "work together.",
    heroDescription:
      "From full-stack applications, databases and LLM-powered systems to workflow automation, API integrations and intuitive digital experiences, I turn disconnected tools into intelligent business ecosystems.",
    viewCases: "Explore my projects",
    heroFooter: "Systems Design · AI Integration · Automation · API Integration · UX/UI",
    howIWork: "How I Work",
    process: "DISCOVER → DESIGN → BUILD → INTEGRATE",
    processAria: "Discover, design, build and integrate",
    projects: "PROJECTS",
    projectsTitle: <>Where business<br />meets intelligence</>,
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
    resultsTitle: <>I build solutions<br /><em>end to end.</em></>,
    resultsCopy: "As an AI Solutions Engineer, I connect product, code, data, automation and AI to turn business needs into complete, measurable systems ready to scale.",
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
    heroLines: ["Construyo sistemas empresariales inteligentes", "donde operaciones, datos e IA", ""],
    heroAccent: "funcionan juntos.",
    heroDescription:
      "Desde aplicaciones full stack, bases de datos y sistemas impulsados por LLM hasta automatización de flujos, integraciones API y experiencias digitales intuitivas, convierto herramientas desconectadas en ecosistemas empresariales inteligentes.",
    viewCases: "Explorar mis proyectos",
    heroFooter: "Diseño de sistemas · Integración de IA · Automatización · Integración API · UX/UI",
    howIWork: "Cómo trabajo",
    process: "DESCUBRIR → DISEÑAR → CONSTRUIR → INTEGRAR",
    processAria: "Descubrir, diseñar, construir e integrar",
    projects: "PROYECTOS",
    projectsTitle: <>Donde el negocio<br />se encuentra con la inteligencia</>,
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
    resultsTitle: <>Construyo soluciones<br /><em>de principio a fin.</em></>,
    resultsCopy: "Como AI Solutions Engineer, conecto producto, código, datos, automatización e IA para convertir necesidades del negocio en sistemas completos, medibles y listos para crecer.",
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
  { name: "OpenAI", icon: BsOpenai, color: "#10A37F", slug: "openai" },
  { name: "React", icon: SiReact, color: "#149ECA", slug: "react" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", slug: "typescript" },
  { name: "Next.js", icon: SiNextdotjs, color: "#111111", slug: "next" },
  { name: "Vercel", icon: SiVercel, color: "#111111", slug: "vercel" },
  { name: "PostgreSQL / SQL", icon: SiPostgresql, color: "#336791", slug: "postgresql" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", slug: "supabase" },
  { name: "Figma", icon: FigmaBrandMark, color: "#F24E1E", slug: "figma" },
  { name: "n8n", icon: SiN8N, color: "#EA4B71", slug: "n8n" },
  { name: "Make", icon: SiMake, color: "#6D00CC", slug: "make" },
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

function SoftButton({ children, href, primary = false, external = false, onClick }) {
  return (
    <a
      className={`soft-button${primary ? " primary" : ""}`}
      href={href}
      onClick={onClick}
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

function AnimatedEyebrow({ text, className = "eyebrow", dot = false, threshold = 0.55, rootMargin = "0px 0px -7% 0px", id }) {
  return (
    <p className={className} id={id} aria-label={text}>
      {dot ? <span className="availability-dot loading-dot" /> : null}
      <TypewriterText text={text} threshold={threshold} rootMargin={rootMargin} />
    </p>
  );
}

function CenizaEyebrow({ text, className = "case-label", dot = false, threshold = 0.55 }) {
  return <AnimatedEyebrow text={text} className={`${className} ceniza-section-eyebrow`} dot={dot} threshold={threshold} />;
}

const projectVisualAssets = {
  naval: "/project-naval-n-v3.webp",
  forty: "/project-40-4-v3.webp",
  ceniza: "/project-ceniza-c-v3.webp",
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
    demoLabel: "Live Demo",
    title: <>The operation,<br />visible in <em>one place.</em></>,
    introTitle: "A digital product built around Ceniza's real operation.",
    intro:
      "The project involved designing and building a custom CRM for Ceniza Producciones, a creative studio that also rents production equipment. It turns requests from email, WhatsApp and the website into organized work, helping the team manage clients, quotes, productions, rentals and resources without losing context.",
    story: [
      {
        label: "PROBLEMS",
        title: "Scattered information. Delayed decisions.",
        text: "Requests, dates, equipment and payments were separated, without clear ownership or priorities.",
      },
      {
        label: "SYSTEM",
        title: "One connected operating model.",
        text: "I unified clients, agenda, quotes, operations, inventory and finance so the dashboard and AI share the same context.",
      },
      {
        label: "VALUE",
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
      { kind: "login", src: "/case-ceniza-crm-mobile-login.webp", label: "Login", benefit: "Secure access to the same operation from any device." },
      { kind: "agenda", src: "/case-ceniza-crm-mobile-agenda.webp", label: "Agenda", benefit: "Tasks, deliveries, collections and owners accessible from anywhere." },
      { kind: "inventory", src: "/case-ceniza-crm-mobile-inventory-detail.webp", label: "Inventory", benefit: "Product stock, availability and linked operations available in the field." },
      { kind: "assistant", src: "/case-ceniza-crm-mobile-assistant.webp", label: "Asistente Ceniza", benefit: "Prioritizes alerts, summarizes the operation and prepares actions with the same desktop context." },
    ],
    assistantLabel: "ASISTENTE CENIZA · AI INSIDE THE CRM",
    assistantTitle: "CRM context becomes clearer, more timely decisions.",
    assistantCopy:
      "Asistente Ceniza connects clients, agenda, quotes, inventory and finance to detect risks, explain what matters and prepare a next step the team can review before acting.",
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
    webLabel: "WEBSITE DESIGNED + BUILT · CONNECTED TO THE CRM",
    webTitle: "From discovering the catalog to starting a rental or production.",
    webCopy:
      "I also designed and built Ceniza’s public website so clients can understand the offer before contacting the team. They can browse equipment and bundles, open detailed product pages, see completed projects and choose between renting equipment or producing a project. A WhatsApp conversation or form submission reaches the CRM with the source, need and selected equipment already attached.",
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
    desktopImage: "/case-ceniza-desktop.webp",
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
    desktopImage: "/case-40plus-desktop.webp",
    mobileImages: [
      { src: "/case-40plus-mobile-1.webp", label: "Home" },
      { src: "/case-40plus-mobile-2.webp", label: "Product" },
      { src: "/case-40plus-mobile-3.webp", label: "Daily ritual" },
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
    desktopImage: "/case-naval-desktop.webp",
    mobileImages: [
      { src: "/case-naval-app-login-real.webp", label: "Secure login" },
      { src: "/case-naval-app-dashboard-juan.webp", label: "Dashboard" },
      { src: "/case-naval-app-assistant.webp", label: "Naval Assistant" },
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
    demoLabel: "Live Demo",
    title: <>La operación,<br />visible en <em>un solo lugar.</em></>,
    introTitle: "Un producto digital construido alrededor de la operación real de Ceniza.",
    intro:
      "El proyecto consistió en diseñar y construir un CRM a la medida para Ceniza Producciones, un estudio creativo que también alquila equipos de producción. Convierte las solicitudes que llegan por correo, WhatsApp y la web en trabajo organizado, para que el equipo gestione clientes, cotizaciones, producciones, alquileres y recursos sin perder contexto.",
    story: [
      {
        label: "PROBLEMAS",
        title: "Información dispersa. Decisiones tardías.",
        text: "Solicitudes, fechas, equipos y pagos estaban separados, sin responsables ni prioridades claras.",
      },
      {
        label: "SISTEMA",
        title: "Un modelo operativo conectado.",
        text: "Unifiqué clientes, agenda, cotizaciones, operación, inventario y finanzas para que el dashboard y la IA compartan contexto.",
      },
      {
        label: "EL VALOR",
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
      { kind: "login", src: "/case-ceniza-crm-mobile-login.webp", label: "Login", benefit: "Acceso seguro a la misma operación desde cualquier dispositivo." },
      { kind: "agenda", src: "/case-ceniza-crm-mobile-agenda.webp", label: "Agenda", benefit: "Tareas, entregas, cobros y responsables accesibles desde cualquier lugar." },
      { kind: "inventory", src: "/case-ceniza-crm-mobile-inventory-detail.webp", label: "Ficha de inventario", benefit: "Stock, disponibilidad y operaciones vinculadas del producto, también en campo." },
      { kind: "assistant", src: "/case-ceniza-crm-mobile-assistant.webp", label: "Asistente Ceniza", benefit: "Prioriza alertas, resume la operación y prepara acciones con el mismo contexto del escritorio." },
    ],
    assistantLabel: "ASISTENTE CENIZA · IA DENTRO DEL CRM",
    assistantTitle: "El contexto del CRM se convierte en decisiones más claras.",
    assistantCopy:
      "El Asistente Ceniza conecta clientes, agenda, cotizaciones, inventario y finanzas para detectar riesgos, explicar qué importa y preparar un siguiente paso que el equipo revisa antes de actuar.",
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
    webLabel: "SITIO WEB DISEÑADO + DESARROLLADO · CONECTADO AL CRM",
    webTitle: "De descubrir el catálogo a iniciar una renta o producción.",
    webCopy:
      "También diseñé y desarrollé la web pública de Ceniza para que cada cliente entienda la oferta antes de hablar con el equipo. Puede recorrer equipos y combos, abrir fichas detalladas, ver proyectos realizados y decidir entre rentar equipos o producir un proyecto. La conversación por WhatsApp o el envío del formulario llega al CRM con el origen, la necesidad y los equipos elegidos ya conectados.",
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
      { src: "/case-40plus-mobile-1.webp", label: "Inicio" },
      { src: "/case-40plus-mobile-2.webp", label: "Producto" },
      { src: "/case-40plus-mobile-3.webp", label: "Ritual diario" },
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
      { src: "/case-naval-app-login-real.webp", label: "Acceso seguro" },
      { src: "/case-naval-app-dashboard-juan.webp", label: "Dashboard" },
      { src: "/case-naval-app-assistant.webp", label: "Asistente Naval" },
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

const expandedCaseDetails = {
  en: {
    forty: {
      systemLabel: "DIGITAL PRODUCT · E-COMMERCE + UX/UI",
      systemTitle: "A product experience designed around how people understand, choose and act.",
      systemCopy: "40+ combines product strategy, information architecture, interface design and responsive development in one coherent journey. The experience explains the value of the product, reduces uncertainty and turns intent into a practical next step.",
      galleryLabel: "PRODUCT DESIGN SYSTEM",
      galleryCount: "06 VIEWS · ONE EXPERIENCE",
      screens: [
        { category: "Home", title: "The product promise", benefit: "A clear first impression", text: "The real home page presents the product, its daily value and the primary action in one focused composition.", variant: "website", image: "/case-40plus-real-home-v2.webp" },
        { category: "Daily ritual", title: "Ways to enjoy it", benefit: "A habit that feels possible", text: "Coffee, smoothies and infusions turn the product into practical, visual everyday choices.", variant: "ritual", image: "/case-40plus-real-ritual-v2.webp" },
        { category: "Benefits", title: "Why 40+", benefit: "Information that builds trust", text: "Composition, benefits and the package remain visible before the customer moves toward purchase.", variant: "benefits", image: "/case-40plus-real-benefits-v2.webp" },
        { category: "E-commerce", title: "Product and purchase", benefit: "A supported decision", text: "Product images, attributes, usage, price and quantity meet in the real purchasing interface.", variant: "product", image: "/case-40plus-real-product-v2.webp" },
        { category: "Content", title: "Ritual 40+ e-book", benefit: "The experience continues", text: "A useful digital gift connects the customer story with content that extends the relationship.", variant: "ebook", image: "/case-40plus-real-ebook-v2.webp" },
        { category: "Product detail", title: "Transparent information", benefit: "Confidence before buying", text: "Nutrition, ingredients, use and care instructions are organized in a complete, legible product section.", variant: "information", image: "/case-40plus-real-experience-v2.webp" },
      ],
      metrics: [
        { value: "UX", label: "Decision journey", note: "Content and interactions are organized around the questions that precede a purchase." },
        { value: "UI", label: "Visual product system", note: "Reusable components preserve hierarchy and brand confidence across breakpoints." },
        { value: "D2C", label: "Human-assisted commerce", note: "The digital experience supports the real WhatsApp-based sales model." },
        { value: "MAKE", label: "Connected follow-up", note: "Forms, delivery and internal records continue through an automated workflow." },
      ],
      mobileLabel: "RESPONSIVE PRODUCT EXPERIENCE",
      mobileTitle: "The complete journey, designed for the phone first.",
      mobileCopy: "The mobile version keeps the product, proof, content and calls to action legible and comfortable. It is not a reduced desktop page; it is the same decision journey adapted to a smaller screen.",
      mobileImages: [
        { src: "/case-40plus-mobile-1.webp", label: "Home", benefit: "Brand promise and primary action without visual noise." },
        { src: "/case-40plus-mobile-2.webp", label: "Product", benefit: "Practical information arranged for quick comparison." },
        { src: "/case-40plus-mobile-3.webp", label: "Daily ritual", benefit: "Educational content that makes the product easier to adopt." },
      ],
      benefitsLabel: "PRODUCT VALUE",
      benefitsTitle: "Design is doing the commercial work before the conversation begins.",
      benefits: [
        { title: "Clearer positioning", text: "The customer understands what the product is, who it is for and why it belongs in a daily routine." },
        { title: "Lower friction", text: "The path from discovery to WhatsApp keeps the selected product and intent visible." },
        { title: "Responsive confidence", text: "The brand, hierarchy and calls to action retain their strength on mobile." },
        { title: "Automated continuity", text: "Experience capture, content delivery and internal follow-up stop being isolated manual tasks." },
      ],
      automationLabel: "MAKE · FORM + AUTOMATED DELIVERY",
      automationTitle: "One form triggers two useful emails and keeps the contact ready for follow-up.",
      automationCopy: "Make receives the experience form, validates the contact information and activates two coordinated outputs: the customer receives the Ritual 40+ e-book, while the team receives the customer details and story for a personal follow-up.",
      automationSteps: [
        { icon: LuClipboardList, tone: "form", title: "Form received", meta: "Name · email · experience" },
        { icon: SiMake, tone: "make", title: "Make organizes", meta: "Validate · route · activate" },
        { icon: SiGmail, tone: "customer", title: "Customer email", meta: "Thank you + Ritual 40+ e-book" },
        { icon: LuUserCheck, tone: "owner", title: "Internal email", meta: "Customer details + next step" },
      ],
      webLabel: "WEB PRODUCT · DESIGNED + BUILT",
      webTitle: "A product website where brand, education and conversion feel like one experience.",
      webCopy: "The desktop experience gives the visual identity room to breathe while maintaining a direct commercial path. Product storytelling, practical information and action are part of the same system rather than separate landing-page blocks.",
      capabilities: ["Product design", "UX/UI", "Responsive web", "Automation"],
      webUrl: "https://cuarentamas.com/",
      webCta: "Visit website",
      outcomeTitle: "40+ turns interest into action.",
      outcomeCopy: "A web product that explains the value, supports the purchase and automates follow-up without losing the human relationship.",
      outcomeCta: "Let's talk about your product",
    },
    naval: {
      systemLabel: "ERP · CONNECTED BUSINESS OPERATION",
      systemTitle: "Commercial demand and internal execution inside the same operating model.",
      systemCopy: "Naval connects the public B2B experience with an ERP structure for sales, production, purchasing, finance and reporting. Each area works with the same product, order and customer context, while the assistant helps turn operational signals into a reviewable next step.",
      galleryLabel: "REAL ERP INTERFACES · NAVAL REPOSITORY",
      galleryCount: "15 VIEWS · NAVBAR ORDER",
      screens: [
        { category: "Commercial · 01", title: "Sales pipeline", benefit: "Demand visibility", text: "Opportunities, customers, owners and next actions organized by stage and expected value.", variant: "pipeline", image: "/case-naval-erp-commercial-opportunities.webp" },
        { category: "Commercial · 02", title: "Commercial quotations", benefit: "Commercial continuity", text: "Proposals, validity dates, customers, owners, amounts and status remain organized inside the ERP.", variant: "table", image: "/case-naval-erp-commercial-quotes.webp" },
        { category: "Production · 01", title: "Tanks and capacity", benefit: "Visual production control", text: "The plan, active tanks, line capacity and cost per litre can be read together without leaving production.", variant: "timeline", image: "/case-naval-erp-production-overview.webp" },
        { category: "Production · 02", title: "Production orders", benefit: "Controlled execution", text: "Materials, progress, inspections and deviations remain connected to each production order.", variant: "quality", image: "/case-naval-erp-production-orders.webp" },
        { category: "Purchasing · 01", title: "Purchase order detail", benefit: "Clear, traceable document", text: "Supplier, delivery, approval status, inputs and totals are organized in one complete ERP workspace.", variant: "requests", image: "/case-naval-erp-purchases-order-redesign-v2.webp" },
        { category: "Purchasing · 02", title: "Supplier management", benefit: "Traceable purchasing", text: "Contacts, categories, payment terms, delivery status and recent purchases remain visible by supplier.", variant: "supplier", image: "/case-naval-erp-purchases-suppliers.webp" },
        { category: "Transport · 01", title: "Routes and deliveries", benefit: "Transport visibility", text: "Active routes, delivery status and evidence keep the final part of each order visible.", variant: "transport", image: "/case-naval-erp-transport-v1.webp" },
        { category: "Transport · 02", title: "Dispatch list", benefit: "Simple follow-up", text: "Scheduled, in-transit and completed dispatches are managed in a focused operational list.", variant: "transport-table", image: "/case-naval-erp-transport-v2.webp" },
        { category: "Finance · 01", title: "Receivables", benefit: "Cash control", text: "Due dates, collections and commitments connect back to the order that generated them.", variant: "finance", image: "/case-naval-erp-finance-receivables.webp" },
        { category: "Finance · 02", title: "Cost and profitability", benefit: "Margin visibility", text: "Materials, production cost, revenue and expected margin can be compared before closing the period.", variant: "bars", image: "/case-naval-erp-finance-costs.webp" },
        { category: "Reports · 01", title: "Integrated analysis", benefit: "One business view", text: "Commercial, production, purchasing and financial indicators share the same reporting period.", variant: "dashboard", image: "/case-naval-erp-reports-integral.webp" },
        { category: "Reports · 02", title: "Alerts and controls", benefit: "Measurable operation", text: "Teams compare plan versus result and trace each deviation to its source record.", variant: "report", image: "/case-naval-erp-reports-alerts.webp" },
        { category: "Settings · 01", title: "System settings", benefit: "Governed access", text: "Users, roles, permissions, integrations and audit rules are managed from one place.", variant: "settings", image: "/case-naval-erp-settings-v1.webp" },
        { category: "AI · 01", title: "Naval assistant", benefit: "Contextual decisions", text: "The demonstrative assistant summarizes risks, explains the evidence and prepares an action for human confirmation.", variant: "assistant", image: "/case-naval-erp-assistant-fullscreen.webp" },
        { category: "Web · 01", title: "B2B website", benefit: "Connected demand", text: "Product discovery by line or sector becomes a qualified request ready for commercial follow-up.", variant: "website", image: "/case-naval-desktop.webp" },
      ],
      metrics: [
        { value: "7", label: "Connected specialties", note: "Commercial, production, transport, purchasing, finance, reports and AI share one operating model." },
        { value: "15", label: "Focused system views", note: "Two views per operating area, followed by reports, settings, the assistant and the B2B website." },
        { value: "ERP", label: "Single operational core", note: "Products, customers, orders, materials, costs and results retain their relationships." },
        { value: "AI", label: "Assisted decisions", note: "The prototype demonstrates contextual recommendations, evidence and human confirmation before any action." },
      ],
      mobileLabel: "NAVAL ERP · MOBILE APP VISION",
      mobileTitle: "Naval ERP, ready to operate from anywhere.",
      mobileCopy: "The mobile concept adapts the ERP to short, high-value actions: secure access, an operational summary and contextual assistance. It is designed as an app experience—not a compressed desktop interface.",
      mobileImages: [
        { src: "/case-naval-app-login-real.webp", label: "Secure login", benefit: "Real credential access to Naval's business ecosystem." },
        { src: "/case-naval-app-dashboard-juan.webp", label: "Operational dashboard", benefit: "KPIs, priorities and production progress adapted to quick review." },
        { src: "/case-naval-app-assistant.webp", label: "Naval Assistant", benefit: "Evidence, alerts and a reviewable next action in one conversation." },
      ],
      benefitsLabel: "OPERATIONAL VALUE",
      benefitsTitle: "The ERP is useful because every area continues the same story.",
      benefits: [
        { title: "Commercial continuity", text: "A request can become a quote and order without losing the customer, product or negotiated conditions." },
        { title: "Production control", text: "Plans, materials, progress and quality checks stay tied to real demand." },
        { title: "Financial traceability", text: "Purchases, costs, collections and margins point back to the operation that generated them." },
        { title: "Actionable reporting", text: "Reports explain the state of the business and reveal the record behind every deviation." },
      ],
      automationLabel: "CONNECTED FLOW · DEMAND TO DECISION",
      automationTitle: "Information advances once and supports every specialty.",
      automationCopy: "The model connects customer demand with planning, supply, execution and financial control. The assistant works on top of that shared context and always leaves the final action visible to the team.",
      automationSteps: [
        { icon: "01", title: "Demand", meta: "Web · sales" },
        { icon: "02", title: "Commercial", meta: "Quote · order" },
        { icon: "03", title: "Plan", meta: "Production · materials" },
        { icon: "04", title: "Supply", meta: "Purchases · receipts" },
        { icon: "05", title: "Control", meta: "Finance · reports" },
        { icon: "AI", title: "Decide", meta: "Evidence · action" },
      ],
      assistantLabel: "NAVAL ASSISTANT · AI INSIDE THE ERP",
      assistantTitle: "Ask about the operation and receive a plan grounded in business data.",
      assistantCopy: "The current prototype demonstrates how sales, production, purchasing and finance can be read together to explain a constraint and prepare a controlled next action. The interface is ready for a verified model and authorized data connection; it does not present the demo as a live AI integration.",
      assistantQuestions: ["Which orders are at risk this week?", "What material is blocking production?", "Which collection protects cash flow first?"],
      assistantImage: "/case-naval-erp-assistant-fullscreen.webp",
      webLabel: "B2B WEB + CHATBOT + ERP",
      webTitle: "The chatbot turns every need into a traceable order.",
      webCopy: "Inside productosnaval.com, the chatbot helps customers find the right product, review technical sheets and usage guidance, manage complaints, receive recommendations and create an order based on their specific need. The full context—product, sector, request and order—enters the ERP to trigger automated commercial and operational follow-up.",
      capabilities: ["Catalog + SKU lookup", "Technical sheets + SDS", "Needs-based recommendation", "Orders + ERP webhooks"],
      webUrl: "https://www.productosnaval.com/",
      webCta: "Visit productosnaval.com",
      outcomeTitle: "Connect your operation and move the business forward.",
      outcomeCopy: "Bring sales, production, purchasing, inventory and finance into one clear, traceable system built to grow.",
      outcomeCta: "Let's talk about your business",
    },
  },
  es: {
    forty: {
      systemLabel: "PRODUCTO DIGITAL · E-COMMERCE + UX/UI",
      systemTitle: "Una experiencia de producto diseñada alrededor de cómo las personas entienden, eligen y actúan.",
      systemCopy: "40+ combina estrategia de producto, arquitectura de información, diseño de interfaz y desarrollo responsive dentro de un mismo recorrido. La experiencia explica el valor del producto, reduce dudas y convierte la intención en un siguiente paso práctico.",
      galleryLabel: "SISTEMA DE DISEÑO DEL PRODUCTO",
      galleryCount: "06 VISTAS · UNA SOLA EXPERIENCIA",
      screens: [
        { category: "Inicio", title: "La promesa del producto", benefit: "Primera impresión clara", text: "La portada real presenta el producto, su valor cotidiano y la acción principal dentro de una composición enfocada.", variant: "website", image: "/case-40plus-real-home-v2.webp" },
        { category: "Ritual diario", title: "Formas de disfrutarlo", benefit: "Un hábito posible", text: "Café, smoothie e infusión convierten el producto en alternativas cotidianas, prácticas y visuales.", variant: "ritual", image: "/case-40plus-real-ritual-v2.webp" },
        { category: "Beneficios", title: "Por qué elegir 40+", benefit: "Información que da confianza", text: "Composición, beneficios y empaque se mantienen visibles antes de avanzar hacia la compra.", variant: "benefits", image: "/case-40plus-real-benefits-v2.webp" },
        { category: "E-commerce", title: "Producto y compra", benefit: "Decisión acompañada", text: "Imágenes, atributos, forma de uso, precio y cantidad conviven en la interfaz real de compra.", variant: "product", image: "/case-40plus-real-product-v2.webp" },
        { category: "Contenido", title: "E-book Ritual 40+", benefit: "La experiencia continúa", text: "Un regalo digital útil conecta la historia del cliente con contenido que extiende la relación.", variant: "ebook", image: "/case-40plus-real-ebook-v2.webp" },
        { category: "Detalle del producto", title: "Información transparente", benefit: "Confianza antes de comprar", text: "Nutrición, ingredientes, uso y cuidados se organizan en una sección completa y legible del producto.", variant: "information", image: "/case-40plus-real-experience-v2.webp" },
      ],
      metrics: [
        { value: "UX", label: "Recorrido de decisión", note: "El contenido y las interacciones responden las preguntas que anteceden una compra." },
        { value: "UI", label: "Sistema visual de producto", note: "Los componentes reutilizables mantienen jerarquía y confianza entre dispositivos." },
        { value: "D2C", label: "Comercio asistido", note: "La experiencia digital respeta el modelo real de venta apoyado por WhatsApp." },
        { value: "MAKE", label: "Seguimiento conectado", note: "Formulario, entrega y registro interno continúan mediante un flujo automatizado." },
      ],
      mobileLabel: "EXPERIENCIA DE PRODUCTO RESPONSIVE",
      mobileTitle: "El recorrido completo, diseñado primero para el celular.",
      mobileCopy: "La versión móvil mantiene legibles y cómodos el producto, la prueba, el contenido y los llamados a la acción. No es una página de escritorio reducida: es el mismo recorrido de decisión adaptado a una pantalla menor.",
      mobileImages: [
        { src: "/case-40plus-mobile-1.webp", label: "Inicio", benefit: "Promesa de marca y acción principal sin ruido visual." },
        { src: "/case-40plus-mobile-2.webp", label: "Producto", benefit: "Información práctica ordenada para comparar con rapidez." },
        { src: "/case-40plus-mobile-3.webp", label: "Ritual diario", benefit: "Contenido educativo que facilita adoptar el producto." },
      ],
      benefitsLabel: "VALOR DEL PRODUCTO",
      benefitsTitle: "El diseño hace el trabajo comercial antes de iniciar la conversación.",
      benefits: [
        { title: "Posicionamiento claro", text: "La persona entiende qué es el producto, para quién es y por qué puede integrarlo a su rutina." },
        { title: "Menos fricción", text: "El recorrido hacia WhatsApp conserva el producto elegido y la intención de compra." },
        { title: "Confianza responsive", text: "La marca, la jerarquía y los llamados a la acción mantienen su fuerza en celular." },
        { title: "Continuidad automatizada", text: "La captura de experiencias, la entrega de contenido y el seguimiento dejan de ser tareas manuales aisladas." },
      ],
      automationLabel: "MAKE · FORMULARIO + ENTREGA AUTOMÁTICA",
      automationTitle: "Un formulario activa dos correos útiles y deja cada contacto listo para continuar.",
      automationCopy: "Make recibe el formulario de experiencia, valida los datos y activa dos salidas coordinadas: la persona recibe el e-book Ritual 40+ y el equipo recibe su información e historia para hacer un seguimiento personal.",
      automationSteps: [
        { icon: LuClipboardList, tone: "form", title: "Formulario recibido", meta: "Nombre · correo · experiencia" },
        { icon: SiMake, tone: "make", title: "Make organiza", meta: "Valida · enruta · activa" },
        { icon: SiGmail, tone: "customer", title: "Correo al cliente", meta: "Gracias + e-book Ritual 40+" },
        { icon: LuUserCheck, tone: "owner", title: "Correo interno", meta: "Datos del cliente + siguiente paso" },
      ],
      webLabel: "PRODUCTO WEB · DISEÑADO + DESARROLLADO",
      webTitle: "Una web donde marca, educación y conversión se sienten como una sola experiencia.",
      webCopy: "La experiencia de escritorio le da espacio a la identidad visual sin perder un camino comercial directo. La historia del producto, la información práctica y la acción forman parte del mismo sistema, no de bloques aislados de una landing.",
      capabilities: ["Diseño de producto", "UX/UI", "Web responsive", "Automatización"],
      webUrl: "https://cuarentamas.com/",
      webCta: "Ver página web",
      outcomeTitle: "40+ convierte el interés en acción.",
      outcomeCopy: "Un producto web que explica el valor, acompaña la compra y automatiza el seguimiento sin perder la relación humana.",
      outcomeCta: "Hablemos de tu producto",
    },
    naval: {
      systemLabel: "ERP · OPERACIÓN EMPRESARIAL CONECTADA",
      systemTitle: "La demanda comercial y la ejecución interna dentro del mismo modelo operativo.",
      systemCopy: "Naval conecta la experiencia B2B pública con una estructura ERP para comercial, producción, compras, finanzas y reportes. Cada área trabaja con el mismo contexto de producto, pedido y cliente, mientras el asistente convierte señales operativas en una siguiente acción revisable.",
      galleryLabel: "INTERFACES REALES · REPOSITORIO NAVAL",
      galleryCount: "15 VISTAS · ORDEN DEL NAVBAR",
      screens: [
        { category: "Comercial · 01", title: "Pipeline de ventas", benefit: "Visibilidad de la demanda", text: "Oportunidades, clientes, responsables y siguientes acciones organizados por etapa y valor esperado.", variant: "pipeline", image: "/case-naval-erp-commercial-opportunities.webp" },
        { category: "Comercial · 02", title: "Cotizaciones comerciales", benefit: "Continuidad comercial", text: "Propuestas, vigencias, clientes, responsables, valores y estados permanecen organizados dentro del ERP.", variant: "table", image: "/case-naval-erp-commercial-quotes.webp" },
        { category: "Producción · 01", title: "Tanques y capacidad", benefit: "Control visual de producción", text: "El plan, los tanques activos, la capacidad de las líneas y el costo por litro se leen juntos sin salir de producción.", variant: "timeline", image: "/case-naval-erp-production-overview.webp" },
        { category: "Producción · 02", title: "Órdenes de producción", benefit: "Ejecución controlada", text: "Materiales, avance, inspecciones y novedades permanecen conectados con cada orden de producción.", variant: "quality", image: "/case-naval-erp-production-orders.webp" },
        { category: "Compras · 01", title: "Orden de compra en detalle", benefit: "Documento claro y trazable", text: "Proveedor, entrega, aprobaciones, insumos y totales quedan organizados en una sola vista del ERP.", variant: "requests", image: "/case-naval-erp-purchases-order-redesign-v2.webp" },
        { category: "Compras · 02", title: "Gestión de proveedores", benefit: "Compra trazable", text: "Contactos, categorías, condiciones de pago, estado de entrega y compras recientes permanecen visibles por proveedor.", variant: "supplier", image: "/case-naval-erp-purchases-suppliers.webp" },
        { category: "Transporte · 01", title: "Rutas y entregas", benefit: "Visibilidad del transporte", text: "Rutas activas, estado de entrega y evidencias mantienen visible la última parte de cada pedido.", variant: "transport", image: "/case-naval-erp-transport-v1.webp" },
        { category: "Transporte · 02", title: "Listado de despachos", benefit: "Seguimiento simple", text: "Los despachos programados, en ruta y completados se gestionan desde una lista operativa enfocada.", variant: "transport-table", image: "/case-naval-erp-transport-v2.webp" },
        { category: "Finanzas · 01", title: "Cuentas por cobrar", benefit: "Control de caja", text: "Vencimientos, recaudos y compromisos regresan al pedido que originó cada movimiento.", variant: "finance", image: "/case-naval-erp-finance-receivables.webp" },
        { category: "Finanzas · 02", title: "Costos y rentabilidad", benefit: "Visibilidad del margen", text: "Materiales, costo productivo, ingresos y margen esperado pueden compararse antes del cierre.", variant: "bars", image: "/case-naval-erp-finance-costs.webp" },
        { category: "Reportes · 01", title: "Análisis integral", benefit: "Una vista del negocio", text: "Indicadores comerciales, productivos, de compras y financieros comparten el mismo período.", variant: "dashboard", image: "/case-naval-erp-reports-integral.webp" },
        { category: "Reportes · 02", title: "Alertas y controles", benefit: "Operación medible", text: "Los equipos comparan plan contra resultado y rastrean cada desviación hasta su registro de origen.", variant: "report", image: "/case-naval-erp-reports-alerts.webp" },
        { category: "Configuración · 01", title: "Configuración del sistema", benefit: "Acceso gobernado", text: "Usuarios, roles, permisos, integraciones y reglas de auditoría se administran desde un solo lugar.", variant: "settings", image: "/case-naval-erp-settings-v1.webp" },
        { category: "IA · 01", title: "Asistente Naval", benefit: "Decisiones con contexto", text: "El asistente demostrativo resume riesgos, explica la evidencia y prepara una acción para confirmación humana.", variant: "assistant", image: "/case-naval-erp-assistant-fullscreen.webp" },
        { category: "Web · 01", title: "Página B2B", benefit: "Demanda conectada", text: "El descubrimiento por línea o sector se convierte en una solicitud calificada para el equipo comercial.", variant: "website", image: "/case-naval-desktop.webp" },
      ],
      metrics: [
        { value: "7", label: "Especialidades conectadas", note: "Comercial, producción, transporte, compras, finanzas, reportes e IA comparten un modelo operativo." },
        { value: "15", label: "Vistas enfocadas", note: "Dos vistas por área operativa, seguidas de reportes, configuración, el asistente y la web B2B." },
        { value: "ERP", label: "Núcleo operativo único", note: "Productos, clientes, pedidos, materiales, costos y resultados conservan sus relaciones." },
        { value: "IA", label: "Decisiones asistidas", note: "El prototipo demuestra recomendaciones con contexto, evidencia y confirmación humana antes de cualquier acción." },
      ],
      mobileLabel: "ERP NAVAL · VISIÓN DE APP MÓVIL",
      mobileTitle: "El ERP de Naval, listo para operar desde cualquier lugar.",
      mobileCopy: "El concepto móvil adapta el ERP a acciones cortas y de alto valor: acceso seguro, resumen operativo y asistencia con contexto. Está diseñado como experiencia de app, no como una interfaz de escritorio comprimida.",
      mobileImages: [
        { src: "/case-naval-app-login-real.webp", label: "Acceso seguro", benefit: "Acceso real con credenciales al ecosistema empresarial de Naval." },
        { src: "/case-naval-app-dashboard-juan.webp", label: "Dashboard operativo", benefit: "Indicadores, prioridades y avance productivo adaptados para consulta rápida." },
        { src: "/case-naval-app-assistant.webp", label: "Asistente Naval", benefit: "Evidencia, alertas y una siguiente acción revisable en la conversación." },
      ],
      benefitsLabel: "VALOR OPERATIVO",
      benefitsTitle: "El ERP es útil porque cada área continúa la misma historia.",
      benefits: [
        { title: "Continuidad comercial", text: "Una solicitud avanza a cotización y pedido sin perder cliente, producto ni condiciones negociadas." },
        { title: "Control de producción", text: "Planes, materiales, avances y controles de calidad permanecen ligados a la demanda real." },
        { title: "Trazabilidad financiera", text: "Compras, costos, recaudos y márgenes regresan a la operación que los produjo." },
        { title: "Reportes accionables", text: "Los informes explican el estado del negocio y revelan el registro detrás de cada desviación." },
      ],
      automationLabel: "FLUJO CONECTADO · DE LA DEMANDA A LA DECISIÓN",
      automationTitle: "La información avanza una sola vez y sirve a cada especialidad.",
      automationCopy: "El modelo conecta la demanda del cliente con planeación, abastecimiento, ejecución y control financiero. El asistente trabaja sobre ese contexto compartido y siempre deja la acción final visible para el equipo.",
      automationSteps: [
        { icon: "01", title: "Demanda", meta: "Web · ventas" },
        { icon: "02", title: "Comercial", meta: "Cotización · pedido" },
        { icon: "03", title: "Planear", meta: "Producción · materiales" },
        { icon: "04", title: "Abastecer", meta: "Compras · recepción" },
        { icon: "05", title: "Controlar", meta: "Finanzas · reportes" },
        { icon: "IA", title: "Decidir", meta: "Evidencia · acción" },
      ],
      assistantLabel: "ASISTENTE NAVAL · IA DENTRO DEL ERP",
      assistantTitle: "Pregunta por la operación y recibe un plan sustentado en datos del negocio.",
      assistantCopy: "El prototipo actual demuestra cómo comercial, producción, compras y finanzas pueden leerse en conjunto para explicar una restricción y preparar la siguiente acción controlada. La interfaz está lista para conectar un modelo verificado y datos autorizados; la demo no se presenta como una integración de IA activa.",
      assistantQuestions: ["¿Qué pedidos están en riesgo esta semana?", "¿Qué material está bloqueando producción?", "¿Qué cobro protege primero el flujo de caja?"],
      assistantImage: "/case-naval-erp-assistant-fullscreen.webp",
      webLabel: "WEB B2B + CHATBOT + ERP",
      webTitle: "El chatbot convierte cada necesidad en un pedido trazable.",
      webCopy: "Dentro de productosnaval.com, el chatbot ayuda a encontrar el producto adecuado, consultar fichas técnicas y formas de uso, gestionar quejas, recibir recomendaciones y crear un pedido según la necesidad del cliente. Todo el contexto —producto, sector, solicitud y pedido— entra al ERP para activar un seguimiento comercial y operativo automatizado.",
      capabilities: ["Catálogo + consulta de SKU", "Fichas técnicas + SDS", "Recomendación por necesidad", "Pedidos + webhooks al ERP"],
      webUrl: "https://www.productosnaval.com/",
      webCta: "Visitar productosnaval.com",
      outcomeTitle: "Conecta tu operación y haz que el negocio avance.",
      outcomeCopy: "Reúne ventas, producción, compras, inventario y finanzas en un sistema claro, trazable y listo para crecer.",
      outcomeCta: "Hablemos de tu negocio",
    },
  },
};

function ProjectVisual({ visual }) {
  const folderContents = (
    <>
      <span className="folder-surface" aria-hidden="true">
        <img src="/project-folder-glass-cropped-v2.webp" alt="" />
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
    number: "1",
    label: "FULL STACK",
    title: "From business problem to working product.",
    description: "I design the architecture, experience, frontend, backend, APIs and data needed to deliver a maintainable solution ready to deploy.",
  },
  {
    number: "2",
    label: "APPS AND WEBS",
    title: "Clear, connected and responsive experiences.",
    description: "I build apps and websites that turn complex processes into simple journeys and integrate with CRM, ERP and external services.",
  },
  {
    number: "3",
    label: "AUTOMATION",
    title: "Less repetitive work. More momentum.",
    description: "I connect tools and automate workflows, validations, alerts and data handoffs to reduce delays, errors and manual work.",
  },
  {
    number: "4",
    label: "AI ACROSS THE SYSTEM",
    title: "AI with context, control and purpose.",
    description: "I integrate assistants, RAG and intelligent actions that use business data, recommend next steps and preserve permissions, human review and traceability.",
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
    number: "1",
    label: "FULL STACK",
    title: "Del problema al producto funcionando.",
    description: "Diseño arquitectura, experiencia, frontend, backend, APIs y datos para llevar una necesidad del negocio hasta una solución desplegable y mantenible.",
  },
  {
    number: "2",
    label: "APPS Y WEBS",
    title: "Experiencias claras, conectadas y responsive.",
    description: "Creo apps y sitios web que convierten procesos complejos en recorridos simples y se integran con CRM, ERP y servicios externos.",
  },
  {
    number: "3",
    label: "AUTOMATIZACIÓN",
    title: "Menos tareas repetitivas. Más operación.",
    description: "Conecto herramientas y automatizo flujos, validaciones, alertas y traspasos de información para reducir tiempos, errores y trabajo manual.",
  },
  {
    number: "4",
    label: "IA APLICADA EN TODO EL SISTEMA",
    title: "IA con contexto, control y propósito.",
    description: "Integro asistentes, RAG y acciones inteligentes que consultan datos, recomiendan el siguiente paso y mantienen permisos, revisión humana y trazabilidad.",
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
        <svg className="capabilities-connectors" viewBox="0 0 1200 570" preserveAspectRatio="none" aria-hidden="true">
          <g className="capabilities-connector-paths">
            <path pathLength="1" d="M600 0V82" />
            <path pathLength="1" d="M300 82H900" />
            <path pathLength="1" d="M300 82V108" />
            <path pathLength="1" d="M900 82V108" />
            <path pathLength="1" d="M600 82V354" />
            <path pathLength="1" d="M300 354H900" />
            <path pathLength="1" d="M300 354V380" />
            <path pathLength="1" d="M900 354V380" />
          </g>
          <g className="capabilities-connector-nodes">
            <circle cx="600" cy="82" r="4" />
            <circle cx="300" cy="108" r="3.5" />
            <circle cx="900" cy="108" r="3.5" />
            <circle cx="600" cy="354" r="4" />
            <circle cx="300" cy="380" r="3.5" />
            <circle cx="900" cy="380" r="3.5" />
          </g>
        </svg>

        {results.map((result, index) => (
          <article className="capability-item" data-number={result.number} style={{ "--capability-delay": `${1.3 + Math.floor(index / 2) * 0.5 + (index % 2) * 0.12}s` }} key={result.number}>
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
  const handoffRef = useRef(null);
  const text = copy[language];
  const faqs = language === "es" ? profileFaqsEs : profileFaqs;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setConnectionsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setConnectionsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

    if (handoffRef.current) observer.observe(handoffRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className={`profile-page${connectionsVisible ? " connections-visible" : ""}`} id="inicio">
      <section className="about-section about-page" aria-labelledby="profile-title">
        <article className="about-copy">
          <p className="eyebrow" aria-label={text.profile}><span className="availability-dot loading-dot" /><TypewriterText text={text.profile} /></p>
          <h1 id="profile-title">{text.profileTitle}</h1>
          <p className="profile-lead">{text.profileLead}</p>
          <SoftButton href={CONTACT_WHATSAPP_URL} primary external>{text.letsTalk} <Arrow diagonal /></SoftButton>
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
            <img className="profile-fur-base" src="/profile-fuzzy-orb-mint-v4.webp" alt="" />
            <img className="profile-fur-detail" src="/profile-fuzzy-orb-mint-v3.webp" alt="" />
          </span>
          <span className="profile-fur-orb profile-fur-orb-ivory" aria-hidden="true">
            <img className="profile-fur-base" src="/profile-fuzzy-orb-ivory-v4.webp" alt="" />
            <img className="profile-fur-detail" src="/profile-fuzzy-orb-ivory-v3.webp" alt="" />
          </span>
          <span className="profile-fur-orb profile-fur-orb-stone" aria-hidden="true">
            <img className="profile-fur-base" src="/profile-fuzzy-orb-stone-v4.webp" alt="" />
            <img className="profile-fur-detail" src="/profile-fuzzy-orb-stone-v3.webp" alt="" />
          </span>

          <figure className="profile-cutout">
            <img
              src="/diego-franco-cutout-final.webp"
              alt="Diego Franco"
              loading="eager"
              decoding="async"
            />
          </figure>

        </div>
      </section>

      <div className="profile-system-handoff" ref={handoffRef}>
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
          <a className="profile-connector-resource" href={CONTACT_CV_URL} download="Diego_Franco_CV.pdf">
            <span className="profile-connector-resource-node" aria-hidden="true" />
            <span className="profile-connector-resource-label">{text.downloadCv}</span>
            <Arrow diagonal />
          </a>
          <a className="profile-connector-resource" href={CONTACT_LINKEDIN} target="_blank" rel="noreferrer">
            <span className="profile-connector-resource-node" aria-hidden="true" />
            <span className="profile-connector-resource-label">LinkedIn</span>
            <Arrow diagonal />
          </a>
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
    { title: "Dashboard", benefit: "Control del negocio", text: "Reúne indicadores, clientes recientes, próximos hitos, oportunidades, entregas, inventario y rendimiento financiero para entender el negocio y decidir dónde actuar.", src: "/case-ceniza-laptop-dashboard.webp", alt: "Indicadores y paneles operativos del dashboard del CRM de Ceniza", scale: "1", position: "center top", fit: "cover" },
    { title: "Agenda", benefit: "Prioridades claras", text: "Centraliza calendario, tareas, cobros, entregas, responsables y alertas. Permite ordenar prioridades y dar a cada pendiente una fecha y un siguiente paso.", src: "/case-ceniza-laptop-agenda.webp", alt: "Calendario operativo de la agenda del CRM de Ceniza", scale: "1", position: "center bottom" },
    { title: "Clientes", benefit: "Contexto compartido", text: "Guarda datos de contacto, origen, necesidad, estado, conversaciones y próxima actividad, conservando el historial completo de cada relación.", src: "/case-ceniza-laptop-clients.webp", alt: "Tabla y filtros de clientes del CRM de Ceniza", scale: "1", position: "center bottom" },
    { title: "Cotizaciones", benefit: "Continuidad comercial", text: "Reúne cliente, alcance, conceptos, cantidades, precios, impuestos, condiciones de pago, responsables y fechas; al aprobarse, alimenta la operación sin duplicar datos.", src: "/case-ceniza-laptop-quotes.webp", alt: "Detalle de conceptos y condiciones de una cotización de Ceniza", scale: "1", position: "center bottom" },
    { title: "Inventario", benefit: "Confianza operativa", text: "Muestra existencias, equipos disponibles, reservados y en uso, características, accesorios y operaciones vinculadas antes de confirmar un alquiler o producción.", src: "/case-ceniza-laptop-inventory.webp", alt: "Ficha de disponibilidad y características de un equipo del inventario de Ceniza", scale: "1", position: "center bottom" },
    { title: "Reportes", benefit: "Lectura ejecutiva", text: "Resume resultados comerciales, operativos, financieros, de inventario y documentos en un mismo período para comparar, exportar y decidir.", src: "/case-ceniza-laptop-reports.webp", alt: "Resumen ejecutivo y tabla de reportes del CRM de Ceniza", scale: "1", position: "center top" },
    { title: "Finanzas", benefit: "Trazabilidad financiera", text: "Conecta ingresos, costos, cuentas por cobrar y pagar, movimientos, recaudo y rentabilidad con la cotización u operación que originó cada valor.", src: "/case-ceniza-laptop-finance.webp", alt: "Indicadores y movimientos de la página financiera del CRM de Ceniza", scale: "1", position: "center bottom" },
    { title: "Página web", benefit: "Entrada conectada", text: "Presenta los servicios y equipos de Ceniza y convierte el interés del visitante en una solicitud con contexto que continúa dentro del CRM.", src: "/case-ceniza-laptop-website.webp", alt: "Página web pública de Ceniza conectada con el CRM", scale: "1", position: "center top" },
    { title: "Asistente IA", benefit: "Decisiones en contexto", text: "Lee la página activa, prioriza alertas, resume la operación y prepara el siguiente paso sin separar la asistencia del trabajo diario.", src: "/case-ceniza-laptop-assistant-chat.webp", alt: "Vista completa del Asistente de IA de Ceniza", scale: "1", position: "center top", fit: "cover" },
  ] : [
    { title: "Dashboard", benefit: "Business control", text: "Brings together indicators, recent clients, upcoming milestones, opportunities, deliveries, inventory and financial performance to reveal where the business needs action.", src: "/case-ceniza-laptop-dashboard.webp", alt: "Operational indicators and panels in the Ceniza CRM dashboard", scale: "1", position: "center top", fit: "cover" },
    { title: "Agenda", benefit: "Clear priorities", text: "Centralizes the calendar, tasks, collections, deliveries, owners and alerts so every priority has a date and a clear next step.", src: "/case-ceniza-laptop-agenda.webp", alt: "Operating calendar in the Ceniza CRM agenda", scale: "1", position: "center bottom" },
    { title: "Clients", benefit: "Shared context", text: "Keeps contact details, source, need, status, conversations and next activity together, preserving the full history of every relationship.", src: "/case-ceniza-laptop-clients.webp", alt: "Client table and filters in the Ceniza CRM", scale: "1", position: "center bottom" },
    { title: "Quotes", benefit: "Commercial continuity", text: "Combines the client, scope, items, quantities, pricing, taxes, payment terms, owners and dates; approval then moves the same data into the operation.", src: "/case-ceniza-laptop-quotes.webp", alt: "Items and commercial terms in a Ceniza quote", scale: "1", position: "center bottom" },
    { title: "Inventory", benefit: "Operational confidence", text: "Shows stock, available, reserved and active equipment, specifications, accessories and related operations before a rental or production is confirmed.", src: "/case-ceniza-laptop-inventory.webp", alt: "Equipment availability and specifications in Ceniza inventory", scale: "1", position: "center bottom" },
    { title: "Reports", benefit: "Executive view", text: "Summarizes commercial, operational, financial, inventory and document results for the same period so the team can compare, export and decide.", src: "/case-ceniza-laptop-reports.webp", alt: "Executive summary and report table in the Ceniza CRM", scale: "1", position: "center top" },
    { title: "Finance", benefit: "Financial traceability", text: "Connects revenue, costs, receivables, payables, movements, collections and profitability to the quote or operation behind every amount.", src: "/case-ceniza-laptop-finance.webp", alt: "Indicators and movements on the Ceniza CRM finance page", scale: "1", position: "center bottom" },
    { title: "Website", benefit: "Connected entry point", text: "Presents Ceniza's services and equipment, then turns visitor interest into a contextual request that continues inside the CRM.", src: "/case-ceniza-laptop-website.webp", alt: "Public Ceniza website connected with the CRM", scale: "1", position: "center top" },
    { title: "AI Assistant", benefit: "Contextual decisions", text: "Reads the active page, prioritizes alerts, summarizes the operation and prepares the next step without separating assistance from daily work.", src: "/case-ceniza-laptop-assistant-chat.webp", alt: "Full-screen Ceniza AI Assistant view", scale: "1", position: "center top", fit: "cover" },
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
                  "--screen-fit": screen.fit || "contain",
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

function CenizaDecisionStrip({ language }) {
  return (
    <section className="ceniza-decision-strip" aria-labelledby="ceniza-decision-strip-title">
      <header>
        <CenizaEyebrow text={language === "es" ? "INTELIGENCIA FINANCIERA + COMERCIAL" : "FINANCIAL + COMMERCIAL INTELLIGENCE"} />
        <h3 id="ceniza-decision-strip-title">{language === "es" ? "Datos conectados para medir hoy y anticipar lo que viene." : "Connected data to measure today and anticipate what comes next."}</h3>
        <p>{language === "es" ? "Con RAG, el asistente consulta el CRM para gestionar leads, seguimiento, agenda, cotizaciones, rentas, pagos y reportes desde un mismo contexto." : "With RAG, the assistant consults the CRM to manage leads, follow-up, scheduling, quotes, rentals, payments and reports from one shared context."}</p>
      </header>

      <ul>
        <li>
          <span>ROI</span>
          <strong>{language === "es" ? "Retorno por canal" : "Return by channel"}</strong>
        </li>
        <li>
          <span>{language === "es" ? "MARGEN" : "MARGIN"}</span>
          <strong>{language === "es" ? "Rentabilidad por operación" : "Profitability by operation"}</strong>
        </li>
        <li>
          <span>CAC</span>
          <strong>{language === "es" ? "Costo de adquisición" : "Acquisition cost"}</strong>
        </li>
        <li>
          <span>{language === "es" ? "CONVERSIÓN" : "CONVERSION"}</span>
          <strong>{language === "es" ? "Conversión por etapa" : "Conversion by stage"}</strong>
        </li>
        <li>
          <span>{language === "es" ? "VELOCIDAD" : "VELOCITY"}</span>
          <strong>{language === "es" ? "Tiempo de respuesta" : "Response time"}</strong>
        </li>
        <li>
          <span>{language === "es" ? "CAJA" : "CASH FLOW"}</span>
          <strong>{language === "es" ? "Ingresos y compromisos" : "Revenue and commitments"}</strong>
        </li>
      </ul>

      <div className="ceniza-decision-charts" aria-label={language === "es" ? "Visualizaciones disponibles en los reportes" : "Visualizations available in reports"}>
        <figure className="ceniza-decision-report">
          <figcaption>
            <span>ROI + CAC</span>
            <strong>{language === "es" ? "Origen de las oportunidades" : "Opportunity sources"}</strong>
            <p>{language === "es" ? "Leads, inversión e ingresos por canal." : "Leads, investment and revenue by channel."}</p>
          </figcaption>
          <div className="ceniza-report-pie" role="img" aria-label={language === "es" ? "Gráfica de torta para comparar canales comerciales" : "Pie chart for comparing commercial channels"}>
            <span>ROI</span>
          </div>
          <ul className="ceniza-report-legend" aria-label={language === "es" ? "Canales del reporte" : "Report channels"}>
            <li>{language === "es" ? "Web" : "Website"}</li>
            <li>WhatsApp</li>
            <li>{language === "es" ? "Referidos" : "Referrals"}</li>
            <li>Ads</li>
          </ul>
        </figure>

        <figure className="ceniza-decision-report is-pipeline">
          <figcaption>
            <span>{language === "es" ? "CONVERSIÓN + VELOCIDAD" : "CONVERSION + VELOCITY"}</span>
            <strong>{language === "es" ? "Del lead al cierre" : "From lead to close"}</strong>
            <p>{language === "es" ? "Volumen y respuesta entre etapas." : "Volume and response across stages."}</p>
          </figcaption>
          <div className="ceniza-report-bars" role="img" aria-label={language === "es" ? "Gráfica de etapas desde lead hasta cierre" : "Chart of stages from lead to close"}>
            <span><i style={{ "--bar-height": "92%" }} /><small>Lead</small></span>
            <span><i style={{ "--bar-height": "72%" }} /><small>{language === "es" ? "Oportunidad" : "Opportunity"}</small></span>
            <span><i style={{ "--bar-height": "54%" }} /><small>{language === "es" ? "Cotización" : "Quote"}</small></span>
            <span><i style={{ "--bar-height": "38%" }} /><small>{language === "es" ? "Cierre" : "Close"}</small></span>
          </div>
        </figure>
      </div>

      <aside className="ceniza-decision-future" aria-label={language === "es" ? "Próxima evolución" : "Next evolution"}>
        <span>{language === "es" ? "PRÓXIMA EVOLUCIÓN" : "NEXT EVOLUTION"}</span>
        <div>
          <strong>{language === "es" ? "Más historial para incorporar predicciones confiables." : "More history to incorporate reliable predictions."}</strong>
          <p>{language === "es" ? "Cierre, demanda y riesgo financiero." : "Close probability, demand and financial risk."}</p>
        </div>
      </aside>
    </section>
  );
}

function CenizaConnectionFlow({ language, embedded = false }) {
  const content = language === "es" ? {
    label: "INTEGRACIÓN DE IA · UN SOLO CONTEXTO OPERATIVO",
    title: "La IA convierte el contexto en acción y mejores decisiones.",
    embeddedLabel: "CÓMO FUNCIONA",
    embeddedTitle: "Las áreas del CRM alimentan al Asistente Ceniza.",
    copy: "El Asistente Ceniza trabaja sobre el registro completo: entiende al cliente, prioriza la agenda, prepara cotizaciones y ejecuta acciones dentro de la operación. Al mismo tiempo consulta inventario y finanzas, actualiza el dashboard y cruza señales para detectar riesgos y recomendar una siguiente acción revisable.",
    nodes: [
      { position: "intake", icon: LuSparkles, title: "Asistente Ceniza", meta: "Conecta y prioriza" },
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
    embeddedTitle: "CRM areas feed Asistente Ceniza with context.",
    copy: "Asistente Ceniza works across the complete record: it understands the client, prioritizes the agenda, prepares quotes and executes actions inside the operation. At the same time, it consults inventory and finance, updates the dashboard and connects signals to detect risks and recommend a reviewable next action.",
    nodes: [
      { position: "intake", icon: LuSparkles, title: "Asistente Ceniza", meta: "Connects and prioritizes" },
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
        <AnimatedEyebrow text={embedded ? content.embeddedLabel : content.label} className="case-label" />
        <h2 id="ceniza-connection-title">{embedded ? content.embeddedTitle : content.title}</h2>
        {!embedded ? <p className="ceniza-connection-copy">{content.copy}</p> : null}
      </header>
      <figure className={`ceniza-connection-figure${embedded ? " is-radial" : ""}`}>
        <div className={`ceniza-connection-canvas${embedded ? " is-radial" : ""}`}>
          {embedded ? (
            <svg viewBox="0 0 1100 500" aria-hidden="true">
              <path d="M198 50H530" />
              <path d="M440 50H530" />
              <path d="M198 250H530" />
              <path d="M440 250H530" />
              <path d="M198 450H530" />
              <path d="M440 450H530" />
              <path d="M530 50V450" />
              <path d="M530 250H605" />
              <path d="M825 250H902" />
              <circle cx="530" cy="250" r="8" />
            </svg>
          ) : (
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
          )}
          <ol>
            {content.nodes.map((node) => {
              const Icon = node.icon;
              return (
                <li className={`ceniza-connection-node node-${node.position}`} key={node.position}>
                  <span className="ceniza-connection-icon" aria-hidden="true"><Icon /></span>
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
        <AnimatedEyebrow text={detail.crmMobileLabel} className="case-label" />
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

function CenizaAssistantConversation({ language }) {
  const isEs = language === "es";

  return (
    <div className="ceniza-conversation-phone" aria-label={isEs ? "Conversación de ejemplo con el Asistente Ceniza" : "Example conversation with Asistente Ceniza"}>
      <span className="ceniza-conversation-speaker" aria-hidden="true" />
      <div className="ceniza-conversation-screen">
        <header>
          <span aria-hidden="true"><LuSparkles /></span>
          <div>
            <strong>Asistente Ceniza</strong>
            <small>{isEs ? "CONECTADO AL CRM" : "CONNECTED TO THE CRM"}</small>
          </div>
          <i aria-hidden="true">•••</i>
        </header>
        <div className="ceniza-conversation-context">
          <small>{isEs ? "CONTEXTO ACTIVO" : "ACTIVE CONTEXT"}</small>
          <strong>{isEs ? "Dashboard · Operación de hoy" : "Dashboard · Today's operation"}</strong>
        </div>
        <div className="ceniza-conversation-thread">
          <p className="is-user">{isEs ? "¿Qué está pendiente hoy y cómo va la rentabilidad del negocio?" : "What is still pending today, and how profitable is the business?"}</p>
          <article className="is-assistant">
            <span aria-hidden="true"><LuSparkles /></span>
            <div className="ceniza-conversation-answer">
              <strong className="ceniza-conversation-answer-title">{isEs ? "Hoy hay 4 prioridades" : "There are 4 priorities today"}</strong>
              <ul className="ceniza-conversation-priorities">
                <li><b>{isEs ? "Entrega" : "Delivery"}</b><span>{isEs ? "Cerrar Lumen House" : "Close Lumen House"}</span></li>
                <li><b>{isEs ? "Inventario" : "Inventory"}</b><span>{isEs ? "Recibir la Sony FX6" : "Receive the Sony FX6"}</span></li>
                <li><b>{isEs ? "Cobro" : "Payment"}</b><span>{isEs ? "Confirmar el vencido" : "Confirm the overdue payment"}</span></li>
                <li><b>{isEs ? "Reserva" : "Booking"}</b><span>{isEs ? "Aprobar la de mañana" : "Approve tomorrow's booking"}</span></li>
              </ul>
              <div className="ceniza-conversation-metrics" aria-label={isEs ? "Indicadores de rentabilidad" : "Profitability indicators"}>
                <span><b>$1,14 M</b><small>{isEs ? "recaudado" : "collected"}</small></span>
                <span><b>$875 K</b><small>{isEs ? "costos" : "costs"}</small></span>
                <span><b>23 %</b><small>{isEs ? "margen" : "margin"}</small></span>
              </div>
              <small>{isEs ? "Datos: agenda + operaciones + inventario + finanzas" : "Data: agenda + operations + inventory + finance"}</small>
            </div>
          </article>
          <p className="is-user">{isEs ? "¿Qué debemos atender primero?" : "What should we handle first?"}</p>
          <article className="is-assistant is-action">
            <span aria-hidden="true"><LuSparkles /></span>
            <div>
              <strong className="ceniza-conversation-answer-title">{isEs ? "Atendería primero este cruce" : "I would resolve this conflict first"}</strong>
              <ol className="ceniza-conversation-recommendation">
                <li>{isEs ? "Cerrar la entrega de Lumen House." : "Close the Lumen House delivery."}</li>
                <li>{isEs ? "Confirmar la devolución de la Sony FX6." : "Confirm the Sony FX6 return."}</li>
              </ol>
              <p className="ceniza-conversation-result">{isEs ? "Así liberamos el equipo para mañana y evitamos aplazar el cobro." : "This releases the equipment for tomorrow and prevents the payment from slipping."}</p>
              <span className="ceniza-conversation-impact">{isEs ? "Impacto: protege la reserva, el flujo de caja y el margen" : "Impact: protects the booking, cash flow and margin"}</span>
              <span className="ceniza-conversation-action">{isEs ? "Ver plan de hoy" : "View today's plan"}<b>→</b></span>
            </div>
          </article>
        </div>
        <div className="ceniza-conversation-composer">
          <span>{isEs ? "Pregunta o pide una acción…" : "Ask or request an action…"}</span>
          <b aria-hidden="true">↑</b>
        </div>
      </div>
    </div>
  );
}

function CenizaAssistantPreview({ detail, language }) {
  const isEs = language === "es";

  return (
    <section className="ceniza-assistant-section" aria-labelledby="ceniza-assistant-title">
      <header className="ceniza-section-header">
        <CenizaEyebrow text={detail.assistantLabel} />
        <div>
          <h2 id="ceniza-assistant-title">{detail.assistantTitle}</h2>
          <p>{detail.assistantCopy}</p>
        </div>
      </header>

      <div className="ceniza-assistant-unified">
        <div className="ceniza-assistant-flow-column">
          <CenizaConnectionFlow language={language} embedded />
          <div className="ceniza-assistant-value-line">
            <div>
              <small>{isEs ? "QUÉ HACE" : "WHAT IT DOES"}</small>
              <ul>
                <li><strong>{isEs ? "Conecta la operación" : "Connects the operation"}</strong><span>{isEs ? "Combina clientes, agenda, inventario y finanzas." : "Combines clients, agenda, inventory and finance."}</span></li>
                <li><strong>{isEs ? "Detecta riesgos" : "Detects risks"}</strong><span>{isEs ? "Señala cruces, retrasos y presión de caja usando el contexto disponible." : "Flags conflicts, delays and cash pressure using the available context."}</span></li>
                <li><strong>{isEs ? "Prepara el siguiente paso" : "Prepares the next step"}</strong><span>{isEs ? "Sugiere una acción y un responsable para confirmarla." : "Suggests an action and an owner to confirm it."}</span></li>
              </ul>
            </div>
            <div>
              <small>{isEs ? "BENEFICIOS" : "BENEFITS"}</small>
              <ul>
                <li><strong>{isEs ? "Ahorra tiempo operativo" : "Saves operating time"}</strong><span>{isEs ? "Resume lo importante sin reconstruir cada caso." : "Summarizes what matters without rebuilding every case."}</span></li>
                <li><strong>{isEs ? "Protege reservas e ingresos" : "Protects bookings and revenue"}</strong><span>{isEs ? "Reduce conflictos de equipos y cobros aplazados." : "Reduces equipment conflicts and delayed payments."}</span></li>
                <li><strong>{isEs ? "Mejora rentabilidad y control" : "Improves profitability and control"}</strong><span>{isEs ? "Relaciona decisiones con caja, costos y margen." : "Connects decisions with cash flow, costs and margin."}</span></li>
              </ul>
            </div>
          </div>
        </div>

        <aside className="ceniza-assistant-phone-column" aria-labelledby="ceniza-conversation-title">
          <div className="ceniza-assistant-phone-copy">
            <AnimatedEyebrow text={isEs ? "DECISIONES CON CONTEXTO" : "DECISIONS WITH CONTEXT"} className="case-label" />
            <h3 id="ceniza-conversation-title">{isEs ? "Pregunta por el negocio. Recibe un plan listo para actuar." : "Ask about the business. Get a plan ready to act on."}</h3>
          </div>
          <CenizaAssistantConversation language={language} />
        </aside>
      </div>
    </section>
  );
}

function CenizaAutomationBridge({ language }) {
  const isEs = language === "es";
  const automations = [
    {
      layout: "capture",
      number: "01",
      eyebrow: isEs ? "CAPTACIÓN MULTICANAL" : "MULTICHANNEL CAPTURE",
      title: isEs ? "Cada solicitud llega ordenada y lista para continuar." : "Every request arrives organized and ready to continue.",
      description: isEs
        ? "El sistema reúne los canales, identifica el origen y convierte la solicitud en un lead con responsable y siguiente tarea."
        : "The system brings channels together, identifies the source and turns each request into a lead with an owner and next task.",
      nodes: [
        { icon: LuGlobe, label: isEs ? "Web + formulario" : "Web + form", service: "web" },
        { icon: SiWhatsapp, label: "WhatsApp", service: "whatsapp" },
        { icon: SiGmail, label: isEs ? "Correo" : "Email", service: "gmail" },
        { icon: SiInstagram, label: "Instagram", service: "instagram" },
        { icon: SiMeta, label: "Meta Ads", service: "meta" },
        { icon: SiTiktok, label: "TikTok Ads", service: "tiktok", optional: true },
      ],
      process: { icon: LuFileText, label: isEs ? "Validar + clasificar" : "Validate + classify", meta: isEs ? "Origen · contacto · necesidad" : "Source · contact · need", service: "process" },
      destination: { icon: LuDatabase, label: "CRM", meta: isEs ? "Lead, responsable y siguiente paso" : "Lead, owner and next step", service: "crm", featured: true },
    },
    {
      layout: "crm",
      number: "02",
      eyebrow: isEs ? "RECORRIDO DENTRO DEL CRM" : "CRM OPERATING FLOW",
      title: isEs ? "Cada oportunidad continúa hasta la operación y las finanzas." : "Every opportunity continues through operations and finance.",
      description: isEs
        ? "Clientes, oportunidades, cotización, renta o producción, facturación y cartera comparten el mismo registro, responsable y siguiente paso."
        : "Clients, opportunities, quotes, rentals or production, invoicing and receivables share the same record, owner and next step.",
      groups: [
        {
          label: isEs ? "COMERCIAL + OPERACIÓN" : "SALES + OPERATIONS",
          nodes: [
            { icon: LuUsers, label: isEs ? "Clientes" : "Clients", service: "clients" },
            { icon: LuTarget, label: isEs ? "Oportunidades" : "Opportunities", service: "opportunities" },
            { icon: LuFileText, label: isEs ? "Cotización" : "Quote", service: "quote" },
            { icon: LuFactory, label: isEs ? "Renta / producción" : "Rental / production", service: "operation" },
          ],
        },
        {
          label: isEs ? "FINANZAS" : "FINANCE",
          nodes: [
            { icon: LuClipboardList, label: isEs ? "Facturación" : "Invoicing", service: "invoicing" },
            { icon: LuTrendingUp, label: isEs ? "Por cobrar" : "Receivables", service: "receivables" },
            { icon: LuShoppingCart, label: isEs ? "Por pagar" : "Payables", service: "payables" },
          ],
        },
      ],
    },
    {
      layout: "sequence",
      number: "03",
      eyebrow: isEs ? "ASISTENTE CENIZA" : "ASISTENTE CENIZA",
      title: isEs ? "Del CRM a Supabase, y de la IA a una acción trazable." : "From CRM to Supabase, and from AI to a traceable action.",
      description: isEs
        ? "El CRM activa la consulta; los datos y permisos forman el contexto; la IA propone el siguiente paso y lo devuelve al sistema con validación e historial."
        : "The CRM triggers the query; data and permissions form the context; AI proposes the next step and returns it to the system with validation and history.",
      nodes: [
        { icon: LuDatabase, label: isEs ? "Evento CRM" : "CRM event", meta: isEs ? "Lead · tarea · operación" : "Lead · task · operation", service: "crm-input" },
        { icon: SiSupabase, label: "Supabase", meta: isEs ? "PostgreSQL · SQL · permisos" : "PostgreSQL · SQL · permissions", service: "supabase" },
        { icon: LuBoxes, label: isEs ? "RAG + contexto" : "RAG + context", meta: isEs ? "Recupera información" : "Retrieves information", service: "rag" },
        { icon: LuSparkles, label: isEs ? "Inteligencia IA" : "AI intelligence", meta: isEs ? "Analiza + propone" : "Analyzes + proposes", service: "intelligence", featured: true },
        { icon: LuUserCheck, label: isEs ? "Validación" : "Validation", meta: isEs ? "Revisión humana" : "Human review", service: "review" },
        { icon: LuDatabase, label: isEs ? "CRM actualizado" : "Updated CRM", meta: isEs ? "Acción + historial" : "Action + history", service: "crm-output" },
      ],
      toolsLabel: isEs ? "STACK TÉCNICO DEL FLUJO" : "FLOW TECH STACK",
      tools: [
        { icon: SiSupabase, label: "Supabase", service: "supabase" },
        { icon: SiPostgresql, label: "PostgreSQL", service: "postgresql" },
        { icon: BsOpenai, label: "OpenAI", service: "openai" },
        { icon: SiN8N, label: "n8n", service: "n8n" },
      ],
    },
    {
      layout: "catalog",
      number: "04",
      eyebrow: isEs ? "APIS + SERVICIOS CONECTADOS" : "APIS + CONNECTED SERVICES",
      title: isEs ? "El ecosistema integra lo que ya opera y puede sumar nuevas herramientas." : "The ecosystem integrates what already runs and can add new tools.",
      description: isEs
        ? "Las conexiones actuales comparten datos con el CRM; nuevos servicios pueden incorporarse por API o automatización sin reconstruir el proceso."
        : "Current connections share data with the CRM; new services can be added through APIs or automation without rebuilding the process.",
      groups: [
        {
          label: isEs ? "CONECTADO" : "CONNECTED",
          nodes: [
            { icon: SiSupabase, label: "Supabase", service: "supabase" },
            { icon: SiPostgresql, label: "PostgreSQL", service: "postgresql" },
            { icon: SiWhatsapp, label: "WhatsApp", service: "whatsapp" },
            { icon: SiGmail, label: isEs ? "Correo" : "Email", service: "gmail" },
            { icon: SiN8N, label: "n8n", service: "n8n" },
            { icon: LuGlobe, label: "Webhooks", service: "webhooks" },
          ],
        },
        {
          label: isEs ? "SE PUEDE CONECTAR" : "READY TO CONNECT",
          nodes: [
            { icon: SiGooglecalendar, label: "Calendar", service: "calendar", optional: true },
            { icon: SiGoogledrive, label: "Drive", service: "drive", optional: true },
            { icon: SiZoom, label: "Zoom", service: "zoom", optional: true },
            { icon: SiStripe, label: "Stripe", service: "stripe", optional: true },
            { icon: SiMercadopago, label: "Mercado Pago", service: "mercadopago", optional: true },
            { wordmark: "siigo", label: "Siigo", service: "siigo", optional: true },
          ],
        },
      ],
    },
  ];

  const renderNode = (node, className = "") => {
    const Icon = node.icon;
    return (
      <div className={`ceniza-mini-flow-node is-${node.service}${node.featured ? " is-featured" : ""}${node.optional ? " is-optional" : ""}${className ? ` ${className}` : ""}`} key={node.label}>
        <span aria-hidden="true">{Icon ? <Icon /> : <b className="ceniza-integration-wordmark">{node.wordmark}</b>}</span>
        <strong>{node.label}</strong>
        {node.meta && <small className="ceniza-node-meta">{node.meta}</small>}
        {node.optional && <small>{isEs ? "OPCIONAL" : "OPTIONAL"}</small>}
      </div>
    );
  };

  return (
    <section id="automatizaciones" className="ceniza-automation-bridge" aria-labelledby="ceniza-automation-title">
      <header className="ceniza-automation-bridge-header">
        <CenizaEyebrow text={isEs ? "AUTOMATIZACIONES + INTEGRACIONES CRM" : "CRM AUTOMATIONS + INTEGRATIONS"} />
        <div>
          <h2 id="ceniza-automation-title">{isEs ? "Cuatro flujos conectan cada lead con la operación." : "Four flows connect every lead with operations."}</h2>
          <p>{isEs ? "La información entra una vez: se captura, avanza por el CRM, activa asistencia y se conecta con las herramientas que cada proceso necesita." : "Information enters once: it is captured, moves through the CRM, activates assistance and connects with the tools each process needs."}</p>
        </div>
      </header>

      <div className="ceniza-automation-map-grid">
        {automations.map((automation) => (
          <article className={`ceniza-automation-map is-${automation.layout}`} key={automation.eyebrow}>
            <CenizaEyebrow text={`${isEs ? "FLUJO" : "FLOW"} ${automation.number} · ${automation.eyebrow}`} className="ceniza-flow-eyebrow" threshold={0.7} />
            <h3>{automation.title}</h3>
            <p>{automation.description}</p>

            {automation.layout === "capture" && (
              <div className="ceniza-capture-flow" aria-label={automation.eyebrow}>
                <div className="ceniza-flow-source-grid">{automation.nodes.map((node) => renderNode(node))}</div>
                <div className="ceniza-flow-merge" aria-hidden="true"><span /><LuArrowRight /></div>
                <div className="ceniza-capture-process">{renderNode(automation.process)}</div>
                <LuArrowRight className="ceniza-capture-next" aria-hidden="true" />
                <div className="ceniza-flow-destination">{renderNode(automation.destination)}</div>
              </div>
            )}

            {automation.layout === "catalog" && (
              <div className="ceniza-app-catalog" aria-label={automation.eyebrow}>
                {automation.groups.map((group) => (
                  <div className="ceniza-app-group" key={group.label}>
                    <small>{group.label}</small>
                    <div>{group.nodes.map((node) => renderNode(node))}</div>
                  </div>
                ))}
              </div>
            )}

            {automation.layout === "crm" && (
              <div className="ceniza-crm-journey" aria-label={automation.eyebrow}>
                {automation.groups.map((group) => (
                  <div className="ceniza-crm-lane" key={group.label}>
                    <small>{group.label}</small>
                    <div className="ceniza-crm-lane-flow">
                      {group.nodes.map((node, index) => (
                        <div className="ceniza-mini-flow-step" key={node.label}>
                          {renderNode(node)}
                          {index < group.nodes.length - 1 && <LuArrowRight className="ceniza-mini-flow-arrow" aria-hidden="true" />}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {automation.layout === "sequence" && (
              <div className="ceniza-sequence-system">
                <div className="ceniza-mini-flow is-sequence" aria-label={automation.eyebrow}>
                  {automation.nodes.map((node, index) => (
                    <div className="ceniza-mini-flow-step" key={node.label}>
                      {renderNode(node)}
                      {index < automation.nodes.length - 1 && <LuArrowRight className="ceniza-mini-flow-arrow" aria-hidden="true" />}
                    </div>
                  ))}
                </div>
                <div className="ceniza-sequence-tools" aria-label={automation.toolsLabel}>
                  <small>{automation.toolsLabel}</small>
                  <div>
                    {automation.tools.map((tool) => {
                      const ToolIcon = tool.icon;
                      return <span className={`is-${tool.service}`} key={tool.label}><ToolIcon aria-hidden="true" />{tool.label}</span>;
                    })}
                  </div>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function CaseNarrative({ detail, language, compact = false }) {
  if (!detail.story) return null;

  const isCompact = compact || Boolean(detail.predictionEvidence);

  return (
    <section className={`case-narrative${isCompact ? " is-ceniza" : ""}`} aria-label={language === "es" ? "Narrativa del proyecto" : "Project narrative"}>
      {detail.story.map((item, index) => (
        <article key={item.label}>
          <span>{isCompact ? index + 1 : String(index + 1).padStart(2, "0")}</span>
          <AnimatedEyebrow text={item.label} className="case-label" threshold={0.48} />
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </article>
      ))}
    </section>
  );
}

function ExpandedScreenVisual({ screen, project }) {
  if (screen.image) {
    if (screen.crop === "assistant-panel") {
      return (
        <div className="expanded-real-assistant" aria-label={`${project.name}: ${screen.title}`}>
          <div className="expanded-real-assistant-window">
            <img src={screen.image} alt={`${project.name}: ${screen.title}`} loading="lazy" decoding="async" />
          </div>
        </div>
      );
    }
    return <img className="expanded-screen-image" src={screen.image} alt={`${project.name}: ${screen.title}`} loading="lazy" decoding="async" />;
  }

  const rows = ["A", "B", "C", "D"];
  return (
    <div className={`expanded-ui-mock is-${screen.variant}`} aria-hidden="true">
      <header>
        <span>{project.name}</span>
        <small>{screen.category}</small>
        <i>•••</i>
      </header>
      {screen.variant === "assistant" ? (
        <div className="expanded-mock-chat">
          <p>¿Qué requiere atención?</p>
          <article><LuSparkles /><span><strong>Prioridad detectada</strong><small>Contexto · evidencia · siguiente acción</small></span></article>
          <p>Preparar plan →</p>
        </div>
      ) : screen.variant === "timeline" || screen.variant === "automation" || screen.variant === "map" ? (
        <div className="expanded-mock-flow">
          {rows.map((row, index) => <span key={row}><b>{String(index + 1).padStart(2, "0")}</b><i /><small>{row}</small></span>)}
        </div>
      ) : screen.variant === "bars" || screen.variant === "dashboard" || screen.variant === "report" ? (
        <div className="expanded-mock-dashboard">
          <div className="expanded-mock-stats"><span><b>84%</b><small>avance</small></span><span><b>12</b><small>alertas</small></span><span><b>+18</b><small>acciones</small></span></div>
          <div className="expanded-mock-bars">{[48, 72, 58, 86, 67, 92].map((height, index) => <i key={index} style={{ "--mock-height": `${height}%` }} />)}</div>
        </div>
      ) : screen.variant === "product" || screen.variant === "checkout" || screen.variant === "system" ? (
        <div className="expanded-mock-product">
          <div className="expanded-mock-product-visual"><span>{project.visual === "forty" ? "40+" : "N"}</span></div>
          <div><small>{screen.category}</small><strong>{screen.title}</strong><p>Información clara para continuar</p><button type="button" tabIndex="-1">Continuar →</button></div>
        </div>
      ) : (
        <div className="expanded-mock-table">
          <div className="expanded-mock-stats"><span><b>24</b><small>activos</small></span><span><b>08</b><small>en curso</small></span><span><b>03</b><small>alertas</small></span></div>
          {rows.map((row, index) => <span key={row}><i /><b>{screen.title}</b><small>{index % 2 ? "EN PROCESO" : "LISTO"}</small></span>)}
        </div>
      )}
    </div>
  );
}

function ExpandedSystemPreview({ project, content, language }) {
  return (
    <section className="ceniza-crm-section expanded-system-section" aria-labelledby={`${project.visual}-system-title`}>
      <header className="ceniza-section-header">
        <CenizaEyebrow text={content.systemLabel} />
        <div className="ceniza-crm-heading-row">
          <div className="ceniza-crm-heading-copy">
            <h2 id={`${project.visual}-system-title`}>{content.systemTitle}</h2>
            <p>{content.systemCopy}</p>
          </div>
          {content.webUrl && project.visual !== "naval" ? (
            <a className="ceniza-section-link is-website" href={content.webUrl} target="_blank" rel="noreferrer">
              <span>{content.webCta}</span><span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </header>

      <figure className="ceniza-crm-figure expanded-system-gallery">
        <figcaption><AnimatedEyebrow text={content.galleryLabel} className="expanded-gallery-eyebrow" threshold={0.5} /><span>{content.galleryCount}</span></figcaption>
        <ol className="ceniza-crm-flow-grid">
          {content.screens.map((screen, index) => (
            <li className="ceniza-crm-flow-card" key={`${screen.category}-${screen.title}`}>
              <div className="ceniza-crm-flow-screen"><ExpandedScreenVisual screen={screen} project={project} /></div>
              <span className="ceniza-crm-laptop-base" aria-hidden="true" />
              <div className="ceniza-crm-flow-caption">
                <span>{index + 1}</span>
                <div><em>{screen.benefit}</em><strong>{screen.title}</strong><small>{screen.text}</small></div>
              </div>
            </li>
          ))}
        </ol>
      </figure>

      <div className="ceniza-metrics">
        {content.metrics.map((metric) => (
          <article key={metric.label}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.note}</p></article>
        ))}
      </div>

      <div className="ceniza-responsive-crm" aria-labelledby={`${project.visual}-mobile-title`}>
        <header className="ceniza-responsive-header">
          <AnimatedEyebrow text={content.mobileLabel} className="case-label" threshold={0.48} />
          <h3 id={`${project.visual}-mobile-title`}>{content.mobileTitle}</h3>
          <p>{content.mobileCopy}</p>
        </header>
        <div className="ceniza-crm-phone-row expanded-phone-row">
          {content.mobileImages.map((screen) => (
            <figure key={screen.src}>
              <div className="ceniza-crm-phone"><span className="mobile-speaker" aria-hidden="true" /><img src={screen.src} alt={`${screen.label} · ${project.name}`} loading="lazy" decoding="async" /></div>
              <figcaption><strong>{screen.label}</strong><small>{screen.benefit}</small></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpandedBenefits({ project, content }) {
  return (
    <section className="ceniza-benefits expanded-benefits" aria-labelledby={`${project.visual}-benefits-title`}>
      <header><CenizaEyebrow text={content.benefitsLabel} /><h2 id={`${project.visual}-benefits-title`}>{content.benefitsTitle}</h2></header>
      <div className="ceniza-benefit-grid">
        {content.benefits.map((benefit, index) => (
          <article key={benefit.title}><span>{index + 1}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>
        ))}
      </div>
    </section>
  );
}

function NavalProductionSection({ language }) {
  const icons = [LuShoppingCart, LuFlaskConical, LuBoxes, LuFactory, LuShieldCheck, LuPackageCheck];
  const steps = language === "es"
    ? [
      ["Demanda", "Pedidos y proyección"],
      ["Fórmula", "Versión y cantidades"],
      ["Materiales", "Disponibilidad y lote"],
      ["Producción", "Orden, tanque y avance"],
      ["Calidad", "Control y liberación"],
      ["Inventario", "Producto terminado"],
    ]
    : [
      ["Demand", "Orders and forecast"],
      ["Formula", "Version and quantities"],
      ["Materials", "Availability and lot"],
      ["Production", "Order, tank and progress"],
      ["Quality", "Control and release"],
      ["Inventory", "Finished product"],
    ];

  return (
    <section className="naval-production-section" aria-labelledby="naval-production-title">
      <header className="ceniza-section-header">
        <CenizaEyebrow text={language === "es" ? "DISEÑO DE PRODUCTO EN PROGRESO · PRODUCCIÓN" : "PRODUCT DESIGN IN PROGRESS · PRODUCTION"} />
        <div>
          <h2 id="naval-production-title">{language === "es" ? "La producción deja de ser una isla y se convierte en el centro trazable de la operación." : "Production stops being an island and becomes the traceable center of the operation."}</h2>
          <p>{language === "es" ? "El módulo continúa en desarrollo. Estas vistas parten de la estructura real del ERP y muestran la dirección prevista para conectar demanda, fórmula, materiales, orden, tanque, calidad e inventario." : "This module is still in development. These views build on the real ERP structure and show the intended direction for connecting demand, formulas, materials, orders, tanks, quality and inventory."}</p>
        </div>
      </header>

      <ol className="naval-production-flow">
        {steps.map(([title, meta], index) => {
          const StepIcon = icons[index] || LuClipboardList;
          return <li key={title}>
            <b aria-hidden="true"><StepIcon /></b>
            <div><strong>{title}</strong><small>{meta}</small></div>
            {index < steps.length - 1 ? <i aria-hidden="true"><LuArrowRight /></i> : null}
          </li>;
        })}
      </ol>

      <div className="naval-production-proof">
        <figure>
          <img src="/case-naval-production-order-detail-v2.webp" alt={language === "es" ? "Orden de producción abierta con avance, materiales, calidad y trazabilidad" : "Open production order with progress, materials, quality and traceability"} loading="lazy" decoding="async" />
          <figcaption><small>{language === "es" ? "CONCEPTO FUNCIONAL · EN DESARROLLO" : "FUNCTIONAL CONCEPT · IN DEVELOPMENT"}</small><strong>{language === "es" ? "Una orden abierta, de la fórmula a la liberación." : "An open order, from formula to release."}</strong><span>{language === "es" ? "Propuesta de evolución para reunir avance, consumos, lote, tanque, calidad y novedades dentro de la misma operación." : "Proposed evolution for bringing progress, consumption, lot, tank, quality and exceptions into the same operation."}</span></figcaption>
        </figure>
        <figure>
          <img src="/case-naval-production-tanks.webp" alt={language === "es" ? "Control de tanques, capacidad, lotes y producto en Naval" : "Naval tanks, capacity, lots and product control"} loading="lazy" decoding="async" />
          <figcaption><small>{language === "es" ? "VISTA PROPUESTA · EN DESARROLLO" : "PROPOSED VIEW · IN DEVELOPMENT"}</small><strong>{language === "es" ? "Cada tanque muestra qué produce y cuánto puede recibir." : "Every tank shows what it produces and the capacity it can receive."}</strong><span>{language === "es" ? "Dirección de diseño para consultar volumen, producto, lote, ocupación, programación y calidad sin cambiar de módulo." : "Design direction for reviewing volume, product, lot, utilization, schedule and quality without changing modules."}</span></figcaption>
        </figure>
        <figure>
          <img src="/case-naval-finished-product-v2.webp" alt={language === "es" ? "Propuesta de producto terminado, calidad y liberación de lote" : "Proposed finished-product, quality and lot-release view"} loading="lazy" decoding="async" />
          <figcaption><small>{language === "es" ? "CONTROL DE SALIDA · EN DESARROLLO" : "OUTPUT CONTROL · IN DEVELOPMENT"}</small><strong>{language === "es" ? "El lote termina cuando puede liberarse con evidencia." : "The lot is complete when it can be released with evidence."}</strong><span>{language === "es" ? "Calidad, cantidad producida, envasado, etiquetado y destino quedan vinculados antes de autorizar el movimiento." : "Quality, produced quantity, packaging, labeling and destination stay connected before the movement is authorized."}</span></figcaption>
        </figure>
        <figure>
          <img src="/case-naval-inventory-kardex-v2.webp" alt={language === "es" ? "Propuesta de Kardex y trazabilidad de inventario" : "Proposed inventory Kardex and traceability view"} loading="lazy" decoding="async" />
          <figcaption><small>{language === "es" ? "TRAZABILIDAD DE INVENTARIO · EN DESARROLLO" : "INVENTORY TRACEABILITY · IN DEVELOPMENT"}</small><strong>{language === "es" ? "Cada movimiento explica de dónde vino y dónde terminó el stock." : "Every movement explains where inventory came from and where it went."}</strong><span>{language === "es" ? "Entradas de producción, reservas, despachos, ajustes y saldos conservan documento, lote, responsable y fecha." : "Production receipts, reservations, dispatches, adjustments and balances retain their document, lot, owner and date."}</span></figcaption>
        </figure>
      </div>
    </section>
  );
}

function NavalFinancialIntelligence({ language }) {
  const indicators = language === "es"
    ? [["CARTERA", "Vencimientos y recaudos"], ["PAGOS", "Compromisos y proveedores"], ["COSTO", "Materia prima + producción"], ["MARGEN", "Rentabilidad por pedido"], ["CAJA", "Entradas y salidas"], ["ALERTA", "Desviación que requiere acción"]]
    : [["RECEIVABLES", "Due dates and collections"], ["PAYMENTS", "Commitments and suppliers"], ["COST", "Materials + production"], ["MARGIN", "Profitability by order"], ["CASH FLOW", "Inflows and outflows"], ["ALERT", "Deviation that needs action"]];

  return (
    <section className="ceniza-decision-strip naval-finance-section" aria-labelledby="naval-finance-title">
      <header>
        <CenizaEyebrow text={language === "es" ? "INTELIGENCIA FINANCIERA + OPERATIVA" : "FINANCIAL + OPERATIONAL INTELLIGENCE"} />
        <h3 id="naval-finance-title">{language === "es" ? "Del lote y el pedido al costo, el margen y la caja." : "From lot and order to cost, margin and cash flow."}</h3>
        <p>{language === "es" ? "La capa financiera no vive aparte: conserva la relación entre venta, compra, producción y resultado para que cada cifra pueda rastrearse hasta su operación." : "The finance layer does not live separately: it preserves the relationship between sales, purchasing, production and results so every number can be traced back to its operation."}</p>
      </header>
      <div className="naval-finance-content">
        <figure>
          <img src="/case-naval-financial-report-v1.webp" alt={language === "es" ? "Informe financiero ejecutivo exportado desde el ERP Naval con ingresos, costos, margen, caja y cartera" : "Executive financial report exported from Naval ERP with revenue, costs, margin, cash flow and receivables"} loading="lazy" decoding="async" />
          <figcaption>{language === "es" ? "Concepto de informe exportable: una lectura ejecutiva de ingresos, costos, margen, caja, cartera y rentabilidad por línea." : "Exportable report concept: an executive view of revenue, costs, margin, cash flow, receivables and profitability by product line."}</figcaption>
        </figure>
        <ul>
          {indicators.map(([label, title]) => <li key={label}><span>{label}</span><strong>{title}</strong></li>)}
        </ul>
      </div>
    </section>
  );
}

function NavalAutomationBridge({ content, language }) {
  const flows = language === "es"
    ? [
      { number: "1", label: "CAPTACIÓN B2B + CHATBOT", title: "De la página a una oportunidad con contexto.", description: "La web y el chatbot identifican sector, producto e intención antes de entregar la conversación al equipo comercial.", nodes: [
        { icon: LuGlobe, label: "Página B2B", meta: "Producto · sector", tone: "web" },
        { icon: LuSparkles, label: "Chatbot", meta: "Necesidad", tone: "assistant" },
        { icon: LuTarget, label: "Calificar", meta: "Intención · datos", tone: "qualify" },
        { icon: LuTrendingUp, label: "Oportunidad", meta: "Responsable", tone: "opportunity" },
        { icon: LuFileText, label: "Cotización", meta: "Siguiente paso", tone: "quote" },
      ] },
      { number: "2", label: "PRODUCCIÓN + TRANSPORTE", title: "Del pedido confirmado a una entrega trazable.", description: "Planeación, materiales, producción, calidad, despacho y evidencia continúan el mismo pedido.", nodes: [
        { icon: LuShoppingCart, label: "Pedido", meta: "Demanda confirmada", tone: "order" },
        { icon: LuCalendarCheck, label: "Planificar", meta: "Capacidad · fecha", tone: "plan" },
        { icon: LuFactory, label: "Producir", meta: "Lote · tanque", tone: "production" },
        { icon: LuShieldCheck, label: "Calidad", meta: "Control · liberar", tone: "quality" },
        { icon: LuPackageCheck, label: "Despachar", meta: "Pedido listo", tone: "dispatch" },
        { icon: SiGooglemaps, label: "Entregar", meta: "Ruta · evidencia", tone: "delivery" },
      ] },
      { number: "3", label: "ASISTENTE NAVAL + CONTROL HUMANO", title: "De una señal operativa a una acción revisable.", description: "El asistente consulta el contexto autorizado, explica la evidencia y devuelve la decisión al ERP con validación humana.", nodes: [
        { icon: LuDatabase, label: "Evento ERP", meta: "Alerta · operación", tone: "erp" },
        { icon: SiPostgresql, label: "PostgreSQL", meta: "Datos autorizados", tone: "data" },
        { icon: LuBoxes, label: "RAG + contexto", meta: "Recupera evidencia", tone: "rag" },
        { icon: BsOpenai, label: "Asistente IA", meta: "Explica · propone", tone: "ai", featured: true },
        { icon: LuUserCheck, label: "Validación", meta: "Revisión humana", tone: "review" },
        { icon: LuDatabase, label: "ERP actualizado", meta: "Acción · historial", tone: "updated" },
      ] },
    ]
    : [
      { number: "1", label: "B2B CAPTURE + CHATBOT", title: "From the website to a contextual opportunity.", description: "The website and chatbot identify sector, product and intent before handing the conversation to sales.", nodes: [
        { icon: LuGlobe, label: "B2B website", meta: "Product · sector", tone: "web" },
        { icon: LuSparkles, label: "Chatbot", meta: "Need", tone: "assistant" },
        { icon: LuTarget, label: "Qualify", meta: "Intent · data", tone: "qualify" },
        { icon: LuTrendingUp, label: "Opportunity", meta: "Owner", tone: "opportunity" },
        { icon: LuFileText, label: "Quote", meta: "Next step", tone: "quote" },
      ] },
      { number: "2", label: "PRODUCTION + TRANSPORT", title: "From confirmed order to traceable delivery.", description: "Planning, materials, production, quality, dispatch and evidence continue the same order.", nodes: [
        { icon: LuShoppingCart, label: "Order", meta: "Confirmed demand", tone: "order" },
        { icon: LuCalendarCheck, label: "Plan", meta: "Capacity · date", tone: "plan" },
        { icon: LuFactory, label: "Produce", meta: "Lot · tank", tone: "production" },
        { icon: LuShieldCheck, label: "Quality", meta: "Control · release", tone: "quality" },
        { icon: LuPackageCheck, label: "Dispatch", meta: "Order ready", tone: "dispatch" },
        { icon: SiGooglemaps, label: "Deliver", meta: "Route · evidence", tone: "delivery" },
      ] },
      { number: "3", label: "NAVAL ASSISTANT + HUMAN CONTROL", title: "From an operating signal to a reviewable action.", description: "The assistant reads authorized context, explains evidence and returns the decision to the ERP after human validation.", nodes: [
        { icon: LuDatabase, label: "ERP event", meta: "Alert · operation", tone: "erp" },
        { icon: SiPostgresql, label: "PostgreSQL", meta: "Authorized data", tone: "data" },
        { icon: LuBoxes, label: "RAG + context", meta: "Retrieves evidence", tone: "rag" },
        { icon: BsOpenai, label: "AI assistant", meta: "Explains · proposes", tone: "ai", featured: true },
        { icon: LuUserCheck, label: "Validation", meta: "Human review", tone: "review" },
        { icon: LuDatabase, label: "ERP updated", meta: "Action · history", tone: "updated" },
      ] },
    ];

  const toolGroups = [
    { label: language === "es" ? "AUTOMATIZAR" : "AUTOMATE", tools: [[SiN8N, "n8n"], [SiMake, "Make"], [LuGlobe, "API + webhooks"]] },
    { label: language === "es" ? "DATOS" : "DATA", tools: [[SiPostgresql, "PostgreSQL"], [SiSupabase, "Supabase"], [SiGoogledrive, "Drive"]] },
    { label: language === "es" ? "CONVERSAR" : "CONVERSE", tools: [[LuSparkles, "Chatbot web"], [SiWhatsapp, "WhatsApp"], [SiGmail, "Correo"]] },
    { label: language === "es" ? "OPERAR" : "OPERATE", tools: [[LuBoxes, "ERP modules"], [SiGooglemaps, "Maps + rutas"], [BsOpenai, "Asistente IA"]] },
  ];

  return (
    <section className="ceniza-automation-bridge expanded-automation naval-automation" aria-labelledby="naval-automation-title">
      <header className="ceniza-automation-bridge-header">
        <CenizaEyebrow text={content.automationLabel} />
        <div><h2 id="naval-automation-title">{content.automationTitle}</h2><p>{content.automationCopy}</p></div>
      </header>
      <div className="naval-automation-map-grid">
        {flows.map((flow) => (
          <article className={`naval-mini-flow is-flow-${flow.number}`} key={flow.number}>
            <header><small>{language === "es" ? "FLUJO" : "FLOW"} {flow.number} · {flow.label}</small><h3>{flow.title}</h3><p>{flow.description}</p></header>
            <ol className="naval-open-flow">
              {flow.nodes.map((node, index) => {
                const Icon = node.icon;
                return <li className={`is-${node.tone}${node.featured ? " is-featured" : ""}`} key={node.label}>
                  <span aria-hidden="true"><Icon /></span><strong>{node.label}</strong><small>{node.meta}</small>
                  {index < flow.nodes.length - 1 ? <LuArrowRight aria-hidden="true" /> : null}
                </li>;
              })}
            </ol>
          </article>
        ))}
      </div>
      <div className="naval-automation-ecosystem">
        <header><span>{language === "es" ? "ECOSISTEMA DE INTEGRACIONES" : "INTEGRATION ECOSYSTEM"}</span><h3>{language === "es" ? "Herramientas conectadas según el proceso, no como silos." : "Tools connected around the process, not as silos."}</h3></header>
        <div>
          {toolGroups.map((group) => <section key={group.label}><small>{group.label}</small><ul>{group.tools.map(([Icon, label]) => <li key={label}><Icon aria-hidden="true" /><span>{label}</span></li>)}</ul></section>)}
        </div>
      </div>
    </section>
  );
}

function ExpandedAutomation({ project, content }) {
  const isForty = project.visual === "forty";
  return (
    <section className={`ceniza-automation-bridge expanded-automation${isForty ? " forty-make-automation" : ""}`} aria-labelledby={`${project.visual}-automation-title`}>
      <header className="ceniza-automation-bridge-header">
        <CenizaEyebrow text={content.automationLabel} />
        <div><h2 id={`${project.visual}-automation-title`}>{content.automationTitle}</h2><p>{content.automationCopy}</p></div>
      </header>
      <ol className={`expanded-automation-track${isForty ? " is-make-flow" : ""}`}>
        {content.automationSteps.map((step, index) => (
          <li className={step.tone ? `is-${step.tone}` : undefined} key={step.title}>
            <span>{typeof step.icon === "string" ? step.icon : <step.icon aria-hidden="true" />}</span><strong>{step.title}</strong><small>{step.meta}</small>
            {index < content.automationSteps.length - 1 ? <LuArrowRight aria-hidden="true" /> : null}
          </li>
        ))}
      </ol>
      {isForty ? (
        <div className="forty-automation-proof">
          <figure className="forty-ebook-proof">
            <img src="/case-40plus-ebook-cover-real.webp" alt="Portada real del e-book Ritual 40+" loading="lazy" decoding="async" />
            <figcaption><small>E-BOOK ADJUNTO</small><strong>Ritual 40+</strong><span>Recetario digital + mini planner.</span></figcaption>
          </figure>
          <figure className="forty-email-proof">
            <div className="forty-email-proof-window"><img src="/case-40plus-email-customer-real.webp" alt="Correo real enviado al cliente con acceso al e-book Ritual 40+" loading="lazy" decoding="async" /></div>
            <figcaption><small>CORREO AL CLIENTE</small><strong>Entrega automática confirmada</strong><span>Mensaje de agradecimiento, descarga del e-book y regreso al producto.</span></figcaption>
          </figure>
          <figure className="forty-email-proof is-owner">
            <div className="forty-email-proof-window"><img src="/case-40plus-email-owner-real.webp" alt="Correo interno real con la información recibida desde el formulario de experiencia 40+" loading="lazy" decoding="async" /></div>
            <figcaption><small>CORREO INTERNO</small><strong>Datos listos para continuar</strong><span>Contacto, experiencia, autorizaciones y origen del formulario en un mismo mensaje.</span></figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}

function ExpandedAssistant({ project, content, language }) {
  if (!content.assistantTitle) return null;
  return (
    <section className="ceniza-assistant-section expanded-assistant" aria-labelledby={`${project.visual}-assistant-title`}>
      <header className="ceniza-section-header">
        <CenizaEyebrow text={content.assistantLabel} />
        <div><h2 id={`${project.visual}-assistant-title`}>{content.assistantTitle}</h2><p>{content.assistantCopy}</p></div>
      </header>
      <div className="expanded-assistant-layout">
        {content.assistantImage ? (
          <figure className="expanded-assistant-proof">
            <img src={content.assistantImage} alt={language === "es" ? "Interfaz real del prototipo Asistente Naval" : "Real Naval Assistant prototype interface"} loading="lazy" decoding="async" />
            <figcaption><span>{language === "es" ? "PROTOTIPO FUNCIONAL DE INTERFAZ" : "FUNCTIONAL INTERFACE PROTOTYPE"}</span><strong>{language === "es" ? "Alertas verificables, evidencia y acciones para confirmar." : "Verifiable alerts, evidence and actions to confirm."}</strong></figcaption>
          </figure>
        ) : null}
        <div className="expanded-assistant-dialogue">
          <div className="expanded-assistant-questions">
            <AnimatedEyebrow text={language === "es" ? "PREGUNTAS SOBRE LA OPERACIÓN" : "QUESTIONS ABOUT THE OPERATION"} className="case-label" />
            {content.assistantQuestions.map((question) => <p key={question}>{question}<span>↗</span></p>)}
          </div>
          <div className="expanded-assistant-answer">
            <span aria-hidden="true"><LuSparkles /></span>
            <div>
              <small>{language === "es" ? "RESPUESTA CON CONTEXTO" : "CONTEXTUAL RESPONSE"}</small>
              <h3>{language === "es" ? "Hay una orden que requiere atención antes de liberar el siguiente lote." : "One order needs attention before the next batch is released."}</h3>
              <ul>
                <li>{language === "es" ? "Cruza ventas, disponibilidad y producción." : "Connects sales, availability and production."}</li>
                <li>{language === "es" ? "Explica el impacto financiero y operativo." : "Explains the financial and operating impact."}</li>
                <li>{language === "es" ? "Prepara la acción para revisión humana." : "Prepares the action for human review."}</li>
              </ul>
              <button type="button" tabIndex="-1">{language === "es" ? "Revisar plan" : "Review plan"} →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpandedWebSection({ project, content, language }) {
  const image = project.visual === "forty" ? "/case-40plus-real-home-v2.webp" : "/case-naval-desktop.webp";
  return (
    <section className="ceniza-web-section expanded-web-section" aria-labelledby={`${project.visual}-web-title`}>
      {project.visual === "naval" ? <CenizaEyebrow text={content.webLabel} /> : null}
      <div className="expanded-web-grid">
        <div className="ceniza-web-story-copy">
          {project.visual !== "naval" ? <CenizaEyebrow text={content.webLabel} /> : null}
          <div className="ceniza-web-copy-body">
            <h2 id={`${project.visual}-web-title`}>{content.webTitle}</h2>
            <p>{content.webCopy}</p>
            <ul className="ceniza-web-capabilities" aria-label={language === "es" ? "Capacidades del producto web" : "Web product capabilities"}>
              {content.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
            </ul>
            {content.webUrl ? (
              <a className="ceniza-section-link is-website expanded-web-link" href={content.webUrl} target="_blank" rel="noreferrer">
                <span>{content.webCta}</span><span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </div>
        {project.visual === "naval" ? (
          <div className="naval-web-preview-stack">
            <figure className="expanded-web-preview is-home">
              <div className="desktop-browser-frame"><div className="desktop-browser-bar" aria-hidden="true"><span /><span /><span /><i>productosnaval.com</i></div><img src={image} alt={language === "es" ? "Portada real de productosnaval.com" : "Real productosnaval.com home page"} loading="lazy" decoding="async" /></div>
              <figcaption>{language === "es" ? "PORTADA B2B · DESCUBRIMIENTO DE PRODUCTO" : "B2B HOME · PRODUCT DISCOVERY"}</figcaption>
            </figure>
            <figure className="expanded-web-preview is-chatbot">
              <div className="desktop-browser-frame"><div className="desktop-browser-bar" aria-hidden="true"><span /><span /><span /><i>productosnaval.com/productos</i></div><img src="/case-naval-web-chatbot-real.webp" alt={language === "es" ? "Catálogo real de Naval con el chatbot abierto" : "Real Naval catalog with the chatbot open"} loading="lazy" decoding="async" /></div>
              <figcaption>{language === "es" ? "CHATBOT CONECTADO · CONSULTA, RECOMENDACIÓN Y PEDIDO" : "CONNECTED CHATBOT · SEARCH, RECOMMENDATION AND ORDER"}</figcaption>
            </figure>
          </div>
        ) : (
          <figure className="expanded-web-preview">
            <div className="desktop-browser-frame"><div className="desktop-browser-bar" aria-hidden="true"><span /><span /><span /><i>cuarentamas.com</i></div><img src={image} alt={`${project.name}: ${language === "es" ? "página web" : "website"}`} loading="lazy" decoding="async" /></div>
          </figure>
        )}
      </div>
    </section>
  );
}

function NavalSecuritySection({ language }) {
  const [isLocked, setIsLocked] = useState(false);
  const toggleLock = () => setIsLocked((locked) => !locked);
  const pillars = language === "es"
    ? [
      ["Roles y permisos", "El prototipo ya modela perfiles y alcances; producción requiere autenticación real y autorización persistente."],
      ["Auditoría y aprobaciones", "Cada cambio sensible debe conservar responsable, fecha, estado y evidencia antes de ejecutarse."],
      ["Datos protegidos", "La evolución productiva necesita PostgreSQL, cifrado, backups y políticas por fila o por dominio."],
      ["IA con límites", "Solo datos autorizados entran al contexto; toda acción sensible mantiene revisión humana y trazabilidad."],
    ]
    : [
      ["Roles and permissions", "The prototype already models profiles and scope; production requires real authentication and persistent authorization."],
      ["Audit and approvals", "Every sensitive change should keep owner, date, status and evidence before execution."],
      ["Protected data", "Production evolution needs PostgreSQL, encryption, backups and row- or domain-level policies."],
      ["Bounded AI", "Only authorized data enters context; every sensitive action keeps human review and traceability."],
    ];

  return (
    <section className="ceniza-security-section naval-security-section" aria-labelledby="naval-security-title">
      <div
        className={`ceniza-security-visual${isLocked ? " is-locked" : ""}`}
        role="img"
        tabIndex="0"
        aria-label={language === "es" ? `Candado ${isLocked ? "cerrado" : "abierto"}. Cada nueva pasada del cursor cambia su estado.` : `${isLocked ? "Closed" : "Open"} padlock. Each new hover changes its state.`}
        onMouseEnter={toggleLock}
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse") toggleLock();
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleLock();
          }
        }}
      >
        <div className="ceniza-lock-animation" aria-hidden="true">
          <img className="ceniza-lock-image is-open" src="/ceniza-lock-open.webp" alt="" />
          <img className="ceniza-lock-image is-closed" src="/ceniza-lock-closed.webp" alt="" />
        </div>
        <span className="ceniza-lock-status">
          {language === "es" ? (isLocked ? "ACCESO PROTEGIDO" : "ACCESO DISPONIBLE") : (isLocked ? "ACCESS PROTECTED" : "ACCESS READY")}
        </span>
      </div>

      <div className="ceniza-security-content">
        <header>
          <CenizaEyebrow text={language === "es" ? "PROTECCIÓN DE DATOS + TRAZABILIDAD" : "DATA PROTECTION + TRACEABILITY"} />
          <h2 id="naval-security-title">{language === "es" ? "Controlar quién ve, quién cambia y cómo la IA usa la información." : "Control who sees, who changes and how AI uses the information."}</h2>
          <p>{language === "es" ? "La demo actual usa datos ficticios y almacenamiento local para validar el producto. La ruta a producción separa autenticación, datos, secretos, permisos y modelos de IA para no convertir una interfaz convincente en una falsa promesa de seguridad." : "The current demo uses fictional data and local storage to validate the product. The production path separates authentication, data, secrets, permissions and AI models so a convincing interface never becomes a false security promise."}</p>
        </header>
        <ul className="ceniza-security-pillars">
          {pillars.map(([title, text]) => <li key={title}><span aria-hidden="true" /><div><strong>{title}</strong><p>{text}</p></div></li>)}
        </ul>
      </div>
    </section>
  );
}

function ExpandedCaseContent({ project, language }) {
  const text = copy[language];
  const content = expandedCaseDetails[language][project.visual];
  return (
    <>
      <ExpandedSystemPreview project={project} content={content} language={language} />
      {project.visual === "naval" ? <NavalProductionSection language={language} /> : null}
      {project.visual === "naval" ? <NavalFinancialIntelligence language={language} /> : null}
      <ExpandedBenefits project={project} content={content} />
      {project.visual === "naval" ? <NavalAutomationBridge content={content} language={language} /> : <ExpandedAutomation project={project} content={content} />}
      <ExpandedAssistant project={project} content={content} language={language} />
      {project.visual !== "forty" ? <ExpandedWebSection project={project} content={content} language={language} /> : null}
      {project.visual === "naval" ? <NavalSecuritySection language={language} /> : null}
      <section className="editorial-case-outcome ceniza-case-outcome expanded-case-outcome">
        <CenizaEyebrow text={text.outcome} threshold={0.4} />
        <div className="ceniza-outcome-summary"><h2>{content.outcomeTitle}</h2><p>{content.outcomeCopy}</p></div>
        <a className="ceniza-section-link is-outcome" href={CONTACT_WHATSAPP_URL} target="_blank" rel="noreferrer"><span>{content.outcomeCta || text.getInTouch}</span><span aria-hidden="true">↗</span></a>
      </section>
    </>
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

function CenizaAdoptionStrip({ language }) {
  return (
    <section className="ceniza-adoption-strip" aria-labelledby="ceniza-adoption-title">
      <header>
        <CenizaEyebrow text={language === "es" ? "ONBOARDING INTERNO + RELEVO ASISTIDO" : "IN-APP ONBOARDING + ASSISTED HANDOFF"} />
        <h2 id="ceniza-adoption-title">
          {language === "es" ? "Aprender y retomar, desde el mismo CRM." : "Learn and pick up where others left off, inside the CRM."}
        </h2>
        <p>
          {language === "es" ? "Desde su perfil, cada persona abre el recorrido guiado del CRM y aprende la plataforma desde el principio. En el Asistente Ceniza recibe un resumen del negocio, alertas operativas y preguntas útiles para retomar el trabajo con contexto." : "From their profile, each person opens the guided CRM walkthrough and learns the platform from the beginning. In Asistente Ceniza, they receive a business summary, operational alerts and useful questions to resume work with context."}
        </p>
      </header>

      <div className="ceniza-adoption-demo" aria-label={language === "es" ? "Perfil con recorrido del CRM y panel real del Asistente Ceniza" : "Profile with CRM walkthrough and real Asistente Ceniza panel"}>
        <figure className="ceniza-adoption-isolated-card is-profile">
          <div className="ceniza-adoption-card-crop">
            <img
              src="/ceniza-onboarding-profile-cutout-v2.webp"
              alt={language === "es" ? "Modal real del perfil de Ceniza con acceso al recorrido del CRM" : "Real Ceniza profile modal with access to the CRM walkthrough"}
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption>{language === "es" ? "Perfil real con acceso al recorrido del CRM." : "Real profile with access to the CRM walkthrough."}</figcaption>
        </figure>

        <figure className="ceniza-adoption-isolated-card is-assistant">
          <div className="ceniza-adoption-card-crop">
            <img
              src="/ceniza-onboarding-assistant-cutout-v2.webp"
              alt={language === "es" ? "Panel real del Asistente Ceniza con resumen, alertas y preguntas útiles" : "Real Asistente Ceniza panel with a summary, alerts and useful questions"}
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption>{language === "es" ? "Resumen, alertas y preguntas útiles dentro del sistema." : "Summary, alerts and useful questions inside the system."}</figcaption>
        </figure>
      </div>
    </section>
  );
}

function CenizaSecurity({ language }) {
  const [isLocked, setIsLocked] = useState(false);
  const toggleLock = () => setIsLocked((locked) => !locked);

  return (
    <section className="ceniza-security-section" aria-labelledby="ceniza-security-title">
      <div
        className={`ceniza-security-visual${isLocked ? " is-locked" : ""}`}
        role="img"
        tabIndex="0"
        aria-label={language === "es" ? `Candado ${isLocked ? "cerrado" : "abierto"}. Cada nueva pasada del cursor cambia su estado.` : `${isLocked ? "Closed" : "Open"} padlock. Each new hover changes its state.`}
        onMouseEnter={toggleLock}
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse") toggleLock();
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleLock();
          }
        }}
      >
        <div className="ceniza-lock-animation" aria-hidden="true">
          <img className="ceniza-lock-image is-open" src="/ceniza-lock-open.webp" alt="" />
          <img className="ceniza-lock-image is-closed" src="/ceniza-lock-closed.webp" alt="" />
        </div>
        <span className="ceniza-lock-status">
          {language === "es" ? (isLocked ? "ACCESO PROTEGIDO" : "ACCESO DISPONIBLE") : (isLocked ? "ACCESS PROTECTED" : "ACCESS READY")}
        </span>
      </div>

      <div className="ceniza-security-content">
        <header>
          <CenizaEyebrow text={language === "es" ? "SEGURIDAD + TRAZABILIDAD DE DATOS" : "SECURITY + DATA TRACEABILITY"} />
          <h2 id="ceniza-security-title">{language === "es" ? "La información, protegida desde que entra hasta que sale." : "Information protected from the moment it enters until it leaves."}</h2>
          <p>{language === "es" ? "Cada dato conserva origen, responsable y contexto dentro del CRM. Los permisos limitan quién puede consultarlo o modificarlo, mientras sus cambios y usos mantienen una trazabilidad clara." : "Every data point retains its source, owner and context inside the CRM. Permissions limit who can view or change it, while its changes and uses maintain a clear audit trail."}</p>
        </header>

        <ul className="ceniza-security-pillars">
          <li><span aria-hidden="true" /><div><strong>{language === "es" ? "Acceso por rol" : "Role-based access"}</strong><p>{language === "es" ? "Cada persona ve y modifica únicamente lo autorizado." : "Each person only sees and changes authorized information."}</p></div></li>
          <li><span aria-hidden="true" /><div><strong>{language === "es" ? "Entradas con contexto" : "Context-rich inputs"}</strong><p>{language === "es" ? "Leads, formularios y registros conservan su origen." : "Leads, forms and records retain their source."}</p></div></li>
          <li><span aria-hidden="true" /><div><strong>{language === "es" ? "Salidas controladas" : "Controlled outputs"}</strong><p>{language === "es" ? "Reportes y acciones usan solo la información permitida." : "Reports and actions only use permitted information."}</p></div></li>
          <li><span aria-hidden="true" /><div><strong>{language === "es" ? "Historial trazable" : "Traceable history"}</strong><p>{language === "es" ? "Cada cambio conserva responsable, fecha y contexto." : "Every change retains its owner, date and context."}</p></div></li>
        </ul>
      </div>
    </section>
  );
}

function CenizaCaseContent({ project, detail, language }) {
  const text = copy[language];

  return (
    <>
      <section className="ceniza-crm-section" aria-labelledby="ceniza-crm-title">
        <header className="ceniza-section-header">
          <CenizaEyebrow text={detail.currentLabel} />
          <div className="ceniza-crm-heading-row">
            <div className="ceniza-crm-heading-copy">
              <h2 id="ceniza-crm-title">{detail.crmTitle}</h2>
              <p>{detail.crmCopy}</p>
            </div>
            <a className="ceniza-section-link is-demo" href={detail.demoUrl} target="_blank" rel="noreferrer">
              <span>{detail.demoLabel}</span><span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>
        <CenizaCrmPreview detail={detail} language={language} label={language === "es" ? "PÁGINAS DEL CRM" : "CRM PAGES"} />
        <CenizaResponsiveCrm detail={detail} language={language} />
      </section>

      <CenizaDecisionStrip language={language} />

      <CenizaAutomationBridge language={language} />

      <CenizaAssistantPreview detail={detail} language={language} />

      <section id="ceniza-web" className="ceniza-web-section" aria-labelledby="ceniza-web-title">
        <div className="ceniza-web-story">
          <div className="ceniza-web-story-copy">
            <CenizaEyebrow text={language === "es" ? "SITIO WEB + EXPERIENCIA RESPONSIVE" : "WEBSITE + RESPONSIVE EXPERIENCE"} />
            <div className="ceniza-web-copy-body">
              <h2 id="ceniza-web-title">
                {language === "es" ? "Una web que guía al cliente y lleva cada solicitud al CRM." : "A website that guides the client and sends every inquiry to the CRM."}
              </h2>
              <p>{language === "es" ? "El sitio web funciona como la primera capa del CRM: conecta el catálogo, las fichas de equipos y los proyectos con la captación comercial. Cuando una persona escribe por WhatsApp o completa el formulario, el sistema conserva la página de origen, el servicio consultado y sus datos de contacto. El equipo recibe un lead más completo y puede preparar la cotización sin reconstruir la conversación." : "The website works as the first layer of the CRM, connecting the catalog, equipment pages and projects with lead capture. When someone writes through WhatsApp or submits the form, the system preserves the source page, the service viewed and their contact details. The team receives a more complete lead and can prepare the quote without rebuilding the conversation."}</p>

              <ul className="ceniza-web-capabilities" aria-label={language === "es" ? "Capacidades de la página web" : "Website capabilities"}>
                <li>{language === "es" ? "Diseño web" : "Web design"}</li>
                <li>UX/UI</li>
                <li>{language === "es" ? "Conexión CRM" : "CRM connection"}</li>
              </ul>

              <a className="ceniza-section-link is-website ceniza-web-bridge-link" href="https://www.cenizaproducciones.com/" target="_blank" rel="noreferrer">
                <span>{language === "es" ? "Ver página web" : "View website"}</span><span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <figure className="ceniza-web-composition">
            <img className="ceniza-web-device-scene" src="/case-ceniza-web-device-scene-transparent.webp" alt={language === "es" ? "Combo Creator Pro de Ceniza en computador y contacto por WhatsApp o formulario en celular" : "Ceniza Creator Pro bundle on desktop and WhatsApp or form contact on mobile"} loading="lazy" decoding="async" />
          </figure>

          <ol className="ceniza-web-paths" aria-label={language === "es" ? "Recorrido de la página web" : "Website journey"}>
            <li>
              <span>1</span>
              <div><strong>{language === "es" ? "Explorar" : "Explore"}</strong><p>{language === "es" ? "Equipos, combos y proyectos reales." : "Equipment, bundles and real projects."}</p></div>
            </li>
            <li>
              <span>2</span>
              <div><strong>{language === "es" ? "Elegir" : "Choose"}</strong><p>{language === "es" ? "Alquiler o producción completa." : "Rental or full production."}</p></div>
            </li>
            <li>
              <span>3</span>
              <div><strong>{language === "es" ? "Solicitar" : "Request"}</strong><p>{language === "es" ? "WhatsApp o formulario integrado." : "Integrated WhatsApp or form."}</p></div>
            </li>
            <li>
              <span>4</span>
              <div><strong>{language === "es" ? "Continuar" : "Continue"}</strong><p>{language === "es" ? "Lead con contexto dentro del CRM." : "A contextual lead inside the CRM."}</p></div>
            </li>
          </ol>
        </div>
      </section>

      <CenizaAdoptionStrip language={language} />

      <CenizaSecurity language={language} />

      <section className="editorial-case-outcome ceniza-case-outcome">
        <CenizaEyebrow text={text.outcome} threshold={0.4} />
        <div className="ceniza-outcome-summary">
          <h2>{language === "es" ? "La ventaja no fue tener más datos, sino decidir antes." : "The advantage was not having more data, but deciding sooner."}</h2>
          <p>{language === "es" ? "Ceniza pasó de información dispersa a una operación conectada: la web capta cada solicitud con contexto, el CRM ordena el seguimiento y la IA ayuda a anticipar riesgos, proteger ingresos y actuar con mayor claridad." : "Ceniza moved from scattered information to a connected operation: the website captures every inquiry with context, the CRM organizes follow-up and AI helps anticipate risks, protect revenue and act with greater clarity."}</p>
        </div>
        <a className="ceniza-section-link is-outcome" href={CONTACT_WHATSAPP_URL} target="_blank" rel="noreferrer">
          <span>{text.getInTouch}</span><span aria-hidden="true">↗</span>
        </a>
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
          {project.visual === "ceniza" || project.visual === "forty" ? (
            <CenizaEyebrow text={`${text.caseStudy} · ${project.visual === "ceniza" ? "CENIZA" : "40+"}`} className="eyebrow" dot threshold={0.25} />
          ) : (
            <AnimatedEyebrow text={`${text.caseStudy} · ${project.visual === "naval" ? "NAVAL" : project.number}`} className="eyebrow" dot threshold={0.25} />
          )}
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

      <section className="editorial-case-intro" aria-labelledby="case-overview-title">
        <dl className="case-facts">
          <div><dt>{text.project}</dt><dd>{project.name}</dd></div>
          <div><dt>{text.industry}</dt><dd>{project.industry}</dd></div>
          <div><dt>{text.myRole}</dt><dd>{project.role}</dd></div>
        </dl>
        <div>
          {project.visual === "ceniza" || project.visual === "forty" ? <CenizaEyebrow text={text.theProject} threshold={0.42} /> : <AnimatedEyebrow text={text.theProject} className="case-label" threshold={0.42} />}
          <h2 id="case-overview-title">{detail.introTitle}</h2>
          <p>{detail.intro}</p>
        </div>
      </section>

      {project.visual === "ceniza" ? (<>
        <CaseNarrative detail={detail} language={language} />
        <CenizaCaseContent project={project} detail={detail} language={language} />
      </>
      ) : (<>
        <CaseNarrative detail={detail} language={language} compact={project.visual === "naval"} />
        <ExpandedCaseContent project={project} language={language} />
      </>)}

      <a className="case-next" href={nextProject.path} onClick={(event) => onNavigate(event, nextProject.path)}>
        <span aria-label={project.visual === "ceniza" ? text.nextCase : `${text.nextCase} · ${nextProject.number}`}>
          {project.visual === "ceniza" ? <TypewriterText text={text.nextCase} threshold={0.35} rootMargin="0px 0px -7% 0px" /> : `${text.nextCase} · ${nextProject.number}`}
        </span>
        <strong>{nextProject.name}</strong>
        <Arrow />
      </a>
    </main>
  );
}

function ContactPage({ language }) {
  const isEs = language === "es";

  function prepareEmail(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name")?.toString().trim() || (isEs ? "Una persona interesada" : "A potential collaborator");
    const senderEmail = form.get("email")?.toString().trim() || "";
    const idea = form.get("idea")?.toString().trim() || (isEs ? "una nueva idea" : "a new idea");
    const business = form.get("business")?.toString().trim() || "";
    const subject = isEs ? `Nueva idea · ${idea}` : `New idea · ${idea}`;
    const body = isEs
      ? `Hola Diego,\n\nSoy ${name} y quiero conversar contigo sobre esta idea:\n${idea}\n\nSobre el negocio:\n${business}\n\nMi correo: ${senderEmail}\n\nQuedo atento/a.`
      : `Hi Diego,\n\nI'm ${name}, and I would like to talk with you about this idea:\n${idea}\n\nAbout the business:\n${business}\n\nMy email: ${senderEmail}\n\nLooking forward to hearing from you.`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="contact-page" aria-labelledby="contact-page-title">
      <section className="contact-page-hero">
        <div className="contact-page-intro">
          <AnimatedEyebrow text={isEs ? "HABLEMOS DE TU IDEA" : "LET'S TALK ABOUT YOUR IDEA"} className="eyebrow" dot threshold={0.25} />
          <h1 id="contact-page-title">{isEs ? <>Construyamos lo que tu negocio <em>necesita.</em></> : <>Let’s build what your business <em>needs.</em></>}</h1>
          <p>{isEs ? "Cuéntame qué quieres mejorar, conectar o automatizar. Te responderé con una ruta técnica clara y el siguiente paso para llevarla a producción." : "Tell me what you want to improve, connect or automate. I’ll respond with a clear technical route and the next step toward production."}</p>

          <div className="contact-methods" aria-label={isEs ? "Canales de contacto" : "Contact channels"}>
            <a className="contact-method" href={`mailto:${CONTACT_EMAIL}`}>
              <span aria-hidden="true"><SiGmail /></span>
              <div><small>{isEs ? "CORREO DIRECTO" : "DIRECT EMAIL"}</small><strong>{CONTACT_EMAIL}</strong></div>
            </a>
            {CONTACT_WHATSAPP_URL ? (
              <a className="contact-method is-whatsapp" href={CONTACT_WHATSAPP_URL} target="_blank" rel="noreferrer">
                <span aria-hidden="true"><SiWhatsapp /></span>
                <div><small>WHATSAPP</small><strong>{isEs ? "Abrir conversación" : "Start a conversation"}</strong></div>
              </a>
            ) : (
              <div className="contact-method is-whatsapp is-pending" aria-label={isEs ? "WhatsApp pendiente de configurar" : "WhatsApp pending configuration"}>
                <span aria-hidden="true"><SiWhatsapp /></span>
                <div><small>WHATSAPP</small><strong>{isEs ? "Número por confirmar" : "Number to be confirmed"}</strong></div>
                <span aria-hidden="true">—</span>
              </div>
            )}
            <a className="contact-method is-linkedin" href={CONTACT_LINKEDIN} target="_blank" rel="noreferrer">
              <span aria-hidden="true"><FaLinkedinIn /></span>
              <div><small>LINKEDIN</small><strong>{isEs ? "Conectemos profesionalmente" : "Let’s connect professionally"}</strong></div>
            </a>
            <a className="contact-method is-cv" href={CONTACT_CV_URL} download="Diego_Franco_CV.pdf">
              <span aria-hidden="true"><LuFileText /></span>
              <div><small>{isEs ? "PERFIL PROFESIONAL" : "PROFESSIONAL PROFILE"}</small><strong>{isEs ? "Descargar CV" : "Download CV"}</strong></div>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={prepareEmail}>
          <header>
            <h2>{isEs ? "Cuéntame tu idea" : "Tell me your idea"}</h2>
          </header>

          <div className="contact-form-grid">
            <label>
              <span>{isEs ? "Nombre" : "Name"}</span>
              <input name="name" type="text" autoComplete="name" placeholder={isEs ? "¿Cómo te llamas?" : "What’s your name?"} required />
            </label>
            <label>
              <span>{isEs ? "Correo" : "Email"}</span>
              <input name="email" type="email" autoComplete="email" placeholder="tu@empresa.com" required />
            </label>
            <label className="is-wide">
              <span>{isEs ? "Tu idea" : "Your idea"}</span>
              <input name="idea" type="text" placeholder={isEs ? "¿Qué quieres crear o mejorar?" : "What would you like to create or improve?"} required />
            </label>
            <label className="is-wide">
              <span>{isEs ? "Cuéntame un poco más sobre el negocio" : "Tell me a little more about the business"}</span>
              <textarea name="business" rows="4" placeholder={isEs ? "¿A qué se dedica el negocio y qué te gustaría mejorar?" : "What does the business do, and what would you like to improve?"} required />
            </label>
          </div>

          <footer>
            <button className="contact-submit" type="submit">{isEs ? "Enviar" : "Send"}</button>
          </footer>
        </form>
      </section>

      <section className="contact-page-process" aria-label={isEs ? "Proceso de contacto" : "Contact process"}>
        <article>
          <div><span>01</span><i aria-hidden="true"><LuClipboardList /></i></div>
          <strong>{isEs ? "Me cuentas la idea" : "You share the idea"}</strong>
          <p>{isEs ? "Nombre, contexto y lo que quieres construir o mejorar." : "Your name, context and what you want to build or improve."}</p>
        </article>
        <article>
          <div><span>02</span><i aria-hidden="true"><LuTarget /></i></div>
          <strong>{isEs ? "Entiendo el negocio" : "I understand the business"}</strong>
          <p>{isEs ? "Identifico la necesidad, los usuarios y el resultado esperado." : "I identify the need, users and expected outcome."}</p>
        </article>
        <article>
          <div><span>03</span><i aria-hidden="true"><LuSparkles /></i></div>
          <strong>{isEs ? "Diseñamos una ruta" : "We shape a path"}</strong>
          <p>{isEs ? "Recibes un siguiente paso concreto para convertir la idea en sistema." : "You get a concrete next step to turn the idea into a system."}</p>
        </article>
      </section>
    </main>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const [language, setLanguage] = useState("en");
  const text = copy[language];
  const projectOrder = { ceniza: 0, naval: 1, forty: 2 };
  const localizedProjects = projects
    .map((project) => localizeProject(project, language))
    .sort((a, b) => projectOrder[a.visual] - projectOrder[b.visual])
    .map((project, index) => ({ ...project, number: String(index + 1).padStart(2, "0") }));

  useEffect(() => {
    const handleNavigation = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  const activeProject = localizedProjects.find((project) => project.path === currentPath);

  useEffect(() => {
    document.documentElement.lang = language;
    const pageTitle = activeProject
      ? `${activeProject.name} · ${text.documentCase} | Diego Franco`
      : currentPath === "/perfil"
        ? text.documentProfile
        : currentPath === "/contacto"
          ? `${text.navContact} | Diego Franco`
        : text.documentPortfolio;
    const pageDescription = activeProject
      ? activeProject.description
      : currentPath === "/perfil"
        ? text.profileLead
        : currentPath === "/contacto"
          ? text.contactCopy
          : text.heroDescription;
    const socialImage = activeProject
      ? `${SITE_URL}${projectVisualAssets[activeProject.visual]}`
      : currentPath === "/perfil"
        ? `${SITE_URL}/diego-franco-cutout-final.webp`
        : `${SITE_URL}/hero-mint-cloud.webp`;

    document.title = pageTitle;
    const canonicalUrl = `${SITE_URL}${currentPath === "/" ? "/" : currentPath}`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", pageDescription);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", pageTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", pageDescription);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);
    document.querySelector('meta[property="og:image"]')?.setAttribute("content", socialImage);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", pageTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", pageDescription);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute("content", socialImage);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
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
          <a href="/contacto" onClick={(event) => navigate(event, "/contacto")}>{text.navContact}</a>
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

      {currentPath === "/perfil" ? <ProfilePage language={language} /> : currentPath === "/contacto" ? <ContactPage language={language} /> : activeProject ? (
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
              <SoftButton href="/proyectos/ceniza" primary onClick={(event) => navigate(event, "/proyectos/ceniza")}>
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
            <img src="/hero-mint-cloud.webp" alt="" />
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
            <SoftButton href={CONTACT_WHATSAPP_URL} primary external>
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
