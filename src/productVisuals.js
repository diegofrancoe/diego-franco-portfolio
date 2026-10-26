import optimized from './optimizedArtwork.json';

export const productArtwork = optimized.artwork;
export const productVisualAssets = Object.fromEntries(
  Object.entries(productArtwork).map(([key, image]) => [key, image.src]),
);
export const heroArtwork = optimized.hero;
export const PRODUCT_ARTWORK_SIZES = '(max-width: 680px) 90vw, (max-width: 980px) 44vw, 28vw';
