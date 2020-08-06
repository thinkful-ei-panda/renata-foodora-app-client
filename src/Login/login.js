import React from "react";
import LoginContext from "../Context/LoginContext";
import ScaleLoader from "react-spinners/ScaleLoader";
import AuthAPIService from "../Service/AuthAPIService";
import TokenService from "../Service/TokenService";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
    loading: false,
  };

  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = LoginContext;

  handleRestChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value,
    });

  handleRestSubmit = (event) => {
    event.preventDefault();

    this.setState({
      loading: true,
    });

    AuthAPIService.postLogin({
      username: this.state.username,
      password: this.state.password,
    }).then((data) => {
      this.setState({
        loading: false,
        username: "",
        password: "",
      });
      TokenService.saveAuthToken(data.authToken);
      TokenService.saveRestId(data.restaurant_id);
      this.context.saveRestName(data.name);
      this.context.loggedIn = true;
      this.props.history.push("/");
    });
  };

  render() {
    const { error, loading } = this.state;
    return (
      <div>
        <div id="login" className="tabContent">
          <h3>Restaurant Login</h3>
          <form className="login-form" onSubmit={this.handleRestSubmit}>
            <div role="alert">{error && <p className="error">{error}</p>}</div>
            <div className="username">
              <label htmlFor="login-form-username">Username: </label>
              <input
                type="text"
                name="username"
                id="login-form-username"
                value={this.state.username}
                onChange={this.handleRestChange}
                required
              ></input>
            </div>
            <div className="password">
              <label htmlFor="login-form-password">Password: </label>
              <input
                type="text"
                name="password"
                id="login-form-password"
                value={this.state.password}
                onChange={this.handleRestChange}
                required
              ></input>
            </div>
            <button type="submit" onSubmit={this.handleRestSubmit}>
              Login
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
  };
}
