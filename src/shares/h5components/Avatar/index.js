import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const Avatar = class extends Component {
  render() {
    const { size = 40, src = '' } = this.props;

    const styles = {
      width: size,
      height: size,
      margin: '0 auto',
      borderRadius: size / 2,
      overflow: 'hidden',
    };

    return (
      <div style={styles}>
        <img src={src} alt="avatar" style={{ width: size }} />
      </div>
    );
  }
};

export default withRouter(Avatar);
