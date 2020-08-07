import React from "react";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import FooterRouter from "./Router/FooterRouter";
import Copyright from "./pages/Copyright";
import Nav from "./Nav/Nav";
import Login from "./Login/Login";
import "./App.css";
import Register from "./Register/Register";
import MainRouter from "./Router/MainRouter";
import LoginContext from "./Context/LoginContext";
import TokenService from "./Service/TokenService";
import Error from './Error';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInRestaurantId: null,
      loggedInRestaurantName: null,
      login: this.doLogin,
      logout: this.doLogout,
    };
  }

  debugStuff = () => {
    console.log('-- dumping current state=' + JSON.stringify(this.state));
    console.log('-- dumping current local storage=' + TokenService.debugStorage());
  }
  //TODO  DELETE LATER ON

  doLogin = (restId, restName) => {
    this.setState({
      loggedInRestaurantId: restId,
      loggedInRestaurantName: restName,
    }, this.debugStuff);
  };

  doLogout = () => {
    TokenService.clearAuthToken();
    TokenService.clearRestId();
    TokenService.clearRestName();
    this.setState({
      loggedInRestaurantId: null,
      loggedInRestaurantName: null,
    }, this.debugStuff);
  };

  componentDidMount(){
    this.setState({
      loggedInRestaurantId: TokenService.getRestID(),
      loggedInRestaurantName: TokenService.getRestName()
    }, this.debugStuff);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>
            <Link to="/">Foodora</Link> - An app for dietary restrictions
          </h1>
        </header>
        <Error> 
        <LoginContext.Provider value={this.state}>
          <nav>
            <div>
              <Switch>
                <Route exact path="/">
                  <Nav />
                </Route>
                <Route exact path="/login">
                  <Login
                    currentUserId={this.state.loggedInRestaurantId}
                    loginAction={this.doLogin}
                    history={useHistory}
                  />
                </Route>
                <Route exact path="/register" component={Register} />
              </Switch>
            </div>
          </nav>
        </LoginContext.Provider>
        </Error>
        <Error>
        <main>
          <MainRouter />
        </main>
        </Error>
        <Error>
        <footer>
          <FooterRouter />
          <Copyright />
        </footer>
        </Error>
      </div>
    );
  }
}

export default App;
