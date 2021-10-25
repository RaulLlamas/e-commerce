import React from "react";

import "./Total.css";

const Total = (props) => (
    <div className='WrapperTotal1'>
        <p className='TitleTotal'>{props.title}</p>
        <div className='WrapperTotal2'>
            <p className='SubTitleTotal'>Total:</p>
            <p className='NumeberTotal'>{props.number}</p>
            <div className='EspacioTotal'></div>
        </div>
    </div>
);

export default Total;