export interface Product {
  id: string;
  name: string;
  description: string;
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