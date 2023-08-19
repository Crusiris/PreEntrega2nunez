import { createContext, useState } from "react";

const cartContext = createContext();
const CartProvider = cartContext.Provider;

const CartContextProvider = ({ children }) => {
  const { test, setTest } = useState("soy un test");
  return <CartProvider value={test}>{children}</CartProvider>;
};

export default CartContextProvider;
