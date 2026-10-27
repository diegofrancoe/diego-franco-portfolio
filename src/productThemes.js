// One palette per product, shared by catalog letters and case-study surfaces.
const tint = (angle, saturation = .75, exposure = .90) => `grayscale(1) sepia(.65) saturate(${saturation}) hue-rotate(${angle}deg) brightness(${exposure}) contrast(1.06) saturate(.48)`;
const theme = (accent, dark, wash, angle, saturation, exposure) => ({ accent, dark, wash, artworkFilter: tint(angle, saturation, exposure) });
export const productThemes = {
  'ceniza-crm': theme('#aa8b43','#29261c','#f0eadb',0,.9),
  'ceniza-agent': theme('#85977e','#22291f','#e9ede4',50,.55),
  'ceniza-web': theme('#8a9877','#252b20','#eceee3',40,.7),
  'naval-erp-agent': theme('#7d9877','#202a20','#e7eee3',55,.8),
  'naval-erp': theme('#8295ab','#222a34','#e8edf2',150,.7,.86),
  'naval-b2b': theme('#7c9b8e','#202d27','#e7eeea',90,.75,.82),
  '40plus-commerce': theme('#ae8b80','#302521','#f2e8e2',320,.65,.86),
  'atlas-crm': theme('#9390b3','#272634','#eceaf3',190,.75),
  'naval-campaigns': theme('#a087b7','#2b2333','#eee8f3',195,.85),
  'bernardo-portfolio': theme('#a18e70','#2c281f','#eee9df',0,.4),
  chatbot: theme('#b29b70','#2d281f','#f0eadf',0,.55),
  'sophia-portfolio': theme('#ad93ac','#302630','#f1e9f0',260,.6),
};
export const getProductTheme = id => productThemes[id];
export const productThemeStyle = id => {
  const t = getProductTheme(id);
  return t ? { '--case-accent':t.accent, '--case-dark':t.dark, '--case-wash':t.wash, '--product-artwork-filter':t.artworkFilter } : {};
};
