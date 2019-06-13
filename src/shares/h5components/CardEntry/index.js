import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Card } from 'antd';

const CardEntry = class extends Component {
  render() {
    const { path = '/', content = 'content', backContent = 'backContent' } = this.props;

    return (
      <li>
        <Link to={path}>
          <p>
            <Card
              onClick={this.toPath}
              bordered={false}
              style={{
                width: 200,
                minWidth: 200,
                cursor: 'pointer',
                margin: 30,
                display: 'inline-block',
              }}
              bodyStyle={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {content}
            </Card>
          </p>
          <p>
            <Card
              onClick={this.toPath}
              bordered={false}
              style={{
                width: 200,
                minWidth: 200,
                cursor: 'pointer',
                margin: 30,
                display: 'inline-block',
              }}
              bodyStyle={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {backContent}
            </Card>
          </p>
        </Link>
      </li>
    );
  }
};

export default withRouter(CardEntry);
