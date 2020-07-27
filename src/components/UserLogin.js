import React from 'react';

export default function UserLogin(){
    return(
        <section>
        <form action="#">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" value="user@gmail.com" />
            <label htmlFor="user-password">Password:</label>
            <input type="text" id="user-password" name="user-password" value="*********" />
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
        </form>
        </section>
    )
}