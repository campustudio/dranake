import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.less';

const Tab = class extends Component {
  render() {
    const {
      route = '',
      text = 'tab',
      activeRoute = () => {},
    } = this.props;

    return (
      <div>
        <span
          onClick={() => activeRoute(route)}
          onKeyPress={() => activeRoute(route)}
          style={{ color: '#fff' }}
          className="font16"
        >
          {text}
        </span>
      </div>
    );
  }
};

export default withRouter(Tab);
