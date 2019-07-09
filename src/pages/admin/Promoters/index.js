import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './index.less';
import PromotersTable from './PromotersTable';

export default class Promoters extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <PromotersTable />
      </div>
    );
  }
}
