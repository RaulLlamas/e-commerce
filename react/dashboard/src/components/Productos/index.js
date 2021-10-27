import React from "react";

import "./Productos.css";

const Productos = () => (
    <div className='WrapperProductos'>
        <p className='TitlePro'>Productos</p>
        <div className='ContainerListaPro'>
            <p className='ListaProdu'>Hamburguesa</p>
            <p className='ListaProdu'>Alitas</p>
            <p className='ListaProdu'>Nachos</p>
            <p className='ListaProdu'>Hot-dogs</p>
        </div>
    </div>
);

export default Productos;