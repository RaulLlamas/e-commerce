import React from "react";

import Total from '../Total';

import "./Totales.css";

const Totales = () => (
    <div className='WrapperTotales'>
        <Total title='Products' number='15'/>
        <Total title='Categorias' number='3'/>
        <Total title='Products' number='15'/>
    </div>
);

export default Totales;