import React, { Component } from 'react';
import CardEntries from '@components/CardEntries';

const entries = [
  { content: '需要处理的售后申请', path: '/main/post-sale' },
  { content: '模块2', path: '/main/post-sale' },
  { content: '模块3', path: '/main/post-sale' },
];

export default class PostSaleManage extends Component {
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
