import React, { Component } from 'react';
import DishListContext from '../Context/DishListContext'
import TokenService from '../Service/TokenService';
import DishAPIService from '../Service/DishAPIService';


export default class AddDish extends Component{

    static contextType = DishListContext;

    handleDishSubmit = (event) => {
        event.preventDefault()
        const { dishList } = this.context;
        const { name, price } = event.target;
        const restaurant_id = TokenService.getRestID();
        const dish = {
            name: name.value,
            price: Number(price.value),
            restaurant_id
        };
        //TODO need to add tag here

        DishAPIService.postDish(dish, restaurant_id)
        .then(this.context.setDishList([
            ...dishList, dish
        ]))
        .then(this.context.setDishAddTrue())
    }

    goBack = () => {
        this.context.setDishAddFalse();
        this.props.history.goBack();
    }

    render(){
        const { dishAdd  } = this.context;
        return(
            <main className='dish_main'>
                {dishAdd && <p className='spirit-add-alert'>Dish was added successfully.</p>}
            <form className='add-spirit-form' onSubmit={this.handleDishSubmit}>
              <div className='name-dish'>
                <label htmlFor='dish-name'>Dish Name:</label>
                <input type='text' name='dish-name' id='dish-name' placeholder='Zucchini Linguine with Herbs' />
              </div>
              <div className='dish-price'>
                <label htmlFor='dish-price'>Dish Price:</label>
                <input type='text' name='dish-price' id='dish-price' placeholder='55' />
              </div>
              <div className='dish-select-button-div'>
                <label htmlFor='tag'>Tag: (up to 5) </label>
                {/* TODO WILL NEED TO RESTRICT TO MAX 5 */}
      
                <button type='submit'>
                  Save
                </button>
              </div>
            </form>
            <button type='button' className='go-back' onClick={this.goBack}>Go Back</button>
          </main> 
        );
    }
}