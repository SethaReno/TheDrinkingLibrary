import React, { Component } from "react";

import Skyrim from "../../../static/images/Other/SkyrimFeel.jpg";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT-LOGGED-IN",
      username: "",
      password: ""
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED-IN"
    });
  }

  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT-LOGGED-IN"
    });
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT-LOGGED-IN"
    });
  }

  handleChange = () => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    if (
      this.state.username === "username" &&
      this.state.password === "password"
    ) {
      this.handleSuccessfulLogin();
      this.history.push("/");
    } else {
      this.handleUnSuccessfulLogin();
    }
  };

  render() {
    return (
      <div className="auth-page-wrapper">
        <img src={Skyrim} />

        <div className="login-wrapper">
          <div className="auth-status">
            <h1>{this.state.loggedInStatus}</h1>
          </div>
          <form className="auth-input" onSubmit={this.handleLogin}>
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
            />
            <button className="btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
