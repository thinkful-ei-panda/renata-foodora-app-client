import React, { Component } from "react";

const DishListContext = React.createContext({
  dishList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setDishList: () => {},
});

export default DishListContext;

export class DishListProvider extends Component {
  state = {
    dishList: [],
    dishTypes: [],
    dishAdd: false,
    error: null,
  };

  setDishList = (dishList) => {
    this.setState({ dishList });
  };

  removeElement(array, element) {
    let index = array.indexOf(element);
    if (index > -1) {
      array.splice(index, 1);
    }
  }

  remoteDishType = (dishID) => {
    this.removeDish(this.state.dishTypes, dishID);
  };

  setDishTypes = (newDish) => {
    this.setState({
      dishTypes: newDish,
    });
  };

  setError = (error) => {
    console.lof(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  removeDish = (id) => {
    const newDishes = this.state.dishList.filter((event) => event.id !== id);
    this.setState({ dishList: newDishes });
  };

  setDishAddTrue = () => {
    this.setState({ dishAdd: true });
  };

  setDishAddFalse = () => {
    this.setState({ dishAdd: false });
  };

  render() {
    const dishValue = {
      dishList: this.state.dishList,
      dishTypes: this.state.dishTypes,
      dishAdd: this.state.dishAdd,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setDishList: this.setDishList,
      removeDish: this.removeDish,
      setDishTypes: this.setDishTypes,
      removeDishType: this.remoteDishType,
      setDishAddTrue: this.setDishAddTrue,
      setDishAddFalse: this.setDishAddFalse,
    };
    return (
      <DishListContext.Provider value={dishValue}>
        {this.props.children}
      </DishListContext.Provider>
    );
  }
}

//TODO Update SHOULD be here?
