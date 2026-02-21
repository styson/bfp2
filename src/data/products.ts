import { products as bfpProducts } from './bfp';
import { products as lftProducts } from './lft';
import type { Product } from '../types';

type SourceProduct = (typeof bfpProducts)[number];

function mapProduct(p: SourceProduct): Product {
  return {
    id: String(p.id),
    name: p.name,
    description: p.description,
    price: p.price,
    image: p.imageF ?? '',
    category: p.who === 'bfp' ? 'BFP' : 'LFT',
    paypalItemCode: p.button ?? '',
    releaseDate: `${p.year}-01-01`,
    inStock: p.active ?? false,
    featured: false,
    ...(p.intPrice && p.intPrice > 0 ? { intPrice: p.intPrice } : {}),
    ...(p.includes ? { includes: p.includes } : {}),
    ...(p.scenarios?.length ? { scenarios: p.scenarios } : {}),
  };
}

const bfp = bfpProducts
  .filter((p) => p.active && p.price > 0)
  .map(mapProduct);

const lft = lftProducts
  .filter((p) => p.active && p.price > 0)
  .map(mapProduct);

export const products: Product[] = [...bfp, ...lft];
