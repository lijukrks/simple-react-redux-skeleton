import React, { Component } from 'react';
import logo from '../../../public/img/logo.svg';
class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="form-signin">
            <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
            <div className='form-group'>
              <label>Username</label>
              <input
                className='form-control'
                type="text"
                onChange={(e) => this.props.onChangeField('email', e.target.value)}
                placeholder="Enter Username"
                name="uname" required />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                className='form-control'
                type="password"
                onChange={(e) => this.props.onChangeField('password', e.target.value)}
                placeholder="Enter Password"
                name="psw" required />
            </div>
            <div className="btn-container">
              <button className='btn btn-primary' onClick={(e) => this.props.onClickSubmit('login')}>Login</button>
              <button className='btn btn-secondary' onClick={(e) => this.props.onClickSubmit('signup')}>Signup</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;