import React, { useState, useEffect } from 'react' 
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);   
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then(res=>res.json());
      setProduct(data);
    }
   
   fetchData();
  }, [params]);

  const handleAddQuantity = ()=>{ 
    let stock = 10;
    if(quantity < stock){
      setQuantity(quantity + 1)
    }
  }

  const handleRemoveQuantity = ()=>{ 
    if(quantity > 1){
      setQuantity(quantity - 1)
    }
  }
  
  return ( 
    <section className='grid grid-cols-1 lg:grid-cols-12'>
      <ItemDetail product={product}/> 
    </section> 
  )
}

export default ItemDetailContainer

