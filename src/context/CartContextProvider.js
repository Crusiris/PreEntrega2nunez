import { createContext, useState } from "react";

export const CartContext = createContext();
const CartProvider = CartContext.Provider;

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalpurchase, setTotalPurchase] = useState(0);

  const addToCart = (product, quantity) => {
    const existingItem = cartList.find((e) => e.product.id === product.id);
    if (existingItem) {
      cartList.map((e) => {
        return e.product.id === existingItem.product.id
          ? e.quantity++
          : e.product;
      });
    } else {
      const newProduct = [...cartList, { product, quantity }];
      setCartList(newProduct);
    }

    const totalQty = cartList.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartList.reduce(
      (total, item) => total + item.product.price * item.price,
      0
    );
    setTotalQuantity(totalQty);
    setTotalPurchase(totalPrice);
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

  const clearCart = () => {};

  const getQuantity = () => {};

  return (
    <CartProvider
      value={{
        cartList,
        totalQuantity,
        totalpurchase,
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
