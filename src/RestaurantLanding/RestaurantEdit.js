import React from 'react';
import TokenService from '../Service/TokenService';
import RestaurantLandingAPIDishes from '../Service/RestaurantAPIDishes';
import ScaleLoader from "react-spinners/ScaleLoader";


export default class RestaurantEdit extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            name: '',
            phone: '',
            error: null,
            loading: false,
            restaurant_id: TokenService.getRestID(),
        }
        this.updateRestInfo = this.updateRestInfo.bind(this);
    };

    handleRegUpdate = (event) =>
    this.setState({
      [event.target.name]: event.target.value,
    });


    updateRestInfo = (event) => {
        event.preventDefault();

        const restaurant_id = TokenService.getRestID();

        this.setState({
            loading: true,
        });
        
        RestaurantLandingAPIDishes
        .updateRestaurant(restaurant_id, {
            name: this.state.name,
            phone: this.state.phone,
        }).then(() => {
        //console.log("RestaurantEdit -> updateRestInfo -> res", res.status)
            
            console.log('SOMETHING THAT WERE GONNA SEE');
            this.setState({
                loading: false,
            })
            this.props.history.push('/restaurant-home');
            console.log('OKAY BABY WE ARE SEEING STUFF');
        })
        .catch((res) => {
            console.log("AKSDJHKASJDHAKSJDHt -> updateRestInfo -> res", res.status)
            this.setState({ error: res.error, loading: null});
        });
    };
    //TODO redirect to the other page isn't working! Come back!!!!!

    render(){
        const { error, loading } = this.state;
        return(
            <div id='update' className='updateContent'>
                <h3>Restaurant Update</h3>
                <form className='update-form' onSubmit={this.updateRestInfo}>
                <div role="alert">
                    {error && <p className="error">{error}</p>}
                </div> 
                <div className='update'>
                    <label
                    htmlFor='update-form-name'
                    >Restaurant Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="update-form-name"
                        value={this.state.name}
                        onChange={this.handleRegUpdate}
                    ></input>
                </div>
                <div className='update'>
                    <label
                    htmlFor='update-form-phone'
                    >Restaurant Phone:
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="update-form-phone"
                        value={this.state.phone}
                        onChange={this.handleRegUpdate}
                    ></input>
                </div>
                <button 
                type="submit" 
                onSubmit={this.updateRestInfo}
                >
                Update
                </button>

                {loading && (
                <div className="loading-screen">
                    <ScaleLoader size={35} color={"#067368"} loading={loading} />
                </div>
                )}
                </form>
            </div>
        );
    }
}