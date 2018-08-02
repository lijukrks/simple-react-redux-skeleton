import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import * as appActions from '../../actions'
import { makeSelectGlobal } from './selectors';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import _ from 'lodash'
import LoginComponent from '../../components/Login'
class Login extends Component {
  constructor() {
    super()
    this.state = {
      formData: {}
    }
  }
  componentWillReceiveProps = (nextProps) => {
    if (!_.isEqual(this.props.systemState.loginReducer, nextProps.systemState.loginReducer)) {
      if (nextProps.systemState.loginReducer.status === 200 && nextProps.systemState.loginReducer.data.token) {
        localStorage.setItem('token', nextProps.systemState.loginReducer.data.token)
        this.props.router.push('/home');
      }
      else if (nextProps.systemState.loginReducer.status === 200 && !nextProps.systemState.loginReducer.data.token) {
        alert('Something went wrong . . .');
      }
    }
    if (!_.isEqual(this.props.systemState.signupReducer, nextProps.systemState.signupReducer)) {
      if (nextProps.systemState.signupReducer.status === 200 && nextProps.systemState.signupReducer.data.returnCode === 200) {
        alert('Success');
      }
      else if (nextProps.systemState.signupReducer.status === 200 && !nextProps.systemState.signupReducer.data.returnCode === 400) {
        alert('Something went wrong . . .');
      }
    }
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }
  onClickSubmit = (type) => {
    var { formData } = this.state
    var error = false
    if (!formData.email) {
      alert('Enter email')
      error = true
    } else if (!this.validateEmail(formData.email)) {
      alert('Enter valid email')
      error = true
    }
    if (!formData.password) {
      alert('Enter password')
      error = true
    }
    if (!error) {
      if (type == 'login') {
        // this.props.actions.loginAction({
        //   username: formData.email,
        //   password: formData.password
        // })
        this.props.actions.loginAction(formData)
      } else {
        this.props.actions.signupAction({
          username: formData.email,
          password: formData.password
        })
      }
    }
  }
  onChangeField = (key, value) => {
    var current = this.state.formData
    var formData = Object.assign({}, current, {
      [key]: value
    });
    this.setState({
      formData
    })
  }
  render() {
    return (
      <LoginComponent
        onChangeField={this.onChangeField}
        onClickSubmit={this.onClickSubmit}
        onClickSubmit={this.onClickSubmit} />
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(appActions, dispatch),
  };
}
const mapStateToProps = createStructuredSelector({
  systemState: makeSelectGlobal(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
