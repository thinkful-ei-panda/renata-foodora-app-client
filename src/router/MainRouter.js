import React from "react";
import { Switch, Route } from "react-router-dom";
//import CheckboxContainer from '../Checkbox/CheckboxContainer';
import AddDish from "../AddDish/AddDish";

export default function MainRouter() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={AddDish}  />
      </Switch>
    </div>
  );
}
