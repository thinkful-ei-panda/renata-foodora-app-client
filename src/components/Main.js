import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Main(){
    return(
        <nav>
            <div>
                <h2>Restaurant</h2>
            <NavLink exact to='/rest-login'>Login</NavLink>   
            <NavLink exact to='/rest-register'>Register</NavLink> 
            </div>
        </nav>
    )
}