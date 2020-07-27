import React from 'react';

export default function DishName(){
    return(
        <section>
        <div>
            <form>
                <label htmlFor="search-crit"><b>Search for the dish's name:</b></label>
                <input type="text" id="search-crit" name="search-crit"/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    </section>
    )
}