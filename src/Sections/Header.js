import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

class Header  extends Component{


       render(){
       

    return(
        <div>
            <nav>
                  <Logo/>

                  <ul id="menu">
                  <li> <Link to='/' className="Link">hello.</Link></li>
                        <li><Link to='/aboutPage'  className="Link">about.</Link></li>
                        <li><Link to='/Work'  className="Link">work.</Link></li>
                  </ul>


            </nav>
            
        </div>
    );
}}

export default Header;