import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardEntry from '@h5components/CardEntry';
import './index.less';
import '../pages.less';

export default class PromotersManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="content">
        <ul>
          <CardEntry content="三方产品列表" path="/main/third-products" />
          <CardEntry content="模块3" path="/main/third-products" />
          <CardEntry content="模块4" path="/main/third-products" />
        </ul>
      </div>
    );
  }
}
