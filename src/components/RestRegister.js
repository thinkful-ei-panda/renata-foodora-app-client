import React from 'react'

export default function RestRegister(){
    return(
        <section>
    <div>
        <h1>Restaurant Sign Up</h1>
        <form action="#">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value="Username" />
            <label htmlFor="rest-password">Password:</label>
            <input type="text" id="rest-password" name="rest-password" value="*********" />
            <label htmlFor="bname">Business Name:</label>
            <input type="text" id="bname" name="bname" value="Joe's Pizzeria" />
            <label htmlFor="rest-address">Address:</label>
            <input type="text" id="rest-address" name="rest-address" value="123 Memory Ln" />
            <label htmlFor="rest-city">City:</label>
            <input type="text" id="rest-city" name="rest-city" value="Los Angeles" />
            <label htmlFor="rest-zip">Zip Code:</label>
            <input type="text" id="rest-zip" name="rest-zip" value="12345" />
            <label htmlFor="rest-phone">Phone:</label>
            <input type="text" id="rest-phone" name="rest-phone" value="222-222-2222" />
            <label htmlFor="url">URL:</label>
            <input type="text" id="url" name="url" value="www.site.com" />
            <label htmlFor="rest-email">Email:</label>
            <input type="text" id="rest-email" name="rest-email" value="pizza@gmail.com" />
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
          </form> 
    </div>
</section>
    )
}