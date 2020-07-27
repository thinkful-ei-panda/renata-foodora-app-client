import React from 'react';

export default function UserRegister(){
    return(
        <section>
        <form action="#">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" value="user@gmail.com" />
            <label htmlFor="user-password">Password:</label>
            <input type="text" id="user-password" name="user-password" value="*********" />
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value="John" />
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" name="lname" value="Doe" />
            <label htmlFor="user-address">Address:</label>
            <input type="text" id="user-address" name="user-address" value="123 Memory Ln" />
            <label htmlFor="user-city">City:</label>
            <input type="text" id="user-city" name="user-city" value="Los Angeles" />
            <label htmlFor="user-zip">Zip Code:</label>
            <input type="text" id="user-zip" name="user-zip" value="32123" />
            <label htmlFor="user-phone">Phone:</label>
            <input type="text" id="user-phone" name="user-phone" value="222-222-2222" />
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
          </form> 
    </section>
    )
}