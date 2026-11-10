import { LuMessageSquare, LuSearch } from 'react-icons/lu';

const examples = {
  'ceniza-web': ['Alquiler de iluminación en Bogotá, equipos y datos necesarios para cotizar.', 'Lighting rentals in Bogotá, equipment and what to include in a quote request.'],
  '40plus-commerce': ['Qué es el producto, cómo incorporarlo a la rutina y cómo hacer un pedido.', 'What the product is, how to use it and how to place an order.'],
  'naval-b2b': ['Para qué sirve cada producto, dónde se aplica y cómo consultar su ficha técnica.', 'What each product does, where it is used and how to find its technical documentation.'],
  'bernardo-portfolio': ['Qué proyectos realizó, cuál fue su rol y cómo contactarlo.', 'Which projects he worked on, what his role was and how to contact him.'],
  'sophia-portfolio': ['Qué trabajos presenta, cuál fue su aporte y cómo contactarla.', 'Which projects she presents, what she contributed and how to contact her.'],
};

export default function WebsiteSearchPanel({ productId, language }) {
  const es = language === 'es';
  const planned = productId === 'sophia-portfolio';
  const example = examples[productId][es ? 0 : 1];

  return (
    <section className="agent-value-panel website-search-panel" aria-labelledby="website-search-title">
      <div>
        <p className="eyebrow">{planned ? (es ? 'SEO · AEO · PLAN DE PUBLICACIÓN' : 'SEO · AEO · LAUNCH PLAN') : 'SEO · AEO'}</p>
        <h2 id="website-search-title">{es ? 'Visibilidad en búsquedas y motores de respuestas.' : 'Visibility in search and answer engines.'}</h2>
      </div>
      <div>
        <LuSearch aria-hidden="true" />
        <h3>{es ? 'SEO · Descubrimiento e indexación' : 'SEO · Discovery and indexing'}</h3>
        <p>{planned
          ? (es ? 'Al publicar, el plan es usar títulos descriptivos, enlaces internos y un sitemap para facilitar el descubrimiento de los proyectos.' : 'At launch, descriptive titles, internal links and a sitemap can help search engines discover the projects.')
          : (es ? 'El sitemap y los enlaces ayudan a los buscadores a descubrir las páginas. Los títulos descriptivos aclaran qué encontrará la persona en cada resultado.' : 'The sitemap and links help search engines discover pages. Descriptive titles tell people what to expect from each result.')}</p>
      </div>
      <div>
        <LuMessageSquare aria-hidden="true" />
        <h3>{es ? 'AEO · Contenido que responde' : 'AEO · Content that answers'}</h3>
        <p>{es ? 'El contenido se organiza alrededor de preguntas concretas.' : 'Content is organized around specific questions.'} {example}</p>
      </div>
    </section>
  );
}
