import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import FooterRouter from './router/FooterRouter';
import Copyright from './pages/Copyright';
import NavBar from './components/NavBar';
import Login from './Login/Login';
import './App.css';
import Register from './Resgister/Resgister';
//import MainRouter from './router/MainRouter';
// import DemoCarousel from './Carousel/Carousel';
// import CheckboxContainer from './Checkbox/CheckboxContainer';

function App(){

  return (
    <div className="App">
      <header>
          <h1>
              <Link to='/'>Foodora</Link> - An app for dietary restrictions
          </h1>
      </header>
      <nav>
          <div>
            <Switch>
              <Route exact path ='/'>
                  <NavBar />
              </Route>
              <Route exact path='/rest-login' component={Login} />
              <Route exact path='/rest-register' component={Register} />
            </Switch>
          </div>
     </nav>
     <main>
       <p>Top Three Dishes:</p>
       {/* <DemoCarousel /> */}
     {/* <MainRouter /> */}
      {/* <CheckboxContainer /> */}
     </main>
        <footer>
          <FooterRouter />  
          <Copyright />
        </footer>
      </div>
  );
};



export default App;
