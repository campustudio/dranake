import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardEntry from '@h5components/CardEntry';
import './index.less';
import '../pages.less';

export default class SettleAccountVerifies extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="content">
        <ul>
          <CardEntry content="C端体提现审核" path="/main/c-withdraw-verify" />
          <CardEntry content="H端体提现审核" path="/main/h-withdraw-verify" />
          <CardEntry content="H端推广结算审核" path="/main/h-spread-settle-verify" />
        </ul>
      </div>
    );
  }
}
