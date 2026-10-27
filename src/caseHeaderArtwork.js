import { getProductTheme } from './productThemes';
// Interior headers use category artwork; home keeps each product's letter.
const responsive = (stem, filter = 'none') => ({
  src: `/optimized/${stem}-640.webp`,
  srcSet: `/optimized/${stem}-320.webp 320w, /optimized/${stem}-640.webp 640w`,
  width: 640,
  height: 640,
  filter,
});
const headers = {
  fullstack: responsive('case-fullstack-lightning-fur-v2'),
  website: responsive('case-website-browser-contrast-v3'),
  agents: responsive('ceniza-agent-header'),
};
const productHeaders = {
  'ceniza-crm': headers.fullstack,
  'naval-erp': responsive('case-fullstack-lightning-fur-v2', 'hue-rotate(65deg) saturate(.65)'),
  'atlas-crm': responsive('case-fullstack-lightning-fur-v2', 'hue-rotate(195deg) saturate(.55)'),
  'ceniza-web': responsive('case-website-browser-contrast-v3', 'hue-rotate(-45deg) saturate(.75)'),
  'naval-b2b': headers.website,
  '40plus-commerce': responsive('case-website-browser-contrast-v3', 'hue-rotate(225deg) saturate(.6)'),
  'bernardo-portfolio': responsive('case-website-browser-contrast-v3', 'hue-rotate(-55deg) saturate(.5)'),
  'sophia-portfolio': responsive('case-website-browser-contrast-v3', 'hue-rotate(150deg) saturate(.65)'),
  'ceniza-agent': headers.agents,
  'naval-erp-agent': responsive('case-agent-naval-v2'),
  'naval-campaigns': responsive('case-agent-marketing-v2'),
  chatbot: responsive('case-agent-chatbot-v2'),
};
export const getCaseHeaderArtwork = (category, productId) => {
  const artwork = productHeaders[productId] || headers[category];
  return artwork ? { ...artwork, filter: category === 'agents' ? 'brightness(.94) contrast(1.04)' : (getProductTheme(productId) ? `url(#case-art-tint-${productId}${category === 'website' ? '-window' : ''})` : artwork.filter) } : undefined;
};
