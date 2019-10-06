import React, { Component } from 'react';
import { Radio, Input } from 'antd';

export default class Vendors extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange = (changedObj) => {
    const { onVendorsInfoChange = () => {} } = this.props;
    onVendorsInfoChange(changedObj);
  };

  showCommonsVsModal = () => {
    this.setState({ commonsVsVisible: true });
  }

  render() {
    const { vendorsInfoObj = {} } = this.props;
    const { vendorType = 1, invoiceType } = vendorsInfoObj;
    const { commonsVsVisible, selectedVsVisible } = this.state;

    return (
      <section>
        <Radio.Group value={vendorType} onChange={e => this.handleChange({ vendorType: e.target.value })}>
          <Radio value={1}>平台推荐</Radio>
          <Radio value={2}>常用供应商</Radio>
          <Radio value={3}>指定供应商</Radio>
        </Radio.Group>
      </section>
    );
  }
}
