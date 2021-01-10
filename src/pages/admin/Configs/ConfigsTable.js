import React, { Component } from 'react';
import { Table, Divider, Modal, Card } from 'antd';
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

export default class ConfigsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.columns = [
      {
        title: '开始日期',
        dataIndex: 'startAt',
        render: (text, record) => (
          <span>
            开始日期
          </span>
        ),
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javascript:;">编辑</a>
            <Divider type="vertical" />
            <a href="javascript:;">删除</a>
          </span>
        ),
      },
    ];
  }

  popupModal = () => {
    this.setState({
      visible: true,
    });
  }

  onCancel = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Card>
          <div onClick={this.popupModal} onKeyPress={this.popupModal} style={{ marginBottom: 15 }}>
            <a href="javascript:;">+新建活动</a>
          </div>
          <Table columns={this.columns} dataSource={data} pagination={false} />
        </Card>
        <Modal
          title="新建活动"
          visible={visible}
          onCancel={this.onCancel}
        >
          贡献值奖励配置：
        </Modal>
      </div>
    );
  }
}
