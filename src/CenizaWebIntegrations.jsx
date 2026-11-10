import { LuChartNoAxesCombined, LuDatabase, LuGlobe, LuWorkflow, LuFileText, LuMessageSquare } from 'react-icons/lu';
import { SiGmail, SiGoogleads, SiInstagram, SiWhatsapp } from 'react-icons/si';

export default function CenizaWebIntegrations({ language, naval = false }) {
  const es = language === 'es';
  const groups = naval ? [
    [es ? 'CANALES COMERCIALES' : 'SALES CHANNELS', 'is-connected', [
      [SiWhatsapp, 'WhatsApp', es ? 'Asesoría de productos y cotizaciones.' : 'Product guidance and quotes.'],
      [SiGmail, es ? 'Correo comercial' : 'Sales email', es ? 'Canal para solicitar información al equipo de Naval.' : 'A way to request information from the Naval team.'],
    ]],
    [es ? 'CATÁLOGO Y ASISTENCIA' : 'CATALOG AND SUPPORT', 'is-available', [
      [LuFileText, es ? 'Fichas técnicas' : 'Technical sheets', es ? 'Documentación de producto accesible desde la web.' : 'Product documentation available from the website.'],
      [LuMessageSquare, es ? 'Asistente Naval' : 'Naval assistant', es ? 'Orientación comercial dentro del catálogo.' : 'Sales guidance within the catalog.'],
    ]],
    [es ? 'VISIBILIDAD Y MEDICIÓN' : 'VISIBILITY AND MEASUREMENT', 'is-measurement', [
      [LuGlobe, 'Search Console', es ? 'Permite revisar indexación y clics orgánicos al verificar el dominio.' : 'Can track indexing and organic clicks after domain verification.'],
      [LuChartNoAxesCombined, 'Google Analytics', es ? 'Permite medir visitas y acciones al configurar los eventos.' : 'Can measure visits and actions once events are configured.'],
    ]],
  ] : [
    [es ? 'CONECTADO' : 'CONNECTED', 'is-connected', [
      [SiWhatsapp, 'WhatsApp', es ? 'Consultas de alquiler y cotizaciones desde el catálogo.' : 'Rental and quote inquiries from the catalog.'],
      [SiInstagram, 'Instagram', es ? 'Enlace al trabajo del estudio en redes.' : 'A link to the studio’s work on social media.'],
      [LuDatabase, 'Ceniza CRM', es ? 'Recepción de solicitudes validadas desde el formulario.' : 'Receives validated inquiries from the website form.'],
    ]],
    [es ? 'AUTOMATIZACIÓN' : 'AUTOMATION', 'is-available', [
      [LuWorkflow, 'Make', es ? 'Coordina la confirmación al cliente y el aviso al equipo.' : 'Coordinates the client confirmation and team notification.'],
      [SiGmail, 'Gmail', es ? 'Canal de envío para la confirmación y el aviso del flujo de Make.' : 'Email delivery channel for Make’s confirmation and notification.'],
    ]],
    [es ? 'MEDICIÓN Y CAMPAÑAS' : 'MEASUREMENT AND CAMPAIGNS', 'is-measurement', [
      [LuGlobe, 'Search Console', es ? 'Revisión de indexación y clics orgánicos al verificar el dominio.' : 'Indexing and organic click reports after domain verification.'],
      [LuChartNoAxesCombined, 'Google Analytics', es ? 'Medición de visitas y acciones según los eventos configurados.' : 'Measures visits and actions based on configured events.'],
      [SiGoogleads, 'Google Ads', es ? 'Opción para futuras campañas y medición de conversiones.' : 'An option for future campaigns and conversion tracking.'],
    ]],
  ];

  return (
    <section className="forty-integrations-section ceniza-web-integrations" aria-labelledby="ceniza-web-integrations-title">
      <header>
        <p className="eyebrow is-section-eyebrow">{es ? 'APIS + ECOSISTEMA DE CRECIMIENTO' : 'APIS + GROWTH ECOSYSTEM'}</p>
        <h2 id="ceniza-web-integrations-title">{naval ? (es ? 'Cómo se conecta Naval Web.' : 'How Naval Web connects.') : (es ? 'Cómo se conecta Ceniza Web.' : 'How Ceniza Web connects.')}</h2>
        <p>{naval ? (es ? 'El catálogo reúne documentación y asesoría. WhatsApp y correo llevan la consulta al equipo comercial.' : 'The catalog brings together documentation and guidance. WhatsApp and email route inquiries to the sales team.') : es ? 'La web conecta el catálogo con WhatsApp y el formulario con Ceniza CRM. Make contempla el seguimiento por correo, y las herramientas de Google ayudan a medir cómo llegan los visitantes y qué hacen en el sitio.' : 'The website connects the catalog to WhatsApp and the form to Ceniza CRM. Make is designed to support email follow-up, and Google tools help measure how visitors arrive and what they do on the site.'}</p>
      </header>
      <div className="forty-integrations-map">
        {groups.map(([label, className, items]) => <section key={className} className={className}>
          <div className="forty-integration-status"><span aria-hidden="true" />{label}</div>
          <ul>{items.map(([Icon, title, copy]) => <li key={title}><span aria-hidden="true"><Icon /></span><div><strong>{title}</strong><p>{copy}</p></div></li>)}</ul>
        </section>)}
      </div>
    </section>
  );
}
