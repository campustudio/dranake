import React, { Component } from 'react';
import moment from 'moment';
import VehicleAvatar from '@components/VehicleAvatar';

/**
 * Coding Test Demos
 * 1. recursion
 */
export default class CodingTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log('moment() ', moment());
    console.log('moment().format() ', moment().format('YYYY-MM-DD'));
  }

  render() {
    return (
      <div>
        CodingTest
        <VehicleAvatar />
      </div>
    );
  }
}
