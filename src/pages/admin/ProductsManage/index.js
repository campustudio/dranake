import React, { Component } from 'react';
import CardEntries from '@components/CardEntries';

const entries = [
  { content: '三方产品列表', path: '/main/third-products' },
  { content: '模块2', path: '/main/third-products' },
  { content: '模块3', path: '/main/third-products' },
];

export default class PromotersManage extends Component {
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
