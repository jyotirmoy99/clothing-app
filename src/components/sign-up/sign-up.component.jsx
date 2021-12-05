import React, { Component } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import swal from "sweetalert";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      swal({
        title: "Password didn't match",
        icon: "error",
      });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <TextField
            label="Username"
            variant="standard"
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <br />
          <TextField
            label="Email"
            variant="standard"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <br />
          <TextField
            label="Password"
            variant="standard"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <br />
          <TextField
            label="Confirm Password"
            variant="standard"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <br />
          <br />
          <Button
            type="submit"
            variant="contained"
            startIcon={<LoginIcon />}
            size="medium"
          >
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
