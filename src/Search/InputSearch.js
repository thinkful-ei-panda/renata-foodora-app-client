import React from "react";

const InputSearch = (props) => {
  const { search, price, tag } = props.tags;
  return (
    <div id="chosen-tags">
      {search.inputTerm.length ? (
        <div className="collection" onClick={props.cancelSearchTag}>
          <h6 onClick={props.cancelSearchTag}>{search.inputTerm}</h6>
        </div>
      ) : null}
      {/* ************** PRICE RANGE ************** */}
      {price.one ? (
        <div
          className="collection"
          data-name="one"
          onClick={(event) => props.allFilterClickListener(event, "price")}
        >
          <h6 data-name="one">$1-$10</h6>
        </div>
      ) : null}
      {price.two ? (
        <div
          className="collection"
          data-name="two"
          onClick={(event) => props.allFilterClickListener(event, "price")}
        >
          <h6 data-name="two">$11-$40</h6>
        </div>
      ) : null}
      {price.three ? (
        <div
          className="collection"
          data-name="three"
          onClick={(event) => props.allFilterClickListener(event, "price")}
        >
          <h6 data-name="three">$41-$60</h6>
        </div>
      ) : null}
      {price.four ? (
        <div
          className="collection"
          data-name="four"
          onClick={(event) => props.allFilterClickListener(event, "price")}
        >
          <h6 data-name="four">$61-$80</h6>
        </div>
      ) : null}
      {price.five ? (
        <div
          className="collection"
          data-name="five"
          onClick={(event) => props.allFilterClickListener(event, "price")}
        >
          <h6 data-name="five">$81 or above</h6>
        </div>
      ) : null}
      {/* ************** TAGS ************** */}
      {tag.peanallergy ? (
        <div
          className="collection"
          data-name="peanallergy"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="peanallergy">Peanut Allergy</h6>
        </div>
      ) : null}
      {tag.fishallergy ? (
        <div
          className="collection"
          data-name="fishallergy"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="fishallergy">Fish Allergy</h6>
        </div>
      ) : null}
      {tag.soyallergy ? (
        <div
          className="collection"
          data-name="soyallergy"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="soyallergy">Soy Allergy</h6>
        </div>
      ) : null}
      {tag.shellallergy ? (
        <div
          className="collection"
          data-name="shellallergy"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="shellallergy">Shellfish Allergy</h6>
        </div>
      ) : null}
      {tag.keto ? (
        <div
          className="collection"
          data-name="keto"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="keto">Keto</h6>
        </div>
      ) : null}
      {tag.paleo ? (
        <div
          className="collection"
          data-name="paleo"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="paleo">Paleo</h6>
        </div>
      ) : null}
      {tag.lowcal ? (
        <div
          className="collection"
          data-name="lowcal"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="lowcal">Low Calorie</h6>
        </div>
      ) : null}
      {tag.lowsalt ? (
        <div
          className="collection"
          data-name="lowsalt"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="lowsalt">Low Salt</h6>
        </div>
      ) : null}
      {tag.lowcarb ? (
        <div
          className="collection"
          data-name="lowcarb"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="lowcarb">Low Carb</h6>
        </div>
      ) : null}
      {tag.lowsugar ? (
        <div
          className="collection"
          data-name="lowsugar"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="lowsugar">Low Sugar</h6>
        </div>
      ) : null}
      {tag.glfree ? (
        <div
          className="collection"
          data-name="glfree"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="glfree">Gluten Free</h6>
        </div>
      ) : null}
      {tag.sugarfree ? (
        <div
          className="collection"
          data-name="sugarfree"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="sugarfree">Sugar Free</h6>
        </div>
      ) : null}
      {tag.saltfree ? (
        <div
          className="collection"
          data-name="saltfree"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="saltfree">Salt Free</h6>
        </div>
      ) : null}
      {tag.lacfree ? (
        <div
          className="collection"
          data-name="lacfree"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="lacfree">Lactose Free</h6>
        </div>
      ) : null}
      {tag.vegetarian ? (
        <div
          className="collection"
          data-name="vegetarian"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="vegetarian">Vegetarian</h6>
        </div>
      ) : null}
      {tag.vegan ? (
        <div
          className="collection"
          data-name="vegan"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="vegan">Vegan</h6>
        </div>
      ) : null}
      {tag.pesc ? (
        <div
          className="collection"
          data-name="pesc"
          onClick={(event) => props.allFilterClickListener(event, "tag")}
        >
          <h6 data-name="pesc">Pescetarian</h6>
        </div>
      ) : null}
    </div>
  );
};

export default InputSearch;
