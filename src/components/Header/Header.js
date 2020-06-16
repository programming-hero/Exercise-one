import React from 'react';
import world from '../../images/world.jpg';
import './Header.css';
const Header = () => {
    return (
        <div className= "header">
            <img src={world} alt=""/>
           <nav>
               <a href="/order">Home</a>
               <a href="/preorder">Full Details</a>
               <a href="/custom">Show</a>
           </nav>
        </div>
    );
};

export default Header;