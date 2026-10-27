const p = (es, en) => ({ es, en });
const catalog = [
  { id: 'ceniza-crm', category: 'fullstack', casePath: '/proyectos/ceniza', name: 'Ceniza CRM', family: 'Ceniza', status: 'live', visual: 'ceniza', mark: 'C', type: 'CRM · APPLIED AI', repo: 'ceniza.crm', image: '/ceniza-current-dashboard.png', legacy: '/proyectos/ceniza',
    summary: p('Clientes, cotizaciones, alquileres y operación en un mismo espacio, con asistencia contextual de IA.', 'Clients, quotes, rentals and operations in one workspace, with contextual AI assistance.'),
    features: p(['Pipeline comercial y seguimiento de clientes', 'Cotizaciones, producciones, alquileres e inventario', 'Finanzas vinculadas a la operación', 'Asistente Ceniza: contexto, reportes y acciones con revisión humana'], ['Commercial pipeline and customer follow-up', 'Quotes, productions, rentals and inventory', 'Finance linked to operations', 'Ceniza Assistant: context, reports and human-reviewed actions']),
    scope: p('CRM privado de Ceniza Producciones, con acceso restringido al equipo. La demostración pública se presenta por separado en Demo CRM AI.', 'Ceniza Producciones’ private CRM, with access restricted to the team. The public demonstration is presented separately in Demo CRM AI.') },
  { id: 'ceniza-web', category: 'website', name: 'Ceniza Web', family: 'Ceniza', status: 'live', visual: 'ceniza', mark: 'C', type: 'WEB · PRODUCT DESIGN', url: 'https://www.cenizaproducciones.com/', repo: 'ceniza-digital-platform', image: '/case-ceniza-web-desktop-v2.png',
    summary: p('Una experiencia visual para descubrir el estudio, sus proyectos, servicios y equipos, y solicitar una cotización.', 'A visual experience to discover the studio, its projects, services and equipment, and request a quote.'),
    features: p(['Portafolio visual y presentación del estudio', 'Descubrimiento de servicios y equipos', 'Captación comercial con validación del servidor', 'Experiencia responsive independiente del CRM'], ['Visual portfolio and studio presentation', 'Service and equipment discovery', 'Commercial intake with server-side validation', 'A responsive experience independent of the CRM']),
    scope: p('La web es el producto público de descubrimiento y captación. El CRM es una aplicación independiente.', 'The website is the public discovery and intake product. The CRM is a separate application.') },
  { id: 'naval-b2b', category: 'website', name: 'Naval Web', family: 'Naval', status: 'live', visual: 'naval', mark: 'N', type: 'B2B · CONVERSATIONAL AI', url: 'https://www.productosnaval.com/', repo: 'naval-web-platform', image: '/case-naval-web-chatbot-real.webp',
    summary: p('Catálogo técnico y asistencia comercial para encontrar productos y avanzar hacia una solicitud útil.', 'A technical catalog and commercial assistant to find products and move toward a useful inquiry.'),
    features: p(['Catálogo de productos y documentación técnica', 'Chatbot comercial con contexto de producto', 'Flujos de consulta, cotización y atención', 'Integraciones de servidor con IA y automatización'], ['Product catalog and technical documentation', 'Commercial chatbot grounded in product context', 'Inquiry, quotation and customer-service flows', 'Server-side AI and automation integrations']),
    scope: p('El asistente comercial pertenece a la web B2B. Los agentes internos del ERP son una capacidad futura de otro producto.', 'The commercial assistant belongs to the B2B website. Internal ERP agents are a future capability of a different product.') },
  { id: '40plus-commerce', category: 'website', casePath: '/proyectos/40-plus', name: '40+ commerce', family: '40+', status: 'live', visual: 'forty', mark: '4', type: 'COMMERCE · AUTOMATION', url: 'https://cuarentamas.com/', repo: 'cuarentamas-commerce', image: '/case-40plus-real-product-v2.webp', legacy: '/proyectos/40-plus',
    summary: p('Descubrimiento de producto, compra asistida por WhatsApp y seguimiento automatizado con Ritual 40+.', 'Product discovery, WhatsApp-assisted purchasing and automated follow-up through Ritual 40+.'),
    features: p(['Experiencia de producto y carrito responsive', 'Pedido estructurado que continúa en WhatsApp', 'Ritual 40+: formulario validado y entrega del e-book', 'Automatización de correos y registro con Make'], ['Responsive product experience and cart', 'Structured order handoff to WhatsApp', 'Ritual 40+: validated form and e-book delivery', 'Email and record automation with Make']),
    scope: p('La compra continúa en WhatsApp. Pagos y CRM son extensiones posibles; este producto utiliza automatización, sin funciones de IA documentadas.', 'Purchasing continues in WhatsApp. Payments and CRM are potential extensions; this product uses automation, with no documented AI features.') },
  { id: 'atlas-crm', category: 'fullstack', name: 'Demo CRM AI', family: 'Independent', status: 'demo', visual: 'demo', mark: 'D', type: 'CRM · INTERACTIVE DEMO', url: 'https://demo-crm-ai.vercel.app/crm', repo: 'demo-crm-ai',
    summary: p('Una demostración independiente de CRM con identidad propia, datos ficticios y asistencia de IA con aprobación.', 'An independent CRM showcase with its own identity, fictional data and approval-based AI assistance.'),
    features: p(['Interfaz en español e inglés', 'Datos de demostración guardados en el navegador', 'Propuestas de IA con revisión y confirmación', 'Repositorio y despliegue independientes de Ceniza'], ['Spanish and English interface', 'Browser-persisted demonstration data', 'AI proposals with review and confirmation', 'Repository and deployment independent of Ceniza']),
    scope: p('Atlas es un nombre provisional. La IA requiere configuración del servidor; no se afirma aquí su disponibilidad actual. No realiza escrituras en una base real ni envíos automáticos.', 'Atlas is a provisional name. AI requires server configuration; current availability is not asserted here. It does not write to a real database or automatically send messages.') },
  { id: 'bernardo-portfolio', category: 'website', name: 'Portafolio Bernardo', family: 'Independent', status: 'live', visual: 'bernardo', mark: 'B', type: 'PORTFOLIO · VISUAL EXPERIENCE', url: 'https://bernardofrancoe.com/', repo: 'portafolio-nano',
    summary: p('Una experiencia web audiovisual que transforma proyectos, fotografía y video en un recorrido visual propio.', 'An audiovisual web experience that turns projects, photography and video into a distinctive visual journey.'),
    features: p(['Arquitectura de contenido centrada en proyectos', 'Experiencias de fotografía y video', 'Diseño e interacciones a medida', 'HTML, CSS y JavaScript responsive'], ['Project-centered content architecture', 'Photography and video experiences', 'Custom design and interactions', 'Responsive HTML, CSS and JavaScript']),
    scope: p('Un producto de diseño y desarrollo web. No incorpora IA como funcionalidad del producto.', 'A web design and development product. AI is not a product feature.') },
  { id: 'naval-erp', category: 'fullstack', casePath: '/proyectos/naval', name: 'Naval ERP', family: 'Naval', status: 'development', visual: 'naval', mark: 'N', type: 'ERP · OPERATIONS', repo: 'naval-ai-erp', image: '/case-naval-erp-production-orders.webp',
    summary: p('Un producto privado en desarrollo para coordinar producción, inventario, compras y calidad.', 'A private product in development to coordinate production, inventory, purchasing and quality.'),
    features: p(['Interfaces de producción, tanques, lotes y calidad', 'Inventario, Kardex y compras', 'Reportes y exportaciones locales', 'Flujos de prueba con persistencia en el navegador'], ['Production, tank, batch and quality interfaces', 'Inventory, Kardex and purchasing', 'Local reports and exports', 'Test workflows with browser persistence']),
    pending: p(['Autenticación y autorización de producción', 'Backend y base de datos operativa', 'Agentes internos de IA e integraciones verificadas', 'Completar las áreas comercial, logística y finanzas'], ['Production authentication and authorization', 'Backend and operational database', 'Internal AI agents and verified integrations', 'Complete commercial, logistics and finance areas']),
    scope: p('Versión privada de trabajo con datos locales. La conexión operativa y los agentes de IA están por desarrollar. No hay demo pública prevista.', 'A private working version with local data. Operational connectivity and AI agents are still to be developed. No public demo is planned.') },
  { id: 'naval-erp-agent', category: 'agents', name: 'Agente Naval', family: 'Naval', status: 'development', visual: 'agent-naval', mark: 'N', type: 'AI AGENT · ERP', repo: 'naval-ai-erp',
    summary: p('Agente interno en desarrollo para consultar la operación del ERP y preparar acciones con aprobación humana.', 'An internal agent in development to query ERP operations and prepare human-approved actions.'),
    features: p(['Definición del alcance del agente dentro del ERP', 'Diseño del recorrido de consulta, propuesta y aprobación'], ['Agent scope defined within the ERP', 'Design of the query, proposal and approval journey']),
    pending: p(['Integración con modelos de IA y datos operativos', 'Herramientas para consultar y ejecutar acciones autorizadas', 'Validación de permisos, aprobaciones y trazabilidad', 'Pruebas de funcionamiento con los módulos del ERP'], ['AI model and operational data integration', 'Tools for queries and authorized actions', 'Permission, approval and audit validation', 'Functional testing with ERP modules']),
    scope: p('Arquitectura prevista en desarrollo. El agente interno todavía no está implementado ni conectado a modelos de IA; es un producto distinto del chatbot comercial de la web.', 'Planned architecture in development. The internal agent is not yet implemented or connected to AI models; it is distinct from the website commercial chatbot.') },
  { id: 'naval-campaigns', category: 'agents', name: 'Agente Marketing', family: 'Naval', status: 'development', visual: 'agent-marketing', mark: 'N', type: 'MARKETING AGENT · IN DEVELOPMENT', repo: 'marketing-whatsapp-naval',
    summary: p('Espacio de marketing en desarrollo para preparar campañas de WhatsApp y correo, con edición, calendario y propuestas de IA sujetas a configuración.', 'A marketing workspace in development for WhatsApp and email campaigns, with editing, calendar and AI proposals requiring configuration.'),
    features: p(['Calendario y borradores de campañas', 'Edición y vista previa por canal', 'Preparación de propuestas con revisión humana', 'Integración de IA que requiere configuración'], ['Campaign calendar and drafts', 'Editing and channel-specific previews', 'Proposal preparation with human review', 'AI integration requiring configuration']),
    pending: p(['Verificación de la IA en el entorno configurado', 'Conexión con canales y ejecución de envíos', 'Conexión con fuentes reales de clientes'], ['Verify AI in the configured environment', 'Channel connections and message delivery', 'Connect real customer sources']),
    scope: p('La versión local incluye integración de IA que requiere credenciales; no se ha verificado aquí su conexión. El asistente no tiene herramientas de envío ni aprobación. Las listas de clientes siguen siendo de ejemplo.', 'The local version includes an AI integration requiring credentials; its connection has not been verified here. The assistant has no sending or approval tools. Customer lists remain examples.') },
  { id: 'ceniza-agent', category: 'agents', name: 'Agente Ceniza', family: 'Ceniza', status: 'live', visual: 'agent', mark: 'C', type: 'AI AGENT · CRM',
    summary: p('Asistencia contextual dentro del CRM: consultas, reportes y propuestas con revisión humana.', 'Contextual CRM assistance: queries, reports and proposals with human review.'),
    features: p(['Consulta contextual del CRM', 'Reportes y propuestas con aprobación'], ['Contextual CRM queries', 'Reports and proposals with approval']),
    scope: p('Agente integrado al CRM privado de Ceniza, con acceso restringido al equipo. La demo pública es un producto independiente: Demo CRM AI.', 'An agent integrated into Ceniza’s private CRM, with access restricted to the team. The public demo is a separate product: Demo CRM AI.') },
  { id: 'chatbot', category: 'agents', name: 'Chatbot', family: 'Naval', status: 'live', visual: 'agent-chatbot', mark: 'C', type: 'CONVERSATIONAL AI',
    summary: p('Chatbot comercial de Naval: orientación de productos, consultas técnicas y solicitudes comerciales.', 'Naval’s commercial chatbot: product guidance, technical questions and commercial inquiries.'),
    features: p(['Consulta del catálogo y documentación técnica', 'Orientación y preparación de solicitudes comerciales'], ['Catalog and technical documentation queries', 'Guidance and commercial inquiry preparation']),
    scope: p('Asistente comercial integrado a Naval Web, distinto del agente interno del ERP en desarrollo.', 'A commercial assistant integrated into Naval Web, separate from the internal ERP agent in development.') },
  { id: 'sophia-portfolio', category: 'website', name: 'Portafolio Sophia', family: 'Independent', status: 'development', visual: 'sophia', mark: 'S', type: 'PORTFOLIO · WEBSITE',
    summary: p('Próximo portafolio de Sophia. Proyecto por diseñar y desarrollar.', 'Sophia’s upcoming portfolio. Design and development are planned.'),
    features: p(['Presentación del proyecto pendiente de documentar'], ['Project presentation to be documented']),
    scope: p('Proyecto planificado. Aún no está construido y no tiene demostración publicada.', 'A planned project. It has not been built and has no published demonstration.') },
];
const productOrder = ['ceniza-crm', 'ceniza-agent', 'ceniza-web', 'naval-erp-agent', 'naval-erp', 'naval-b2b', '40plus-commerce', 'atlas-crm', 'naval-campaigns', 'bernardo-portfolio', 'chatbot', 'sophia-portfolio'];
const cardSummaries = {
  "ceniza-crm": {
    "es": "CRM modular con asistencia de IA.",
    "en": "Modular CRM with AI assistance."
  },
  "ceniza-web": {
    "es": "Web responsive y captación de leads.",
    "en": "Responsive web and lead capture."
  },
  "naval-erp": {
    "es": "ERP: producción, stock y compras.",
    "en": "ERP: production, stock and purchasing."
  },
  "naval-b2b": {
    "es": "Catálogo B2B y asistencia comercial.",
    "en": "B2B catalog and sales assistance."
  },
  "atlas-crm": {
    "es": "CRM demo con propuestas de IA.",
    "en": "Demo CRM with AI proposals."
  },
  "40plus-commerce": {
    "es": "E-commerce y flujos automatizados.",
    "en": "E-commerce and automated workflows."
  },
  "bernardo-portfolio": {
    "es": "Portafolio audiovisual responsive.",
    "en": "Responsive audiovisual portfolio."
  },
  "sophia-portfolio": {
    "es": "Diseño y desarrollo web · en proyecto.",
    "en": "Web design and development · planned."
  },
  "ceniza-agent": {
    "es": "Agente con contexto del CRM.",
    "en": "Agent grounded in CRM context."
  },
  "naval-erp-agent": {
    "es": "Agente ERP · consulta y aprobación.",
    "en": "ERP agent · query and approval."
  },
  "naval-campaigns": {
    "es": "Campañas multicanal asistidas por IA.",
    "en": "AI-assisted multichannel campaigns."
  },
  "chatbot": {
    "es": "Chatbot con contexto de catálogo.",
    "en": "Chatbot grounded in catalog context."
  }
};
const catalogArtwork = {
  "ceniza-agent": [
    "letter-assistant-a",
    "A"
  ],
  "naval-erp-agent": [
    "letter-operations-r",
    "R"
  ],
  "naval-campaigns": [
    "letter-marketing-m",
    "M"
  ],
  "chatbot": [
    "letter-chat-h",
    "H"
  ],
  "naval-erp": [
    "letter-erp-p",
    "P"
  ],
  "atlas-crm": [
    "letter-demo-d",
    "D"
  ],
  "ceniza-web": [
    "letter-web-z",
    "Z"
  ],
  "naval-b2b": [
    "naval",
    "N"
  ],
  "40plus-commerce": [
    "letter-commerce-f",
    "F"
  ],
  "bernardo-portfolio": [
    "letter-bernardo-b",
    "B"
  ],
  "sophia-portfolio": [
    "letter-sophia-s",
    "S"
  ]
};
export const productCatalog = productOrder.map(id => {
  const product = catalog.find(product => product.id === id);
  const artwork = catalogArtwork[id];
  return { ...product, ...(artwork ? { visual: artwork[0], mark: artwork[1] } : {}), cardSummary: cardSummaries[id] };
});
export const statusLabels = { private: p('Privado', 'Private'), documenting: p('Por documentar', 'To document'), live: p('Disponible', 'Available'), demo: p('Demo', 'Demo'), development: p('En desarrollo', 'In development'), prototype: p('Prototipo', 'Prototype') };
