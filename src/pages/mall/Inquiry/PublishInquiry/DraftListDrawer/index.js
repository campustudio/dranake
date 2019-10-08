import React, { Component } from 'react';
import { Drawer, Icon, List } from 'antd';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drafts: [],
    };
  }

  componentDidMount() {
    // api get drafts
    this.setState({
      drafts: [
        {
          id: 0,
          carDescription: '一汽奥迪',
        },
        {
          id: 1,
          carDescription: '上汽大众',
        }
      ]
    });
  }

  deleteDraft = (draftId) => {
    // api delete
    // then update reducer
  }

  onClose = () => {
    const { onDlDrawerChange = () => {} } = this.props;
    onDlDrawerChange({ dlDrawerVisible: false });
  };

  render() {
    const { dlDrawerVisible } = this.props;
    const { drafts, initLoading } = this.state;

    return (
      <div>
        <Drawer
          title={
            <div>
              草稿列表
              <Icon
                onClick={this.onClose}
                type="close"
                style={{float: 'right', paddingTop: 3 }} 
              />
            </div>
          }
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={dlDrawerVisible}
          width="500"
        >
          <List
            loading={initLoading}
            itemLayout="horizontal"
            dataSource={drafts}
            renderItem={item => (
              <List.Item
                actions={[
                  <a>编辑</a>,
                  <a>删除</a>
                ]}
              >
                <List.Item.Meta
                  title={`${item.id + 1}. ${item.carDescription}`}
                  description={`上次更新时间：${new Date().toLocaleString()}`}
                />
              </List.Item>
            )}
          />
        </Drawer>
      </div>
    );
  }
}