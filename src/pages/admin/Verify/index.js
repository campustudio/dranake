import React, { Component } from 'react';
import { Table, Divider, Modal, Card } from 'antd';
import Avatar from '@h5components/Avatar';
import logo from '@static/media/favicon.ico';

const data = [
  {
    applyUserId: '1',
    applyUsername: 'John Brown',
    applyAmount: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    applyUserId: '2',
    applyUsername: 'Jim Green',
    applyAmount: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    applyUserId: '3',
    applyUsername: 'Joe Black',
    applyAmount: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

export default class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.columns = [
      {
        title: '申请ID',
        dataIndex: 'applyId',
        render: (text, record) => (
          <span>
            申请时间
          </span>
        ),
      },
      {
        title: '申请时间',
        dataIndex: 'startAt',
      },
      {
        title: '申请用户ID',
        dataIndex: 'applyUserId',
      },
      {
        title: '申请用户昵称',
        dataIndex: 'applyUsername',
      },
      {
        title: '申请金额',
        dataIndex: 'applyAmount',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javascript:;">同意</a>
            <Divider type="vertical" />
            <a href="javascript:;">拒绝</a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={this.popupModal}>修改金额</a>
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
          <Table columns={this.columns} dataSource={data} pagination={false} />
        </Card>
        <Modal
          title="修改金额"
          visible={visible}
          onCancel={this.onCancel}
        >
          金额：
        </Modal>
      </div>
    );
  }
}
