import React from "react";
import {Component} from 'react';

import Total from '../Total';

import "./Totales.css";

class Totales extends Component{
    
    constructor(){
        super()
        this.state={
            totalProductos : 0,
            totalCate : 0,
            totalUser: 0
        }

    }

    componentDidMount(){
        fetch('/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(products =>{
            this.setState({totalProductos: products.total})
            this.setState({totalCate: Object.keys(products.totalbyCategory).length})
        })
        .catch(error => console.log(error))

        fetch('/api/users')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(users =>{
            this.setState({totalUser: users.total})
        })
        .catch(error => console.log(error))
    }

    render(){
        return (
        <div className='WrapperTotales'>
            <Total title='Products' number={this.state.totalProductos}/>
            <Total title='Categorias' number={this.state.totalCate}/>
            <Total title='Products' number={this.state.totalUser}/>
        </div>
        )
    }
}

export default Totales;