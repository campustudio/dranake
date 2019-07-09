import React, { Component } from 'react';
// import { Menu } from 'antd'
import { withRouter } from 'react-router-dom';
import './index.less';
import Tab from './Tab.js';
import logo from '@static/media/favicon.ico';

const LogoBar = class extends Component {
  render() {
    const {
      activeRoute = () => {},
    } = this.props;

    return (
      <div className="logo-bar">
        <section className="logo-bar-container">
          <span style={{ marginRight: 30 }}>
            <img src={logo} alt="logo" style={{ width: 40, margin: '0px 10px 0 0 ' }} />
            <h3 className="mr10px" style={{ color: '#fff' }}>车件儿</h3>
            <small className="white font13">让汽配采购省心、安心、放心</small>
          </span>
          <div className="tab-container">
            <span><Tab activeRoute={activeRoute} route="/main/shopping" text="首&nbsp;&nbsp;页" /></span>
            <span><Tab activeRoute={activeRoute} route="/main" text="会员中心" /></span>
            <span><Tab activeRoute={activeRoute} route="/main/shopping" text="发布询价" /></span>
            <span><Tab activeRoute={activeRoute} route="/main/shopping" text="查看询价" /></span>
            <span onClick={() => activeRoute('/main/shopping')} style={{ color: '#fff' }} className="font16">订单跟踪</span>
          </div>
        </section>
      </div>
    );
  }
};

export default withRouter(LogoBar);
