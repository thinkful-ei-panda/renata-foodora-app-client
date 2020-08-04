import React, { Component } from 'react';
import $ from 'jquery';

class LandingDisplay extends Component{

    state = {
        userInputContainerClicked: false,
        searchTerm: '',
        passingTags: {
            search: {
                inputTerm: ''
            },
            price: {
                one: false,
                two: false,
                three: false,
                four: false,
                five: false
            },
            tag: {
                peanallergy: false,
                fishallergy: false,
                soyallergy: false,
                shellalergy: false,
                keto: false,
                paleo: false,
                lowcal: false,
                lowsalt: false,
                lowcarb: false,
                lowsugar: false,
                glfree: false,
                sugarfree: false,
                saltfree: false,
                lacfree: false, 
                vegetarian: false,
                vegan: false,
                pesc: false
            }
        }
    };

    clickListener = () => {
        $('#userInputQuery').slideToggle();
    };

    searchListener = event => {
        this.setState({  searchTerm: event.target.value });

    };

    searchSubmitListener = event => {
        event.preventDefault();
        this.setState(
            {
                ...this.state.passingTags,
                search: {
                    inputTerm: this.state.searchTerm
                }
            }
        );
    };
    
    cancelSearchTag = () => {
        this.setState(
            {
                passingTags: {
                    ...this.state.passingTags,
                    search: { inputTerm: '' }
                }
            }
        );
    };

    sortClickListener = (pick, unpick) => {

    }
}

export default LandingDisplay;