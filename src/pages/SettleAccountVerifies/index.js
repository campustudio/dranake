import React, { Component } from 'react';
import CardEntries from '@components/CardEntries';

const entries = [
  { content: 'C端体提现审核', path: '/main/c-withdraw-verify' },
  { content: 'H端体提现审核', path: '/main/h-withdraw-verify' },
  { content: 'H端推广结算审核', path: '/main/h-spread-settle-verify' },
];

export default class SettleAccountVerifies extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <CardEntries entries={entries} />
    );
  }
}
