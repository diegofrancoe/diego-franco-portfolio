import { productVisualAssets as productLetters, productArtwork } from "./productVisuals";
import { productCaseDetails } from "./productCaseDetails";
import { useEffect, useRef, useState } from 'react';
import { productCatalog, statusLabels } from './productCatalog';


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
    <div className="catalog-group"><Grid key={filter}>{shownProducts.map(product=><a className="project-card catalog-product" href={product.casePath || '/productos/'+product.id} onClick={e=>navigate(e,product.casePath || '/productos/'+product.id)} key={product.id} aria-label={product.name}>
      <div className="catalog-product-top"><span className={'product-status is-'+product.status}>{value(statusLabels[product.status],language)}</span></div>
      <Visual visual={product.visual} label={product.name} mark={product.mark} />
      <div className="catalog-product-copy"><p>{value(product.cardSummary || product.summary,language)}</p></div>
    </a>)}</Grid></div>

  </section>;
}

export function ProductPage({ product, language, navigate }) {
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
  const gallery = profile?.gallery || (product.image ? [[product.image, product.summary]] : []);
  const journey = value(profile?.journey, language) || (es ? ['Descubrir', 'Explorar', 'Revisar', 'Continuar'] : ['Discover', 'Explore', 'Review', 'Continue']);
  const related = productCatalog.filter(p=>p.family===product.family&&p.id!==product.id);
  return <main className="case-study editorial-case product-detail new-product-case" ref={pageRef} key={product.id} data-visual={product.visual} style={{'--case-accent':accent,'--case-dark':dark,'--case-wash':'#e9ebe2'}}>
    <a className="case-back-link editorial-case-back-link" href="/#trabajo" onClick={e=>navigate(e,'/#trabajo')}>← {es?'Todos los productos':'All products'}</a>
    <section className="editorial-case-hero" aria-labelledby="product-case-title">
      <div className="editorial-case-copy"><p className="eyebrow"><span className="availability-dot" />{product.type}</p><h1 id="product-case-title">{product.name.split(' ').slice(0,-1).join(' ')}{product.name.includes(' ') ? ' ' : ''}<em>{product.name.split(' ').at(-1)}.</em></h1></div>
      <div className="editorial-case-visual" aria-hidden="true"><span className="editorial-visual-bubble" /><img src={productLetters[product.visual] || productLetters.ceniza} srcSet={productArtwork[product.visual]?.srcSet} sizes="(max-width: 680px) 78px, 170px" width={productArtwork[product.visual]?.width} height={productArtwork[product.visual]?.height} alt="" decoding="async" /><span className="editorial-case-index">{String(productCatalog.indexOf(product)+1).padStart(2,'0')} / {productCatalog.length}</span></div>
    </section>
    <dl className="ceniza-hero-facts expanded-hero-facts"><div><dt>{es?'PRODUCTO':'PRODUCT'}</dt><dd>{product.name}</dd></div><div><dt>{es?'ESTADO':'STATUS'}</dt><dd><span className={'product-status is-'+product.status}>{value(statusLabels[product.status],language)}</span></dd></div><div><dt>{es?'MI ROL':'MY ROLE'}</dt><dd>{profile?.role || 'Product Design · Development'}</dd></div></dl>
    {profile?.story && <section className="case-narrative is-ceniza new-case-story" aria-label={es?'Reto, producto y alcance':'Challenge, product and scope'}>{profile.story.map((entry,i)=>{const [label,title,copy]=value(entry,language);return <article key={label}><span>{i+1}</span><p className="case-label">{label}</p><h2>{title}</h2><p>{copy}</p></article>;})}</section>}
    <section className="new-case-overview"><header><p className="eyebrow">{es?'LA EXPERIENCIA':'THE EXPERIENCE'}</p><h2>{value(profile?.outcome,language) || product.name}</h2></header><p>{value(product.summary,language)}</p></section>
    {gallery.length>0 && <section className="new-case-gallery"><header><p className="eyebrow">{es?'VISTAS DEL PRODUCTO':'PRODUCT VIEWS'}</p><h2>{es?'Una mirada al producto.':'A look inside the product.'}</h2></header>{gallery.map(([src,caption])=><figure className="product-shot" key={src}><button type="button" aria-label={(es?'Ampliar captura: ':'Enlarge screenshot: ')+value(caption,language)} onClick={()=>setZoom({src,caption:value(caption,language)})}><div className="new-case-browser" aria-hidden="true"><i/><i/><i/><span>{product.name}</span><b>↗</b></div><img src={src} alt={value(caption,language)} loading="lazy" decoding="async" /></button><figcaption>{value(caption,language)}</figcaption></figure>)}</section>}
    <section className="product-feature-section"><header><p className="eyebrow">{profile?.planned?(es?'ALCANCE PREVISTO':'INTENDED SCOPE'):(es?'DISEÑO Y FUNCIONES':'DESIGN & FEATURES')}</p><h2>{profile?.planned?(es?'El punto de partida.':'The starting point.'):(es?'Cada parte tiene un propósito.':'Every part has a purpose.')}</h2></header><ol>{value(product.features,language).map((feature,i)=><li key={feature}><span>{String(i+1).padStart(2,'0')}</span><p>{feature}</p></li>)}</ol></section>
    <section className="new-case-flow"><header><p className="eyebrow">{profile?.planned?(es?'RECORRIDO PROPUESTO':'PROPOSED JOURNEY'):(es?'EL RECORRIDO':'THE JOURNEY')}</p><h2>{es?'De la intención al siguiente paso.':'From intent to the next step.'}</h2></header><ol className="new-case-path">{journey.map((step,i)=><li key={step}><span>{String(i+1).padStart(2,'0')}</span><strong>{step}</strong>{i<journey.length-1&&<b aria-hidden="true">→</b>}</li>)}</ol></section>
    <section className="new-case-scope"><header><p className="eyebrow">{es?'ESTADO Y ALCANCE':'STATUS & SCOPE'}</p><h2>{es?'Lo que puedes esperar hoy.':'What to expect today.'}</h2></header><p>{value(product.scope,language)}</p>{product.pending&&<div className="new-case-pending"><h3>{es?'Próxima etapa':'Next stage'}</h3><ul>{value(product.pending,language).map(item=><li key={item}>{item}</li>)}</ul></div>}</section>
    <section className="editorial-case-outcome"><p className="eyebrow">{profile?.planned?(es?'SIGUIENTE ETAPA':'NEXT STAGE'):(es?'EL RESULTADO':'THE OUTCOME')}</p><h2>{value(profile?.outcome,language)||product.name}</h2><p>{value(product.summary,language)}</p><div className="product-detail-actions">{product.url&&<a className="soft-button primary" href={product.url} target="_blank" rel="noreferrer">{product.status==='demo'?(es?'Explorar demo':'Explore demo'):(es?'Visitar sitio':'Visit website')} ↗</a>}{product.legacy&&<a className="soft-button" href={product.legacy} onClick={e=>navigate(e,product.legacy)}>{es?'Ver el ecosistema':'View ecosystem'} →</a>}</div></section>
    {related.length>0&&<section className="product-related"><h2>{es?'Productos relacionados.':'Related products.'}</h2>{related.map(p=><a href={p.casePath||'/productos/'+p.id} onClick={e=>navigate(e,p.casePath||'/productos/'+p.id)} key={p.id}><strong>{p.name}</strong><span className={'product-status is-'+p.status}>{value(statusLabels[p.status],language)}</span><span aria-hidden="true">↗</span></a>)}</section>}
    <a className="case-next" href={next.casePath||'/productos/'+next.id} onClick={e=>navigate(e,next.casePath||'/productos/'+next.id)}><span>{es?'Siguiente producto':'Next product'}</span><strong>{next.name}</strong><span className="arrow-icon" aria-hidden="true">→</span></a>
    <dialog ref={dialogRef} className="case-image-preview" aria-label={es?'Captura ampliada':'Enlarged screenshot'} onCancel={()=>setZoom(false)} onClose={()=>setZoom(false)} onClick={e=>{if(e.target===e.currentTarget)setZoom(false);}}>{zoom&&<><button type="button" autoFocus className="case-preview-close" aria-label={es?'Cerrar captura':'Close screenshot'} onClick={()=>setZoom(false)}>✕</button><figure><img src={zoom.src} alt={zoom.caption}/><figcaption>{zoom.caption}</figcaption></figure></>}</dialog>
  </main>;
}
