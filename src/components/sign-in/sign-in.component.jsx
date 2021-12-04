import React, { Component } from "react";

// import FormInput from "../form-input/form-input.component";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Email"
            variant="standard"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <TextField
            label="Password"
            variant="standard"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <br />
          <br />
          <Button type="submit" variant="contained">
            SIGN IN
          </Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
