import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import Landing from '../pages/Landing';
import Footer from '../components/Footer';

export default function FooterRouter(){
    return(
        <footer>      
        <Switch>  
            <Route exact path ='/' component={Footer}/>  
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/faq' component={FAQ} />
            <Route exact path='/landing-page' component={Landing} />
        </Switch>
        </footer>
    )
}