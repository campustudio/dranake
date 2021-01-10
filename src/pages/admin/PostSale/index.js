import React, { Component } from 'react';
import { Table, Divider, Modal, Card } from 'antd';
import logo from '@static/media/favicon.ico';

const data = [
  {
    key: '1',
    name: 'John Brown',
    caseId: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    caseId: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    caseId: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

export default class PostSale extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.columns = [
      {
        title: '案件ID',
        dataIndex: 'caseId',
      },
      {
        title: '创建时间',
        dataIndex: 'createAt',
        render: (text, record) => (
          <span>
            创建时间
          </span>
        ),
      },
      {
        title: '介入时间',
        dataIndex: 'createAt',
        render: (text, record) => (
          <span>
            介入时间
          </span>
        ),
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javascript:;" onClick={this.popupModal}>查看</a>
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
          title="C端用户"
          visible={visible}
          onCancel={this.onCancel}
        >
          联系电话：
        </Modal>
      </div>
    );
  }
}
