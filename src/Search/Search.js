import React from "react";
import SearchAPIService from '../Service/SearchAPIService';


export default class Search extends React.Component {
  state = {
    tag: [],
    price: "",
    name: "",
    searchResults: [],
  };

  handleSearchChange = (event) => {
    console.log("Search -> handleSearchChange -> event.target.name", event.target.name);
    console.log("Search -> handleSearchChange -> event.target.value", event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    }
    
    );
  };

componentDidUpdate() {
  console.log("Search -> handleSearchChange -> STATE", JSON.stringify(this.state))
}

  handleSearchSubmit = (event) => {

    console.log('THIS HAS BEEN CALLED !!!! FIRST (search.js)');

    event.preventDefault();

    this.setState({
      // loading: true,
    });

    SearchAPIService.getSearchResult({
      tag: this.state.tag_id,
      price: this.state.price,
      name: this.state.name,
    }).then((json) => {
    console.log("Search -> handleSearchSubmit -> json", JSON.stringify(json));
      this.setState({
        tag: [],
        price: "",
        name: "",
        searchResults: json,
      });
      this.props.history.push("/");
    });

    console.log('THIS IS HERE!!!! SECOND CALLED!!!(search.js)');
  }; 

  render() {
    return (
      <div>
        <h4>Choose the tags: (up to 5)</h4>
        {/* <CheckboxContainer /> */}
        <h4>Choose a price range:</h4>
        <form
        id='search'
        onSubmit={this.handleSearchSubmit}
        >
          <fieldset>
            <legend>In dollars:</legend>
            <input 
            type="radio" 
            id="1" 
            name="price" 
            value="1" 
            onChange={this.handleSearchChange}
            />

            <label htmlFor="1"> $1 - $10</label>
            <input 
            type="radio" 
            id="2" 
            name="price" 
            value="2" 
            onChange={this.handleSearchChange}
            />

            <label htmlFor="2"> $11 - $40</label>
            <input 
            type="radio" 
            id="3" 
            name="price" 
            value="3" 
            onChange={this.handleSearchChange}
            />

            <label htmlFor="3"> $41 - $60</label>
            <input 
            type="radio" 
            id="4" 
            name="price" 
            value="4" 
            onChange={this.handleSearchChange}
            />

            <label htmlFor="4"> $61 - $80</label>
            <input 
            type="radio" 
            id="5" 
            name="price" 
            value="5" 
            onChange={this.handleSearchChange}
            />

            <label htmlFor="5"> $81 - or above</label>
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
        <button 
        type="submit" 
        onSubmit={this.handleSearchSubmit}>
          Search
        </button>
        </form>
        <div>
          
        {this.state.searchResults.map((result) => (
          <label key={result.id}>
            <h2>Dish:</h2>
            <h5>{result.name}</h5>
            <h3>Restaurant Information:</h3>
            <h6>
              {result.restaurantname} | {result.phone}
            </h6>
            <h6>$ {result.price}</h6>
            <h6>#{result.tag_names}</h6>
          </label>
        ))}
        </div>
      </div>
    );
  }
}
