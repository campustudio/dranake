import React, { Component } from 'react';
import { connect } from 'react-redux';
import PicturesWall from '@components/PicturesWall';
import AsyncCascader from '@components/AsyncCascader';

const jsonph = '//jsonplaceholder.typicode.com/posts/';
let uid = -1; // 设置负数防止与 antd 内部的重合
function genImgUid() {
  uid--;
  return uid;
}
function transformPureUrl2Files(urls = []) {
  return urls.map(x => ({
    status: 'done',
    uid: genImgUid(),
    url: x,
  }));
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [], // 要么 [] 要么 得符合antd的数据结构
    };
  }

  componentDidMount() {
    this.setState({
      files: transformPureUrl2Files([
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      ]),
    });
  }

  onChange = (files) => {
    this.setState({
      files
    });
  }

  onCascaderChange = ({ value }) => {
    console.log('onCascaderChange value: ', value);
  }

  render() {
    const { files } = this.state;

    return (
      <div>
        <PicturesWall
          files={files}
          onChange={this.onChange}
          action={jsonph}
        />
        <AsyncCascader
          fieldNames={{ label: 'id', value: 'id' }}
          optionsUrl={jsonph}
          childrenUrl={jsonph}
          valueUrl={jsonph}
          type="edit"
        />
      </div>
    );
  }
}
