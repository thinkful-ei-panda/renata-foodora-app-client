import React from "react";
import Price from './Price'
import SearchAPIService from "../Service/SearchAPIService";

export default class PriceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map(),
      price: [],
    };
  }

  async handleChange(event) {
    const item = event.target.name;
    const isChecked = event.target.checked;
    await this.setState((prevState) => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));
  }

  async componentDidMount() {
    await SearchAPIService.getPrices().then((price) => {
      this.setState({ price: price });
    });

    // initialize checkedItems map with "false" for all tags
    this.state.price.forEach((e) => {
      this.setState((prevState) => ({
        checkedItems: prevState.checkedItems.set(e.price, false),
      }));
    });
  }

  render() {
    return (
      //TODO change tags bellow
      <React.Fragment>
        {this.state.price.map((dish) => (
          <label key={dish.id}>
            {dish.price}
            <Price
              name={dish.price}
              checked={this.state.checkedItems.get(dish.price)}
              onChange={this.handleChange}
            />
          </label>
        ))}
      </React.Fragment>
    );
  }
}
