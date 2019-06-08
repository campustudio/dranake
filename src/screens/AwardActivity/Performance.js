import React, { Component } from 'react';
import { Card } from 'antd-mobile';

const rankMapper = {
  0: 'AA',
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  '-1': '未排名',
};

export default class Performance extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { performance = {} } = this.props;
    const {
      totalContribution = 20000,
      rank = 10000,
      rankGroup = 1,
    } = performance;

    return (
      <Card>
        <Card.Header
          title="活动排名"
        />
        <Card.Body>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{`贡献值：${totalContribution}`}</span>
            <span>{`排名：${rank}`}</span>
          </div>
          <div style={{ textAlign: 'right' }}>
            活动评级：
            <span style={{ color: 'red', fontSize: 25 }}>
              {rankMapper[rankGroup]}
            </span>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
