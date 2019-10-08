import React, { Component } from 'react';
import { Input } from 'antd';

export default class OeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.oeCode = this.props.oeCode || '';
  }

  handleChange = (e) => {
    console.log('e.target.value: ', e.target.value);

    const { onItemChange = () => {} } = this.props;
    onItemChange({
      oeCode: e.target.value,
    });
  };

  render() {
    const { oeCode } = this.props;

    return (
      <section>
        <Input
          disabled={this.oeCode !== ''}
          value={oeCode}
          placeholder="请输入原厂零件号"
          onChange={this.handleChange}
        />
      </section>
    );
  }
}
