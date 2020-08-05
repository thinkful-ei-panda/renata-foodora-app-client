import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

function LoginContainer() {
  const { error, loading } = this.state;
  const { registered } = this.context;
  return (
    <main className="landing-main">
      {loading && (
        <div className="loading-screen">
          <ScaleLoader size={35} color={"#067368"} loading={loading} />
          {/* TODO remember to change color  */}
        </div>
      )}
      <div className="tab">
        <button
          className="tabLinks"
          id="defaultOpen"
          value="Login"
          onClick={this.openTab}
        >
          Restaurant Login
        </button>
        <button className="tabLinks" value="Register" onClick={this.openTab}>
          Restaurant Register
        </button>
      </div>
      <div id="Login" className="tabContent">
        <h3>Restaurant Login</h3>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div role="alert">{error && <p className="error">{error}</p>}</div>
          <div className="username">
            <label htmlFor="login-form-username">Username:</label>
            <input
              type="text"
              name="username"
              id="login-form-username"
              required
              value="Username"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="password">
            <label htmlFor="login-form-password">Password:</label>
            <input
              type="password"
              name="password"
              id="login-form-password"
              value="********"
              onChange={this.handleChange}
              required
            ></input>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>

      <div id="Register" className="tabContent">
        <h3>Restaurant Register</h3>
        <form className="register-form" onSubmit={this.handleRegisterSubmit}>
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
              value="Username"
              required
            ></input>
          </div>
          <div className="password">
            <label htmlFor="register-form-password">Password:</label>
            <input
              type="password"
              name="password"
              id="register-form-password"
              value="******"
              required
            ></input>
          </div>
          <div className="restname">
            <label htmlFor="register-form-restname">Restaurant Name:</label>
            <input
              type="text"
              name="restname"
              id="register-form-restname"
              value="Joe's Pizzeria"
              required
            ></input>
          </div>
          <div className="phone">
            <label htmlFor="register-form-phone">Phone:</label>
            <input
              type="text"
              name="phone"
              id="register-form-phone"
              value="317-123-3456"
              required
            ></input>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </main>
  );
}

export default LoginContainer;
