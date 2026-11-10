import { BsOpenai } from 'react-icons/bs';
import { SiSupabase, SiPostgresql, SiReact, SiTypescript, SiPython } from 'react-icons/si';
import { LuMessageSquare, LuDatabase, LuSparkles, LuShieldCheck, LuArrowRight, LuChartNoAxesCombined, LuFileText } from 'react-icons/lu';

const stack = [[BsOpenai, 'OpenAI', 'IA y lenguaje', 'AI & language', '#80c9ad'], [SiSupabase, 'Supabase', 'Backend y acceso', 'Backend & access', '#3ecf8e'], [SiPostgresql, 'PostgreSQL', 'Datos del CRM', 'CRM data', '#7daee0'], [SiReact, 'React', 'Interfaz', 'Interface', '#61dafb'], [SiTypescript, 'TypeScript', 'Lógica tipada', 'Typed logic', '#70a8ed']];

const navalStack = [
  [SiReact, 'React', 'Interfaz del ERP', 'ERP interface', '#70b8dc'],
  [SiTypescript, 'TypeScript', 'Lógica tipada del ERP', 'Typed ERP logic', '#70a9df'],
  [LuChartNoAxesCombined, 'Recharts', 'Gráficos del ERP', 'ERP charts', '#80c9ad'],
  [LuFileText, 'jsPDF', 'Documentos del ERP', 'ERP documents', '#dfbc78'],
  [SiPython, 'Python', 'Lógica del agente prevista', 'Planned agent logic', '#70b8dc'],
];

const icons = [LuMessageSquare, LuDatabase, LuSparkles, LuShieldCheck];
export default function AgentCenizaWorkflow({ language, naval = false }) {
  const es = language === 'es';
  const steps = naval ? (es ? [
    ['Consulta', 'El equipo formula una pregunta sobre la operación.'],
    ['Contexto autorizado', 'El agente consultaría los módulos del ERP según los permisos.'],
    ['Propuesta', 'El agente prepararía una respuesta o una acción para revisar.'],
    ['Aprobación humana', 'El equipo revisaría la propuesta antes de ejecutarla.'],
  ] : [
    ['Query', 'The team asks a question about operations.'],
    ['Authorized context', 'The agent would query ERP modules according to permissions.'],
    ['Proposal', 'The agent would prepare an answer or action for review.'],
    ['Human approval', 'The team would review the proposal before carrying it out.'],
  ]) : es ? [
    ['Pregunta','Indicas qué necesitas consultar o preparar.'],
    ['Conecta el contexto','Relaciona la información autorizada del CRM.'],
    ['Responde o propone','Entrega un reporte o prepara una acción.'],
    ['Tú decides','Revisas y confirmas antes de cambiar datos.'],
  ] : [
    ['Ask','Describe what you need to query or prepare.'],
    ['Connect context','Connects authorized CRM information.'],
    ['Answer or propose','Returns a report or prepares an action.'],
    ['You decide','Review and confirm before changing data.'],
  ];
  return <section className="agent-workflow agent-workflow-compact" aria-labelledby="agent-workflow-title">
    <header><p className="eyebrow">WORKFLOW</p><h2 id="agent-workflow-title">{es?'Del contexto a la acción.':'From context to action.'}</h2><p>{naval ? (es ? 'Flujo previsto para el agente interno de Naval ERP.' : 'Planned workflow for the internal Naval ERP agent.') : (es?'La IA prepara. El equipo mantiene el control.':'AI prepares. The team stays in control.')}</p></header>
    <ol className="agent-workflow-steps">{steps.map(([title,copy],i)=>{const Icon=icons[i];return <li key={title}><div className="agent-step-icon"><Icon aria-hidden="true"/></div><span className="agent-step-number">{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p>{i<steps.length-1&&<LuArrowRight className="agent-step-arrow" aria-hidden="true"/>}</li>;})}</ol>
    <div className="agent-tool-strip"><p>{naval ? (es ? 'HERRAMIENTAS DEL ERP Y DEL AGENTE' : 'ERP AND AGENT TOOLS') : (es?'HERRAMIENTAS UTILIZADAS':'BUILT WITH')}</p><ul>{(naval ? navalStack : stack).map(([Icon,name,roleEs,roleEn,color])=><li key={name}><span className="agent-tool-icon" style={{color,backgroundColor:color+'14'}}><Icon aria-hidden="true"/></span><div><strong>{name}</strong><small>{es?roleEs:roleEn}</small></div></li>)}</ul></div>
    {naval ? <div className="agent-compact-control">
      <p><strong>{es ? 'Consulta según permisos.' : 'Permission-based queries.'}</strong> {es ? 'El agente accedería a los módulos autorizados del ERP.' : 'The agent would access authorized ERP modules.'}</p>
      <p><strong>{es ? 'Acciones con aprobación.' : 'Actions require approval.'}</strong> {es ? 'El equipo revisaría la propuesta antes de ejecutar un cambio.' : 'The team would review the proposal before making a change.'}</p>
    </div> : <div className="agent-compact-control"><p><strong>{es?'Consulta directa.':'Direct answers.'}</strong> {es?'Las respuestas y reportes no modifican registros.':'Answers and reports do not modify records.'}</p><p><strong>{es?'Acciones con aprobación.':'Actions require approval.'}</strong> {es?'Los cambios y el correo requieren confirmación. WhatsApp se abre para envío humano.':'Changes and email require confirmation. WhatsApp opens for a person to send.'}</p><span>{es?'Integrado al CRM de uso interno de Ceniza.':'Integrated into Ceniza’s internal CRM.'}</span></div>}
  </section>;
}
