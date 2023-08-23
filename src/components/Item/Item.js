import React from "react";
import { NavLink } from "react-router-dom";

function Item({ product }) {
  const { id } = product;

  return (
    <article className="min-w-min h-[400px] rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      {/* mobile */}
      <div className="h-3/5 relative flex items-end overflow-hidden rounded-xl justify-center">
        <img className="h-full" src={product.image} alt="Hotel Photo" />
      </div>

      {/* desktop */}
      <div className="mt-1 p-2 h-2/5">
        <h2 className="text-slate-700">{product.title.substring(1, 24)}</h2>
        <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

        <div className="mt-3 flex flex-col items-center justify-between">
          <p className="text-lg font-bold text-gray-800">${product.price}</p>

          <NavLink to={`item/${id}`} className="btn__primary mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <span className="text-sm">Ver productcco</span>
          </NavLink>
        </div>
      </div>
    </article>
  );
}

export default Item;
