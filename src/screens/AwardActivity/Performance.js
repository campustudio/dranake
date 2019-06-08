import React, { Component } from 'react';
import { Card } from 'antd-mobile';
import ActivityInfoCard from '@h5components/ActivityInfoCard';

export default class Performance extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { performance = {} } = this.props;
    console.log('9900 performance: ', performance);
    const {
      estimatedOnboardMemberReward = 0,
      estimatedOnboardUserReward = 0,
      onboardMembers = 0,
      onboardUsers = 0,
      rank = 100,
      rankGroup = 1,
      totalContribution = 20,
      totalOnboardMemberReward = 0,
      totalOnboardUserReward = 0
    } = performance;

    return (
      <Card>
        <Card.Header
          title="活动排名"
        />
        <Card.Body>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{`贡献值：${9000}`}</span>
            <span>{`排名：${90}`}</span>
          </div>
        </Card.Body>
        <Card.Footer extra={<div>活动平级：<span style={{ color: 'red', fontSize: 20 }}>AA</span></div>} />
      </Card>
    );
  }
}
