import { useState, useEffect } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
function App() {
  const [products, setProducts]=useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json());
        setProducts(data);
      }
    
     fetchData();
    }, []);
    

  return (
    <BrowserRouter> 
      <NavBar/>
      <main className='py-10 bg-gray-100'> 
          <ItemListContainer products={products}/> 
      </main>  
    </BrowserRouter>
  );
}

export default App;
