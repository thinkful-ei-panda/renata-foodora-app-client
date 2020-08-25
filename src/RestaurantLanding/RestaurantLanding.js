import React from "react";
import RestaurantLandingAPIDishes from "../Service/RestaurantAPIDishes";
import TokenService from "../Service/TokenService";
import RestaurantDishDelete from './RestaurantDishDelete';

export default class RestaurantLanding extends React.Component {
  constructor (props){
    super(props);
  
    this.state = {
    dishes: [],
    error: null,
    loading: false,
    restaurant_id: TokenService.getRestID(),
  }
  this.delete = this.delete.bind(this);
};

 getListDishesRestaurant = (event) => {
      event.preventDefault();
  };

  async componentDidMount(){
      console.log('GETTING LIST OF DISHES');
     let gotDishes = await RestaurantLandingAPIDishes.getAllDishesFromRestaurantID(
        this.state.restaurant_id,
    )

    console.log("RestaurantLanding -> componentDidMount -> gotDishes", gotDishes)

    this.setState({
        dishes: gotDishes,
    })
  }

  delete = (id) => {
    console.log('THIS CONSOLE LOG IS ON LANDING DELETE');
    RestaurantLandingAPIDishes
    .deleteDishFromRestaurant(id, this.state.restaurant_id)
    this.setState(prevState => ({
        dishes: prevState.dishes.filter(
        e => e.id !== id
    )}));
  };

  render(){
      return(
          <div>
              <div style={{ color: "white" }}>
          {this.state.dishes.map((result) => (
            <label key={result.id}>
              <h4>
                Dish: <em>{result.name}</em>
              </h4>

              <h5>$ {result.price}</h5>
              <h5>#{result.tag_names}</h5>

              <RestaurantDishDelete 
              delete={this.delete}
              dish={result}/>

              <h5>------------------------------------</h5>
            </label>
          ))}
        </div>
          </div>
      );
  }
}