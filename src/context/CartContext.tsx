import { createContext, useState } from "react";
import { getProductData } from "../data/item";

export const CartContext =  createContext({
    items: [],
    getProductQuantity: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    deleteFromCart: () => {},
    getTotalAmount: () => {}
});

//TODO: need to fix types

export function CartProvider ({children}: any) {
  const [cartProducts, setCartProducts] = useState<any>([])

    function getProductQuantity (id: string) {
      const quantity = cartProducts.find((item: any) => item?.id === id)?.quantity;
      if(!quantity){
        return 0
      }
      return quantity
    }

    function addItemToCart (id: string) {
        const quantity = getProductQuantity(id);
        if(quantity === 0 ) {
            setCartProducts([...cartProducts, {id: id, quantity: 1}])
        }else{
            setCartProducts(cartProducts.map((item: any) => item?.id === id ? {...item, quantity: item.quantity+1}: item))
        }
    }


    function deleteFromCart (id: string) {
        setCartProducts((cartProducts: any) => cartProducts.filter((item: any) => item?.id !== id))
    }

    function removeItemFromCart (id: string) {
        const quantity = getProductQuantity(id);

        if(quantity === 1){
            deleteFromCart(id)
        }else{
            setCartProducts(
                cartProducts.map((item: any) => item.id === id ? {...item, quantity: item.quantity - 1} : item)
            )
        }
    }

    function getTotalAmount (){
        let totalAmount = 0;
        cartProducts.map((item: any) => {
            const productData = getProductData(item.id)

            if(productData)  totalAmount += productData?.price * item.quantity
        })
    }

  const ContextValue = {
    items: cartProducts,
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotalAmount
  }

  return(
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  )

}