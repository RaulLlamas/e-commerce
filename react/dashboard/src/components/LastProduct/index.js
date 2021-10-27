import React from "react";
import {Component} from 'react';

import Img from '../../assets/images/img-hamburguesa.png';

import "./LastProduct.css";

class LastProduct extends Component{
    
    constructor(){
        super()
        this.state={
            total: 0,
            producto : {},
            categoria:''
        }
    }

    componentDidMount(){
        fetch('/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(products =>{
            this.setState({total: products.total})

            fetch('/api/products/'+this.state.total)
            .then(respuesta => {
                return respuesta.json()
            })
            .then(product =>{
                this.setState({producto: product.data})
                this.setState({categoria: product.data.categoria.name})
            })
            .catch(error => console.log(error))

        })
        .catch(error => console.log(error))


    }

    render(){
        return (
            <div className='LastProduct'>
                <div class="ImageDetail">
                    <img src={this.state.producto.Image} alt="image-product"/>
                </div>
                <div class="ProductInfo">
                    <p class="ProductName">{this.state.producto.name}</p>
                    <p class="ProductPrice" >{this.state.producto.price}</p>
                    <p class="ProductCate">{this.state.categoria}</p>
                    <p class="ProductDescTitle">Descripcion:</p>
                    <p class="ProductDescription">{this.state.producto.description}</p>
        
                </div>
            </div>
        )
    }
}

export default LastProduct;