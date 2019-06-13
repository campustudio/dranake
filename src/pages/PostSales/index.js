import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardEntry from '@h5components/CardEntry';
import './index.less';
import '../pages.less';

export default class PostSaleManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="content">
        <ul>
          <CardEntry content="需要处理的售后申请" path="/main/post-sale" />
          <CardEntry content="模块3" path="/main/post-sale" />
          <CardEntry content="模块4" path="/main/post-sale" />
          <CardEntry content="模块5" path="/main/post-sale" />
        </ul>
      </div>
    );
  }
}
