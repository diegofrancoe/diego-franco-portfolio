import { LuChartNoAxesCombined, LuMessageSquareText, LuPanelsTopLeft, LuArrowUpRight } from 'react-icons/lu';

export default function AgentCenizaCapabilities({ language }) {
  const es = language === 'es';
  const reports = es ? [
    ['Comercial', 'Pipeline, oportunidades y seguimiento.'],
    ['Ejecutivo', 'Resumen del negocio y prioridades.'],
    ['Finanzas', 'Movimientos de caja registrados.'],
    ['Operación', 'Estado y seguimiento operativo.'],
    ['Inventario', 'Disponibilidad y stock actual.'],
    ['Documentos', 'Consulta y estado de documentos.'],
  ] : [
    ['Sales', 'Pipeline, opportunities and follow-ups.'],
    ['Executive', 'Business overview and priorities.'],
    ['Finance', 'Recorded cash movements.'],
    ['Operations', 'Operational status and follow-up.'],
    ['Inventory', 'Availability and current stock.'],
    ['Documents', 'Document queries and status.'],
  ];
  return <section className="agent-capability-details" aria-labelledby="agent-capability-title">
    <header><p className="eyebrow">{es ? 'ALCANCE DEL ASISTENTE' : 'ASSISTANT CAPABILITIES'}</p><h3 id="agent-capability-title">{es ? 'Reporta, orienta y conecta tu CRM.' : 'Report, guide and connect your CRM.'}</h3></header>
    <div className="agent-capability-layout">
      <article className="agent-reports-overview">
        <div className="agent-capability-label"><LuChartNoAxesCombined aria-hidden="true"/><h4>{es ? 'Reportes que puedes pedir' : 'Reports you can request'}</h4><span>PDF · CSV</span></div>
        <p>{es ? 'De una pregunta a un resumen con gráficos, detalle y descarga.' : 'From a question to a summary with charts, details and downloads.'}</p>
        <dl>{reports.map(([title, description]) => <div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}</dl>
        <blockquote><LuArrowUpRight aria-hidden="true"/>{es ? '“Muéstrame el pipeline comercial actual.”' : '“Show me the current sales pipeline.”'}</blockquote>
      </article>
      <div className="agent-capability-side">
        <article><div className="agent-capability-label"><LuMessageSquareText aria-hidden="true"/><h4>{es ? 'Feedback en ambos sentidos' : 'Feedback in both directions'}</h4></div><p>{es ? 'Señala pendientes y alertas para orientar el siguiente paso. El equipo también puede enviar feedback sobre el asistente desde la conversación.' : 'Highlights pending work and alerts to guide the next step. The team can also send feedback about the assistant from the conversation.'}</p></article>
        <article><div className="agent-capability-label"><LuPanelsTopLeft aria-hidden="true"/><h4>{es ? 'El CRM desde la conversación' : 'Your CRM through conversation'}</h4></div><p>{es ? 'Relaciona clientes, oportunidades, cotizaciones, agenda y operación. Consulta registros y prepara seguimientos, propuestas y borradores sin recorrer cada módulo.' : 'Connects clients, opportunities, quotes, calendar and operations. Query records and prepare follow-ups, proposals and drafts without searching every module.'}</p><small>{es ? 'Acceso según permisos. Los cambios requieren tu revisión y aprobación.' : 'Access follows permissions. Changes require your review and approval.'}</small></article>
      </div>
    </div>
  </section>;
}
