
import './App.css';
import { useState } from 'react';
import AliensFilms from './components/AliensFilms';
import CartWidget from './components/CartWidget';
import Themes from './components/Themes';
import { Outlet } from 'react-router-dom';
import MainMenu from './pages/MainMenu';
import CartProvider from './components/providers/CartProvider';

function App() {
 // const [cart, setCart] = useState([]);

 // const addToCart = (item) => {
   // setCart([...cart, item]);

 // };

  const [Theme, setTheme] = useState(true);

  //const setThemes = (value) =>{
  //setTheme(value)};


  return (

    <div className={`App p-3 bg-gray-200${Theme ? "bg-indigo-500" : ""}`}>
      <div className="mx-auto container flex flex-row-reverse text-right py-5">
        <CartProvider>
        <CartWidget/>
        </CartProvider>
      </div>
      <div>

        <MainMenu />
      </div>
      <div>
        <Themes Theme={Theme} setTheme={setTheme} />

      </div>
      <Outlet></Outlet>

    </div>
  );
}

export default App;
