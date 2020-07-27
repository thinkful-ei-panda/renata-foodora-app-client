import React from 'react';
import { Link } from 'react-router-dom';
import FooterRouter from './router/FooterRouter';
import NavRouter from './router/NavRouter';
import MainRouter from './router/MainRouter';
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
          <div>
            <NavRouter />
          </div>
     </nav>
        <main>
            <MainRouter />
        </main>
        <footer>
          <FooterRouter />  
        </footer>
      </div>
  );
};

export default App;
