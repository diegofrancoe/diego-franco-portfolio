import { LuTimer, LuChartNoAxesCombined } from 'react-icons/lu';
import { useState } from 'react';
import AgentCenizaWorkflow from './AgentCenizaWorkflow';
import AgentCenizaCapabilities from './AgentCenizaCapabilities';
const value = (item, language) => item?.[language] || item?.es;

export default function AgentCenizaExperience({ profile, language, setZoom }) {
  const es = language === 'es';
  const [view, setView] = useState(0);
  const [src,caption] = profile.gallery[view];
  return <>
    <section className="agent-integrated" aria-labelledby="agent-experience-title">
      <header><div><p className="eyebrow">{es?'EL AGENTE EN ACCIÓN':'THE AGENT IN ACTION'}</p><h2 id="agent-experience-title">{es?'Tu operación, en una conversación.':'Your operations, in one conversation.'}</h2></div><p>{es?'Consulta lo que pasa en el negocio, entiende qué necesita atención y prepara el siguiente paso con información del CRM.':'Ask what is happening in the business, understand what needs attention and prepare the next step using CRM information.'}</p></header>
      <div className="agent-device-stage">
        <div className="agent-desktop-demo">
          <div className="agent-view-switch" role="group" aria-label={es?'Vista del agente':'Agent view'}>{[es?'Inicio':'Home',es?'Conversación':'Conversation'].map((label,i)=><button key={label} type="button" aria-pressed={view===i} onClick={()=>setView(i)}>{label}</button>)}<span>DESKTOP</span></div>
          <figure><button type="button" aria-label={(es?'Ampliar captura: ':'Enlarge screenshot: ')+value(caption,language)} onClick={()=>setZoom({src,caption:value(caption,language)})}><div className="new-case-browser" aria-hidden="true"><i/><i/><i/><span>Asistente Ceniza</span><b>↗</b></div><img src={src} width="3136" height="2124" alt={value(caption,language)} loading="lazy" decoding="async"/></button><figcaption>{view===0?(es?'Prioridades y resumen del negocio.':'Business overview and priorities.'):(es?'Una pregunta se convierte en un reporte comercial.':'A question becomes a sales report.')}</figcaption></figure>
        </div>
<div className="agent-compact-mobile"><div className="agent-mobile-pair">{profile.mobileGallery.map(([src,caption])=><figure key={src}>{src==='conversation'?<div className="agent-phone agent-conversation-phone"><span className="agent-phone-speaker" aria-hidden="true"/><div className="agent-conversation-screen" role="img" aria-label={es?'Vista móvil adaptada de la conversación y el reporte comercial de Ceniza':'Adapted mobile view of the Ceniza conversation and sales report'}><div className="agent-chat-top"><span>✦</span><div><strong>Asistente Ceniza</strong><small>{es?'CONTEXTO DEL CRM':'CRM CONTEXT'}</small></div></div><div className="agent-chat-body"><small>{es?'TÚ':'YOU'}</small><p className="agent-user-message">{es?'Muéstrame el pipeline comercial.':'Report sales pipeline.'}</p><small>ASISTENTE CENIZA</small><div className="agent-report-message"><span>{es?'REPORTE COMERCIAL':'SALES REPORT'}</span><strong>{es?'Pipeline de ventas':'Sales pipeline'}</strong><p>{es?'6 oportunidades abiertas':'6 open opportunities'}</p><b>$6.168.300 <small>COP</small></b><p>{es?'Ventas potenciales':'Potential sales'}</p><div className="agent-report-bars"><span>{es?'Propuesta':'Proposal'} <i/></span><span>{es?'Negociación':'Negotiation'} <i/></span></div><p className="agent-report-note">{es?'El pipeline ponderado no representa ingresos confirmados.':'Weighted pipeline is not confirmed revenue.'}</p></div></div><div className="agent-chat-composer">{es?'Pregunta o pide una acción…':'Ask a question…'}<span>↗</span></div></div></div>:<button type="button" className="agent-phone" aria-label={(es?'Ampliar captura: ':'Enlarge screenshot: ')+value(caption,language)} onClick={()=>setZoom({src,caption:value(caption,language)})}><span className="agent-phone-speaker" aria-hidden="true"/><img src={src} alt={value(caption,language)} width="390" height="844" loading="lazy" decoding="async" /></button>}<figcaption>{value(caption,language)}</figcaption></figure>)}</div></div>

      </div>
      <AgentCenizaCapabilities language={language}/>
    </section>
      <section className="agent-value-panel" aria-labelledby="agent-value-title"><div><p className="eyebrow">{es?'POR QUÉ UN AGENTE':'WHY AN AGENT'}</p><h2 id="agent-value-title">{es?'Menos tareas repetitivas. Más claridad para decidir.':'Less repetitive work. Clearer decisions.'}</h2></div><div><LuTimer aria-hidden="true"/><h3>{es?'Reduce el trabajo manual':'Reduce manual work'}</h3><p>{es?'Reúne información, resume pendientes y prepara reportes o borradores sin recorrer cada módulo del CRM.':'Brings information together, summarizes pending work and prepares reports or drafts without searching every CRM module.'}</p></div><div><LuChartNoAxesCombined aria-hidden="true"/><h3>{es?'Ayuda a decidir con contexto':'Decide with context'}</h3><p>{es?'Conecta datos y prioridades para entender qué pasa y qué hacer después. El equipo revisa y aprueba las acciones.':'Connects data and priorities to understand what is happening and what to do next. The team reviews and approves actions.'}</p></div></section>
    <AgentCenizaWorkflow language={language}/>
  </>;
}
