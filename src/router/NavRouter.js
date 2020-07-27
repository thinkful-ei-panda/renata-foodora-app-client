import React from 'react';
import UserLogin from '../components/UserLogin';
import { Switch, Route } from 'react-router-dom';
import UserRegister from '../components/UserRegister';
import SearchBar from '../components/SearchBar';
import RestLogin from '../components/RestLogin';
import RestRegister from '../components/RestRegister';

export default function UserLoginRouter(){
    return(
        <nav>
        <SearchBar />
        <UserLogin />
        <UserRegister />
        <Switch>
            <Route exact path='/user-login' component={UserLogin} />
            <Route exact path='/user-register' component={UserRegister} />
        </Switch>
        <Switch>
            <Route exact path='/rest-login' component={RestLogin} />
            <Route exact path='/rest-register' component={RestRegister} />
        </Switch>
        </nav>
    )
}