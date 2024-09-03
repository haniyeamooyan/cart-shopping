import { createContext, useState, ReactNode } from "react";
import { getProductData } from "../data/item";

export type ItemType = { id: string; quantity: number };

interface CartContextType {
  items: ItemType[];
  getProductQuantity: (id: string) => number;
  addItemToCart: (id: string) => void;
  removeItemFromCart: (id: string) => void;
  deleteFromCart: (id: string) => void;
  getTotalAmount: () => number;
}

export const CartContext = createContext<CartContextType>({
  items: [],
  getProductQuantity: (_id: string) => 0,
  addItemToCart: (_id: string) => {},
  removeItemFromCart: (_id: string) => {},
  deleteFromCart: (_id: string) => {},
  getTotalAmount: () => 0,
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartProducts, setCartProducts] = useState<ItemType[]>([]);

  function getProductQuantity(id: string): number {
    const quantity = cartProducts.find((item) => item.id === id)?.quantity;
    return quantity || 0;
  }

  function addItemToCart(id: string): void {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProducts([...cartProducts, { id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
    }
  }

  function deleteFromCart(id: string): void {
    setCartProducts(cartProducts.filter((item) => item.id !== id));
  }

  function removeItemFromCart(id: string): void {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      );
    }
  }

  function getTotalAmount(): number {
    let totalAmount = 0;
    cartProducts.forEach((item) => {
      const productData = getProductData(item.id);
      if (productData) {
        totalAmount += productData.price * item.quantity;
      }
    });
    return totalAmount;
  }

  const contextValue: CartContextType = {
    items: cartProducts,
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotalAmount,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
