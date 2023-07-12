import React from 'react'; 
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({products}) => {
   
  return ( 
   <section>
     <ItemList products={products}/>
   </section>
  )
}

export default ItemListContainer
