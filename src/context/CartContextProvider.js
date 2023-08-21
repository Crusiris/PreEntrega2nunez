import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const CartProvider = CartContext.Provider;

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalpurchase, setTotalPurchase] = useState(0);

  const addToCart = (product, quantity) => {
    const existingItem = cartList.find((e) => e.product.id === product.id);

    if (existingItem) {
      const newCartList = cartList.map((e) =>
        e.product.id === existingItem.product.id
          ? { ...e, quantity: e.quantity + e.quantity }
          : e
      );
      setCartList(newCartList);
    } else {
      const newProduct = { product, quantity };
      setCartList([...cartList, newProduct]);
    }
  };

  const getQuantity = () => {
    const totalQty = cartList.reduce((total, e) => {
      return total + e.quantity;
    }, 0);
    setTotalQuantity(totalQty);
  };

  const removeItem = (id) => {
    const existingItem = cartList.find((e) => e.product.id === id);
    let newproducts;
    if (existingItem && existingItem.quantity > 1) {
      newproducts = cartList.map((e) => {
        if (e.product.id === id) {
          e.quantity = e.quantity - 1;
        }
        return e;
      });
    } else {
      newproducts = cartList.filter((product) => {
        return product.product.id != id ? product : null;
      });
    }
    setCartList(newproducts);
  };

  const clearCart = () => {
    setCartList([]);
  };

  return (
    <CartProvider
      value={{
        cartList,
        totalQuantity,
        totalpurchase,
        addToCart,
        removeItem,
        clearCart,
        getQuantity,
      }}
    >
      {children}
    </CartProvider>
  );
};

export default CartContextProvider;
