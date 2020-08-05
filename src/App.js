import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import FooterRouter from './router/FooterRouter';
import Copyright from './pages/Copyright';
import Nav from './Nav/Nav';
import Login from './Login/Login';
import './App.css';
import Register from './Register/Register';
import MainRouter from './router/MainRouter';


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
                  <Nav />
              </Route>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Switch>
          </div>
     </nav>
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
};



export default App;
