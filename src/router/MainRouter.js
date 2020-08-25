import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import AddDish from "../AddDish/AddDish";
import Search from '../Search/Search';
import RestaurantLanding from '../RestaurantLanding/RestaurantLanding';
import RestaurantEdit from "../RestaurantLanding/RestaurantEdit";

export default function MainRouter() {
  return (
    <div>
      <Switch>
        <Route exact path='/restaurant-home'>
          <RestaurantLanding />
          <AddDish />
        </Route>
        <Route exact path='/restaurant-home/edit'>
          <RestaurantEdit history={useHistory}/>
        </Route>
        <Route exact path='/restaurant-home/delete'>
          <h3>Confirmation delete</h3>
        </Route>
        <Route exact path='/'>
          <Search />
        </Route>
      </Switch>
    </div>
  );
}
