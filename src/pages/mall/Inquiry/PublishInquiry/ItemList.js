import React, { Component } from 'react';
import {
  Table,
  Divider,
  Tag,
} from 'antd';
import './index.less';
import UploadImage from '@components/UploadImage';
import PicturesWall from '@components/PicturesWall';
import PartSearchInput from './PartSearchInput';
import OeInput from './OeInput';
import QualitiesSelector from './QualitiesSelector';

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.lastFetchId = 0;
    this.columns = [
      {
        title: '序号',
        dataIndex: 'id',
        render: (text, record, index) => <span>{index + 1}</span>,
      },
      {
        title: (
          <span>
            <span style={{ color: 'red', marginRight: 5 }}>*</span>
            <span>配件需求</span>
          </span>
        ),
        dataIndex: 'standardPartName',
        render: (text, record, index) => (
          <PartSearchInput
            standardPartName={record.standardPartName}
            onItemChange={changedObj => this.onItemChange(changedObj, index)}
          />
        ),
      },
      {
        title: '原厂零件号',
        dataIndex: 'oeCode',
        render: (text, record, index) => (
          <OeInput
            oeCode={record.oeCode}
            onItemChange={changedObj => this.onItemChange(changedObj, index)}
          />
        ),
      },
      {
        title: (
          <span>
            <span style={{ color: 'red', marginRight: 5 }}>*</span>
            <span>配件品质</span>
          </span>
        ),
        dataIndex: 'oldNewMatchupList',
        render: (text, record, index) => (
          <QualitiesSelector
            oldNewMatchupList={record.oldNewMatchupList}
            onItemChange={changedObj => this.onItemChange(changedObj, index)}
          />
        ),
      },
      {
        title: '配件图片',
        dataIndex: 'photo',
        render: (text, record, index) => (
          <div className="item-upload-image">
            <PicturesWall
              files={record.photo ? [record.photo] : []}
              onChange={(fileList = ['']) => this.onItemChange({ photo: fileList[0] }, index)}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              limit={1}
            />
          </div>
        ),
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>删除</a>
          </span>
        ),
      },
    ];
  }

  onItemChange = (changedObj, index) => {
    const { onItemListChange = () => {} } = this.props;
    onItemListChange(changedObj, index);
  }

  render() {
    const { itemList } = this.props;

    return (
      <Table
        columns={this.columns}
        dataSource={itemList}
        title={
          () => (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* <a>Excel批量导入</a> */}
              <a></a>
              <a>清空配件信息</a>
            </div>
          )
        }
        footer={() => 'Footer'}
      />
    );
  }
}
