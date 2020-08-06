import React from "react";
//import TokenService from "../Service/TokenService";

export const LoginContext = React.createContext({
  loggedIn: false,
  error: null,
  saveRestName: () => {},
});

export default LoginContext;

// export class LoginProvider extends React.Component {
//   state = {
//     name: '',
//     loggedIn: TokenService.hasAuthToken(),
//     registered: TokenService.hasAuthToken(),
//     error: null,
//   };

//   saveRestName = (name) => {
//     this.setState({ name });
//   };

//   handleRestLoginState = (isLoggedIn) => {
//     console.log('THIS IS LINE 26 ' + this.state.loggedIn);
//     this.setState({
//       loggedIn: isLoggedIn,
//     });
//   };

//   handleRestRegisteredState = (isRegistered) => {
//     this.setState({
//       registered: isRegistered,
//     });
//   };

//   render() {
//     const value = {
//       name: this.state.name,
//       password: this.state.password,
//       username: this.state.username,
//       phone: this.state.phone,
//       loggedIn: this.state.loggedIn,
//       registered: this.state.registered,
//       error: this.state.error,
//       handleRestLoginState: this.handleRestLoginState,
//       handleRestRegisteredState: this.handleRestRegisteredState,
//       saveRestName: this.saveRestName,
//     };
//     return (
//       <div>
//         <LoginContext.Provider value={value}>
//           {this.props.children}
//         </LoginContext.Provider>
//       </div>
//     );
//   }
// }
