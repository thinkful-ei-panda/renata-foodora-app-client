import React from './node_modules/react';
import { NavLink } from './node_modules/react-router-dom';

export default function Footer(){
    return(
        <footer>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/faq'>FAQ</NavLink>
            <NavLink to='/landing'>Landing Page</NavLink>
        </footer>
    )
}