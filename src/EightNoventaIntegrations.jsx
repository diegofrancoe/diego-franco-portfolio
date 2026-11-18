import { LuDatabase, LuPalette, LuServer, LuShoppingBag, LuSlidersHorizontal, LuWrench } from 'react-icons/lu';
import { SiInstagram, SiWhatsapp } from 'react-icons/si';

export default function EightNoventaIntegrations({ es }) {
  const groups = [
    [es ? 'COLECCIÓN Y CONTACTO' : 'COLLECTION AND CONTACT', 'is-connected', [
      [LuPalette, es ? 'Catálogo' : 'Catalog', es ? 'Una fuente de datos reúne piezas, variantes, imágenes y precios.' : 'One data source brings together pieces, variants, images and prices.'],
      [SiWhatsapp, 'WhatsApp', es ? 'Consulta directa sobre la colección.' : 'Direct inquiries about the collection.'],
      [SiInstagram, 'Instagram', es ? 'Continuidad con el universo visual de la marca.' : 'Continuity with the brand’s visual world.'],
    ]],
    [es ? 'SELECCIÓN Y PEDIDO' : 'SELECTION AND ORDER', 'is-available', [
      [LuSlidersHorizontal, es ? 'Variantes' : 'Variants', es ? 'Color y tamaño acompañan cada elección.' : 'Color and size follow each selection.'],
      [LuShoppingBag, es ? 'Carrito' : 'Cart', es ? 'Cantidades y subtotal guardados en el navegador.' : 'Quantities and subtotal saved in the browser.'],
      [LuServer, 'API · Node.js', es ? 'Validación y registro de solicitudes de pedido.' : 'Order request validation and recording.'],
    ]],
    [es ? 'GESTIÓN DEL TALLER' : 'WORKSHOP MANAGEMENT', 'is-measurement', [
      [LuDatabase, 'SQLite', es ? 'Persistencia de pedidos y datos de entrega.' : 'Persistent order and delivery details.'],
      [LuWrench, es ? 'Panel del taller' : 'Workshop panel', es ? 'Acceso protegido para organizar la atención de pedidos.' : 'Protected access for organizing order handling.'],
    ]],
  ];
  return <section className="forty-integrations-section ceniza-web-integrations">
    <header><div><p className="eyebrow">{es ? 'PRODUCTO + COMERCIO' : 'PRODUCT + COMMERCE'}</p><h2>{es ? 'Cómo se conecta 8noventa.' : 'How 8noventa connects.'}</h2></div><p>{es ? 'Una experiencia ligera conecta la colección con la selección del cliente y la gestión de pedidos del taller.' : 'A lightweight experience connects the collection with customer selections and workshop order management.'}</p></header>
    <div className="forty-integrations-map">{groups.map(([title, className, items]) => <section className={className} key={title}><div className="forty-integration-status"><span />{title}</div><ul>{items.map(([Icon, name, copy]) => <li key={name}><Icon aria-hidden="true" /><div><strong>{name}</strong><p>{copy}</p></div></li>)}</ul></section>)}</div>
  </section>;
}
