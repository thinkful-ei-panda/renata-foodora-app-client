import React from "react";
import { Link } from "react-router-dom";
import FooterRouter from "./Router/FooterRouter";
import Copyright from "./pages/Copyright";
import "./App.css";
import MainRouter from "./Router/MainRouter";
import Error from './Error';
import FullLogin from "./Login/FullLogin";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        {/* Header */}
        <header>
          <h1>
            <Link style={{ color: 'white' }} to="/">Foodora</Link> 
          </h1>
          <h2>An app for dietary restrictions</h2>
        </header>

        {/* Nav */}
        <Error>
        <nav>
            <FullLogin />
        </nav>
        </Error>

        {/* Main */}
        <Error>
        <main>
            <MainRouter />
        </main>
        </Error>

        {/* Footer */}
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
