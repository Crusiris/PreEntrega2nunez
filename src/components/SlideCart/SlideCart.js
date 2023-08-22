import { Fragment, useContext, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CartContext } from "../../context/CartContextProvider";
import ItemCart from "../ItemCart/ItemCart";

function SlideCart({ open, handleCloseCart }) {
  const { cartList, clearCart, totalPurchase, getTotalPurchase } =
    useContext(CartContext);

  useEffect(() => {
    getTotalPurchase();
  }, [cartList]);

  const handleClose = () => {
    handleCloseCart(false);
  };

  const handleCleanCart = () => {
    clearCart();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Carrito de compra
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 focus:outline-none"
                            onClick={() => handleClose(false)}
                          >
                            <svg
                              className="h-6 w-6"
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_203_4)">
                                <path
                                  d="M19.8261 7.43579L18.3574 5.96704L12.5345 11.79L6.71155 5.96704L5.2428 7.43579L11.0657 13.2587L5.2428 19.0816L6.71155 20.5504L12.5345 14.7275L18.3574 20.5504L19.8261 19.0816L14.0032 13.2587L19.8261 7.43579Z"
                                  fill="#98DA9B"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_203_4">
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                    transform="translate(0.0344849 0.758667)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          {cartList.length > 0 ? (
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cartList.map((product) => (
                                <ItemCart
                                  key={product.product.id}
                                  product={product}
                                />
                              ))}
                            </ul>
                          ) : (
                            <div className="text-center h-48  flex items-center justify-center font-medium text-lg">
                              <p>No existen productos aún </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{totalPurchase}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <button
                          onClick={handleCleanCart}
                          href="#"
                          className="justify-center  text-base font-medium shadow-sm btn__primary mb-4 w-full"
                        >
                          Limpiar carrito
                        </button>
                        <a
                          href="#"
                          className="justify-center  text-base font-medium shadow-sm btn__primary "
                        >
                          Ir a pagar
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          <button
                            type="button"
                            className="font-medium text-primary-500 hover:text-primary-900"
                            onClick={() => handleClose(false)}
                          >
                            Continuar Comprando
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default SlideCart;
