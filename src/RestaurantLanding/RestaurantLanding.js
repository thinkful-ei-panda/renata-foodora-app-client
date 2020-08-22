import React from "react";
import RestaurantLandingAPIDishes from "../Service/RestaurantAPIDishes";
import TokenService from "../Service/TokenService";

export default class RestaurantLanding extends React.Component {
  constructor (props){
    super(props);
      
    this.state = {
    dishes: [],
    error: null,
    loading: false,
    restaurant_id: TokenService.getRestID(),
  }
  this.handleDeleteDish = this.handleDeleteDish.bind(this);
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

  handleDeleteDish = (event) => {
    event.preventDefault();

    const id = 69;
    //TODO 

    RestaurantLandingAPIDishes
    .deleteDishFromRestaurant(id, this.state.restaurant_id)
    this.setState(prevState => ({
        dishes: prevState.dishes.filter(
        e => e.id !== id
    )}));
  };

//   handlePriceChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleDishUpdate = (event) => {
//     event.preventDefault();

//     const restaurant_id = TokenService.getRestID();

//     this.setState({
//         loading: true,
//     })

    
//   };

//   handleDishDelete = (event) => {
//     event.preventDefault();

//     RestaurantLandingAPIDishes.deleteRest({});
//   };

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
              <button 
              type='button'
              onClick={this.handleDeleteDish}
              >
                Delete
              </button>
              <h5>------------------------------------</h5>
            </label>
          ))}
        </div>
          </div>
      );
  }
}