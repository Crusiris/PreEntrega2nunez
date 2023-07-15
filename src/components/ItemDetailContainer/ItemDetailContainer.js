import React, { useState, useEffect } from 'react' 
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);    
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then(res=>res.json());
      setProduct(data);
    }
   
   fetchData();
  }, [params]);
 
  return ( 
    <section className='grid grid-cols-1 lg:grid-cols-12'>
      <ItemDetail product={product}/> 
    </section> 
  )
}

export default ItemDetailContainer

