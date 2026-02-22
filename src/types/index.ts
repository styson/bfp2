export interface Scenario {
  id: string;
  name: string;
  att?: string;
  from?: string;
  boards?: string;
  arc_id?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  includes?: string;
  scenarios?: Scenario[];
  price: number;
  intPrice?: number;
  image: string;
  category: string;
  paypalItemCode: string;
  releaseDate: string;
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  shippingType: 'domestic' | 'international';
}

export interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, shippingType: 'domestic' | 'international') => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  setItems: (items: CartItem[]) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getSubtotal: () => number;
  getItemCount: () => number;
}

export interface FilterState {
  categories: string[];
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
}