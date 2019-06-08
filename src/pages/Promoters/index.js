import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './index.less';
import AsyncCascader from '@components/AsyncCascader';

export default class Promoters extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        Promoters Table
        <AsyncCascader />
      </div>
    );
  }
}
