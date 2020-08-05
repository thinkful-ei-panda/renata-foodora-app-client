import React, { Component, Fragment } from 'react';
import * as $ from 'jquery';
import UserInputContainer from './UserInputContainer';

class Display extends Component{

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

    sortClickListener = (pick) => {
        this.setState(
            prevState => (
                {
                    ...this.state.passingTags,
                }
            ),
            () => this.sortTags(pick)
        );
    };

    // Universal Filter

    allFilterClickListener = (event, filterProp) => {
        console.log('FILTER CLICKED', event.target.name);
        const name = event.target.dataset.name;
        this.setState(prevState => ({
            passingTags: {
                ...prevState.passingTags,
                [filterProp]: {
                    ...prevState.passingTags[filterProp],
                    [name]: !prevState.passingTags[filterProp][name]
                }
            }
        })); 
    };

    filteredCollected = () => {
        const collectedTrueKeys = {
            price: [],
            tag: []
        };
        
        const { price, tag } = this.state.passingTags;
        for(let priceKey in price){
            if(price[priceKey]) collectedTrueKeys.price.push(priceKey);
        }
        for(let tagKey in tag){
            if(tag[tagKey]) collectedTrueKeys.tag.push(tagKey);
        }
        return collectedTrueKeys;
    };

    render() {
        return(
            <Fragment>
                <div>
                <UserInputContainer 
                tags={this.state.passingTags}
                cancelSearchTag={this.cancelSearchTag}
                sortClickListener={this.sortClickListener}
                allFilterClickListener={this.allFilterClickListener}
                searchTerm={this.state.searchTerm}
                searchListener={this.searchListener}
                searchSubmitListener={this.searchSubmitListener}
                />
                </div>
            </Fragment>
        );
    };
}

export default Display;