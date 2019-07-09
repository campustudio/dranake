import React, { Component } from 'react';
import { connect } from 'react-redux';
import PicturesWall from '@components/PicturesWall';
import AsyncCascader from '@components/AsyncCascader';

const testUrl = '//jsonplaceholder.typicode.com/posts/';

const jph = testUrl;
const optionsUrl = testUrl;
const childrenUrl = testUrl;
const valueUrl = testUrl;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // files: [],
      files: [
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      ],
    };
  }

  transformFiles2PureUrl = (files) => {
    let pureUrlArr = [];
    if (files && files instanceof Array) {
      pureUrlArr = files.map((ele) => {
        if (ele.url) {
          return ele.url || '';
        }
        if (ele.response && ele.response.url) { // dynamic
          return ele.response.url || '';
        }
        return '';
      });
    }

    return pureUrlArr;
  }

  onFilesChange = (files) => {
    console.log('filtered files: ', files);
    this.setState({
      files
    });
  }

  onCascaderChange = ({ value }) => {
    console.log('onCascaderChange value: ', value);
  }

  render() {
    const { files } = this.state;
    console.log('render files: ', files);

    return (
      <div>
        <PicturesWall
          action={jph}
          onFilesChange={this.onFilesChange}
          transformFiles2PureUrl={this.transformFiles2PureUrl}
          isMultiple
        />
        <AsyncCascader
          fieldNames={{ label: 'id', value: 'id' }}
          optionsUrl={optionsUrl}
          childrenUrl={childrenUrl}
          valueUrl={valueUrl}
          type="edit"
        />
      </div>
    );
  }
}
