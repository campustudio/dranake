import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, WingBlank } from 'antd-mobile';
import H5NavBar from '@h5components/H5NavBar';
import Event from './Event';
import Performance from './Performance';
import '../screen.less';
import './index.less';
import ActivityInfoCard from '@h5components/ActivityInfoCard';
import SpinSkeletonContainer from '@h5components/SpinSkeletonContainer';
import Award from '@screens/Award';
import Strategy from '@screens/Strategy';
import apis from '@apis';

const tabs = [
  { title: '奖励' },
  { title: '攻略' },
];

const trueFlag = true;
const falseFlag = false;

export default class AwardActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: null,
      performance: null,
    };
  }

  componentDidMount() {
    const { match = {} } = this.props;
    const { params = {} } = match;
    const { id = '' } = params;

    this.getEDetail(id);
  }

  getEDetail = async (id) => {
    const eDetail = await apis.getEDetail({
      token: localStorage.getItem('token'),
      eventId: id,
    });
    console.log('eDetail: ', eDetail);
    const { event = {}, performance = {} } = eDetail;
    this.setState({
      event,
      performance: {
        ...performance,
        eventRewardPool: event.eventRewardPool || 0,
      },
    });
    // this.setState({
    //   event: {
    //     "endAt": 1561687717,
    //     "eventId": 1,
    //     "eventName": "第一期",
    //     "startAt": 1559009317
    //   },
    //   performance: {
    //     "estimatedOnboardMemberReward": 0,
    //     "estimatedOnboardUserReward": 0,
    //     "onboardMembers": 0,
    //     "onboardUsers": 0,
    //     "rank": 100,
    //     "rankGroup": 1,
    //     "totalContribution": 20,
    //     "totalOnboardMemberReward": 0,
    //     "totalOnboardUserReward": 0
    //   },
    // });
  }

  render() {
    const { event, performance } = this.state;
    console.log('9090 performance: ', performance);

    return (
      <div>
        <H5NavBar text="推广运营活动" />
        <div className="content-container">
          <SpinSkeletonContainer dataSrc={event} height={126} rows={4}>
            <Event event={event} />
          </SpinSkeletonContainer>
          <ActivityInfoCard noBlank={trueFlag}>
            <SpinSkeletonContainer dataSrc={performance} height={126} rows={4}>
              <Performance performance={performance} />
            </SpinSkeletonContainer>
          </ActivityInfoCard>
          <WingBlank size="lg">
            <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
              <SpinSkeletonContainer dataSrc={performance} rows={4} withBlank={falseFlag}>
                <div className="tab-item">
                  <Award performance={performance} />
                </div>
              </SpinSkeletonContainer>
              <div className="tab-item">
                <Strategy />
              </div>
            </Tabs>
          </WingBlank>
        </div>
      </div>
    );
  }
}
