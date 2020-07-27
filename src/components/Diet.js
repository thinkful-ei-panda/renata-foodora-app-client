import React from 'react';

export default function Diet(){
    return(
        <section>
        <div>
            <h4>Choose your diet or food restriction:</h4>
            <p>(up to 5)</p>
            <form>
                    <input type="checkbox" id="glfree" name="glfree" value="glfree" />
                    <label htmlFor="glfree"> Gluten Free</label>
                    <input type="checkbox" id="pe-allergy" name="pe-allergy" value="pe-allergy"/>
                    <label htmlFor="pe-allergy"> Peanut Allergy</label>
                    <input type="checkbox" id="fi-allergy" name="fi-allergy" value="fi-allergy"/>
                    <label htmlFor="fi-allergy"> Fish Allergy</label>
                    <input type="checkbox" id="soy-allergy" name="soy-allergy" value="soy-allergy"/>
                     <label htmlFor="soy-allergy"> Soy Allergy</label>
                    <input type="checkbox" id="shell-allergy" name="shell-allergy" value="shell-allergy"/>
                    <label htmlFor="shell-allergy"> Shellfish Allergy</label>
                     <input type="checkbox" id="keto" name="keto" value="keto"/>
                    <label htmlFor="keto"> Keto</label>
                     <input type="checkbox" id="paleo" name="paleo" value="paleo"/>
                     <label htmlFor="paleo"> Paleo</label>
                     <input type="checkbox" id="low-cal" name="low-cal" value="low-cal"/>
                     <label htmlFor="low-cal"> Low Calorie</label>
                     <input type="checkbox" id="low-salt" name="low-salt" value="low-salt"/>
                     <label htmlFor="low-salt"> Low Salt</label>
                      <input type="checkbox" id="low-carb" name="low-carb" value="low-carb"/>
                     <label htmlFor="low-carb"> Low Carb</label>
                     <input type="checkbox" id="low-sugar" name="low-sugar" value="low-sugar"/>
                     <label htmlFor="low-sugar"> Low Sugar</label>
                     <input type="checkbox" id="sugar-free" name="sugar-free" value="sugar-free"/>
                     <label htmlFor="sugar-free"> Sugar Free</label>
                     <input type="checkbox" id="salt-free" name="salt-free" value="salt-free"/>
                     <label htmlFor="salt-free"> Salt Free</label>
                     <input type="checkbox" id="lacfree" name="lacfree" value="lacfree"/>
                     <label htmlFor="lacfree"> Lactose Free</label>
                     <input type="checkbox" id="vege" name="vege" value="vege"/>
                     <label htmlFor="vege"> Vegetarian</label>
                     <input type="checkbox" id="vegan" name="vegan" value="vegan"/>
                     <label htmlFor="vegan"> Vegan</label>
                     <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                     <label htmlFor="vehicle3"> Pescetarians</label>
                </form>
                <div>
                <form>
                    <input type="submit" value="Submit"/>
                </form>  
                </div>    
        </div>
    </section>
    )
}