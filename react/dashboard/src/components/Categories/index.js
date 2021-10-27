import React from "react";
import {Component} from 'react';

import "./Categories.css";


class Categories extends Component{
    
    constructor(){
        super()
        this.state={
            categorias: {}
        }

    }

    componentDidMount(){
        fetch('/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(products =>{
            this.setState({categorias: products.totalbyCategory})
        })
        .catch(error => console.log(error))
    }

    render(){
        return (
        <div className='WrapperCate'>
            <p className='TitleCate'>Categorias</p>
            <div className='InfoCate'>
                <p className='SubtitleCate'>Entradas</p>
                <p className='NumberCate'>{this.state.categorias.Entradas}</p>
                <p className='SubtitleCate'>Por lo que vienes</p>
                <p className='NumberCate'>{this.state.categorias['Por lo que vienes']}</p>
                <p className='SubtitleCate'>Postes</p>
                <p className='NumberCate'>{this.state.categorias.Postres}</p>
            </div>
        </div>
        )
    }
}

export default Categories;