import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Upload, Icon, Modal, message,
} from 'antd';

/**
 * Based on antd Upload component, basic props type details can be refered from official docs:
 * https://ant.design/components/upload-cn/
 *
 * files: PropTypes.array, files accepted from/sent to parent component;
 * onChange: PropTypes.func.isRequired, change event for uploading;
 * limitSize: PropTypes.number, limit size for uploaded image, default 10M;
 */
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default class PicturesWall extends Component {
  static propTypes = {
    files: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    limitSize: PropTypes.number,
    action: PropTypes.string.isRequired,
  }

  static defaultProps = {
    limitSize: 10,
  }

  state = {
    previewVisible: false,
    previewImage: '',
  }

  beforeUploadImage = (file) => {
    const { limitSize } = this.props;

    return new Promise((resolve, reject) => {
      const isValidSize = file.size < limitSize * 1024 * 1024;

      if (!isValidSize) {
        message.warning(`图片应小于${limitSize}M，请重新点击上传`);
        reject(file);
      }

      resolve(file);
    });
  }

  handleFileListChange = ({ fileList, event }) => {
    console.log('handleFileListChange event: ', event);

    const { onChange = () => {} } = this.props;
    onChange(
      fileList.filter((ele) => {
        if (ele.status === 'error') {
          message.error(`上传图片 ${ele.name} 失败，请重试`);
        }
        return ele.status !== 'error';
      })
    );
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });

    // this.setState({
    //   previewImage: file.url || file.thumbUrl,
    //   previewVisible: true,
    // });
  }

  render() {
    const { previewVisible, previewImage } = this.state;
    const { files = [], action = '' } = this.props;
    const props = {
      listType: 'picture-card',
      multiple: true,
      fileList: files,
      accept: 'image/png,image/jpg,image/jpeg',
      onPreview: this.handlePreview,
      onChange: this.handleFileListChange,
      action,
      beforeUpload: this.beforeUploadImage,
    };

    console.log('render files: ', files);

    return (
      <Fragment>
        <Upload {...props}>
          {
            files.length >= 3
              ? null
              : (
                <div>
                  <Icon type="plus" />
                  <div className="ant-upload-text">上传图片</div>
                </div>
              )
          }
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="picsw" src={previewImage} style={{ width: '100%' }} />
        </Modal>
      </Fragment>
    );
  }
}
