import React, { Component } from "react";
import jwt_decode from "jwt-decode";

export class Login extends Component {
  state = {
    username: "",
    password: "",
    login: true,
    createUsername: "",
    createPassword: "",
    confirmPassword: ""
  };

  handleUsernameChange = ev => {
    this.setState({
      username: ev.target.value
    });
  };

  handlePasswordChange = ev => {
    this.setState({
      password: ev.target.value
    });
  };

  handleSumbit = ev => {
    ev.preventDefault();
    let target = ev.target;
    this.setState({
      username: "",
      password: ""
    });
    fetch("http://localhost:3001/tokens", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => {
        if (res.status !== 200) {
          return { jwt: null };
        } else {
          return res.json();
        }
      })
      .then(data => {
        if (data.jwt === null) {
          target[1].style.borderColor = "red";
          target[1].placeholder = "Invalid Username or Password";
          this.setState({
            username: "",
            password: ""
          });
          setTimeout(() => (target[1].style.borderColor = "#F0F0F0"), 1500);
        } else {
          let user = jwt_decode(data.jwt);
          localStorage.setItem("jwt", data.jwt);
          localStorage.setItem("user", user.id);
          this.props.history.push("/home");
        }
      });
  };

  createUserForm = () => {
    this.setState({
      login: false,
      createUsername: this.state.username,
      createPassword: this.state.password
    });
  };

  handleCreateUsernameChange = ev => {
    this.setState({ createUsername: ev.target.value });
  };

  handleCreatePasswordChange = ev => {
    this.setState({ createPassword: ev.target.value });
  };

  handleConfirmCreatePasswordChange = ev => {
    let confirmBox = ev.target;
    this.setState({ confirmPassword: ev.target.value });
    if (this.state.createPassword !== ev.target.value) {
      confirmBox.style.borderColor = "red";
    } else {
      confirmBox.style.borderColor = "green";
      setTimeout(() => (confirmBox.style.borderColor = "#F0F0F0"), 1500);
    }
  };

  submitCreateUser = ev => {
    let target = ev.target;
    ev.preventDefault();
    if (
      this.state.createUsername === "" &&
      this.state.createPassword === "" &&
      this.state.confirmPassword === ""
    ) {
    } else if (this.state.createUsername === "") {
      ev.target[0].style.borderColor = "red";
      ev.target[0].placeholder = "Username cannot be blank";
      ev.target[2].style.borderColor = "#F0F0F0";
    } else if (this.state.createPassword === "") {
      ev.target[1].style.borderColor = "red";
      ev.target[1].placeholder = "Password cannot be blank";
      ev.target[2].style.borderColor = "#F0F0F0";
    } else if (this.state.confirmPassword !== this.state.createPassword) {
      ev.target[2].style.borderColor = "red";
      this.setState({
        confirmPassword: ""
      });
      ev.target[2].placeholder = "Passwords don't match";
    } else {
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username: this.state.createUsername,
          password: this.state.createPassword
        })
      })
        .then(res => {
          if (res.status !== 200) {
            return { jwt: null };
          } else {
            return res.json();
          }
        })
        .then(data => {
          if (data.jwt === null) {
            this.setState({
              createUsername: "",
              createPassword: "",
              confirmPassword: ""
            });
            target[0].style.borderColor = "red";
            target[0].placeholder = "Username Is Taken";
          } else {
            let user = jwt_decode(data.jwt);
            localStorage.setItem("jwt", data.jwt);
            localStorage.setItem("user", user.id);
            this.props.history.push("/home");
          }
        });
    }
  };

  render() {
    return (
      <div id="homepage">
        <div id="formdiv">
          {this.state.login ? (
            <form onSubmit={this.handleSumbit} className="loginform">
              <input
                type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.handleUsernameChange}
              />
              <br />
              <input
                type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.handlePasswordChange}
              />
              <br />
              <input type="submit" className="formbutton" value="Log In" />
              <br />
              <input
                type="button"
                className="formbutton"
                onClick={this.createUserForm}
                value="Create User"
              />
            </form>
          ) : (
            <form className="loginform" onSubmit={this.submitCreateUser}>
              <input
                type="text"
                value={this.state.createUsername}
                placeholder="Username"
                onChange={this.handleCreateUsernameChange}
              />
              <br />
              <input
                type="password"
                value={this.state.createPassword}
                placeholder="Password"
                onChange={this.handleCreatePasswordChange}
              />
              <br />
              <input
                type="password"
                value={this.state.confirmPassword}
                placeholder="Confirm Password"
                onChange={this.handleConfirmCreatePasswordChange}
              />
              <br />
              <input type="submit" className="formbutton" value="Create User" />
              <br />
              <input
                type="button"
                className="formbutton"
                value="Back to Login"
                onClick={() => this.setState({ login: true })}
              />
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
