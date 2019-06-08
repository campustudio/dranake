import React, { Component } from 'react';
import { Card } from 'antd-mobile';
import ActivityInfoCard from '@h5components/ActivityInfoCard';

const noBlank = true;

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { event = {} } = this.props;
    console.log('990 event: ', event);
    const { eventName = '', startAt = 1559009317, endAt = 1561687717 } = event;

    return (
      <section>
        <ActivityInfoCard noBlank={noBlank}>
          <Card>
            <Card.Header
              title={`有奖推广活动 ${eventName}`}
            />
            <Card.Body>
              <div>
                {
                  `本期活动：
                  ${new Date(startAt).toLocaleDateString()}
                    ~ 
                  ${new Date(endAt).toLocaleDateString()}`
                }
              </div>
            </Card.Body>
          </Card>
        </ActivityInfoCard>
      </section>
    );
  }
}
