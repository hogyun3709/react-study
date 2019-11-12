import React, { Component } from "react";

class SignIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      first_name: ''
    }
    /* 바인드를 하는 이휴 콜백을 잡아주려면 javascript 바인딩을 해야함 */
    /* 사실 es6 의 arrow funs 을 사용하면 해결됨.*/
    // this.updateEmail = this.updateEmail.bind(this);
    // this.updatePassword = this.updatePassword.bind(this);
    // this.submit = this.submit.bind(this);
  }
  updateEmail =  e => {
    this.setState({
      email: e.target.value
    })
    console.log('Email: ' + e.target.value)
  }
  /*
  updateEmail(e){
    this.setState({
      email: e.target.value
    })
    console.log('Email: ' + e.target.value)
  }
  */
  updatePassword =  e => {
    this.setState({
      password: e.target.value
    })
  }
  getFirstName = e => {
    this.setState({
      first_name: e.target.value
    })
  }
  /*
  updatePassword(e){
    this.setState({
      password: e.target.value
    })
  }
  */
  // submit = () => {
  //   const payload = {
  //     email: this.state.email,
  //     password: this.state.password
  //   };
  //   console.log(payload);
  //   const url = 'http://stagings.ringleplus.com/api/v3/common/authenticate/simple_signin';
  //   const opts = {
  //     method: "POST",
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type:': 'application/json',
  //     },
  //     body: JSON.stringify(payload)
  //   }
  //   console.log(url, opts);
  //   fetch(url, opts).then(res => res.json());
  //   }


    submit = () => {
        alert("submit");
        const { email, password, first_name } = this.state;
        const payload = {
          email,
          password,
          first_name
        };
        const url =
          "http://stagings.ringleplus.com/api/v3/common/authenticate/simple_signup";
        fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        })
          .then(res => res.json())
          .then(result => {
            if (result.success) {
              alert("성공");
            } else {
              alert("실패");
            }
            console.log(result);
          });
      };

  /*
  submit(){
    const { email, password } = this.state
    alert(email + password)
  }
  */
  render(){
    return(
      <div>
        <div>Hello</div>
        <label>Email: </label>
        <input
          value={this.state.email}
          onChange={this.updateEmail}
        />
        <br/>
        <label>password: </label>
        <input
          type="password"
          value={this.state.password}
          onChange={this.updatePassword}

        />
        <br/>
        <label>First_Name: </label>
        <input
          value={this.state.first_name}
          onChange={this.getFirstName}
        />
        <br/>
        <a
          onClick={this.submit}
        >
          Submit
        </a>
      </div>
    )
  }
}

export default SignIn;
