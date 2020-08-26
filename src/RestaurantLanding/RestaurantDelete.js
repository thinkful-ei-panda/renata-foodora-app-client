import React from 'react';
//import TokenService from '../Service/AuthAPIService';
import { withRouter } from 'react-router-dom';

class RestaurantDelete extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            error: null,
           
        }
        this.routeChange = this.routeChange.bind(this);
    };

    routeChange() {
        let path = ('/');
        this.props.history.push(path);
    }

//API = deleteRestaurant

    render() {
        return(
            <div>
                <h3 style={{ color: 'red' }}>Are you sure you want to delete you account? Once you click 'Yes' this action cannot be undone.</h3>

                <button>Yes</button>

                <button
                type="submit"
                onClick={this.routeChange}
                >No</button>

            </div>
        );
    }
}

export default withRouter(RestaurantDelete);