import { useContext } from "react";
import CartContextProvider from "../../context/CartContextProvider";

function Cart() {
  const { cart } = useContext(CartContextProvider);
  return (
    <>
      {cart.length ? (
        <ul role="list" className="-my-6 divide-y divide-gray-200"></ul>
      ) : (
        <p>Nohay productos ahora</p>
      )}
    </>
  );
}

export default Cart;
