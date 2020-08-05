import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Display from '../Search/Display';

export default function MainRouter(){
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Display}/>
            </Switch>
        </div>
    );
}