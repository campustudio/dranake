import React from 'react';
import './index.less';
import { Icon } from 'antd';
import logo from '@static/media/favicon.ico';

const links = [{
  key: 'logo',
  title: <img src={logo} alt="logo" width="25" />,
  href: 'www.baidu.com',
  blankTarget: true,
}];

const copyright = (
  <div>
    copyright
    {' '}
    <Icon type="copyright" />
    {' '}
    2019 出品 By 车件儿 width
    {' '}
    <Icon type="heart" theme="twoTone" twoToneColor="#f73f51" />
  </div>
);

const Footer = () => (
  <div className="footer-container">
    GlobalFooter
  </div>
);

export default Footer;
