import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import CartContextProvider from "./context/CartContext";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      );
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar products={products} />
        <main className="py-10 bg-gray-100">
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer products={products} />}
            />
            <Route
              path="/categoria/:id"
              element={<ItemListContainer products={products} />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
