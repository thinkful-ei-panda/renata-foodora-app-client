import React from "react";
import { Switch, Route } from "react-router-dom";
//import CheckboxContainer from '../Checkbox/CheckboxContainer';
import AddDish from "../AddDish/AddDish";
import Search from '../Search/Search';

export default function MainRouter() {
  return (
    <div>
      <Switch>
          {/* <Route exact path='/' component={AddDish}  /> */}
          <Route exact path='/' component={Search}  />
      </Switch>
    </div>
  );
}
