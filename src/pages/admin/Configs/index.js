import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './index.less';
import ConfigsTable from './ConfigsTable';

export default class Configs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <ConfigsTable />
      </div>
    );
  }
}
