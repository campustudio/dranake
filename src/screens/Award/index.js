import React, { Component } from 'react';
import '../screen.less';
import { Card } from 'antd-mobile';
import ActivityInfoCard from '@h5components/ActivityInfoCard';

export default class Award extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { performance = {} } = this.props;
    console.log('9900 performance: ', performance);
    const {
      estimatedOnboardUserReward = 99999,
      onboardUsers = 99999,
      totalOnboardUserReward = 99999,
      estimatedOnboardMemberReward = 99999,
      onboardMembers = 99999,
      totalOnboardMemberReward = 99999,
    } = performance;

    const totalAward = parseInt(estimatedOnboardUserReward, 10)
      + parseInt(totalOnboardUserReward, 10)
      + parseInt(estimatedOnboardMemberReward, 10)
      + parseInt(totalOnboardMemberReward, 10);

    return (
      <div>
        <div className="total-amount">
          <span>
            <span style={{ lineHeight: '30px' }}>预估奖励总金额(每天结算)：</span>
          </span>
          <span className="red-font20">{`￥${totalAward}`}</span>
        </div>
        <ActivityInfoCard>
          <Card style={{ border: '2px dashed #ff9800' }}>
            <Card.Header
              title="拓展奖励"
            />
            <Card.Body>
              <div className="flex-jcsb">
                <span className="red-font">{`金额：${estimatedOnboardUserReward}`}</span>
                <span>邀请新用户就拿钱</span>
              </div>
              <div>
                <div>{`推广人数：${onboardUsers}`}</div>
                <div>{`奖励：￥${99999}/新用户`}</div>
              </div>
            </Card.Body>
            <Card.Footer content={<span className="blue-font">*评级越高，每个用户奖励的金额越高。</span>} />
          </Card>
        </ActivityInfoCard>
        <ActivityInfoCard>
          <Card style={{ border: '2px dashed #ff9800' }}>
            <Card.Header
              title="运营奖励"
            />
            <Card.Body>
              <div className="magin-b10">
                <div className="red-font">{`金额：${estimatedOnboardMemberReward}`}</div>
                <div>推荐新用户付会员费拿提成</div>
              </div>
              <div className="flex-jcsb">
                <span>{`推广付费快成团用户数：${onboardMembers}`}</span>
              </div>
            </Card.Body>
            <Card.Footer content={<span className="blue-font">*可以收取团队运营奖励，活动评级越高，可收取奖励的团队人数越多。</span>} />
          </Card>
        </ActivityInfoCard>
        <ActivityInfoCard>
          <Card style={{ border: '2px dashed #ff9800' }}>
            <Card.Header
              title="瓜分奖金"
            />
            <Card.Body>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span>
                  资金池金额：
                  <span className="red-font20">{`￥${99999.99}`}</span>
                </span>
              </div>
            </Card.Body>
            <Card.Footer content={<span className="blue-font">*仅限AA级用户参与，按照贡献值比例分配。</span>} />
          </Card>
        </ActivityInfoCard>
        <ActivityInfoCard>
          <div>说明：</div>
          <div>*所有奖励请登录快成团小程序领取；</div>
          <div>*拓展奖励 和 运营奖励 每天结算；</div>
          <div>*对恶意刷取奖励者，快成团有权撤销奖励；</div>
        </ActivityInfoCard>
      </div>
    );
  }
}
