import { getCaseHeaderArtwork } from './caseHeaderArtwork';
import { LuArrowUpRight } from 'react-icons/lu';
import { productCatalog, statusLabels } from './productCatalog';
import { productArtwork } from './productVisuals';

const value = (item, language) => item?.[language] || item?.es;
const connections = {
  'ceniza-agent': ['ceniza-crm','ceniza-web'],
  'ceniza-web': ['ceniza-crm','ceniza-agent'],
  'naval-erp-agent': ['naval-erp','naval-campaigns'],
  'naval-campaigns': ['naval-erp-agent','chatbot'],
  'naval-b2b': ['chatbot','naval-erp'],
  chatbot: ['naval-b2b','naval-erp-agent'],
  'atlas-crm': ['ceniza-crm','ceniza-agent'],
  'bernardo-portfolio': ['sophia-portfolio','ceniza-web'],
  'sophia-portfolio': ['bernardo-portfolio','ceniza-web'],
};

export default function ProductClosing({ product, profile, language, navigate, contactHref }) {
  const es = language === 'es';
  const related = (connections[product.id] || []).map(id => productCatalog.find(p=>p.id===id)).filter(Boolean);
  const inProgress = product.status === 'development';
  return <section className="product-closing" aria-labelledby="product-closing-title">
    <div className="product-closing-summary"><p className="eyebrow">{profile?.planned?(es?'SIGUIENTE ETAPA':'NEXT STAGE'):inProgress?(es?'EN CONSTRUCCIÓN':'IN PROGRESS'):(es?'RESULTADO':'OUTCOME')}</p><h2 id="product-closing-title">{value(profile?.outcome,language) || product.name}</h2><p>{value(product.summary,language)}</p>{product.url&&<a className="product-closing-visit" href={product.url} target="_blank" rel="noreferrer">{product.status==='demo'?(es?'Explorar demo':'Explore demo'):(es?'Visitar sitio':'Visit website')} <LuArrowUpRight aria-hidden="true"/></a>}</div>
    <a className="product-closing-contact" href={contactHref || '/#contacto'} target={contactHref?'_blank':undefined} rel={contactHref?'noreferrer':undefined} onClick={contactHref?undefined:e=>navigate(e,'/#contacto')}><span>{es?'Hablemos':'Let’s talk'}</span><LuArrowUpRight aria-hidden="true"/></a>
    {related.length>0&&<div className="product-closing-related"><p className="eyebrow">{es?'PRODUCTOS RELACIONADOS':'RELATED PRODUCTS'}</p><div className="product-closing-links">{related.map(p=>{const href=p.casePath||'/productos/'+p.id;const art=getCaseHeaderArtwork(p.category,p.id) || productArtwork[p.visual];return <a key={p.id} href={href} onClick={e=>navigate(e,href)}>{art&&<span className="product-closing-art" aria-hidden="true"><img src={art.src} srcSet={art.srcSet} style={{filter:art.filter || 'none'}} sizes="48px" width="48" height="48" loading="lazy" decoding="async" alt=""/></span>}<span className="product-closing-link-copy"><strong>{p.name}</strong><span className={'product-status is-'+p.status}>{value(statusLabels[p.status],language)}</span></span><LuArrowUpRight className="product-closing-link-arrow" aria-hidden="true"/></a>;})}</div></div>}
  </section>;
}
