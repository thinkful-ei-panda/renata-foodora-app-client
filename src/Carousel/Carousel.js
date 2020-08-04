import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//TODO import imgs
import food from '../img/food.jpg';
 
export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={food} alt='One'/>
                    <p className="legend">Restaurant X - Name food here</p>
                </div>
                <div>
                    <img src="img/pasta.jpeg" alt='Two'/>
                    <p className="legend">Restaurant X - Name food here</p>
                </div>
                <div>
                    <img src="img/spices.jpeg" />
                    <p className="legend">Restaurant X - Name food here</p>
                </div>
            </Carousel>
        );
    }
};
 
//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
 
// Don't forget to include the css in your page
 
// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>