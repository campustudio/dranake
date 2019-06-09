import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Accordion, List } from 'antd-mobile';
import apis from '@apis';
import SpinSkeletonContainer from '@components/SpinSkeletonContainer';
import AccordionItems from './AccordionItems';

class AccordionPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsGot: null,
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents = async () => {
    const eventsGot = await apis.getEvents({
      token: localStorage.getItem('token'),
    });
    console.log('eventsGot: ', eventsGot);
    this.setState({
      eventsGot
    });
  }

  onChange = (key) => {
    console.log(key);
  }

  checkActivity = () => {
    this.props.history.push('/main/award-activity');
  }

  inviteFriends = () => {
    console.log('inviteFriends: ');
  }

  render() {
    const { eventsGot } = this.state;

    return (
      <div style={{ padding: '0px 15px' }}>
        <div
          onClick={this.inviteFriends}
          onKeyPress={this.inviteFriends}
          style={{ textDecoration: 'underline', textAlign: 'right' }}
        >
          邀请好友参加
        </div>
        <div style={{ height: 20 }} />
        <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header="拓展管理 - 永久锁粉">
            <List className="my-list">
              <List.Item>
                <Link to="/main/invited-users" style={{ fontSize: 12 }}>
                  查看受邀用户名单
                </Link>
              </List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="推广运营活动" className="pad">
            <List.Item>
              <SpinSkeletonContainer dataSrc={eventsGot}>
                <AccordionItems items={eventsGot} />
              </SpinSkeletonContainer>
            </List.Item>
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}

export default withRouter(AccordionPanel);
