import React, { Component } from 'react';
import '../screen.less';
import strategy from '@static/media/nyc.jpeg';

export default class Strategy extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <img src={strategy} alt="strategy" style={{ marginTop: 10, width: 200 }} />
      </div>
    );
  }
}
