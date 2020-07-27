import React from 'react';

export default function SearchBar(){
    return(
        <div>
            <form>
                <label htmlFor="search">Search:</label>
                <input type="text" id="search" name="search"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}