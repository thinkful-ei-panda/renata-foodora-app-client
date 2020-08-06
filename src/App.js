import React from "react";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import FooterRouter from "./router/FooterRouter";
import Copyright from "./pages/Copyright";
import Nav from "./Nav/Nav";
import Login from "./Login/Login";
import "./App.css";
import Register from "./Register/Register";
import MainRouter from "./router/MainRouter";
import LoginContext from "./Context/LoginContext";
import TokenService from "./Service/TokenService";

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

  doLogin = (restId, restName) => {
    this.setState({
      loggedInRestaurantId: restId,
      loggedInRestaurantName: restName,
    });
  };

  doLogout = () => {
    TokenService.clearAuthToken();
    TokenService.clearRestId();
    this.setState({
      loggedInRestaurantId: null,
      loggedInRestaurantName: null,
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>
            <Link to="/">Foodora</Link> - An app for dietary restrictions
          </h1>
        </header>
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
        <main>
          <p>Top Three Dishes:</p>
          {/* <DemoCarousel /> */}
          <MainRouter />
          {/* <Display /> */}
        </main>
        <footer>
          <FooterRouter />
          <Copyright />
        </footer>
      </div>
    );
  }
}

export default App;
