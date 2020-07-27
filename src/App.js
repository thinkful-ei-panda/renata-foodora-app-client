import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import Copyright from './Copyright/Copyright';
import Diet from './Diet/Diet';
import SearchDishName from './SearchDishName/SearchDishName';
import FAQ from './FAQ/FAQ';
import Landing from './Landing/Landing';
import Price from './Price/Price';
import RestLogin from './RestLogin/RestLogin';
import RestRegister from './RestRegister/RestRegister';
import SearchResult from './SearchResult/SearchResult';
import UserLogin from './UserLogin/UserLogin';
import UserRegister from './UserRegister/UserRegister';
import SearchBar from './SearchBar/SearchBar';
import Marketing from './Marketing/Marketing';
import './App.css';


function App(){

  return (
    <div className="App">
      <header>
      <h1>
        <Link to='/'>Foodora</Link> - An app for dietary restrictions
      </h1>
      </header>
      <nav>
        <SearchBar />
      <div>
        <h2>User</h2> 
        <div>
          <Switch>
          <Route exact path='/user-login' component={UserLogin}>User Login</Route>
          <Route exact path='/user-register' component={UserRegister}>User Register</Route>  
          </Switch>
        </div>
        <Link exact to='/user-login'>User Login</Link> 
        <h2>Restaurant</h2>
        <Switch>
        <Route exact path='/restaurant-login' component={RestLogin} />
        <Route exact path='/restaurant-register' component={RestRegister} />
        </Switch>
      </div>
     </nav>
      <main>
        <Marketing />
        <Diet />
        <Switch>
        <Route exact path='/search-result' component={SearchResult} />
        </Switch>
        <Price />
        <SearchDishName />
      </main>
        <footer>
        <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/faq' component={FAQ} />
        <Route exact path='/landing-page' component={Landing} />
        </Switch>
        <Copyright />
        </footer>
        {/* Wrap this around APP ERROR!!!!! */}
      </div>
  );
};

export default App;
