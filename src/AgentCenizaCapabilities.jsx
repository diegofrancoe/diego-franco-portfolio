import { LuChartNoAxesCombined, LuMessageSquareText, LuPanelsTopLeft, LuArrowUpRight } from 'react-icons/lu';

export default function AgentCenizaCapabilities({ language, naval = false, pending }) {
  const es = language === 'es';
  const reports = naval ? (es ? [
    ['Comercial', 'Pipeline, clientes y cotizaciones.'],
    ['Producción', 'Capacidad, órdenes, fórmulas y calidad.'],
    ['Compras', 'Proveedores, insumos y órdenes de compra.'],
    ['Inventario', 'Existencias, lotes y movimientos.'],
    ['Logística', 'Despachos, rutas y entregas.'],
    ['Finanzas', 'Cartera, costos y rentabilidad.'],
  ] : [
    ['Sales', 'Pipeline, customers and quotes.'],
    ['Production', 'Capacity, orders, formulas and quality.'],
    ['Purchasing', 'Suppliers, materials and purchase orders.'],
    ['Inventory', 'Stock, batches and movements.'],
    ['Logistics', 'Dispatches, routes and deliveries.'],
    ['Finance', 'Receivables, costs and profitability.'],
  ]) : es ? [
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
    <header><p className="eyebrow">{naval ? (es ? 'ALCANCE PREVISTO' : 'INTENDED SCOPE') : (es ? 'ALCANCE DEL ASISTENTE' : 'ASSISTANT CAPABILITIES')}</p><h3 id="agent-capability-title">{naval ? (es ? 'Consulta todo el ERP desde una conversación.' : 'Query the whole ERP through conversation.') : (es ? 'Reporta, orienta y conecta tu CRM.' : 'Report, guide and connect your CRM.')}</h3></header>
    <div className="agent-capability-layout">
      <article className="agent-reports-overview">
        <div className="agent-capability-label"><LuChartNoAxesCombined aria-hidden="true"/><h4>{naval ? (es ? 'Módulos que podría consultar' : 'Modules it could query') : (es ? 'Reportes que puedes pedir' : 'Reports you can request')}</h4>{!naval && <span>PDF · CSV</span>}</div>
        <p>{naval ? (es ? 'El diseño conecta información comercial, operativa y financiera según los permisos del equipo.' : 'The design connects sales, operations and finance data according to team permissions.') : es ? 'De una pregunta a un resumen con gráficos, detalle y descarga.' : 'From a question to a summary with charts, details and downloads.'}</p>
        <dl>{reports.map(([title, description]) => <div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}</dl>
        <blockquote><LuArrowUpRight aria-hidden="true"/>{naval ? (es ? '“¿Cómo afectaron los costos de producción al margen este mes?”' : '“How did production costs affect margin this month?”') : es ? '“Muéstrame el pipeline comercial actual.”' : '“Show me the current sales pipeline.”'}</blockquote>
      </article>
      <div className="agent-capability-side">
        {naval ? <>
          <article><div className="agent-capability-label"><LuMessageSquareText aria-hidden="true" /><h4>{es ? 'Alertas y propuestas' : 'Alerts and proposals'}</h4></div><p>{es ? 'El agente podría cruzar información entre áreas para explicar desvíos y proponer el siguiente paso. Las acciones requerirían aprobación humana.' : 'The agent could connect information across modules to explain deviations and propose a next step. Actions would require human approval.'}</p></article>
          <article><div className="agent-capability-label"><LuPanelsTopLeft aria-hidden="true" /><h4>{es ? 'Próxima etapa' : 'Next stage'}</h4></div><ul>{pending.map(item => <li key={item}>{item}</li>)}</ul></article>
        </> : <>
        <article><div className="agent-capability-label"><LuMessageSquareText aria-hidden="true"/><h4>{es ? 'Feedback en ambos sentidos' : 'Feedback in both directions'}</h4></div><p>{es ? 'Señala pendientes y alertas para orientar el siguiente paso. El equipo también puede enviar feedback sobre el asistente desde la conversación.' : 'Highlights pending work and alerts to guide the next step. The team can also send feedback about the assistant from the conversation.'}</p></article>
        <article><div className="agent-capability-label"><LuPanelsTopLeft aria-hidden="true"/><h4>{es ? 'El CRM desde la conversación' : 'Your CRM through conversation'}</h4></div><p>{es ? 'Relaciona clientes, oportunidades, cotizaciones, agenda y operación. Consulta registros y prepara seguimientos, propuestas y borradores sin recorrer cada módulo.' : 'Connects clients, opportunities, quotes, calendar and operations. Query records and prepare follow-ups, proposals and drafts without searching every module.'}</p><small>{es ? 'Acceso según permisos. Los cambios requieren tu revisión y aprobación.' : 'Access follows permissions. Changes require your review and approval.'}</small></article>
        </>}
      </div>
    </div>
  </section>;
}
