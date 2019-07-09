import React, { Component } from 'react';
import { Button, Divider } from 'antd'
import { withRouter } from 'react-router-dom';
import './index.less';
import TaxTypeSwitcher from '@modules/TaxTypeSwitcher';
import logo from '@static/media/favicon.ico';
import apis from '@apis';
import { Flex } from 'antd-mobile';

const NavHeader = class extends Component {
  logout = async () => {
    const logoutedObj = await apis.logout({
      token: localStorage.getItem('token'),
    });
    console.log('logoutedObj: ', logoutedObj);
    if (logoutedObj.status === 0) {
      this.props.history.push('/');
    }
  }

  render() {
    const {
    } = this.props;

    return (
      <header className="t-header">
        <div className="t-header-container">
          <section>
            <a className="mr10px" href="">收藏本站</a>
            <Divider type="vertical" />
            <img src={logo} alt="logo" style={{ width: 25, margin: '0px 10px' }} />
            <Button className="bg-orange mr10px" >车件儿客服</Button>
            <Divider type="vertical" />
            <span className="ml10px">
              显示含税价
              <TaxTypeSwitcher />
            </span>
          </section>
          <section>
            <span className="mr10px">{`账号：${localStorage.getItem('mobile') || ''}`}</span>
            <span>您好! 欢迎光临！</span>
            <span onClick={this.logout} onKeyPress={this.logout} style={{ margin: '0px 20px', color: 'blue', cursor: 'pointer' }}>
              退出
            </span>
            <Divider type="vertical" />
            <span className="mr10px cursor">购物车</span>
            <Divider type="vertical" />
            <span className="mr10px cursor">消息</span>
            <Divider type="vertical" />
            <span className="ml10px cursor">消息会员中心</span> 
          </section>
        </div>
      </header>
    );
  }
};

export default withRouter(NavHeader);
