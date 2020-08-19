import React from "react";
import SearchAPIService from "../Service/SearchAPIService";
import SearchCheckboxContainer from "../SearchCheckbox/SearchCheckboxContainer";
import { withRouter } from "react-router-dom";

class Search extends React.Component {
  state = {
    tag: [],
    price: "0",
    name: "",
    searchResults: [],
  };

  checkboxChecked = (itemID, itemChecked) => {
    console.log("Search -> checkboxChecked -> 1) itemID", itemID);
    console.log("Search -> checkboxChecked -> 2) itemChecked", itemChecked);
    let tempArray = this.state.tag;

    console.log(
      "Search -> checkboxChecked -> tempArray BEFORE IF",
      JSON.stringify(tempArray)
    );

    if (itemChecked) {
      tempArray.push(itemID);
    } else {
      tempArray = tempArray.filter((tagID) => tagID !== itemID);
    }
    console.log(
      "Search -> checkboxChecked -> tempArray AFTER IF",
      JSON.stringify(tempArray)
    );

    this.setState({
      tag: tempArray,
    });
  };

  handleSearchChange = (event) => {
    console.log(
      "Search -> handleSearchChange -> event.target.name",
      event.target.name
    );
    console.log(
      "Search -> handleSearchChange -> event.target.value",
      event.target.value
    );
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidUpdate() {
    console.log(
      "Search -> componentDidUpdate -> STATE",
      JSON.stringify(this.state)
    );
  }

  handleSearchSubmit = (event) => {
    //console.log('THIS HAS BEEN CALLED !!!! FIRST (search.js)');

    event.preventDefault();

    this.setState({
      // loading: true,
    });

    console.log(
      "LINE 39 Search -> handleSearchSubmit -> tag_id",
      this.state.tag
    );

    SearchAPIService.getSearchResult({
      tag: this.state.tag,
      price: this.state.price,
      name: this.state.name,
    }).then((json) => {
      console.log("Search -> handleSearchSubmit -> json", JSON.stringify(json));
      this.setState({
        //        tag: [],
        //        name: "",
        searchResults: json,
      });
      //this.context.saveTag(json.tag);
      this.props.history.push("/");
    });

    //console.log('THIS IS HERE!!!! SECOND CALLED!!!(search.js)');
  };

  render() {
    return (
      <div>
        <h2>SEARCH</h2>
        <h4>Choose the tags: (up to 5)</h4>
        <div>
          <SearchCheckboxContainer checkboxCallback={this.checkboxChecked} />
        </div>

        <h4>Choose a price range:</h4>
        <form id="search" onSubmit={this.handleSearchSubmit}>
          <fieldset>
            <legend></legend>

            <input
              type="radio"
              id="0"
              name="price"
              value="0"
              checked={this.state.price === "0"}
              onChange={this.handleSearchChange}
            />
            <label htmlFor="0"> Any price</label>

            <input
              type="radio"
              id="1"
              name="price"
              value="1"
              checked={this.state.price === "1"}
              onChange={this.handleSearchChange}
            />
            <label htmlFor="1"> $1 - $10</label>

            <input
              type="radio"
              id="2"
              name="price"
              value="2"
              checked={this.state.price === "2"}
              onChange={this.handleSearchChange}
            />
            <label htmlFor="2"> $11 - $40</label>

            <input
              type="radio"
              id="3"
              name="price"
              value="3"
              checked={this.state.price === "3"}
              onChange={this.handleSearchChange}
            />
            <label htmlFor="3"> $41 - $60</label>

            <input
              type="radio"
              id="4"
              name="price"
              value="4"
              checked={this.state.price === "4"}
              onChange={this.handleSearchChange}
            />
            <label htmlFor="4"> $61 - $80</label>

            <input
              type="radio"
              id="5"
              name="price"
              value="5"
              checked={this.state.price === "5"}
              onChange={this.handleSearchChange}
            />
            <label htmlFor="4"> $81 or above</label>
          </fieldset>
          {/* DISH NAME */}
          <label htmlFor="search-crit">
            <b>Search for the dish's name:</b>
          </label>
          <input
            type="text"
            id="search-crit"
            name="name"
            value={this.state.name}
            onChange={this.handleSearchChange}
          />
          {/* SUBMIT BUTTON  */}
          <button type="submit" onSubmit={this.handleSearchSubmit}>
            Search
          </button>
        </form>
        <div style={{ color: "white" }}>
          {this.state.searchResults.map((result) => (
            <label key={result.id}>
              <h4>
                Dish: <em>{result.name}</em>
              </h4>

              {result.name.errorMessage && (
                <h3 className="error"> {this.state.errorMessage} </h3>
              )}

              <h5>
                Restaurant Information: {result.restaurantname} | {result.phone}
              </h5>

              <h5>$ {result.price}</h5>
              <h5>#{result.tag_names}</h5>
              <h5>------------------------------------</h5>
            </label>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
