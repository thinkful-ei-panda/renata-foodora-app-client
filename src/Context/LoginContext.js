import React, { Component } from "react";
import TokenService from '../Service/TokenService';

export const LoginContext = React.createContext(
    {
        loggedIn: false,
        error: null,
        handleRestLoginState: () => {},
    }
);

export default LoginContext;

export class LoginProvider extends Component{

    state = {
        loggedIn: TokenService.hasAuthToken(),
        registered: TokenService.hasAuthToken(),
        error: null,
    };

    saveRestName = (name) => {
        this.setState({ name });
    };

    handleRestLoginState = (isLoggedIn) => {
        this.setState({
            loggedIn: isLoggedIn,
        });
    };

    handleRestRegisteredState = (isRegistered) => {
        this.setState({
            registered: isRegistered,
        });
    };

    render() {
        const value = {
            name: this.state.restname,
            password: this.state.password,
            username: this.state.username,
            phone: this.state.phone,
            loggedIn: this.state.loggedIn,
            registered: this.state.registered,
            error: this.state.error,
            handleRestLoginState: this.handleRestLoginState,
            handleRestRegisteredState: this.handleRestRegisteredState,
            saveRestName: this.saveRestName,
        };
        return(      
        <LoginContext.Provider value={value}>
            {this.props.children}
          </LoginContext.Provider>
        );
    }

}