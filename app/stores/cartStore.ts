// stores/cartStore.ts
import { create } from 'zustand';

type Product = {
  name: string;
  quantity: number;
  // add other fields if needed
};

type CartState = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productName: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const exists = state.cart.find((p) => p.name === product.name);
      if (exists) {
        return {
          cart: state.cart.map((p) =>
            p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    }),
  removeFromCart: (productName) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.name !== productName),
    })),
  clearCart: () => set({ cart: [] }),
}));
