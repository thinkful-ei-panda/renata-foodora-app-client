import React from "react";
import { Switch, Route } from "react-router-dom";
import AddDish from "../AddDish/AddDish";
import Search from '../Search/Search';

export default function MainRouter() {
  return (
    <div>
      <Switch>
          <Route exact path='/'>
              <AddDish />
              <Search />
          </Route>
      </Switch>
    </div>
  );
}
