import React, { Component } from "react";
import TokenService from '../Service/TokenService';

export const LoginContext = React.createContext(
    {
        restname: '',
        loggedIn: false,
        error: null,
        registered: false,
        handleLoginState: () => {},
    }
);

export default LoginContext;

export class LoginProvider extends Component{

    state = {
        loggedIn: TokenService.hasAuthToken(),
        registered: TokenService.hasAuthToken(),
        error: null,
    };

    saveRestName = (restname) => {
        this.setState({ restname });
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
            restname: this.state.restname,
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