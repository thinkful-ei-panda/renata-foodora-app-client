import React from "react";
import { Switch, Route } from "react-router-dom";
import AddDish from "../AddDish/AddDish";
import Search from '../Search/Search';
import RestaurantLanding from '../RestaurantLanding/RestaurantLanding';

export default function MainRouter() {
  return (
    <div>
      <Switch>
        <Route exact path='/restaurant-home'>
          <RestaurantLanding />
          <AddDish />
        </Route>
          <Route exact path='/'>
              <Search />
          </Route>
      </Switch>
    </div>
  );
}
