const t = (es, en) => ({ es, en });
export const productCaseDetails = {
  'atlas-crm': {
    accent: '#858dc1', dark: '#202535', role: 'Product Design · Full-stack · Applied AI',
    story: [
      t(['EL RETO', 'Explorar un CRM sin tocar una operación real.', 'Mostrar un recorrido comercial y operativo completo con datos ficticios y un espacio independiente.'], ['THE CHALLENGE', 'Explore a CRM without touching real operations.', 'Show a complete commercial and operational journey using fictional data in an independent workspace.']),
      t(['EL PRODUCTO', 'Una demostración que se puede recorrer.', 'Dashboard, clientes, agenda, proyectos, inventario y finanzas comparten un escenario de demostración.'], ['THE PRODUCT', 'A demonstration you can explore.', 'Dashboard, clients, calendar, projects, inventory and finance share a demonstration scenario.']),
      t(['EL VALOR', 'Entender el sistema usándolo.', 'La interfaz conecta información y decisiones; las propuestas del asistente se revisan antes de modificar el escenario ficticio.'], ['THE VALUE', 'Understand the system by using it.', 'The interface connects information and decisions; assistant proposals are reviewed before changing the fictional scenario.']),
    ],
    gallery: [ ['/case-demo-crm-dashboard-real.png', t('Dashboard · Lectura de la operación', 'Dashboard · Operational overview')], ['/case-demo-crm-clients-real.png', t('Clientes · Relaciones y seguimiento', 'Clients · Relationships and follow-up')] ],
    journey: t(['Explorar el dashboard', 'Consultar un registro', 'Revisar una propuesta', 'Confirmar el cambio demo'], ['Explore the dashboard', 'Inspect a record', 'Review a proposal', 'Confirm the demo change']),
    outcome: t('Un entorno propio para descubrir el producto.', 'An independent environment to discover the product.'),
  },
  'bernardo-portfolio': {
    accent: '#c5b899', dark: '#292821', role: 'Product Design · Frontend · Motion',
    story: [
      t(['EL RETO', 'Dar espacio al trabajo visual.', 'Organizar proyectos, fotografía y video sin perder la identidad de un productor escénico y visual.'], ['THE CHALLENGE', 'Give visual work room to breathe.', 'Organize projects, photography and video while preserving a stage and visual producer’s identity.']),
      t(['EL PRODUCTO', 'Un recorrido guiado por proyectos.', 'La presentación, las páginas de trabajo y el perfil construyen una experiencia visual coherente.'], ['THE PRODUCT', 'A journey guided by projects.', 'The introduction, work pages and profile create a coherent visual experience.']),
      t(['EL VALOR', 'De la identidad a una experiencia navegable.', 'Jerarquía, tipografía e interacciones ayudan a descubrir el trabajo en escritorio y móvil.'], ['THE VALUE', 'From identity to an explorable experience.', 'Hierarchy, typography and interactions help visitors discover the work on desktop and mobile.']),
    ],
    gallery: [['/case-bernardo-website-real.png', t('Portada real · Producción escénica y visual', 'Live home page · Stage and visual production')]],
    journey: t(['Descubrir la identidad', 'Elegir un proyecto', 'Explorar imagen y video', 'Continuar al contacto'], ['Discover the identity', 'Choose a project', 'Explore image and video', 'Continue to contact']),
    outcome: t('El contenido visual, en primer plano.', 'Visual content takes center stage.'),
  },
  'naval-erp-agent': {
    accent: '#a9bea8', dark: '#202921', role: 'Product Strategy · Agent Experience · Architecture',
    story: [
      t(['LA NECESIDAD', 'Consultar la operación con contexto.', 'La información de producción, compras e inventario necesita convertirse en una siguiente acción comprensible.'], ['THE NEED', 'Query operations with context.', 'Production, purchasing and inventory information needs to become a clear next action.']),
      t(['LA PROPUESTA', 'Un agente dentro del ERP.', 'El recorrido previsto conecta consulta, contexto autorizado, propuesta y revisión humana.'], ['THE PROPOSAL', 'An agent inside the ERP.', 'The intended journey connects queries, authorized context, proposals and human review.']),
      t(['EL ESTADO', 'Arquitectura prevista, integración pendiente.', 'El agente interno todavía no está implementado ni conectado a modelos de IA o datos operativos.'], ['THE STATUS', 'Planned architecture, integration pending.', 'The internal agent is not yet implemented or connected to AI models or operational data.']),
    ],
    journey: t(['Consulta del equipo', 'Contexto autorizado', 'Propuesta del agente', 'Aprobación humana'], ['Team query', 'Authorized context', 'Agent proposal', 'Human approval']),
    planned: true,
    outcome: t('Primero el contexto. Después, una acción revisable.', 'Context first. Then, a reviewable action.'),
  },
  'naval-campaigns': {
    accent: '#c6bd80', dark: '#172723', role: 'Product Design · AI Experience · Full-stack',
    story: [
      t(['EL RETO', 'Preparar campañas sin perder el control.', 'Coordinar brief, contenido, calendario y revisión en una experiencia clara para el equipo comercial.'], ['THE CHALLENGE', 'Prepare campaigns while staying in control.', 'Coordinate briefs, content, calendar and review in a clear commercial team experience.']),
      t(['EL PRODUCTO', 'Un espacio de trabajo para marketing.', 'La versión local combina campañas de WhatsApp y correo, edición manual y una integración de IA que requiere configuración.'], ['THE PRODUCT', 'A marketing workspace.', 'The local version combines WhatsApp and email campaigns, manual editing and an AI integration that requires configuration.']),
      t(['EL CONTROL', 'Preparar no significa enviar.', 'El asistente propone contenido para el canal activo; no dispone de herramientas de envío ni aprobación.'], ['THE CONTROL', 'Preparing does not mean sending.', 'The assistant proposes content for the active channel; it has no sending or approval tools.']),
    ],
    journey: t(['Definir el brief', 'Preparar la propuesta', 'Editar y revisar', 'Organizar el calendario'], ['Define the brief', 'Prepare the proposal', 'Edit and review', 'Organize the calendar']),
    outcome: t('Una campaña se construye antes de enviarse.', 'A campaign is built before it is sent.'),
  },
  'sophia-portfolio': {
    accent: '#b0a1bf', dark: '#2a2530', role: 'Product Design · Web Experience',
    story: [
      t(['EL PUNTO DE PARTIDA', 'Una identidad por descubrir.', 'El proyecto comienza por definir qué quiere comunicar Sophia y qué trabajo necesita presentar.'], ['THE STARTING POINT', 'An identity to discover.', 'The project starts by defining what Sophia wants to communicate and which work she needs to present.']),
      t(['LA DIRECCIÓN', 'Un portafolio con recorrido propio.', 'La estructura, el lenguaje visual y las interacciones se definirán durante el diseño.'], ['THE DIRECTION', 'A portfolio with its own journey.', 'Structure, visual language and interactions will be defined during design.']),
      t(['EL ESTADO', 'Proyecto planificado.', 'Todavía no existe una interfaz construida, capturas del producto ni un sitio publicado.'], ['THE STATUS', 'A planned project.', 'There is no built interface, product screenshot or published website yet.']),
    ],
    journey: t(['Descubrimiento', 'Contenido y estructura', 'Diseño de la experiencia', 'Desarrollo y pruebas'], ['Discovery', 'Content and structure', 'Experience design', 'Development and testing']),
    planned: true,
    outcome: t('El próximo recorrido está por diseñarse.', 'The next journey is yet to be designed.'),
  },
};

Object.assign(productCaseDetails, {
  'ceniza-web': {
    accent: '#c1a833', dark: '#171811', role: 'Product Design · Frontend · Integrations',
    story: [
      t(['EL RETO', 'Explicar una oferta creativa con claridad.', 'Conectar el trabajo del estudio, los servicios y los equipos con una solicitud comercial útil.'], ['THE CHALLENGE', 'Explain a creative offer clearly.', 'Connect studio work, services and equipment to a useful commercial inquiry.']),
      t(['EL PRODUCTO', 'Descubrimiento y contacto en un mismo recorrido.', 'Una web visual organiza proyectos y catálogo, con formularios y solicitudes protegidas del lado del servidor.'], ['THE PRODUCT', 'Discovery and contact in one journey.', 'A visual website organizes projects and catalog, with server-protected forms and inquiries.']),
      t(['EL VALOR', 'Una conversación empieza con contexto.', 'El visitante puede entender la oferta y elegir cómo continuar; la web tiene identidad y recorrido propios.'], ['THE VALUE', 'A conversation starts with context.', 'Visitors can understand the offer and choose how to continue; the website has its own identity and journey.']),
    ],
    gallery: [['/case-ceniza-web-desktop-v2.png',t('Web Ceniza · Experiencia de escritorio','Ceniza website · Desktop experience')],['/case-ceniza-web-mobile-v2.png',t('Contacto · Experiencia móvil','Contact · Mobile experience')]],
    journey: t(['Descubrir el estudio','Explorar servicios y equipos','Definir la necesidad','Enviar una solicitud'],['Discover the studio','Explore services and equipment','Define the need','Submit an inquiry']),
    outcome: t('Del trabajo creativo a una solicitud concreta.','From creative work to a concrete inquiry.'),
  },
  'naval-b2b': {
    accent: '#a6bc8f', dark: '#182421', role: 'Product Design · Frontend · AI Integration',
    story: [
      t(['EL RETO','Un catálogo técnico necesita orientación.','Hacer comprensibles los productos, sus aplicaciones y su documentación para clientes de distintos sectores.'],['THE CHALLENGE','A technical catalog needs guidance.','Make products, applications and documentation understandable to customers across sectors.']),
      t(['EL PRODUCTO','La web comercial de Naval.','Navegación de catálogo, información técnica y asistencia comercial dentro de una experiencia pública independiente.'],['THE PRODUCT','Naval’s commercial website.','Catalog navigation, technical information and commercial assistance in an independent public experience.']),
      t(['EL VALOR','Encontrar el producto y continuar.','El recorrido ayuda a convertir una necesidad de limpieza en una consulta o solicitud con contexto.'],['THE VALUE','Find the product and continue.','The journey helps turn a cleaning need into a contextual question or inquiry.']),
    ],
    gallery: [['/case-naval-web-chatbot-real.webp',t('Catálogo Naval · Web y asistencia comercial','Naval catalog · Website and commercial assistance')]],
    journey: t(['Explorar por necesidad','Consultar el producto','Revisar documentación','Solicitar orientación'],['Explore by need','Inspect the product','Review documentation','Request guidance']),
    outcome: t('Información técnica al servicio de la decisión.','Technical information that supports a decision.'),
  },
  'ceniza-agent': {
    accent: '#c1a833', dark: '#171811', role: 'AI Experience · Product Design · Integration',
    story: [
      t(['EL RETO','Consultar sin reconstruir el contexto.','Las preguntas del equipo necesitan relacionar clientes, cotizaciones y operación.'],['THE CHALLENGE','Ask without rebuilding context.','Team questions need to connect clients, quotes and operations.']),
      t(['EL PRODUCTO','Una conversación dentro del CRM.','El asistente consulta contexto y prepara reportes o propuestas para revisión.'],['THE PRODUCT','A conversation inside the CRM.','The assistant queries context and prepares reports or proposals for review.']),
      t(['EL CONTROL','La decisión sigue en manos del equipo.','Las propuestas y las acciones sensibles se separan; los cambios requieren revisión y aprobación.'],['THE CONTROL','The decision stays with the team.','Proposals and sensitive actions are separated; changes require review and approval.']),
    ],
    gallery: [['/ceniza-assistant-home-real.png',t('Asistente Ceniza · Resumen del negocio','Ceniza Assistant · Business overview')],['/ceniza-assistant-report-real.png',t('Asistente Ceniza · Reporte comercial','Ceniza Assistant · Commercial report')]],
    mobileGallery: [['/case-ceniza-crm-mobile-assistant.webp', t('Asistente · Consultas y prioridades', 'Assistant · Queries and priorities')], ['conversation', t('Conversación · Vista adaptada del reporte', 'Conversation · Adapted report view')]],
    journey: t(['Hacer una consulta','Recuperar el contexto','Revisar la propuesta','Aprobar el siguiente paso'],['Ask a question','Retrieve context','Review the proposal','Approve the next step']),
    outcome: t('Del contexto a una acción revisable.','From context to a reviewable action.'),
  },
  'chatbot': {
    accent: '#a6bc8f', dark: '#182421', role: 'Conversational UX · AI Integration',
    story: [
      t(['EL RETO','Orientar con información del producto.','Una conversación comercial debe responder a la necesidad del cliente sin inventar usos o condiciones.'],['THE CHALLENGE','Guide with product information.','A commercial conversation must address customer needs without inventing uses or terms.']),
      t(['EL PRODUCTO','El asesor conversacional de Naval.','El chatbot usa contexto de catálogo para orientar preguntas y preparar solicitudes comerciales.'],['THE PRODUCT','Naval’s conversational advisor.','The chatbot uses catalog context to guide questions and prepare commercial inquiries.']),
      t(['EL ALCANCE','Atención al cliente desde la web.','Este producto pertenece al recorrido público de Naval Web y es distinto del agente operativo del ERP.'],['THE SCOPE','Customer assistance on the website.','This product belongs to the public Naval Web journey and differs from the operational ERP agent.']),
    ],
    gallery: [['/case-naval-web-chatbot-real.webp',t('Chatbot de Naval · Conversación dentro del catálogo','Naval chatbot · Conversation within the catalog')]],
    journey: t(['Explicar la necesidad','Consultar contexto de producto','Recibir orientación','Preparar una solicitud'],['Explain the need','Query product context','Receive guidance','Prepare an inquiry']),
    outcome: t('Una conversación conectada con la necesidad.','A conversation connected to the need.'),
  },
});
