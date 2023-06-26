 import ItemListContainer from './components/ItemListContainer.js';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className="App min-w-sm">
      <NavBar/>
      <section className='py-10 bg-gray-100'>
        <div className='mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <ItemListContainer/>
        </div>
      </section>
    </div>
  );
}

export default App;
