import React, { Component } from 'react';
import { Table, Divider, Tag, Card } from 'antd';
// import Avatar from '@h5components/Avatar';
import logo from '@static/media/favicon.ico';

const data = [
  {
    key: '1',
    pname: 'John Brown',
    pid: 32,
    pintro: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    pname: 'Jim Green',
    pid: 42,
    pintro: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    pname: 'Joe Black',
    pid: 32,
    pintro: 'Sidney No. 1 Lake Park',
  },
];

export default class ThirdProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.columns = [
      {
        title: '产品ID',
        dataIndex: 'pid',
        render: (text, record) => (
          <span>
            {/* <Avatar size={30} src={logo} margin={0} /> */}
          </span>
        ),
      },
      {
        title: '产品TITLE',
        dataIndex: 'pname',
      },
      {
        title: '产品简介',
        dataIndex: 'pintro',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javascript:;">禁售</a>
            <Divider type="vertical" />
            <a href="javascript:;">取消禁售</a>
          </span>
        ),
      },
      {
        title: '产品图片',
        dataIndex: 'pimages',
      },
      {
        title: '产品视频',
        dataIndex: 'pvedios',
      },
    ];
  }

  render() {
    return (
      <Card>
        <Table columns={this.columns} dataSource={data} pagination={false} />
      </Card>
    );
  }
}
