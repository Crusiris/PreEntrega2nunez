import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../utils";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const category = useParams();

  useEffect(() => {
    let order;
    if (category.id) {
      order = getProductsByCategory(category.id);
    } else {
      order = getProducts();
    }

    order.then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, [category.id]);

  return (
    <section>
      {loading ? <p>cargando...</p> : <ItemList products={products} />}
    </section>
  );
};

export default ItemListContainer;
