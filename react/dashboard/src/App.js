import React from 'react';
//Components
import Header from './components/Header';
import Totales from './components/Totales';
import LastProduct from './components/LastProduct';
import Categories from './components/Categories';
import Productos from './components/Productos';
//import Footer from './components/Footer';

//Styles
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Container'>
        <Totales/>
        <div className='ContainerTotal'>
          <LastProduct/>
          <Categories/>
          <Productos/>
        </div>
      </div>

    </div>
  );
}


export default App;
