import { LuArrowDown, LuClipboardList, LuDatabase, LuMail, LuShieldCheck, LuUserCheck, LuWorkflow } from 'react-icons/lu';

export default function CenizaWebAutomation({ es, setZoom }) {
  const messages = [
    [LuMail, '/case-ceniza-email-client.png', es ? 'Confirmación al cliente' : 'Client confirmation', 'Recibimos tu solicitud | CENIZA'],
    [LuUserCheck, '/case-ceniza-email-team.png', es ? 'Aviso al equipo' : 'Team notification', 'Nueva solicitud desde el formulario web | CENIZA'],
  ];

  const renderMessage = ([Icon, src, title, subject]) => (
    <article className="ceniza-map-message" key={src}>
      <h3><Icon aria-hidden="true" />{title}</h3>
      <p>{es ? 'De' : 'From'}: Ceniza Producciones</p>
      <strong>{subject}</strong>
      <button type="button" aria-label={(es ? 'Ampliar ' : 'Enlarge ') + title} onClick={() => setZoom({ src, caption: subject })}>
        <img src={src} alt={subject} loading="lazy" decoding="async" />
      </button>
    </article>
  );

  return (
    <section className="ceniza-site-automation" aria-labelledby="ceniza-site-automation-title">
      <header>
        <p className="eyebrow">{es ? 'MAPA DE AUTOMATIZACIÓN' : 'AUTOMATION MAP'}</p>
        <h2 id="ceniza-site-automation-title">{es ? 'Qué pasa al enviar el formulario.' : 'What happens after form submission.'}</h2>
      </header>
      <div className="ceniza-map">
        <div className="ceniza-map-source">
          <span><LuClipboardList aria-hidden="true" />{es ? 'Formulario web' : 'Web form'}</span>
          <LuArrowDown aria-hidden="true" />
          <span><LuShieldCheck aria-hidden="true" />{es ? 'La web valida la solicitud' : 'The website validates the inquiry'}</span>
        </div>
        <div className="ceniza-map-branches">
          <section className="ceniza-map-branch ceniza-map-make">
            <h3><LuWorkflow aria-hidden="true" />{es ? 'Automatización en Make' : 'Make automation'}</h3>
            <div className="ceniza-map-emails">{messages.map(renderMessage)}</div>
          </section>
          <section className="ceniza-map-branch ceniza-map-crm">
            <h3><LuDatabase aria-hidden="true" /> {es ? 'Lead en Ceniza CRM' : 'Lead in Ceniza CRM'}</h3>
            <p>{es ? 'La web envía los datos validados del formulario a Ceniza CRM. El equipo recibe la solicitud con el servicio, la fecha y los detalles necesarios para preparar la cotización.' : 'The website sends the validated form data to Ceniza CRM. The team receives the service, date and project details needed to prepare the quote.'}</p>
            <figure className="ceniza-map-lead">
              <img src="/case-ceniza-laptop-clients.webp" alt={es ? 'Vista de clientes de Ceniza CRM' : 'Ceniza CRM clients view'} loading="lazy" />
              <figcaption><LuDatabase aria-hidden="true" /><span><strong>{es ? 'Nuevo lead' : 'New lead'}</strong><small>{es ? 'Origen: formulario web' : 'Source: website form'}</small></span></figcaption>
            </figure>
          </section>
        </div>
      </div>
    </section>
  );
}
