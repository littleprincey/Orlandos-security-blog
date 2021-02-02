import React from "react";
import { connect } from "react-redux";
import { isAuthenticated, signIn } from "authenticare/client";
import { baseApiUrl as baseUrl } from "../config";
import { checkAuth } from '../actions/AuthActions';


class SignIn extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    signIn({ username, password }, { baseUrl })
      .then((token) => {
        if (isAuthenticated()) {
          this.props.dispatch(checkAuth())
          this.props.history.push("/");
        }
        return null;
      })
      .catch((err) => alert(err.message));
  };

  render() {
    return (
      <div className="form-wrapper">
      <h2 >Sign In</h2>
      <div className="">
        <form className="signin-form" onSubmit={this.handleSubmit}>
          <div className="section">
        <label htmlFor="username">
            Username:
        </label>
          <br/>
        <input
          onChange={this.handleChange}
          name="username"
              value={this.state.username}
              autoFocus={true}
            type="text"
            id="username"
            placeholder="Enter username here..."
            />
          </div>
            <br />
            <div className="section">
          <label htmlFor="password">
              Password:
          </label>
            <br/>
          <input
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            type="password"
            id="password"
            placeholder="Enter password here..."
              />
            </div>
          <label htmlFor="sign-me-in-button"></label>
          <button id="sign-me-in-button" className="navy-link submit-button" type="submit">
            Sign me in
          </button>
          
          </form>
          </div>
      </div>
    );
  }
}

export default connect()(SignIn);