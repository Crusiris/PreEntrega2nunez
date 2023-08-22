import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../utils";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    getProductById(`${params.id}`)
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12">
      <ItemDetail product={product} />
    </section>
  );
}

export default ItemDetailContainer;
