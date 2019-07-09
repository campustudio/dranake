import React, { Component } from 'react';
import CardEntries from '@components/CardEntries';
import './index.less';

const entries = [
  { content: '项目推广人管理', path: '/main/promoters' },
  { content: '活动配置', path: '/main/configs' },
  { content: '模块3', path: '/main/promoters' },
  { content: '模块4', path: '/main/promoters' },
  { content: '模块5', path: '/main/promoters' },
  { content: '模块6', path: '/main/promoters' },
];

export default class PromotersManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <CardEntries entries={entries} />
    );
  }
}
