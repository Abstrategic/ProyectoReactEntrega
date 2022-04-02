// import logo from './logo.svg';
import './App.css';
import './Components/Navbar/Navbar'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <><div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Todos los artículos"} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      
      
    </div>
    <div className='webContainer'>
    
    

    </div></>
  );
}

export default App;
