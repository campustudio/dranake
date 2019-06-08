import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { WingBlank, WhiteSpace } from 'antd-mobile';

const ActivityInfoCard = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { size = 'lg', children, noBlank = false } = this.props;

    return (
      <div>
        {
          noBlank
            ? (
              <div>
                <WhiteSpace size={size} />
                {children}
                <WhiteSpace size={size} />
              </div>
            ) : (
              <WingBlank size={size}>
                <WhiteSpace size={size} />
                {children}
                <WhiteSpace size={size} />
              </WingBlank>
            )
        }
      </div>
    );
  }
};

export default withRouter(ActivityInfoCard);
