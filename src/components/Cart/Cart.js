import { useContext, useState } from "react";
import ItemCart from "../ItemCart/ItemCart";
import { CartContext } from "../../context/CartContextProvider";
import { serverTimestamp } from "firebase/firestore";
import { saveOrder } from "../../utils";

function Cart() {
  const { cartList } = useContext(CartContext);
  const [ticket, setTicket] = useState("");

  const handleBuy = () => {
    let purchaseOrder = {
      products: cartList,
      fecha: serverTimestamp(),
    };

    saveOrder(purchaseOrder)
      .then((res) => {
        setTicket(res.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section className="flex  flex-col items-center ">
        <div className=" min-w-[600px] max-w-xl mx-auto">
          {cartList.length > 0 ? (
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartList.map((product) => (
                <ItemCart key={product.product.id} product={product} />
              ))}
            </ul>
          ) : (
            <div className="text-center h-48  flex items-center justify-center font-medium text-lg">
              <p>No existen productos aún </p>
            </div>
          )}
        </div>
        {cartList.length > 0 && (
          <button
            className="btn__primary w-full items-center justify-center max-w-[200px] mt-12"
            onClick={handleBuy}
          >
            comprar
          </button>
        )}
      </section>
    </>
  );
}

export default Cart;
