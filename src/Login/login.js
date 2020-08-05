import React, { Component } from "react";
import LoginContext from "../Context/LoginContext";
import ScaleLoader from "react-spinners/ScaleLoader";
import AuthAPIService from "../Service/AuthAPIService";
import TokenService from "../Service/TokenService";

export default class Login extends Component {
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
      console.log(data);
      this.setState({
        loading: false,
        username: "",
        password: "",
      });
      TokenService.saveAuthToken(data.authToken);
      TokenService.saveRestId(data.restaurant_id);
      this.context.saveRestName(data.name);
      this.props.onLoginSuccess();
      this.context.handleRestLoginState(true);
      this.props.history.push('/');
    });
  };

    handleRestSubmitJWTAuth = (event) => {
      event.preventDefault();

      const { username, password } = event.target;

      AuthAPIService.postLogin(
          {
              username: username.value,
              password: password.value,
          }
      )
      .then((res) => {
          username.value = '';
          password.value = '';
          TokenService.saveAuthToken(res.authToken);
          TokenService.saveRestId(res.restaurant_id);
          this.context.saveRestName(res.restname);
          this.props.onLoginSuccess();
          this.context.handleRestLoginState(true);
          this.props.history.push('/login');
      })
      .catch((res) => {
          this.setState({
              error: res.error,
              loading: false
          });
      });
  };

  render() {
    const { error, loading } = this.state;
    return (
      <div>
        {loading && (
          <div className="loading-screen">
            <ScaleLoader size={35} color={"#067368"} loading={loading} />
            {/* TODO remember to change color  */}
          </div>
        )}
        <div id="Login" className="tabContent">
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
          </form>
        </div>
      </div>
      //   <div>
      //   <form onSubmit={this.handleSubmit}>
      //     <input
      //       name='username'
      //       type='text'
      //       onChange={this.handleRestChange}
      //       value={this.state.username}
      //       placeholder='Username'
      //     />
      //     <input
      //       name='password'
      //       type='text'
      //       onChange={this.handleRestChange}
      //       value={this.state.password}
      //       placeholder='Password'
      //     />
      // </form>
      //   <div>
      //       <button type="submit">Login</button>
      //   </div>
      // </div>
    );
  }

  //     static defaultProps ={
  //         onLoginSuccess: () => {},
  //         onRegistrationSuccess: () => {},
  //     };

  //     static = LoginContext;

  //     state = {
  //         error: null,
  //         loading: false,
  //     };

  //     openTab(event){
  //         let tabName = event.currentTarget.value;
  //         let i, tabContent, tabLinks;

  //         tabContent = document.getElementsByClassName('tabContent');

  //         for(i=0; i < tabContent.length; i++){
  //             tabContent[i].style.display = 'none';
  //         }

  //         tabLinks = document.getElementsByClassName('tabLinks');

  //         for(i = 0; i < tabLinks.length; i++){
  //             tabLinks[i].className = tabLinks[i].className.replace('active', '');
  //         }

  //         document.getElementById(tabName).style.display = 'block';

  //         event.currentTarget.className += 'active';
  //     }

  //     handleRestChange = (event) => this.setState (
  //       {
  //         [event.target.name]: event.target.value
  //       }
  //     );

  //     handleRestSubmit = (event) => {
  //         this.state(
  //             {   name: '',
  //                 password: '',
  //                 username: '',
  //                 phone: '',
  //                 error: null,
  //                 loading: true,
  //             },
  //         this.handleSubmitJWAuth(event)
  //         );
  //     };

  //     handleSubmitJWAuth = (event) => {
  //         event.preventDefault();

  //         const { username, password } = event.target;

  //         AuthAPIService.postLogin(
  //             {
  //                 username: username.value,
  //                 password: password.value,
  //             }
  //         )
  //         .then((res) => {
  //             username.value = '';
  //             password.value = '';
  //             TokenService.saveAuthToken(res.authToken);
  //             TokenService.saveRestId(res.restaurant_id);
  //             this.context.saveRestName(res.restname);
  //             this.props.onLoginSuccess();
  //             this.context.handleRestLoginState(true);
  //             this.props.history.push('/login');
  //         })
  //         .catch((res) => {
  //             this.setState({
  //                 error: res.error,
  //                 loading: false
  //             });
  //         });
  //     };

  //     handleRestRegisterSubmit = (event) => {
  //         event.preventDefault();
  //         this.setState({ error: null});
  //         const { username, password, name, phone } = event.target;

  //         AuthAPIService.postRest({
  //             username: username.value,
  //             password: password.value,
  //             name: name.value,
  //             phone: phone.value,
  //         })
  //         .then((rest) => {
  //             username.value = '';
  //             password.value = '';
  //             name.value = '';
  //             phone.value = '';
  //             this.props.onRegistrationSuccess();
  //             this.context.handleRestRegisteredState(true);
  //         })
  //         .catch((res) => {
  //             this.setState({ error: res.error });
  //         });
  //     };

  //     handleLoginAfterRegistration = (username, password) => {
  //         AuthAPIService.postLogin({
  //             username,
  //             password
  //         })
  //         .then((res) => {
  //             TokenService.saveAuthToken(res.authToken);
  //             this.props.onLoginSuccess();
  //             this.props.history.push('/login');
  //         })
  //         .catch((res) => {
  //             this.setState({ error: res.error });
  //         });
  //     };

  //     componentDidMount(){
  //         document.getElementsByClassName('tabLinks')[0].click();
  //     }
  // //TODO fields are read only
  //     render(){
  //         return(
  //             <LoginContainer />
  //         );
  //     }
}
