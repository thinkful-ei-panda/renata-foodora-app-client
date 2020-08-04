import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Main(){
    return(
        <nav>
            <div>
                <h2>Restaurant</h2>
            <NavLink exact path='/rest-login'>Login</NavLink>   
            <NavLink exact path='/rest-register'>Register</NavLink> 
            </div>
        </nav>
    )
}