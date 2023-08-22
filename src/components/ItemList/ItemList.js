import React from "react";
import Item from "../Item/Item";

function ItemList({ products }) {
  return (
    <>
      {products.length > 0 && (
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default ItemList;
