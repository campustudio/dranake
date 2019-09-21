import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingHome extends Component {
  render() {
    return (
      <div style={{ paddingTop: 105 }}>
        <ul>
          <li>
            <Link to="/main/shopping/parts">Parts</Link>
          </li>
          <li>
            <Link to="/main/shopping/part">Part</Link>
          </li>
        </ul>
      </div>
    );
  }
}
