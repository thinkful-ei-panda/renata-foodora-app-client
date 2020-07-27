import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import FooterRouter from './router/FooterRouter';
import Copyright from './pages/Copyright';
import NavBar from './components/NavBar';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';
import RestLogin from './components/RestLogin';
import RestRegister from './components/RestRegister';
import './App.css';
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
                  <NavBar />
              </Route>
              <Route exact path='/user-login' component={UserLogin} />
              <Route exact path='/user-register' component={UserRegister} />
              <Route exact path='/rest-login' component={RestLogin} />
              <Route exact path='/rest-register' component={RestRegister} />
            </Switch>
          </div>
     </nav>
     <main>
     <MainRouter />
     </main>
        <footer>
          <FooterRouter />  
          <Copyright />
        </footer>
      </div>
  );
};



export default App;
