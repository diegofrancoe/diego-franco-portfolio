import { useEffect, useRef, useState } from "react";
import { BsOpenai } from "react-icons/bs";
import { SiMake, SiN8N, SiNextdotjs, SiReact, SiSupabase, SiTypescript, SiVercel } from "react-icons/si";

const projects = [
  {
    number: "01",
    name: "Ceniza",
    type: "WEBSITE + CRM",
    description:
      "A conversion-focused web platform connecting services, product discovery, WhatsApp and CRM follow-up in one clear flow.",
    tags: ["WEB PLATFORM", "WHATSAPP", "CRM", "UX/UI"],
    path: "/proyectos/ceniza",
    visual: "ceniza",
    headline: "A clearer path from discovery to conversation.",
    industry: "Creative production + equipment rental",
    role: "Product strategy · UX/UI · CRM flow",
    brief:
      "Ceniza needed a digital home that could explain its offer with clarity and turn interest into a useful commercial conversation. The experience had to connect content, services and products without making visitors choose between disconnected paths.",
    challenge:
      "Services, product discovery, WhatsApp conversations and customer follow-up needed to feel like one continuous journey instead of separate touchpoints.",
    solution:
      "I shaped a conversion-focused web experience that gives every service and product a clear place, guides visitors toward the right action and carries each conversation into an organized CRM follow-up.",
    outcome:
      "A focused digital journey where discovery, conversation and commercial follow-up work as one connected system.",
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
    type: "BRAND WEBSITE + PRODUCT EXPERIENCE",
    description:
      "A responsive product website that turns collagen education, daily-use content and product discovery into one calm, coherent journey.",
    tags: ["WEBSITE", "PRODUCT STORY", "MOBILE UX", "UX/UI"],
    path: "/proyectos/40-plus",
    visual: "forty",
    headline: "A product story designed as a daily ritual.",
    industry: "Wellness + direct-to-consumer",
    role: "Web strategy · UX/UI · Responsive experience",
    brief:
      "40+ needed a focused website where product education and a warm brand story could support the same journey. The goal was to make the collagen easy to understand, easy to imagine as a daily ritual and comfortable to explore on any screen.",
    challenge:
      "Product details, ways to use it and the emotional story of the brand had to feel like one experience instead of separate content blocks.",
    solution:
      "I designed a responsive product website that connects the home story, detailed product information and practical daily-use content through one consistent visual system.",
    outcome:
      "A clear product experience that lets people discover 40+, understand it and picture it in their routine from desktop or mobile.",
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
      "An AI-powered ERP connecting sales, production, purchasing, logistics, finance and reporting — integrated with a B2B website, chatbot and automated customer workflows.",
    tags: ["ERP", "AI COPILOT", "AUTOMATION", "B2B INTEGRATION"],
    path: "/proyectos/naval",
    visual: "naval",
    headline: "One operational core for a connected business.",
    industry: "Manufacturing + B2B operations",
    role: "System design · ERP UX/UI · AI automation",
    brief:
      "Naval needed more than a new interface. Its commercial and operational areas had to work from one connected structure, while the website and automated customer touchpoints remained tied to the same business information.",
    challenge:
      "Sales, production, purchasing, logistics, finance and reporting needed a shared operational structure, with customer-facing tools connected to the same information.",
    solution:
      "I brought the operation into an AI-powered ERP and connected it with a B2B website, chatbot and automated workflows so teams can work from the same source of truth.",
    outcome:
      "A connected business system that reduces handoffs, keeps information in context and supports clearer day-to-day decisions.",
    insights: [
      "Operational information was valuable only if every area could see the same current status.",
      "Commercial demand needed a direct connection to production, purchasing and delivery planning.",
      "AI and automation had to support real workflows rather than operate as separate tools.",
    ],
    system: [
      { label: "Centralize", title: "A shared operational core", text: "The ERP structures sales, production, purchasing, logistics, finance and reporting in one system." },
      { label: "Connect", title: "Demand into operations", text: "The B2B website and chatbot bring customer context into the same workflows used by internal teams." },
      { label: "Assist", title: "Automation in the flow", text: "Automated steps and AI assistance help teams act on information without creating another disconnected layer." },
    ],
    flow: ["Capture demand", "Plan and produce", "Coordinate logistics", "Report and improve"],
  },
];

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
    title: <>From atmosphere<br />to <em>qualified lead.</em></>,
    introTitle: "A visual catalog that starts the right conversation.",
    intro:
      "The website gives Ceniza one clear place for its studio, equipment catalog, production combos and portfolio. Each path ends with useful context for WhatsApp or the project form, so the team can continue the conversation inside an organized CRM flow.",
    desktopUrl: "cenizaproducciones.com",
    desktopImage: "/case-ceniza-desktop.png",
    mobileImages: [
      { src: "/case-ceniza-mobile-1.png", label: "Studio" },
      { src: "/case-ceniza-mobile-2.png", label: "Catalog" },
      { src: "/case-ceniza-mobile-3.png", label: "Project form" },
    ],
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
    outcomeTitle: "A website that keeps the visual identity and the sales process connected.",
  },
  forty: {
    accent: "#f15f31",
    dark: "#12514e",
    wash: "#f4ecd7",
    title: <>A product story<br />built as a <em>ritual.</em></>,
    introTitle: "One clear story for product, purpose and daily use.",
    intro:
      "40+ explains hydrolyzed collagen through a focused website: a memorable product introduction, practical information and simple ways to make it part of a daily routine. The visual language stays warm and consistent from the home page to the product detail.",
    desktopUrl: "cuarentamas.com",
    desktopImage: "/case-40plus-desktop.png",
    mobileImages: [
      { src: "/case-40plus-mobile-1.png", label: "Home" },
      { src: "/case-40plus-mobile-2.png", label: "Product" },
      { src: "/case-40plus-mobile-3.png", label: "Daily ritual" },
    ],
    designTitle: "The same narrative, paced for every screen.",
    designCopy:
      "The home page builds recognition, the product page answers what it is, and the ritual content shows how it fits into everyday life. On mobile, packaging, key facts and calls to action stay visible without losing the character of the brand.",
    notes: ["Distinctive product launch", "Clear information hierarchy", "Mobile-first content rhythm"],
    workflowTitle: "Every page supports one continuous product journey.",
    workflowCaption: "Brand discovery → product clarity → practical next step",
    workflow: [
      { position: "start", icon: "◎", title: "Discovery", meta: "Content · direct" },
      { position: "site", icon: "W", title: "Home", meta: "Brand promise" },
      { position: "branch-top", icon: "40", title: "Product", meta: "Details · trust" },
      { position: "branch-bottom", icon: "+", title: "Ritual", meta: "Ways to use it" },
      { position: "system", icon: "↗", title: "Action", meta: "Explore · contact" },
      { position: "end", icon: "✓", title: "Continuity", meta: "Useful content" },
    ],
    outcomeTitle: "A compact website that makes the product easy to recognize, understand and remember.",
  },
  naval: {
    accent: "#3154b9",
    dark: "#233f98",
    wash: "#eef1f8",
    title: <>B2B demand,<br />connected to <em>operations.</em></>,
    introTitle: "A public catalog backed by an operational core.",
    intro:
      "Naval presents its professional cleaning portfolio by product line and business sector, then guides companies toward advice, quotation and recurring supply. Behind that experience, the ERP connects commercial demand with inventory, purchasing, production, logistics, finance and reporting.",
    desktopUrl: "productosnaval.com",
    desktopImage: "/case-naval-desktop.png",
    mobileImages: [
      { src: "/case-naval-mobile-1.png", label: "Company" },
      { src: "/case-naval-mobile-2.png", label: "Catalog" },
      { src: "/case-naval-mobile-3.png", label: "Product" },
    ],
    designTitle: "Customers see a clear offer; teams receive actionable demand.",
    designCopy:
      "The website helps hotels, restaurants, schools and distributors find products by line or sector. Product information and the advisory chatbot create a cleaner handoff into sales, while the ERP keeps the operational response in the same system.",
    notes: ["B2B catalog by need", "Assisted product discovery", "ERP-connected operation"],
    workflowTitle: "The website opens the conversation; the ERP carries the operation.",
    workflowCaption: "B2B demand → sales order → supply and operational control",
    workflow: [
      { position: "start", icon: "B", title: "B2B need", meta: "Sector · product" },
      { position: "site", icon: "W", title: "Website", meta: "Catalog · advisor" },
      { position: "branch-top", icon: "↗", title: "Sales", meta: "Quote · order" },
      { position: "branch-bottom", icon: "AI", title: "Chatbot", meta: "Guided request" },
      { position: "system", icon: "E", title: "ERP", meta: "Shared operation" },
      { position: "end", icon: "✓", title: "Delivery", meta: "Supply · report" },
    ],
    outcomeTitle: "A B2B experience where the digital catalog and the daily operation work as one system.",
  },
};

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
    description: "Embed copilots, intelligent assistance and context-aware actions into the systems teams already use.",
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

function ResultsMap({ isVisible }) {
  return (
    <section className="results-section" aria-labelledby="results-title">
      <header className="results-intro">
        <div className="results-intro-heading">
          <p className="eyebrow" aria-label="What I create"><span className="availability-dot loading-dot" /><TypewriterText text="WHAT I CREATE" threshold={0.2} /></p>
          <h2 id="results-title">Built to work<br /><em>as one.</em></h2>
        </div>
        <p>I connect platforms, workflows and AI to make everyday operations clearer, faster and easier to manage.</p>
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

        {profileResults.map((result, index) => (
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

function ProfilePage() {
  const [connectionsVisible, setConnectionsVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setConnectionsVisible(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <main className={`profile-page${connectionsVisible ? " connections-visible" : ""}`} id="inicio">
      <section className="about-section about-page" aria-labelledby="profile-title">
        <article className="about-copy">
          <p className="eyebrow" aria-label="Profile"><span className="availability-dot loading-dot" /><TypewriterText text="PROFILE" /></p>
          <h1 id="profile-title">Ideas into <span>systems.</span></h1>
          <p className="profile-lead">
            I’m Diego Franco, an AI Solutions Engineer who helps businesses turn complex operations
            into clear, connected digital products. By combining product strategy, UX/UI design and
            applied AI, I build practical solutions that drive clarity, efficiency and measurable impact.
          </p>
          <SoftButton href="/#contacto" primary>Let’s talk <Arrow /></SoftButton>
        </article>

        <div className="profile-visual" aria-label="Retrato de Diego Franco conectado al sistema visual">
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
        <div className="profile-connector-resources" aria-label="Profile resources">
          <div className="profile-connector-resource" aria-disabled="true">
            <span className="profile-connector-resource-node" aria-hidden="true" />
            <span className="profile-connector-resource-label">Download CV</span>
            <Arrow diagonal />
          </div>
          <div className="profile-connector-resource" aria-disabled="true">
            <span className="profile-connector-resource-node" aria-hidden="true" />
            <span className="profile-connector-resource-label">LinkedIn</span>
            <Arrow diagonal />
          </div>
        </div>
      </div>

      <ResultsMap isVisible={connectionsVisible} />

      <section className="profile-faq" aria-labelledby="profile-faq-title">
        <header className="profile-faq-header">
          <p className="eyebrow" id="profile-faq-title" aria-label="FAQ">
            <span className="availability-dot loading-dot" />
            <TypewriterText text="FAQ" threshold={0.2} />
          </p>
        </header>
        <div className="profile-faq-list">
          {profileFaqs.map((faq) => (
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

function CaseWorkflow({ project, detail }) {
  return (
    <figure className="case-workflow-canvas" aria-label={`Workflow del proyecto ${project.name}`}>
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

function ProjectDetailPage({ project, onNavigate }) {
  const projectIndex = projects.findIndex((item) => item.path === project.path);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const detail = caseStudyDetails[project.visual];
  const caseStyle = {
    "--case-accent": detail.accent,
    "--case-dark": detail.dark,
    "--case-wash": detail.wash,
  };

  return (
    <main className={`case-study editorial-case case-study-${project.visual}`} style={caseStyle}>
      <section className="editorial-case-hero" aria-labelledby="case-title">
        <div className="editorial-case-copy">
          <a className="case-back-link" href="/#trabajo" onClick={(event) => onNavigate(event, "/#trabajo")}>
            <span aria-hidden="true">←</span> All projects
          </a>
          <p className="eyebrow"><span className="availability-dot loading-dot" />Case study · {project.number}</p>
          <h1 id="case-title">{detail.title}</h1>
          <p>{project.description}</p>
          <ul className="editorial-case-tags" aria-label="Project scope">
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
          <div><dt>Project</dt><dd>{project.name}</dd></div>
          <div><dt>Industry</dt><dd>{project.industry}</dd></div>
          <div><dt>My role</dt><dd>{project.role}</dd></div>
        </dl>
        <div>
          <p className="case-label">The project</p>
          <h2 id="case-overview-title">{detail.introTitle}</h2>
          <p>{detail.intro}</p>
        </div>
      </section>

      <figure className="editorial-desktop-showcase">
        <figcaption><span>Desktop experience</span><span>01 / 02</span></figcaption>
        <div className="desktop-browser-frame">
          <div className="desktop-browser-bar" aria-hidden="true"><span /><span /><span /><i>{detail.desktopUrl}</i></div>
          <img src={detail.desktopImage} alt={`Página principal de ${project.name} en escritorio`} loading="lazy" decoding="async" />
        </div>
      </figure>

      <section className="editorial-mobile-showcase" aria-labelledby="case-mobile-title">
        <header>
          <p className="case-label">Responsive experience · 02 / 02</p>
          <h2 id="case-mobile-title">Three views.<br />One clear system.</h2>
        </header>
        <div className="editorial-phone-row">
          {detail.mobileImages.map((screen) => (
            <figure key={screen.src}>
              <div className="editorial-phone-frame">
                <span className="mobile-speaker" aria-hidden="true" />
                <img src={screen.src} alt={`${screen.label} de ${project.name} en celular`} loading="lazy" decoding="async" />
              </div>
              <figcaption>{screen.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="editorial-case-design" aria-labelledby="case-design-title">
        <div className="editorial-design-copy">
          <p className="case-label">Design logic</p>
          <h2 id="case-design-title">{detail.designTitle}</h2>
          <p>{detail.designCopy}</p>
        </div>
        <ul className="editorial-design-notes" aria-label="Key design decisions">
          {detail.notes.map((note, index) => <li key={note}><span>{String(index + 1).padStart(2, "0")}</span>{note}</li>)}
        </ul>
      </section>

      <section className="editorial-workflow-section" aria-labelledby="case-workflow-title">
        <header>
          <p className="eyebrow"><span className="availability-dot" />Connected workflow</p>
          <h2 id="case-workflow-title">{detail.workflowTitle}</h2>
        </header>
        <CaseWorkflow project={project} detail={detail} />
      </section>

      <section className="editorial-case-outcome">
        <p className="case-label">Outcome</p>
        <h2>{detail.outcomeTitle}</h2>
        <p>{project.outcome}</p>
      </section>

      <a className="case-next" href={nextProject.path} onClick={(event) => onNavigate(event, nextProject.path)}>
        <span>Next case study · {nextProject.number}</span>
        <strong>{nextProject.name}</strong>
        <Arrow />
      </a>
    </main>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  const activeProject = projects.find((project) => project.path === currentPath);

  useEffect(() => {
    document.title = activeProject
      ? `${activeProject.name} · Case Study | Diego Franco`
      : currentPath === "/perfil"
        ? "Profile | Diego Franco"
        : "Portafolio | Diego Franco Echverri";
  }, [activeProject, currentPath]);

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
        <a className="wordmark" href="/" onClick={(event) => navigate(event, "/")} aria-label="Diego Franco, volver al inicio">
          DIEGO <span>FRANCO</span><small aria-label="AI Solutions Engineer"><TypewriterText text="AI SOLUTIONS ENGINEER" /></small>
        </a>

        <nav aria-label="Navegación principal">
          <a href="/#trabajo">Projects</a>
          <a href="/perfil" onClick={(event) => navigate(event, "/perfil")}>About</a>
          <a href="/#contacto">Contact</a>
        </nav>

        <SoftButton href="https://github.com/diegofrancoe" external>
          GitHub <Arrow diagonal />
        </SoftButton>
      </header>

      {currentPath === "/perfil" ? <ProfilePage /> : activeProject ? (
        <ProjectDetailPage project={activeProject} onNavigate={navigate} />
      ) : <main id="inicio">
        <section className="hero-panel" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow" aria-label="Portfolio">
              <span className="availability-dot loading-dot" />
              <TypewriterText text="PORTFOLIO" />
            </p>
            <h1 id="hero-title">
              <span>Building intelligent business</span>
              <span>systems where operations,</span>
              <span>data and AI <em>work together.</em></span>
            </h1>
            <div className="hero-description">
              <p>
                From ERP, POS and CRM platforms to AI copilots, workflow automation, API integrations
                and intuitive digital experiences, I turn disconnected tools into intelligent business ecosystems.
              </p>
            </div>
            <div className="hero-actions">
              <SoftButton href="#trabajo" primary>
                View case studies <Arrow />
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
            <p>Systems Design · AI Integration · Automation · API Integration · UX/UI</p>
          </div>
        </section>

        <section className="intro-strip" aria-label="Proceso de trabajo">
          <p className="process-title">How I Work</p>
          <p className="process-flow" aria-label="Discover, Design, Build, Integrate">
            <TypewriterText text="DISCOVER → DESIGN → BUILD → INTEGRATE" />
          </p>
        </section>

        <section className="projects-section" id="trabajo" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow" aria-label="Projects"><span className="availability-dot" /><TypewriterText text="PROJECTS" /></p>
              <h2 id="projects-title">Where business<br />meets intelligence</h2>
            </div>
            <p className="section-note" aria-label="03 Case Studies"><TypewriterText text="03 CASE STUDIES" /></p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <a
                className="project-card"
                href={project.path}
                onClick={(event) => navigate(event, project.path)}
                aria-label={`Ver caso de estudio ${project.name}`}
                key={project.name}
              >
                <ProjectVisual visual={project.visual} />
                <div className="project-meta">
                  <span>{project.number}</span>
                  <p>{project.type}</p>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <ul aria-label="Disciplinas">
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="tools-section" aria-labelledby="tools-title">
          <div className="tools-heading">
            <p className="eyebrow" aria-label="Core Stack"><span className="availability-dot" /><TypewriterText text="CORE STACK" /></p>
            <h2 id="tools-title">Tools behind the systems.</h2>
            <p>A focused stack for designing, building and scaling intelligent ecosystems.</p>
          </div>

          <ul className="tools-constellation" aria-label="Tools in my current workflow">
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
            <p className="eyebrow" aria-label="Let's work together"><span className="availability-dot" /><TypewriterText text="LET’S WORK TOGETHER" /></p>
            <h2 id="contact-title">Let’s make business<br />flow.</h2>
          </div>
          <div className="contact-actions">
            <p>Available for digital products, business systems, AI automation and connected experiences.</p>
            <SoftButton href="https://github.com/diegofrancoe" primary external>
              Get in touch <Arrow diagonal />
            </SoftButton>
          </div>
        </section>
      </main>}

      <footer>
        <a className="wordmark" href="/" onClick={(event) => navigate(event, "/")}>DIEGO <span>FRANCO</span></a>
        <p className="footer-portfolio" aria-label="Ideas into systems"><TypewriterText text="IDEAS INTO SYSTEMS" threshold={0.15} rootMargin="0px 0px 8% 0px" /></p>
        <p className="footer-copyright">© 2026</p>
      </footer>
    </div>
  );
}

export default App;
