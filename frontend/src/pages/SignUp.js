import React, { Component } from "react";
import Logo from "../components/Logo";
import Email from "../components/Email";
import Username from "../components/Username";
import Password from "../components/Password";
import OtherLogin from "../components/OtherLogin";

import "../css/bootstrap4-neon-glow.css";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: ""
    };
  }

// 이메일 인풋창 핸들링
handleEmail = e => {
  e.preventDfault ();
  this.setState({
    email: e.target.value
  })
};

// 유저네임 인풋창 핸들링
handleUsername = e => {
  e.preventDefault();
  this.setState({
    username: e.target.value
  });
};

//첫번째 패스워드 입력창 set변환
handlePW = E => {
  e.preventDefault();
  this.setState({
    pw: e.target.value
  });
};

// 서버로 가입 양식 제출
handleSubmit = e => {
  e.preventDefault();
  const {
    email,
    username,
    password
  } = this.state;

  // const SignUp = {
  //   email : this.state.emailCheck,
  //   password: this.state.passwordCheck,
  //   username: this.state.usernameCheck
  // };


  render() {
    return (
      <div className="SignUp">
        <Logo></Logo>
        <div className="card-body">
          <div className="submitForm">
            <div className="ht-tm-codeblock ht-tm-btn-replaceable ht-tm-element ht-tm-element-inner">
              <div className="form-group">
                <Email
                  handleEmail={this.handleEmail}
                  checkEmail={this.checkEmail}
                  value={this.state.email}
                />
                <Username
                  handleUsername={this.handleUsername}
                  checkUsername={this.checkUsername}
                  value={this.state.username}
                />
                <Password
                  handlePassword={this.handlePassword}
                  checkPassword={this.checkPassword}
                  value={this.state.password}
                />
              </div>
            </div>
            <OtherLogin></OtherLogin>

            {/* <button onClick={this.handleSubmit} className="btn btn-primary _joinclassName">
          Join
        </button> */}
          </div>

          {/* <a href="SignIn">or Login</a> */}
        </div>
      </div>
    );
  }
}

export default SignUp;
