import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MallHome extends Component {
  render() {
    return (
      <div style={{ paddingTop: 105 }}>
        <ul>
          <li>
            <Link to="/main/mall/parts">Parts</Link>
          </li>
          <li>
            <Link to="/main/mall/part">Part</Link>
          </li>
        </ul>
      </div>
    );
  }
}
