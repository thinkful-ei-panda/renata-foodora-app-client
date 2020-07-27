import React from 'react';

export default function Price(){
    return(
        <section>
        <div>
            <h4>Choose a price range:</h4>
            <form>
                    <fieldset>
                        <legend>In dollars:</legend>
                        <input type="radio" id="1" name="1" value="1" />
                        <label htmlFor="1"> $1 - $10</label>
                        <input type="radio" id="2" name="1" value="2"/>
                        <label htmlFor="2"> $11 - $40</label>
                        <input type="radio" id="3" name="1" value="3"/>
                        <label htmlFor="3"> $41 - $60</label>
                        <input type="radio" id="4" name="1" value="4"/>
                        <label htmlFor="4"> $61 - $80</label>
                        <input type="radio" id="5" name="1" value="5"/>
                        <label htmlFor="5"> $81 - or above</label>
                    </fieldset>
        </form>
        </div>
        <div>
                <form>
                    <input type="submit" value="Submit"/>
                </form>
        </div>
    </section>
    )
}