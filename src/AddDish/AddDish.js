import React, { Component } from "react";
import DishListContext from "../Context/DishListContext";
import TokenService from "../Service/TokenService";
import DishAPIService from "../Service/DishAPIService";
import CheckboxContainer from "../Checkbox/CheckboxContainer";
//import ScaleLoader from "react-spinners/ScaleLoader";

export default class AddDish extends Component {
  state = {
    name: "",
    price: "",
    loading: false,
  };

  static contextType = DishListContext;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
 
  handleDishSubmit = (event) => {
    event.preventDefault();

    this.setState({
      //loading: true,
    });

    const restaurant_id = TokenService.getRestID();
    const { dishList } = this.context;

    const dish = {
        name: this.state.name,
        price: Number(this.state.price),
        restaurant_id,
    };

    DishAPIService.postDish(dish)
      // name: this.state.name,
      // price: this.state.price,
      // restaurant_id,
    
      .then(this.context.setDishList([...dishList, dish]))
      .then(this.context.setDishAddTrue());
      console.log('THIS IS JUST THE CONTEXT' + JSON.stringify(this.context.setDishList));
  
//TODO FIX AND CLEAR IT
    // const { dishList } = this.context;
    // const restaurant_id = TokenService.getRestID();
    // console.log("THIS IS PASSING");
    // console.log(this.context);
    // const dish = {
    //   name: this.state.name,
    //   price: Number(this.state.price),
    //   restaurant_id,
    // };
    // //TODO need to add tag here
    // console.log("THIS IS PASSING SECOND");
    // DishAPIService.postDish(dish, restaurant_id)
    //   .then(this.context.setDishList([...dishList, dish]))
    //   .then(this.context.setDishAddTrue());
  };

  // goBack = () => {
  //   this.context.setDishAddFalse();
  //   this.props.history.goBack();
  // };

  render() {
    //const { error, loading } = this.state;
    return (
      <main className="dish_main">
        <form
          id="dish"
          className="addDish-form"
          onSubmit={this.handleDishSubmit}
        >
          <div>
            <h3>Search for your dish:</h3>  
          </div>
          <div className="dish-name">
            <label htmlFor="dish-name">Dish Name:</label>
            <input
              type="text"
              name="name"
              id="dish-name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="dish-price">
            <label htmlFor="dish-price">Dish Price:</label>
            <input
              type="text"
              name="price"
              id="dish-price"
              value={this.state.price}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="dish-select-button-div">
            <label htmlFor="tag">Tag: (up to 5) </label>
            {/* TODO WILL NEED TO RESTRICT TO MAX 5 */}
            <CheckboxContainer />
            <button type="submit" onSubmit={this.handleDishSubmit}>
              Save
            </button>
          </div>
        </form>
        <button type="button" className="go-back" onClick={this.goBack}>
          Go Back
        </button>
      </main>
    );
  }
}




// {loading && (
//   <div className="loading-screen">
//     <ScaleLoader size={35} color={"#067368"} loading={loading} />
//     {/* TODO remember to change color  */}
//   </div>
// )}
{/* <div role="alert">{error && <p className="error">{error}</p>}</div> */}