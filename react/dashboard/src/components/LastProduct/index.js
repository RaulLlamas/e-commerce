import React from "react";

import Img from '../../assets/images/img-hamburguesa.png';

import "./LastProduct.css";

const LastProduct = () => (
    <div className='LastProduct'>
            <div class="ImageDetail">
                <img src={Img} alt="image-product"/>
            </div>
            <div class="ProductInfo">
                <p class="ProductName">Hamburguesa</p>
                <p class="ProductPrice" >$150</p>
                <p class="ProductCate">Por lo que vienes</p>
                <p class="ProductCate">Descripcion</p>
                <div class="ProductDescription">
                    <p>Carne de puerco deshebrada mezclada con salsa BBQ, con una mezcla de quesos cheddar y mozzarella gratinados.</p>
                </div>
            </div>
    </div>
);

export default LastProduct;