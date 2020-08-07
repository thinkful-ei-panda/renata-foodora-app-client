import React from "react";
import RestContext from '../Context/RestContext';
import AuthAPIService from "../Service/AuthAPIService";
import TokenService from '../Service/TokenService';
import ScaleLoader from "react-spinners/ScaleLoader";

export default class Register extends React.Component {
  state = {
    username: "",
    password: "",
    name: "",
    phone: "",
    error: null,
    loading: false,
  };

  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  static contextType = RestContext;

  handleRegChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value,
    });

  handleRegSubmit = (event) => {
    event.preventDefault();

    this.setState({
      loading: true,
    });

    AuthAPIService.postRest({
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      phone: this.state.phone,
    }).then((data) => {
      this.setState({
        loading: false,
        username: '',
        password: '',
        name: '',
        phone: '',
      });
      TokenService.saveAuthToken(data.authToken);
      TokenService.saveRestId(data.restaurant_id);
      this.context.saveRestName(data.name);
      this.props.onRegistrationSuccess();
      this.context.handleRegisteredState(true);
      this.props.history.push('/');
    })
  };

  render() {
    const { error, loading } = this.state;
    const { registered } = this.context;
    return (
      <div>
        <div id="register" className="tabContent">
          <h3>Restaurant Register</h3>
          <form className="register-form" onSubmit={this.handleRegSubmit}>
            <div role="alert">
              {error && <p className="error">{error}</p>}
              {registered && (
                <p className="registered-alert">Restaurant account created!</p>
              )}
            </div>
            <div className="username">
              <label htmlFor="register-form-username">Username:</label>
              <input
                type="text"
                name="username"
                id="register-form-username"
                value={this.state.username}
                onChange={this.handleRegChange}
                required
              ></input>
            </div>
            <div className="password">
              <label htmlFor="register-form-password">Password:</label>
              <input
                type="password"
                name="password"
                id="register-form-password"
                value={this.state.password}
                onChange={this.handleRegChange}
                required
              ></input>
            </div>
            <div className="restname">
              <label htmlFor="register-form-restname">Restaurant Name:</label>
              <input
                type="text"
                name="name"
                id="register-form-restname"
                value={this.state.name}
                onChange={this.handleRegChange}
                required
              ></input>
            </div>
            <div className="phone">
              <label htmlFor="register-form-phone">Phone:</label>
              <input
                type="text"
                name="phone"
                id="register-form-phone"
                value={this.state.phone}
                onChange={this.handleRegChange}
                required
              ></input>
            </div>
            <button type="submit" onSubmit={this.handleRegSubmit}>
              Register
            </button>
            {loading && (
          <div className="loading-screen">
            <ScaleLoader size={35} color={"#067368"} loading={loading} />
            {/* TODO remember to change color  */}
          </div>
        )}
          </form>
        </div>
      </div>
    );
  }
}
