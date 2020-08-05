import React from 'react';
import { NavLink } from 'react-router-dom';

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