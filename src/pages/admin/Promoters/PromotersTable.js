import React, { Component } from 'react';
import { Table, Divider, Tag, Card } from 'antd';
// import Avatar from '@h5components/Avatar';
import logo from '@static/media/favicon.ico';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

export default class PromotersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.columns = [
      {
        title: '微信头像',
        dataIndex: 'avatar',
        render: (text, record) => (
          <span>
            {/* <Avatar size={30} src={logo} margin={0} /> */}
          </span>
        ),
      },
      {
        title: '微信昵称',
        dataIndex: 'name',
      },
      {
        title: '微信ID',
        dataIndex: 'age',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <a href="javascript:;">禁用</a>
        ),
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
