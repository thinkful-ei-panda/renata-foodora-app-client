import React from 'react';

export default function RestLogin(){
    return(
    <section>
    <div>
        <form action="#">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value="Username" />
            <label htmlFor="rest-password">Password:</label>
            <input type="text" id="rest-password" name="rest-password" value="*********" />
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
          </form> 
    </div>
    </section>
    )
}