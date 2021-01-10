import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
// import Avatar from '@h5components/Avatar';
import '../h5c.less';

const subscriptionPackageMapper = {
  0: '免费用户',
  1: '一周会员',
  2: '一月会员',
  3: '三年会员',
};

const InvitedUserCard = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      size = 'lg', avatarUrl = '', nickName = '', createdAt = 1548847409,
      subscriptionPackage = 2,
    } = this.props;

    return (
      <WingBlank size={size}>
        <WhiteSpace size={size} />
        <Card>
          <Card.Body>
            <div className="flex jcfs aic">
              <div style={{ marginRight: 10 }}>
                {/* <Avatar size={30} src={avatarUrl} /> */}
                </div>
              <div>
                <span>{`微信昵称：${nickName}`}</span>
                <div>{`会员类型：${subscriptionPackageMapper[subscriptionPackage]}`}</div>
                <div>{`注册日期：${new Date(createdAt * 1000).toLocaleDateString()}`}</div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <WhiteSpace size={size} />
      </WingBlank>
    );
  }
};

export default withRouter(InvitedUserCard);
