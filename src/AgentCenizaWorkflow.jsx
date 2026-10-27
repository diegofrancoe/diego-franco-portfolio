import { BsOpenai } from 'react-icons/bs';
import { SiSupabase, SiPostgresql, SiReact, SiTypescript } from 'react-icons/si';
import { LuMessageSquare, LuDatabase, LuSparkles, LuShieldCheck, LuArrowRight } from 'react-icons/lu';

const stack = [[BsOpenai, 'OpenAI', 'IA y lenguaje', 'AI & language', '#80c9ad'], [SiSupabase, 'Supabase', 'Backend y acceso', 'Backend & access', '#3ecf8e'], [SiPostgresql, 'PostgreSQL', 'Datos del CRM', 'CRM data', '#7daee0'], [SiReact, 'React', 'Interfaz', 'Interface', '#61dafb'], [SiTypescript, 'TypeScript', 'Lógica tipada', 'Typed logic', '#70a8ed']];

const icons = [LuMessageSquare, LuDatabase, LuSparkles, LuShieldCheck];
export default function AgentCenizaWorkflow({ language }) {
  const es = language === 'es';
  const steps = es ? [
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
    <header><p className="eyebrow">WORKFLOW</p><h2 id="agent-workflow-title">{es?'Del contexto a la acción.':'From context to action.'}</h2><p>{es?'La IA prepara. El equipo mantiene el control.':'AI prepares. The team stays in control.'}</p></header>
    <ol className="agent-workflow-steps">{steps.map(([title,copy],i)=>{const Icon=icons[i];return <li key={title}><div className="agent-step-icon"><Icon aria-hidden="true"/></div><span className="agent-step-number">{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p>{i<steps.length-1&&<LuArrowRight className="agent-step-arrow" aria-hidden="true"/>}</li>;})}</ol>
    <div className="agent-tool-strip"><p>{es?'HERRAMIENTAS UTILIZADAS':'BUILT WITH'}</p><ul>{stack.map(([Icon,name,roleEs,roleEn,color])=><li key={name}><span className="agent-tool-icon" style={{color,backgroundColor:color+'14'}}><Icon aria-hidden="true"/></span><div><strong>{name}</strong><small>{es?roleEs:roleEn}</small></div></li>)}</ul></div>
    <div className="agent-compact-control"><p><strong>{es?'Consulta directa.':'Direct answers.'}</strong> {es?'Las respuestas y reportes no modifican registros.':'Answers and reports do not modify records.'}</p><p><strong>{es?'Acciones con aprobación.':'Actions require approval.'}</strong> {es?'Los cambios y el correo requieren confirmación. WhatsApp se abre para envío humano.':'Changes and email require confirmation. WhatsApp opens for a person to send.'}</p><span>{es?'Integrado al CRM de uso interno de Ceniza.':'Integrated into Ceniza’s internal CRM.'}</span></div>
  </section>;
}
