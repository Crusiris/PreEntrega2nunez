import { useContext } from "react";
import CartContextProvider from "../../context/CartContextProvider";

function Cart() {
  const { cart } = useContext(CartContextProvider);
  console.log("hola muno");
  return (
    <>
      <h1>hola mundo</h1>
    </>
  );
}

export default Cart;
