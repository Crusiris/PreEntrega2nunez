import React, { useState } from 'react'; 
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({products}) => {
  const category = useParams()
  const [productsCategory, setProductsCategory]= useState([]);
  
  return ( 
   <section>
     <ItemList products={products}/>
   </section>
  )
}

export default ItemListContainer
