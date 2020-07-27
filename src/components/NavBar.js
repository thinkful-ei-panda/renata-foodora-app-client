import React from 'react';
import { NavLink } from 'react-router-dom';

export default function UserNavBar(){
    return(
        <nav>
            <div>
                <h2>User</h2>
            <NavLink exact path='/user-login'>Login</NavLink>
            <NavLink exact path='/user-register'>Register</NavLink>
            </div>
            <div>
                <h2>Restaurant</h2>
            <NavLink exact path='/rest-login'>Login</NavLink>   
            <NavLink exact path='/rest-register'>Register</NavLink> 
            </div>
        </nav>
    )
}