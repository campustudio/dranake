import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '@h5components/Login';
import LoginForm from '@components/LoginForm';
import './index.less';

export default class LoginPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="login-panel-container">
        <LoginForm />
      </div>
    );
  }
}
