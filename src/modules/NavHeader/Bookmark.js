import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.less';

const Bookmark = class extends Component {
  render() {
    return (
      <a href="">收藏本站</a>
    );
  }
};

export default withRouter(Bookmark);
