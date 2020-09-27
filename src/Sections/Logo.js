import React from 'react';
import { Link } from 'react-router-dom';
import pojha from '../assets/pojha.png';

const Logo=() =>{
    const logo= pojha;
    return(
        <div>
                  <span id="brand">
                  <Link to='/' className="logo"><img src={logo} alt="PO" style={{width:40}} ></img></Link>     
                  </span>

        </div>
    );
}

export default Logo;