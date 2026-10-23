import { useEffect, useRef, useState } from 'react';
import { productCatalog, statusLabels } from './productCatalog';

const value = (item, language) => item?.[language] || item?.es;
export function ProductCatalog({ language, navigate, Grid, Visual }) {
  const es = language === 'es';
  const [filter, setFilter] = useState('all');
  const shownProducts = productCatalog.filter(product => filter === 'all' || product.category === filter);
  return <section className="projects-section product-catalog" id="trabajo" aria-labelledby="projects-title">
    <div className="section-heading"><div><p className="eyebrow"><span className="availability-dot" />{es ? 'LO QUE CONSTRUYO' : 'WHAT I BUILD'}</p><h2 id="projects-title">{es ? 'Productos.' : 'Products.'}</h2></div><p className="section-note">09 {es ? 'PRODUCTOS Y EXPERIENCIAS' : 'PRODUCTS & EXPERIENCES'}</p></div>
    <div className="catalog-filters" role="group" aria-label={es ? 'Filtrar productos' : 'Filter products'}>{[
      ['all', es ? 'Todos' : 'All', productCatalog.length],
      ['fullstack', 'Full stack', productCatalog.filter(p => p.category === 'fullstack').length],
      ['agents', es ? 'Agentes' : 'Agents', productCatalog.filter(p => p.category === 'agents').length],
      ['website', 'Websites', productCatalog.filter(p => p.category === 'website').length],
    ].map(([id,label,count]) => <button key={id} type="button" aria-pressed={filter===id} onClick={()=>setFilter(id)}><span>{label}</span><span className="catalog-filter-count">{count}</span></button>)}</div>
    <div className="catalog-group"><Grid key={filter}>{shownProducts.map(product=><a className="project-card catalog-product" href={product.casePath || '/productos/'+product.id} onClick={e=>navigate(e,product.casePath || '/productos/'+product.id)} key={product.id} aria-label={product.name}>
      <div className="catalog-product-top"><span className={'product-status is-'+product.status}>{value(statusLabels[product.status],language)}</span></div>
      <Visual visual={product.visual} label={product.name} mark={product.mark} />
      <div className="catalog-product-copy"><p>{value(product.summary,language)}</p></div>
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
    const nodes=[...root.querySelectorAll('h1,h2,.product-shot')];
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
  return <main className="case-study product-detail" ref={pageRef} key={product.id}>
    <a className="case-back-link" href="/#trabajo" onClick={e=>navigate(e,'/#trabajo')}>← {es?'Todos los productos':'All products'}</a>
    <section className="product-detail-hero"><div><p className="eyebrow">{product.type}</p><h1>{product.name}<span>.</span></h1><p className="product-detail-summary">{value(product.summary,language)}</p><div className="product-detail-meta"><span className={'product-status is-'+product.status}>{value(statusLabels[product.status],language)}</span><span>{es?'Ecosistema':'Ecosystem'} · {product.family==='Independent'?(es?'Independiente':'Independent'):product.family}</span></div></div><span className="product-detail-mark" aria-hidden="true">{product.mark}</span></section>
    <aside className="product-scope"><span>{es?'ALCANCE ACTUAL':'CURRENT SCOPE'}</span><p>{value(product.scope,language)}</p></aside>
    <section className="product-feature-section"><header><p className="eyebrow">{es?'EL PRODUCTO':'THE PRODUCT'}</p><h2>{es?'Lo que está construido.':'What is built.'}</h2></header><ol>{value(product.features,language).map((feature,i)=><li key={feature}><span>{String(i+1).padStart(2,'0')}</span><p>{feature}</p></li>)}</ol></section>
    {product.image && <figure className="product-shot"><button type="button" aria-label={es?'Ampliar captura de '+product.name:'Enlarge screenshot of '+product.name} onClick={()=>setZoom(true)}><img src={product.image} alt={product.name+(es?' — vista del producto':' — product view')} loading="lazy" /></button><figcaption>{es?'Vista del producto · Haz clic para ampliar':'Product view · Click to enlarge'}</figcaption></figure>}
    {product.pending && <section className="product-pending"><p className="eyebrow">{es?'SIGUIENTE ETAPA':'NEXT STAGE'}</p><h2>{es?'Lo que está por desarrollar.':'What comes next.'}</h2><ul>{value(product.pending,language).map(item=><li key={item}>{item}</li>)}</ul></section>}
    <div className="product-detail-actions">{product.url && <a className="soft-button primary" href={product.url} target="_blank" rel="noreferrer">{product.status==='demo'?(es?'Abrir demo':'Open demo'):(es?'Visitar sitio':'Visit website')} ↗</a>}{product.legacy && <a className="soft-button" href={product.legacy} onClick={e=>navigate(e,product.legacy)}>{es?'Ver el caso completo del ecosistema':'View the full ecosystem case'} →</a>}</div>
    <section className="product-related"><h2>{es?'Productos relacionados.':'Related products.'}</h2>{productCatalog.filter(p=>p.family===product.family&&p.id!==product.id).map(p=><a href={p.casePath || '/productos/'+p.id} onClick={e=>navigate(e,p.casePath || '/productos/'+p.id)} key={p.id}><strong>{p.name}</strong><span className={'product-status is-'+p.status}>{value(statusLabels[p.status],language)}</span><span aria-hidden="true">↗</span></a>)}</section>
    <a className="case-next" href={next.casePath || '/productos/'+next.id} onClick={e=>navigate(e,next.casePath || '/productos/'+next.id)}><span>{es?'Siguiente producto':'Next product'}</span><strong>{next.name}</strong><span className="arrow-icon" aria-hidden="true">→</span></a>
    <dialog ref={dialogRef} className="case-image-preview" aria-label={es?'Captura ampliada':'Enlarged screenshot'} onCancel={()=>setZoom(false)} onClose={()=>setZoom(false)} onClick={e=>{if(e.target===e.currentTarget)setZoom(false);}}>{zoom&&<><button autoFocus className="case-preview-close" aria-label={es?'Cerrar captura':'Close screenshot'} onClick={()=>setZoom(false)}>✕</button><figure><img src={product.image} alt={product.name} /><figcaption>{product.name}</figcaption></figure></>}</dialog>
  </main>;
}
