import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

function ItemCart({ product }) {
  const { removeItem } = useContext(CartContext);

  const handleDeleteProduct = () => {
    const {
      product: { id },
    } = product || { product: { id: null } };

    if (id) {
      removeItem(id);
    }
  };

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.product.image}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{product.product.title}</a>
            </h3>
            <p className="ml-4">{product.product.price}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Cantidad {product.quantity}</p>

          <div className="flex">
            <button
              onClick={handleDeleteProduct}
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ItemCart;
