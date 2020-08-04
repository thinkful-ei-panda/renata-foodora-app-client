import React from "react";

const Filter = props => {
  return (
    <div id="filter">
      <div>
        {/* ************** PRICE RANGE ************** */}
        <div id="filter-price">
          <label className="filter-price">Choose the price range:</label>
          <div id="price-filter-container">
            <div
              className="filter price"
              data-name="one"
              onClick={event => props.allFilterClickListener(event, "price")}
            >
              <h6 data-name="one">$1-$10</h6>
            </div>
            <div
              className="filter price"
              data-name="two"
              onClick={event => props.allFilterClickListener(event, "price")}
            >
              <h6 data-name="two">$11-$40</h6>
            </div>
            <div
              className="filter price"
              data-name="three"
              onClick={event => props.allFilterClickListener(event, "price")}
            >
              <h6 data-name="three">$41-$60</h6>
            </div>
            <div
              className="filter price"
              data-name="four"
              onClick={event => props.allFilterClickListener(event, "price")}
            >
              <h6 data-name="four">$61-$80</h6>
            </div>
            <div
              className="filter price"
              data-name="five"
              onClick={event => props.allFilterClickListener(event, "price")}
            >
              <h6 data-name="five">$81 or above</h6>
            </div>
          </div>
        </div>
        {/* ************** TAGS ************** */}
        <div id="filter-tag">
          <label className="filter-title">Choose your diet or food restriction:</label>
          <label className="filter-title">(up to 5)</label>
            <div id="tag-filter-container">
                <div
                className="filter tag"
                data-name="glfree"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="glfree">Gluten Free</h6>
                </div>
                <div
                className="filter tag"
                data-name="peanallergy"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="peanallergy">Peanut Allergy</h6>
                </div>
                <div
                className="filter tag"
                data-name="fishallergy"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="fishallergy">Fish Allergy</h6>
                </div>
                <div
                className="filter tag"
                data-name="soyallergy"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="soyallergy">Soy Allergy</h6>
                </div> 
                <div
                className="filter tag"
                data-name="shellallergy"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="shellallergy">Shellfish Allergy</h6>
                </div>    
                <div
                className="filter tag"
                data-name="keto"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="keto">Keto</h6>
                </div>  
                <div
                className="filter tag"
                data-name="paleo"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="paleo">Paleo</h6>
                </div>   
                <div
                className="filter tag"
                data-name="lowcal"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="lowcal">Low Calorie</h6>
                </div>       
                <div
                className="filter tag"
                data-name="lowsalt"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="lowsalt">Low Salt</h6>
                </div>
                <div
                className="filter tag"
                data-name="lowcarb"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="lowcarb">Low Carb</h6>
                </div>
                <div
                className="filter tag"
                data-name="lowsugar"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="lowsugar">Low Sugar</h6>
                </div>
                <div
                className="filter tag"
                data-name="sugarfree"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="sugarfree">Sugar Free</h6>
                </div> 
                <div
                className="filter tag"
                data-name="saltfree"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="saltfree">Salt Free</h6>
                </div>
                <div
                className="filter tag"
                data-name="lacfree"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="lacfree">Lactose Free</h6>
                </div>
                <div
                className="filter tag"
                data-name="vegetarian"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="vegetarian">Vegetarian</h6>
                </div> 
                <div
                className="filter tag"
                data-name="vegan"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="vegan">Vegan</h6>
                </div>  
                <div
                className="filter tag"
                data-name="pesc"
                onClick={event => props.allFilterClickListener(event, "tag")}
                >
                <h6 data-name="pesc">Pescetarian</h6>
                </div>                           
            </div>
        </div>
    </div>
</div>
);
};

export default Filter;