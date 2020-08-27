import React from "react";
import TokenService from "../Service/TokenService";
import DishAPIService from "../Service/DishAPIService";
import DishCheckboxContainer from '../DishCheckbox/DishCheckboxContainer';
import ScaleLoader from "react-spinners/ScaleLoader";
import DishContext from "../Context/DishListContext";
import { withRouter } from 'react-router-dom';

class AddDish extends React.Component {
  state = {
    name: "",
    price: "",
    tag_id: [],
    error: null,
    loading: false,
    restaurant_id: TokenService.getRestID(),
  };

  static contextType = DishContext;

  checkboxChecked = (itemID, itemChecked) => {
    console.log("Search -> checkboxChecked -> 1) itemID", itemID);
    console.log("Search -> checkboxChecked -> 2) itemChecked", itemChecked);
    let tempArray = this.state.tag_id;

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
      tag_id: tempArray,
    });
  };

  handleDishChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

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
      this.context.saveTagList(data.tag_id);
      this.context.handleLoginState(true);
      this.props.history.push("/");
    }).catch((res) => {
      this.setState({ error: res.error, loading: null });
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
          <div>
            <h3>Add a dish:</h3>
          </div>
          <div role="alert">{error && <p className="error">{error}</p>}</div>
          <div className="dish-name">
            <label htmlFor="dish-name">Dish Name:</label>
            <input
              type="text"
              name="name"
              id="dish-name"
              value={this.state.name}
              onChange={this.handleDishChange}
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
            />
          </div>
          <div className="dish-select-button-div">
            <label htmlFor="tag">Tag: (up to 5) </label>
            {/* TODO WILL NEED TO RESTRICT TO MAX 5 */}
            <DishCheckboxContainer checkboxCallback={this.checkboxChecked} />
          </div>
          <div>
            <button type="submit" onSubmit={this.handleDishSubmit}>
              Add New Dish
            </button>
            {loading && (
              <div className="loading-screen">
                <ScaleLoader size={35} color={"#FFD700"} loading={loading} />
              </div>
            )}
          </div>
        </form>
      </main>
    );
  }
}

export default withRouter(AddDish);

