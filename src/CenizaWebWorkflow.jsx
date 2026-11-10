import { LuArrowRight, LuFileText, LuSearch } from 'react-icons/lu';

export default function CenizaWebWorkflow({ es, children }) {
  const steps = [
    [LuSearch, es ? 'Explora el catálogo' : 'Explore the catalog', es ? 'Compara equipos, fichas técnicas y combos de iluminación.' : 'Compare lighting equipment, specifications and bundles.'],
    [LuFileText, es ? 'Elige «Cotizar»' : 'Choose “Request a quote”', es ? 'La ficha muestra el precio de cada opción y abre una consulta por WhatsApp.' : 'The equipment page shows each option’s price and opens an inquiry in WhatsApp.'],
  ];

  return <section className="agent-workflow agent-workflow-compact website-workflow website-workflow-ceniza" aria-labelledby="ceniza-web-workflow">
    <header>
      <p className="eyebrow">WORKFLOW</p>
      <h2 id="ceniza-web-workflow">{es ? 'Del catálogo a la cotización.' : 'From catalog to quote.'}</h2>
      <p>{es ? 'Dos vías para pedir una cotización: WhatsApp desde la ficha o el formulario de la web.' : 'Two ways to request a quote: WhatsApp from the equipment page or the website form.'}</p>
    </header>
    <ol className="agent-workflow-steps">
      {steps.map(([Icon, title, copy], index) => <li key={title}>
        <div className="agent-step-icon"><Icon aria-hidden="true" /></div>
        <span className="agent-step-number">{String(index + 1).padStart(2, '0')}</span>
        <h3>{title}</h3>
        <p>{copy}</p>
        {index < steps.length - 1 && <LuArrowRight className="agent-step-arrow" aria-hidden="true" />}
      </li>)}
    </ol>
    {children}
  </section>;
}
