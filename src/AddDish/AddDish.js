import React from "react";
import TokenService from "../Service/TokenService";
import DishAPIService from "../Service/DishAPIService";
import DishCheckboxContainer from '../DishCheckbox/DishCheckboxContainer';
import ScaleLoader from "react-spinners/ScaleLoader";

export default class AddDish extends React.Component {
  state = {
    name: "",
    price: "",
    tag_id: [],
    error: null,
    loading: false,
    restaurant_id: TokenService.getRestID(),
  };

  handleDishChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleDishUpdate = (event) =>{
    event.preventDefault();
    DishAPIService.updateDish({
      price: this.state.price,
    })
  }
  //TODO COME BACK TO THIS LATER!!!!!!!!!!!!!!!

  handleDishSubmit = (event) => {
    event.preventDefault();

    const restaurant_id = TokenService.getRestID();

    this.setState({
      loading: true,
    });

    DishAPIService.postDish({
      restaurant_id: restaurant_id,
      name: this.state.name,
      price: this.state.price,
      tag_id: this.state.tag_id,
    }).then((data) => {
      this.setState({
        loading: true,
        name: "",
        price: "",
        restaurant_id,
        tag_id: [],
      });
      this.context.saveDishName(data.name);
      this.context.savePrice(data.price);
      this.context.saveTagList(data.tag);
      this.context.handleLoginState(true);
      this.props.history.push("/");
    });
  }; 

  // goBack = () => {
  //   this.context.setDishAddFalse();
  //   this.props.history.goBack();
  // };

  render() {
    const { error, loading } = this.state;
    return (
      <main className="dish_main">
        <form
          id="dish"
          className="addDish-form"
          onSubmit={this.handleDishSubmit}
        >
           <div role="alert">{error && <p className="error">{error}</p>}</div>
          <div>
            <h3>Add a dish:</h3>
          </div>
          <div className="dish-name">
            <label htmlFor="dish-name">Dish Name:</label>
            <input
              type="text"
              name="name"
              id="dish-name"
              value={this.state.name}
              onChange={this.handleDishChange}
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
              onChange={this.handleDishChange}
              required
            />
          </div>
          <div className="dish-select-button-div">
            <label htmlFor="tag">Tag: (up to 5) </label>
            {/* TODO WILL NEED TO RESTRICT TO MAX 5 */}
            <DishCheckboxContainer />
            <button type="submit" onSubmit={this.handleDishSubmit}>
              Add New Dish
            </button>
            <button type="submit" onSubmit={this.handleDishUpdate}>
              Update Dish
            </button>
            {loading && (
              <div className="loading-screen">
                <ScaleLoader size={35} color={"#067368"} loading={loading} />
                {/* TODO remember to change color  */}
              </div>
            )}
          </div>
        </form>
        {/* <button type="button" className="go-back" onClick={this.goBack}>
          Go Back
        </button> */}
      </main>
    );
  }
}
