import React from "react";
import {Component} from 'react';

import Img from '../../assets/images/img-hamburguesa.png';

import "./LastProduct.css";

class LastProduct extends Component{
    
    constructor(){
        super()
        this.state={
            total: 0,
            producto : {}
        }
    }

    componentDidMount(){
        fetch('/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(products =>{
            this.setState({total: products.total})
        })
        .catch(error => console.log(error))

        fetch('/api/products/'+(this.state.total-1))
        .then(respuesta => {
            return respuesta.json()
        })
        .then(product =>{
            console.log(product);
            this.setState({producto: product})
        })
        .catch(error => console.log(error))
    }

    render(){
        return (
            <div className='LastProduct'>
                <div class="ImageDetail">
                    <img src={Img} alt="image-product"/>
                </div>
                <div class="ProductInfo">
                    {/* <p class="ProductName">{this.state.producto.name}</p>
                    <p class="ProductPrice" >{this.state.producto.price}+</p>
                    <p class="ProductCate">{this.state.producto.categoria.name}</p>
                    <p class="ProductDescTitle">Descripcion:</p>
                    <p class="ProductDescription">{this.state.producto.description}</p>
         */}
                </div>
            </div>
        )
    }
}

export default LastProduct;