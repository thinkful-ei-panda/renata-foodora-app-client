import React from 'react';
import Marketing from '../components/Marketing';
import { Switch, Route } from 'react-router-dom';

export default function MainRouter(){
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Marketing}/>
            </Switch>
        </div>
    );
}