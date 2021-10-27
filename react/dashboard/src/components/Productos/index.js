import React from "react";
import {Component} from 'react';

import "./Productos.css";

class Productos extends Component{
    
    constructor(){
        super()
        this.state={
            productos: []
        }

    }

    componentDidMount(){
        fetch('/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(products =>{
            console.log(products.products);
            this.setState({productos: products.products})
        })
        .catch(error => console.log(error))
    }

    render(){
        return (    
        <div className='WrapperProductos'>
            <p className='TitlePro'>Productos</p>
            <div className='ContainerListaPro'>
                { this.state.productos.map((product,index)=>{
                    return <p className='ListaProdu' key={index}>{product.name}</p> 
                })}
            </div>
        </div>
        )
    }
}

export default Productos;