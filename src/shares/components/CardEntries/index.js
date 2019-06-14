import React, { Component } from 'react';
import CardEntry from '@h5components/CardEntry';
import './index.less';

export default class CardEntries extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { entries = [] } = this.props;

    return (
      <div className="content">
        <ul>
          {
            entries.map((ele, idx) => <CardEntry key={idx} content={ele.content} path={ele.path} />)
          }
        </ul>
      </div>
    );
  }
}
