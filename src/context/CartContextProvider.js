import { createContext, useState } from "react";

export const CartContext = createContext();
const CartProvider = CartContext.Provider;

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product, quantity) => {
    setCartList((cartList) => [...cartList, { product, quantity }]);
  };
  const removeItem = () => {};
  const clearCart = () => {};

  return (
    <CartProvider
      value={{
        cartList,
        addToCart,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartProvider>
  );
};

export default CartContextProvider;
