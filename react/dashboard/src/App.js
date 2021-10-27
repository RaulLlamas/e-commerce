import React from 'react';
//Components
import Header from './components/Header';
import Total from './components/Total';
import LastProduct from './components/LastProduct';
import Categories from './components/Categories';
//import Footer from './components/Footer';

//Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Container'>
        <div className='ContainerTotal'>
          <Total title='Products' number='15'/>
          <Total title='Categorias' number='3'/>
          <Total title='Products' number='15'/>
        </div>
        <div className='ContainerTotal'>
          <LastProduct/>
          <Categories/>
        </div>
      </div>

    </div>
  );
}


export default App;
