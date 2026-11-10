import { LuArrowRight, LuHammer, LuClipboardList, LuSearch, LuShieldCheck, LuWorkflow } from 'react-icons/lu';
import { BsOpenai } from 'react-icons/bs';
import { SiNodedotjs, SiJavascript } from 'react-icons/si';
import CenizaWebIntegrations from "./CenizaWebIntegrations";
import WebsiteSearchPanel from './WebsiteSearchPanel';
import CenizaWebWorkflow from './CenizaWebWorkflow';
import CenizaWebAutomation from './CenizaWebAutomation';
import CaseArtworkFilters from './CaseArtworkFilters';
import { productThemeStyle } from './productThemes';
import { getCaseHeaderArtwork } from './caseHeaderArtwork';
import ProductClosing from './ProductClosing';
import AgentCenizaExperience from './AgentCenizaExperience';
import { productVisualAssets as productLetters, productArtwork } from "./productVisuals";
import { productCaseDetails } from "./productCaseDetails";
import { useEffect, useRef, useState } from 'react';
import { productCatalog, statusLabels } from './productCatalog';


const websiteWorkflow = {
  'naval-campaigns': {
    es: ['Elige canal, objetivo, audiencia y fechas.', 'Usa el catálogo y los documentos aprobados como contexto para el mensaje y la pieza.', 'Ajusta el contenido y revisa cada canal de forma independiente.', 'Conserva borradores y organiza las fechas de revisión en el calendario.'],
    en: ['Choose channel, goal, audience and dates.', 'Use the catalog and approved documents as context for messages and creative.', 'Refine content and review each channel independently.', 'Keep drafts and organize review dates in the calendar.'],
  },
  '40plus-commerce': {
    es: ['La portada presenta el colágeno y su lugar en la rutina diaria.', 'El sitio muestra cómo prepararlo y qué incluye cada presentación.', 'La ficha reúne imágenes, precio y cantidad para preparar el pedido.', 'El producto elegido y la intención de compra pasan a la conversación de WhatsApp.'],
    en: ['The homepage introduces the collagen product and its place in a daily routine.', 'The site shows how to prepare it and what each option includes.', 'The product page brings together images, price and quantity to prepare the order.', 'The selected product and purchase intent carry over into WhatsApp.'],
  },
  'naval-b2b': {
    es: ['El visitante parte de su sector o de una necesidad de limpieza.', 'El catálogo muestra los usos y aplicaciones de cada opción.', 'La documentación técnica permite confirmar si el producto encaja.', 'El asistente orienta la consulta con el contexto del catálogo.'],
    en: ['Visitors start with their industry or cleaning needs.', 'The catalog shows the uses and applications of each option.', 'Technical documentation helps confirm whether the product fits.', 'The assistant guides the inquiry using catalog context.'],
  },
  'bernardo-portfolio': {
    es: ['La portada presenta el enfoque de producción escénica y visual.', 'El visitante elige una pieza del portafolio según su interés.', 'Las imágenes y los videos muestran el resultado de cada proyecto.', 'El sitio ofrece una vía de contacto para nuevas colaboraciones.'],
    en: ['The homepage introduces the approach to stage and visual production.', 'Visitors choose a portfolio piece based on their interests.', 'Images and videos show the result of each project.', 'The site provides a way to get in touch about collaborations.'],
  },
  'sophia-portfolio': {
    es: ['Definir qué quiere comunicar Sophia y a quién se dirige.', 'Seleccionar trabajos y ordenar la información de cada caso.', 'Diseñar la navegación, la jerarquía visual y la experiencia móvil.', 'Construir el sitio y revisar el recorrido antes de publicar.'],
    en: ['Define what Sophia wants to communicate and who the site is for.', 'Select work and organize the information for each case.', 'Design navigation, visual hierarchy and the mobile experience.', 'Build the site and review the experience before launch.'],
  },
};

const workflowIcons = [LuSearch, LuClipboardList, LuWorkflow, LuShieldCheck];

const value = (item, language) => item?.[language] || item?.es;
export function ProductCatalog({ language, navigate, Grid, Visual }) {
  const es = language === 'es';
  const [filter, setFilter] = useState('all');
  const shownProducts = productCatalog.filter(product => filter === 'all' || product.category === filter);
  return <section className="projects-section product-catalog" id="trabajo" aria-labelledby="projects-title">
    <div className="section-heading"><div><p className="eyebrow"><span className="availability-dot" />{es ? 'LO QUE CONSTRUYO' : 'WHAT I BUILD'}</p><h2 id="projects-title">{es ? 'Productos.' : 'Products.'}</h2></div><p className="section-note">{String(productCatalog.length).padStart(2, '0')} {es ? 'PRODUCTOS Y EXPERIENCIAS' : 'PRODUCTS & EXPERIENCES'}</p></div>
    <div className="catalog-filters" role="group" aria-label={es ? 'Filtrar productos' : 'Filter products'}>{[
      ['all', es ? 'Todos' : 'All', productCatalog.length],
      ['fullstack', 'Full stack', productCatalog.filter(p => p.category === 'fullstack').length],
      ['agents', es ? 'Agentes' : 'Agents', productCatalog.filter(p => p.category === 'agents').length],
      ['website', 'Websites', productCatalog.filter(p => p.category === 'website').length],
    ].map(([id,label,count]) => <button key={id} type="button" aria-pressed={filter===id} onClick={()=>setFilter(id)}><span>{label}</span><span className="catalog-filter-count">{count}</span></button>)}</div>
    <div className="catalog-group"><Grid key={filter}>{shownProducts.map(product=><a className="project-card catalog-product" href={product.casePath || '/productos/'+product.id} onClick={e=>navigate(e,product.casePath || '/productos/'+product.id)} key={product.id} style={productThemeStyle(product.id)} aria-label={product.cardName || product.name}>
      <div className="catalog-product-top"><span className={'product-status is-'+product.status}>{value(statusLabels[product.status],language)}</span></div>
      <Visual visual={product.visual} label={product.cardName || product.name} mark={product.mark} />
      <div className="catalog-product-copy"><p>{value(product.cardSummary || product.summary,language)}</p></div>
    </a>)}</Grid></div>

  </section>;
}

export function ProductPage({ product, language, navigate, contactHref, commerceDetails, commerceAutomation, commerceIntegrations }) {
  const es=language==='es';
  const dialogRef=useRef(null);
  const pageRef=useRef(null);
  const [zoom,setZoom]=useState(false);
  useEffect(()=>{
    const root=pageRef.current;
    const nodes=[...root.querySelectorAll('h1,h2,.product-shot,.new-case-path li')];
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('case-is-visible');observer.unobserve(entry.target);}}),{threshold:.08});
    nodes.forEach(n=>{n.classList.add('case-soft-reveal');observer.observe(n);});
    return ()=>{observer.disconnect();nodes.forEach(n=>n.classList.remove('case-soft-reveal','case-is-visible'));};
  },[product.id,language]);
  useEffect(()=>{
    if(!zoom)return;
    const d=dialogRef.current, previous=document.body.style.overflow;
    d.showModal();document.body.style.overflow='hidden';
    return ()=>{d.close();document.body.style.overflow=previous;};
  },[zoom]);
  const next=productCatalog[(productCatalog.indexOf(product)+1)%productCatalog.length];
  const profile = productCaseDetails[product.id];
  const accent = profile?.accent || '#91b69b';
  const dark = profile?.dark || '#232b24';
  const headerArtwork = getCaseHeaderArtwork(product.category, product.id) || productArtwork[product.visual];
  const website = product.category === 'website';
  const agent = product.category === 'agents';
  const navalWeb = product.id === 'naval-b2b';
  const cenizaWeb = product.id === 'ceniza-web';
  const navalAgent = product.id === 'naval-erp-agent';
  const sharedAgentExperience = product.id === 'ceniza-agent' || navalAgent;
  const gallery = commerceDetails
    ? [
      ...[0, 2].map(index => {
        const screen = commerceDetails.screens[index];
        return [screen.image, { [language]: screen.title }];
      }),
      ...commerceDetails.mobileImages.map(screen => [screen.src, { [language]: screen.label }, 'mobile']),
    ]
    : profile?.gallery || (product.image ? [[product.image, product.summary]] : []);
  const journey = value(profile?.journey, language) || (es ? ['Descubrir el producto', 'Revisar las opciones', 'Elegir el producto', 'Continuar por WhatsApp'] : ['Discover the product', 'Review the options', 'Choose the product', 'Continue on WhatsApp']);
  const workflowDetails = value(websiteWorkflow[product.id], language);
  const narrative = profile?.story
    ? profile.story.map(entry => value(entry, language))
    : commerceDetails?.story?.map(entry => [entry.label, entry.title, entry.text]);
  const outcome = value(profile?.outcome, language) || commerceDetails?.outcomeTitle || product.name;
  const capabilities = commerceDetails?.metrics || value(profile?.capabilities, language) || (cenizaWeb ? (es ? [
    { value: 'UX', label: 'Recorrido de cotización', note: 'El catálogo conecta cada equipo con sus opciones de alquiler.' },
    { value: 'UI', label: 'Sistema visual', note: 'La fotografía y la tipografía mantienen una identidad común.' },
    { value: 'WEB', label: 'Diseño adaptable', note: 'Las fichas, los combos y el formulario se ajustan a cada pantalla.' },
    { value: 'AUTO', label: 'Solicitudes conectadas', note: 'El formulario envía los datos del proyecto al CRM.' },
  ] : [
    { value: 'UX', label: 'Quote journey', note: 'The catalog connects equipment to rental options.' },
    { value: 'UI', label: 'Visual system', note: 'Photography and typography give the website a consistent identity.' },
    { value: 'WEB', label: 'Responsive design', note: 'Equipment pages, bundles and the form adapt to each screen.' },
    { value: 'AUTO', label: 'Connected inquiries', note: 'The form sends project details to the CRM.' },
  ]) : (value(product.features, language) || []).map((label, index) => ({ value: String(index + 1).padStart(2, '0'), label })));
  const capabilityCards = <div className="ceniza-metrics ceniza-site-capabilities">
    {capabilities.map(({ value: code, label, note }) => <article key={label}><strong>{code}</strong><h4>{label}</h4>{note && <p>{note}</p>}</article>)}
  </div>;
  const mobileShots = gallery.filter(([, , device]) => device === 'mobile');
  const renderShot = ([src,caption,device])=><figure className="product-shot" data-device={device} key={src}><button type="button" aria-label={(es?'Ampliar captura: ':'Enlarge screenshot: ')+value(caption,language)} onClick={()=>setZoom({src,caption:value(caption,language)})}>{device !== 'mobile' && <div className="new-case-browser" aria-hidden="true"><i/><i/><i/><span>{product.name}</span><b>↗</b></div>}<img src={src} alt={value(caption,language)} loading="lazy" decoding="async" /></button><figcaption>{value(caption,language)}</figcaption></figure>;
  return <main className="case-study editorial-case product-detail new-product-case" ref={pageRef} key={product.id} data-product={product.id} data-category={product.category} data-visual={product.visual} style={{'--case-accent':accent,'--case-dark':dark,'--case-wash':'#e9ebe2',...productThemeStyle(product.id)}}>
    <CaseArtworkFilters/>
    <a className="case-back-link editorial-case-back-link" href="/#trabajo" onClick={e=>navigate(e,'/#trabajo')}>← {es?'Todos los productos':'All products'}</a>
    <section className="editorial-case-hero" aria-labelledby="product-case-title">
      <div className="editorial-case-copy"><p className="eyebrow"><span className="availability-dot" />{product.type}</p><h1 id="product-case-title">{product.name.split(' ').slice(0,-1).join(' ')}{product.name.includes(' ') ? ' ' : ''}<em>{product.name.split(' ').at(-1)}.</em></h1></div>
      <div className="editorial-case-visual" aria-hidden="true"><span className="editorial-visual-bubble" /><img className="case-category-art" style={{filter:headerArtwork?.filter}} src={headerArtwork?.src || productLetters.ceniza} srcSet={headerArtwork?.srcSet} sizes="(max-width: 680px) 78px, 170px" width={headerArtwork?.width} height={headerArtwork?.height} alt="" decoding="async" /><span className="editorial-case-index">{String(productCatalog.indexOf(product)+1).padStart(2,'0')} / {productCatalog.length}</span></div>
    </section>
    {product.previewOnly ? <section className="project-development" aria-labelledby="project-development-title">
      <span className="project-development-icon"><LuHammer aria-hidden="true" /></span>
      <div>
        <p className="eyebrow">{es ? 'ESTADO DEL PROYECTO' : 'PROJECT STATUS'}</p>
        <h2 id="project-development-title">{value(statusLabels[product.status], language)}</h2>
        <p>{value(product.summary, language)}</p>
      </div>
    </section> : <>
    <dl className="ceniza-hero-facts expanded-hero-facts"><div><dt>{es?'PRODUCTO':'PRODUCT'}</dt><dd>{product.name}</dd></div><div><dt>{es?'ESTADO':'STATUS'}</dt><dd><span className={'product-status is-'+product.status}>{value(statusLabels[product.status],language)}</span></dd></div><div><dt>{es?'MI ROL':'MY ROLE'}</dt><dd>{profile?.role || 'Product Design · Development'}</dd></div></dl>
    {narrative && <section className="case-narrative is-ceniza new-case-story" aria-label={es ? 'Narrativa del proyecto' : 'Project narrative'}>
      {narrative.map(([label, title, copy], index) => <article key={label}><span>{index + 1}</span><p className="case-label">{label}</p><h2>{title}</h2><p>{copy}</p></article>)}
    </section>}
    {sharedAgentExperience ? <AgentCenizaExperience profile={profile} language={language} setZoom={setZoom} naval={navalAgent} pending={value(product.pending, language)} /> : <>
      <section className={`agent-integrated new-case-gallery category-experience${!website && !agent ? ' ceniza-crm-section' : ''}`} aria-labelledby="case-experience-title">
        <header>
          <div>
            <p className="eyebrow">{profile?.planned ? (es ? 'EXPERIENCIA PROPUESTA' : 'PROPOSED EXPERIENCE') : website ? (es ? 'LA WEB EN ACCIÓN' : 'THE WEBSITE IN ACTION') : agent ? (es ? 'EL AGENTE EN ACCIÓN' : 'THE AGENT IN ACTION') : (es ? 'EL SISTEMA EN ACCIÓN' : 'THE SYSTEM IN ACTION')}</p>
            <h2 id="case-experience-title">{outcome}</h2>
          </div>
          <p>{value(product.summary, language)}</p>
        </header>
        {gallery.length > 0 && <div className="agent-device-stage ceniza-site-stage">
          <div className="ceniza-site-desktop">{gallery.filter(([, , device]) => device !== 'mobile').map(renderShot)}</div>
          {website && capabilityCards}
          {mobileShots.length > 0 && <div className="ceniza-site-mobile">
            <div>
              <p className="eyebrow">{es ? 'EXPERIENCIA MÓVIL' : 'MOBILE EXPERIENCE'}</p>
              <h3>{commerceDetails?.mobileTitle || value(profile?.mobileTitle, language) || (es ? 'Del equipo a la cotización.' : 'From equipment to quote.')}</h3>
              <p>{commerceDetails?.mobileCopy || value(profile?.mobileCopy, language) || (es ? 'Cuéntanos qué necesitas en el formulario, cotiza un equipo desde su ficha o descubre qué incluyen los combos de iluminación.' : 'Tell us what you need in the contact form, request a quote from an equipment page, or see what the lighting bundles include.')}</p>
            </div>
            <div className="ceniza-site-phones">{mobileShots.map(renderShot)}</div>
          </div>}
        </div>}
        {(!website || gallery.length === 0) && <section className="category-capabilities" aria-labelledby="case-capabilities-title">
          <p className="eyebrow">{es ? 'ALCANCE' : 'SCOPE'}</p>
          <h3 id="case-capabilities-title">{es ? 'Qué incluye la experiencia.' : 'What the experience includes.'}</h3>
          {capabilityCards}
        </section>}
      </section>
      {website && <WebsiteSearchPanel productId={product.id} language={language} />}
      {agent && <section className="agent-value-panel">
        <div><p className="eyebrow">{es ? 'POR QUÉ UN AGENTE' : 'WHY AN AGENT'}</p><h2>{outcome}</h2></div>
        <div><h3>{es ? 'Estado y alcance' : 'Status and scope'}</h3><p>{value(product.scope, language)}</p></div>
        {product.pending && <div><h3>{es ? 'Próxima etapa' : 'Next stage'}</h3><p>{value(product.pending, language).join(' · ')}</p></div>}
      </section>}
      {cenizaWeb ? <CenizaWebWorkflow es={es}><CenizaWebAutomation es={es} setZoom={setZoom} /></CenizaWebWorkflow> : <section className={`agent-workflow agent-workflow-compact${website ? ' website-workflow' : ''}`} aria-labelledby="category-workflow-title">
        <header><p className="eyebrow">WORKFLOW</p><h2 id="category-workflow-title">{commerceDetails ? (es ? 'Del descubrimiento al pedido.' : 'From discovery to order.') : (es ? 'De la intención al siguiente paso.' : 'From intent to the next step.')}</h2><p>{value(product.scope, language)}</p></header>
        <ol className="agent-workflow-steps">{journey.map((step, index) => {
          const Icon = workflowIcons[index % workflowIcons.length];
          return <li key={step}><div className="agent-step-icon"><Icon aria-hidden="true" /></div><span className="agent-step-number">{String(index + 1).padStart(2, '0')}</span><h3>{step}</h3>{workflowDetails?.[index] && <p>{workflowDetails[index]}</p>}{index < journey.length - 1 && <LuArrowRight className="agent-step-arrow" aria-hidden="true" />}</li>;
        })}</ol>
        {product.id === 'naval-campaigns' && <div className="agent-tool-strip"><p>{es ? 'HERRAMIENTAS UTILIZADAS' : 'TOOLS USED'}</p><ul>{[[BsOpenai,'OpenAI',es ? 'Texto e imágenes' : 'Text and images'],[SiNodedotjs,'Node.js',es ? 'API del asistente' : 'Assistant API'],[SiJavascript,'JavaScript',es ? 'Interfaz y estado por canal' : 'Interface and channel state']].map(([Icon,name,copy])=><li key={name}><Icon aria-hidden="true"/><div><strong>{name}</strong><p>{copy}</p></div></li>)}</ul><p>{es ? 'El equipo revisa y aprueba. La conexión de destinatarios y proveedores de envío sigue pendiente.' : 'The team reviews and approves. Recipient and delivery-provider connections remain pending.'}</p></div>}
        {navalWeb && <div className="agent-tool-strip">
          <p>{es ? 'CANALES DE ATENCIÓN' : 'SUPPORT CHANNELS'}</p>
          <ul>
            <li><LuWorkflow aria-hidden="true" /><strong>{es ? 'Asistente del catálogo' : 'Catalog assistant'}</strong></li>
            <li><LuClipboardList aria-hidden="true" /><strong>{es ? 'Fichas técnicas y preguntas frecuentes' : 'Technical sheets and FAQs'}</strong></li>
            <li><LuArrowRight aria-hidden="true" /><strong>{es ? 'WhatsApp y correo comercial' : 'WhatsApp and sales email'}</strong></li>
          </ul>
        </div>}
        {commerceAutomation}
      </section>}
      {(cenizaWeb || navalWeb) && <CenizaWebIntegrations language={language} naval={navalWeb} />}
      {commerceIntegrations}
    </>}
    <ProductClosing product={product} profile={commerceDetails ? { outcome: { [language]: outcome } } : profile} language={language} navigate={navigate} contactHref={contactHref}/>
    <a className="case-next" href={next.casePath||'/productos/'+next.id} onClick={e=>navigate(e,next.casePath||'/productos/'+next.id)}><span>{es?'Siguiente producto':'Next product'}</span><strong>{next.name}</strong><span className="arrow-icon" aria-hidden="true">→</span></a>
    <dialog ref={dialogRef} className="case-image-preview" aria-label={es?'Captura ampliada':'Enlarged screenshot'} onCancel={()=>setZoom(false)} onClose={()=>setZoom(false)} onClick={e=>{if(e.target===e.currentTarget)setZoom(false);}}>{zoom&&<><button type="button" autoFocus className="case-preview-close" aria-label={es?'Cerrar captura':'Close screenshot'} onClick={()=>setZoom(false)}>✕</button><figure><img src={zoom.src} alt={zoom.caption}/><figcaption>{zoom.caption}</figcaption></figure></>}</dialog>
    </>}
  </main>;
}
