import React from "react";

import Logo from '../../assets/images/Rogers-logo(amarrillo).png';

import "./Header.css";

const Header = () => (
    <div className='WrapperHeader'>
        <img className='LogoHeader' src={Logo} alt='Logo'/>
        <p className='TextHeader'>Dashboard</p>
    </div>
);

export default Header;