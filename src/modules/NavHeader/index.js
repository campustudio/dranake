import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.less';
import { Button, Divider } from 'antd';
import TaxTypeSwitcher from '@modules/TaxTypeSwitcher';
import logo from '@static/media/favicon.ico';
import apis from '@apis';
import Bookmark from './Bookmark';
import ImageLink from '@components/ImageLink';

const NavHeader = class extends Component {
  logout = async () => {
    const logoutedObj = await apis.logout({
      token: localStorage.getItem('token'),
    });
    // console.log('logoutedObj: ', logoutedObj);
    if (logoutedObj.status === 0) {
      const { history = {} } = this.props;
      history.push('/');
    }
  }

  render() {
    return (
      <header className="nav-header">
        <div className="nav-header-container">
          <section>
            <Bookmark />
            <Divider type="vertical" />
            <ImageLink
              src={logo}
              width={25}
              height={25}
              title="车件儿客服"
            />
            <Divider type="vertical" />
            <TaxTypeSwitcher />
          </section>
          <section>
            <span className="mr10px">{`修理厂名称... ${localStorage.getItem('mobile') || '当前用户名'}`}</span>
            <span>您好! 欢迎光临！</span>
            <Divider type="vertical" />
            <span onClick={this.logout} onKeyPress={this.logout} style={{ color: 'blue', cursor: 'pointer' }}>
              [退出]
            </span>
            <Divider type="vertical" />
            <ImageLink
              src={logo}
              width={25}
              height={25}
              title="购物车"
              subTitle={12}
            />
            <Divider type="vertical" />
            <ImageLink
              src={logo}
              width={25}
              height={25}
              title="消息"
              subTitle={6}
            />
            <Divider type="vertical" />
            <ImageLink
              src={logo}
              width={25}
              height={25}
              title="会员中心"
            />
          </section>
        </div>
      </header>
    );
  }
};

export default withRouter(NavHeader);
