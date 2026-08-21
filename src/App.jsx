import { useEffect, useRef, useState } from "react";
import { BsOpenai } from "react-icons/bs";
import { SiMake, SiN8N, SiNextdotjs, SiReact, SiSupabase, SiTypescript, SiVercel } from "react-icons/si";

const projects = [
  {
    number: "01",
    name: "NAVAL ERP",
    type: "AI-POWERED ERP + B2B AUTOMATION",
    description:
      "An AI-powered ERP connecting sales, production, purchasing, logistics, finance and reporting — integrated with a B2B website, chatbot and automated customer workflows.",
    tags: ["ERP", "AI COPILOT", "AUTOMATION", "B2B INTEGRATION"],
    visual: "naval",
  },
  {
    number: "02",
    name: "40+",
    type: "COMMERCE + CUSTOMER EXPERIENCE",
    description:
      "A direct-to-consumer commerce ecosystem connecting product, content, payments, WhatsApp and POS in one customer journey.",
    tags: ["E-COMMERCE", "POS", "WHATSAPP", "UX/UI"],
    url: "https://cuarentamas.com",
    visual: "forty",
  },
  {
    number: "03",
    name: "Ceniza",
    type: "DIGITAL COMMERCE + CRM",
    description:
      "A conversion-focused web platform connecting services, product discovery, WhatsApp and CRM follow-up in one clear flow.",
    tags: ["WEB PLATFORM", "WHATSAPP", "CRM", "UX/UI"],
    url: "https://www.cenizaproducciones.com",
    visual: "ceniza",
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
  naval: "NAVAL ERP",
  forty: "40+",
  ceniza: "Ceniza",
};

function ProjectVisual({ visual, name, url, cta }) {
  const folderContents = (
    <>
      <span className="folder-surface" aria-hidden="true">
        <img src="/project-folder-glass-cropped-v2.png" alt="" />
      </span>
      <span className="folder-label">{projectFolderLabels[visual]}</span>
      {url || visual === "naval" ? (
        <span className="folder-arrow" aria-hidden="true"><svg viewBox="0 0 36 36" focusable="false"><path d="M6 30 30 6M14 6h16v16" /></svg></span>
      ) : cta ? (
        <span className="folder-status">{cta}</span>
      ) : null}
      <span className="folder-monogram" aria-hidden="true">D</span>
    </>
  );

  return (
    <div className={`project-visual ${visual}`}>
      <img src={projectVisualAssets[visual]} alt="" loading="lazy" decoding="async" />
      {url ? (
        <a
          className="project-folder"
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir proyecto ${name}`}
        >
          {folderContents}
        </a>
      ) : (
        <div
          className="project-folder is-disabled"
          role="group"
          aria-label={cta ? `${name}: ${cta}` : name}
        >
          {folderContents}
        </div>
      )}
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
          <div className="about-details" aria-label="Áreas de trabajo">
            <span>Digital product</span>
            <span>AI integration</span>
            <span>Automation</span>
          </div>
        </article>

        <div className="profile-visual" aria-label="Retrato de Diego Franco conectado al sistema visual">
          <svg className="profile-connectors" viewBox="0 0 900 680" preserveAspectRatio="none" aria-hidden="true">
            <g className="profile-circuit profile-circuit-left">
              <path pathLength="1" d="M267 153H420" />
              <path pathLength="1" d="M216 184V280H84V350" />
              <path pathLength="1" d="M84 493V570H255V664" />
            </g>

            <g className="profile-circuit profile-circuit-right">
              <path pathLength="1" d="M560 153H720V320H813V352" />
              <path pathLength="1" d="M813 482V600H710V664" />
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

          <p className="profile-signature" aria-hidden="true">
            <span className="profile-signature-line" />
            <span className="profile-signature-dot" />
            <span className="profile-signature-label">
              <TypewriterText text="STRATEGY, DESIGN & TECHNOLOGY" threshold={0.25} rootMargin="0px" />
            </span>
            <span className="profile-signature-line" />
          </p>
        </div>
      </section>

      <div className="profile-system-handoff">
        <svg className="profile-system-handoff-lines profile-system-handoff-desktop" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path pathLength="1" d="M908 0V50H600" />
          <path pathLength="1" d="M600 50V120" />
          <circle cx="908" cy="50" r="3.5" />
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

function App() {
  const [isProfile, setIsProfile] = useState(() => window.location.pathname === "/perfil");

  useEffect(() => {
    const handleNavigation = () => setIsProfile(window.location.pathname === "/perfil");
    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  function navigate(event, path) {
    event.preventDefault();
    window.history.pushState({}, "", path);
    setIsProfile(path === "/perfil");
    window.scrollTo({ top: 0, behavior: "smooth" });
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

        <SoftButton href="https://github.com/dfeph91-creator" external>
          GitHub <Arrow diagonal />
        </SoftButton>
      </header>

      {isProfile ? <ProfilePage /> : <main id="inicio">
        <section className="hero-panel" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow" aria-label="Portfolio">
              <span className="availability-dot loading-dot" />
              <TypewriterText text="PORTFOLIO" />
            </p>
            <h1 id="hero-title">
              <span>Building intelligent business systems</span>
              <span>where operations, data and AI</span>
              <em>work together.</em>
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
              <article className="project-card" key={project.name}>
                <ProjectVisual visual={project.visual} name={project.name} url={project.url} cta={project.cta} />
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
              </article>
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
            <SoftButton href="https://github.com/dfeph91-creator" primary external>
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
