const t = (es, en) => ({ es, en });
export const productCaseDetails = {
  'my-garage-platform': {
    role: 'Product Design · Full-stack Development · AI Integration',
    story: [
      t(['EL RETO', 'Conectar toda la posventa.', 'Reunir el estado del vehículo, sus cuidados, documentos y citas en una experiencia que el conductor pueda consultar y usar.'], ['THE CHALLENGE', 'Connect the aftersales experience.', 'Bring vehicle status, care, documents and appointments into one experience drivers can explore and use.']),
      t(['EL SISTEMA', 'Un garaje privado, con contexto.', 'Cada cuenta conserva sus vehículos. El visor 3D conecta componentes con fichas, historial, kilometraje y recomendaciones.'], ['THE SYSTEM', 'A private garage with context.', 'Each account keeps its own vehicles. The 3D viewer connects components to details, history, mileage and recommendations.']),
      t(['EL VALOR', 'De la consulta a la reserva.', 'Mia orienta con los datos del carro; el conductor revisa horarios y confirma una reserva persistente. Las fallas graves pueden convertirse en casos de atención humana.'], ['THE VALUE', 'From questions to bookings.', 'Mia provides vehicle-aware guidance; drivers review time slots and confirm a persistent booking. Serious faults can become human support cases.']),
    ],
    journey: t(['Acceder al garaje', 'Explorar el vehículo', 'Consultar cuidados y disponibilidad', 'Revisar y confirmar la reserva'], ['Access the garage', 'Explore the vehicle', 'Check care and availability', 'Review and confirm the booking']),
    outcome: t('Tu vehículo, sus cuidados y el siguiente paso.', 'Your vehicle, its care and the next step.'),
  },
  'my-garage-ai': {
    role: 'Agent Experience · Python Backend · AI Integration',
    story: [
      t(['EL RETO', 'Responder con el contexto correcto.', 'Una pregunta sobre cuidados necesita el vehículo, el kilometraje y su historial, además de una vía clara para actuar.'], ['THE CHALLENGE', 'Respond with the right context.', 'Care questions need vehicle details, mileage and history, plus a clear path to action.']),
      t(['EL PRODUCTO', 'Mia consulta antes de proponer.', 'El backend entrega el vehículo autorizado y sus recomendaciones. El agente consulta disponibilidad, comprueba reservas y prepara una propuesta de cita.'], ['THE PRODUCT', 'Mia checks before proposing.', 'The backend supplies the authorized vehicle and its recommendations. The agent checks availability and existing bookings before preparing an appointment proposal.']),
      t(['EL CONTROL', 'El conductor confirma.', 'Mia no confirma reservas por su cuenta. El conductor revisa el resumen y aprueba; los reportes críticos activan reglas de seguridad y un caso para atención humana.'], ['THE CONTROL', 'Drivers confirm.', 'Mia cannot confirm bookings on its own. Drivers review and approve the summary; critical reports trigger safety rules and a human support case.']),
    ],
    journey: t(['Seleccionar el contexto', 'Consultar datos y herramientas', 'Preparar el siguiente paso', 'Confirmar o escalar el caso'], ['Select the context', 'Query data and tools', 'Prepare the next step', 'Confirm or escalate the case']),
    outcome: t('Orientación conectada con tu vehículo.', 'Guidance connected to your vehicle.'),
  },
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
    gallery: [['/case-bernardo-website-real.png', t('Portada · Producción escénica y visual', 'Home · Stage and visual production')], ['/case-bernardo-desktop-selection.png', t('Selección · Proyectos destacados', 'Selection · Featured projects')], ['/case-bernardo-mobile-super-rayo.png', t('Super Rayo', 'Super Rayo'), 'mobile'], ['/case-bernardo-mobile-contact.png', t('Contacto', 'Contact'), 'mobile'], ['/case-bernardo-mobile-profile.png', t('Perfil', 'Profile'), 'mobile']],
    mobileTitle: t('El trabajo visual, contigo.', 'Visual work, with you.'),
    mobileCopy: t('Explora proyectos, conoce el perfil y continúa al contacto desde el celular.', 'Explore projects, discover the profile and continue to contact from your phone.'),
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
    gallery: [
      ['/case-naval-erp-assistant-fullscreen.webp', t('Prototipo del asistente en Naval ERP', 'Assistant prototype in Naval ERP'), t('Asistente', 'Assistant')],
      ['/case-naval-financial-report-v1.webp', t('Informe financiero ejecutivo de Naval ERP', 'Naval ERP executive financial report'), t('Finanzas', 'Finance')],
    ],
    mobileGallery: [['/case-naval-agent-mobile-assistant.png', t('Prototipo del asistente', 'Assistant prototype')], ['/case-naval-agent-mobile-production.png', t('Producción del ERP', 'ERP production')], ['/case-naval-agent-mobile-finance.png', t('Finanzas del ERP', 'ERP finance')]],
    journey: t(['Consulta del equipo', 'Contexto autorizado', 'Propuesta del agente', 'Aprobación humana'], ['Team query', 'Authorized context', 'Agent proposal', 'Human approval']),
    planned: true,
    outcome: t('Primero el contexto. Después, una acción revisable.', 'Context first. Then, a reviewable action.'),
  },
  'naval-campaigns': {
    mobileTitle: t('Tu agenda comercial, contigo.', 'Your commercial calendar, with you.'),
    mobileCopy: t('Consulta la agenda, prepara mensajes y revisa campañas de WhatsApp y correo desde el celular.', 'Check the calendar, prepare messages and review WhatsApp and email campaigns from your phone.'),
    gallery: [
      ['/case-pia-workspace.webp', t('Espacio real de campaña con una solicitud escrita al asistente.', 'Actual campaign workspace with a request entered in the assistant.')],
      ['/case-pia-preview-desktop.webp', t('Vista previa de WhatsApp con un borrador de ejemplo editado en la app.', 'WhatsApp preview with an example draft edited in the app.')],
      ['/case-pia-brief-mobile.webp', t('Brief de campaña', 'Campaign brief'), 'mobile'],
      ['/case-pia-preview-mobile.webp', t('Revisión de WhatsApp', 'WhatsApp review'), 'mobile'],
      ['/case-pia-agenda-mobile.png', t('Agenda comercial', 'Commercial calendar'), 'mobile'],
    ],
    capabilities: t([
      {value:'BRIEF',label:'Contactos y segmentación',note:'Excel reúne clientes, segmentos y datos para dirigir cada campaña.'},
      {value:'IA',label:'Propuestas con contexto',note:'Texto e imágenes con catálogo, referencias y documentos aprobados.'},
      {value:'EDIT',label:'WhatsApp y Outlook',note:'Mensajes y campañas por WhatsApp Business API y correo de Outlook.'},
      {value:'PLAN',label:'Calendario comercial',note:'Actividades, campañas y fechas de seguimiento en una agenda compartida.'}
    ], [
      {value:'BRIEF',label:'Contacts and segmentation',note:'Excel brings together customers, segments and data for targeting each campaign.'},
      {value:'AI',label:'Contextual proposals',note:'Text and images grounded in catalog, references and approved documents.'},
      {value:'EDIT',label:'WhatsApp and Outlook',note:'Messages and campaigns through WhatsApp Business API and Outlook email.'},
      {value:'PLAN',label:'Commercial calendar',note:'Activities, campaigns and follow-up dates in a shared calendar.'}
    ]),
    accent: '#c6bd80', dark: '#172723', role: 'Product Design · AI Experience · Full-stack',
    story: [
      t(['EL RETO', 'Coordinar toda la actividad comercial.', 'Reunir contactos, campañas, visitas y seguimiento para que el equipo sepa qué hacer, cuándo y por qué canal.'], ['THE CHALLENGE', 'Coordinate the entire sales workflow.', 'Bring together contacts, campaigns, visits and follow-up so the team knows what to do, when and through which channel.']),
      t(['EL PRODUCTO', 'Una agenda comercial conectada.', 'Conecta Excel de Microsoft 365, Outlook y WhatsApp con una agenda para preparar contenido con IA y organizar campañas.'], ['THE PRODUCT', 'A connected commercial calendar.', 'Connects Microsoft 365 Excel, Outlook and WhatsApp with a calendar for preparing AI-assisted content and organizing campaigns.']),
      t(['EL CONTROL', 'Del mensaje al seguimiento.', 'El equipo revisa los mensajes, programa las campañas y consulta las respuestas para continuar cada conversación.'], ['THE CONTROL', 'From message to follow-up.', 'The team reviews messages, schedules campaigns and checks replies to continue each conversation.']),
    ],
    journey: t(['Organizar la audiencia', 'Preparar la campaña', 'Revisar y programar', 'Enviar y dar seguimiento'], ['Organize the audience', 'Prepare the campaign', 'Review and schedule', 'Send and follow up']),
    outcome: t('Toda la actividad comercial en una agenda.', 'The entire sales workflow in one calendar.'),
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
    gallery: [
      ['/case-ceniza-site-studio-desktop.jpg', t('Studio · Escritorio', 'Studio · Desktop')],
      ['/case-ceniza-site-catalog-desktop.jpg', t('Catálogo · Escritorio', 'Catalog · Desktop')],
      ['/case-ceniza-site-project-form-mobile.jpg', t('01 · Formulario de contacto', '01 · Contact form'), 'mobile'],
      ['/case-ceniza-site-softbox-mobile.jpg', t('02 · Softbox de estudio', '02 · Studio softbox'), 'mobile'],
      ['/case-ceniza-site-podcast-mobile.jpg', t('03 · Combo de iluminación', '03 · Lighting bundle'), 'mobile'],
    ],
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
    gallery: [
      ['/case-naval-site-home-wide.jpg', t('Portada · Limpieza profesional', 'Home · Professional cleaning')],
      ['/case-naval-web-chatbot-real.webp', t('Catálogo · Asistencia comercial', 'Catalog · Commercial assistance')],
      ['/case-naval-site-products-mobile.jpg', t('Catálogo de productos', 'Product catalog'), 'mobile'],
      ['/case-naval-site-training-mobile.jpg', t('Capacitaciones', 'Training'), 'mobile'],
      ['/case-naval-site-assistant-mobile.jpg', t('Asistente Naval', 'Naval assistant'), 'mobile'],
    ],
    capabilities: t([
      { value: 'UX', label: 'Catálogo por necesidad', note: 'Los filtros organizan los productos por línea y sector.' },
      { value: 'UI', label: 'Fichas claras', note: 'Cada ficha reúne presentaciones, usos y documentación técnica.' },
      { value: 'B2B', label: 'Asesoría comercial', note: 'La web orienta consultas de producto, capacitación y cotización.' },
      { value: 'IA', label: 'Asistente de catálogo', note: 'La conversación ayuda a comparar opciones y encontrar el siguiente paso.' },
    ], [
      { value: 'UX', label: 'Catalog by need', note: 'Filters organize products by line and industry.' },
      { value: 'UI', label: 'Clear product pages', note: 'Each page gathers sizes, uses and technical documentation.' },
      { value: 'B2B', label: 'Sales guidance', note: 'The website guides product, training and quote inquiries.' },
      { value: 'AI', label: 'Catalog assistant', note: 'The conversation helps visitors compare options and find the next step.' },
    ]),
    mobileTitle: t('Naval en tu celular.', 'Naval on your phone.'),
    mobileCopy: t('Consulta productos, explora las capacitaciones y pide orientación al asistente desde el celular.', 'Browse products, explore training and ask the assistant for guidance from your phone.'),
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
    mobileGallery: [['/case-ceniza-crm-mobile-assistant.webp', t('Asistente · Consultas y prioridades', 'Assistant · Queries and priorities')], ['/case-ceniza-crm-mobile-agenda.webp', t('Agenda · Contexto del CRM', 'Calendar · CRM context')], ['/case-ceniza-crm-mobile-inventory-detail.webp', t('Inventario · Contexto del CRM', 'Inventory · CRM context')]],
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
    gallery: [
      ['/case-chatbot-recommendation-desktop.png',t('Recomendación · Compara productos y aclara la necesidad','Recommendation · Compares products and clarifies needs')],
      ['/case-chatbot-product-quote-desktop.png',t('Cotización · Desde la ficha del producto','Quote · From the product detail page')],
      ['/case-chatbot-quote-mobile.png',t('Cotización guiada','Guided quote'),'mobile'],
      ['/case-chatbot-training-mobile.png',t('Solicitud de capacitación','Training inquiry'),'mobile'],
      ['/case-chatbot-delivery-mobile.png',t('Orientación de entregas','Delivery guidance'),'mobile'],
    ],
    mobileTitle: t('Una conversación para cada necesidad.','A conversation for every need.'),
    mobileCopy: t('Desde el celular, inicia una cotización, solicita capacitación o consulta cobertura, tiempos y costos de entrega. El asistente pregunta lo necesario para orientar cada caso.','Start a quote, request training or ask about delivery coverage, timing and costs from your phone. The assistant asks the questions needed to guide each case.'),
    capabilities: t([
      {value:'01',label:'Productos y cotizaciones',note:'Compara opciones según la superficie y el uso, ayuda a estimar cantidades y reúne producto, presentación y contacto para cotizar.'},
      {value:'02',label:'Fichas y seguridad',note:'Orienta sobre usos y diluciones y facilita el acceso a fichas técnicas y documentos de seguridad disponibles para cada producto.'},
      {value:'03',label:'Capacitaciones',note:'Guía la solicitud de formación: tema, participantes, empresa, ubicación y fecha preferida, sin perder el contexto de la conversación.'},
      {value:'04',label:'Navegación por la web',note:'Ayuda a encontrar productos, categorías, preguntas frecuentes y páginas relevantes mediante accesos dentro de la conversación.'},
      {value:'05',label:'Entregas y quejas',note:'Pregunta por el destino para orientar sobre entregas y recoge los datos y el motivo de las quejas para canalizar su atención.'},
      {value:'06',label:'Atención humana',note:'Permite continuar directamente con un asesor por WhatsApp, conservando el resumen de la necesidad para facilitar el seguimiento.'},
    ],[
      {value:'01',label:'Products and quotes',note:'Compares options by surface and usage, helps estimate quantities and collects product, package size and contact details for a quote.'},
      {value:'02',label:'Technical and safety documents',note:'Explains uses and dilutions and provides access to available technical and safety data sheets for each product.'},
      {value:'03',label:'Training inquiries',note:'Guides training requests: topic, attendees, company, location and preferred date, keeping the conversation in context.'},
      {value:'04',label:'Website navigation',note:'Helps find products, categories, FAQs and relevant pages through links within the conversation.'},
      {value:'05',label:'Delivery and complaints',note:'Asks for the destination to guide delivery questions and collects complaint details and reasons for follow-up.'},
      {value:'06',label:'Human assistance',note:'Lets visitors continue directly with an advisor on WhatsApp, carrying a summary of their needs into the conversation.'},
    ]),
    journey: t(['Entender la consulta','Orientar con contexto','Preparar la solicitud','Conectar con el equipo'],['Understand the inquiry','Guide with context','Prepare the request','Connect with the team']),
    outcome: t('Una conversación conectada con la necesidad.','A conversation connected to the need.'),
  },
});

Object.assign(productCaseDetails, {
  '8noventa': {
    accent: '#596346', dark: '#22291f', role: 'Product Design · Frontend · Backend',
    story: [
      t(['EL RETO','Elegir un mueble también es elegir cómo vivirlo.','Mostrar escala, materiales y variantes para encontrar una pieza que funcione para la mascota y para la casa.'],['THE CHALLENGE','Choosing furniture means imagining life with it.','Show scale, materials and variants to find a piece that works for both the pet and the home.']),
      t(['EL PRODUCTO','Una colección que se puede explorar.','Seis piezas, filtros para perros y gatos y fichas con fotografías, construcción, acabados y precios.'],['THE PRODUCT','A collection made for exploration.','Six pieces, dog and cat filters, and product pages with photographs, construction, finishes and prices.']),
      t(['EL VALOR','De descubrir una pieza a preparar el pedido.','La selección de color y tamaño acompaña al producto hasta el carrito, sin perder el contexto de la elección.'],['THE VALUE','From discovering a piece to preparing an order.','Color and size selections follow the product into the cart, preserving the context of each choice.']),
    ],
    gallery: [
      ['/case-8noventa-home.png',t('Colección · Identidad y producto','Collection · Brand and product')],
      ['/case-8noventa-product.png',t('Ficha · Materiales, color y precio','Product detail · Materials, color and price')],
      ['/case-8noventa-home-mobile.png',t('DESCUBRIR','DISCOVER'),'mobile'],
      ['/case-8noventa-product-mobile.png',t('ELEGIR LA PIEZA','CHOOSE A PIECE'),'mobile'],
      ['/case-8noventa-cart-mobile.png',t('REVISAR EL CARRITO','REVIEW THE CART'),'mobile'],
    ],
    capabilities: t([
      {value:'UX',label:'Explorar la colección',note:'Filtros por mascota y una presentación visual de cada pieza.'},
      {value:'UI',label:'Elegir con detalle',note:'Colores, medidas, materiales y construcción en la misma ficha.'},
      {value:'SHOP',label:'Carrito con contexto',note:'Conserva variantes, cantidades y subtotal entre visitas.'},
      {value:'API',label:'Pedidos organizados',note:'El servidor registra solicitudes para su gestión desde el taller.'},
    ],[
      {value:'UX',label:'Explore the collection',note:'Pet filters and a visual presentation of each piece.'},
      {value:'UI',label:'Choose with detail',note:'Colors, dimensions, materials and construction in one product view.'},
      {value:'SHOP',label:'A contextual cart',note:'Preserves variants, quantities and subtotal between visits.'},
      {value:'API',label:'Organized orders',note:'The server records requests for management in the workshop.'},
    ]),
    mobileTitle:t('Tu próxima pieza, desde el celular.','Your next piece, from your phone.'),
    mobileCopy:t('Descubre la colección, elige un acabado y revisa tu selección en el carrito.','Explore the collection, choose a finish and review your selection in the cart.'),
    journey:t(['Descubrir la colección','Elegir tamaño y acabado','Revisar el carrito','Preparar el pedido'],['Discover the collection','Choose size and finish','Review the cart','Prepare the order']),
    outcome:t('Diseño para la casa. Un lugar para tu mascota.','Designed for the home. A place for your pet.'),
  },
});
