import React, { Component } from 'react';
import { Radio, Input } from 'antd';

export default class Invoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange = (changedObj) => {
    const { onInvoiceInfoChange = () => {} } = this.props;
    onInvoiceInfoChange(changedObj);
  };

  showInvoiceInfoModal = () => {
    this.setState({ imVisible: true });
  }

  render() {
    const { invoiceInfoObj = {} } = this.props;
    const { isInvoiceRequired = 0, invoiceType, invoiceCompanyName } = invoiceInfoObj;
    const { imVisible } = this.state;

    return (
      <section>
        <Radio.Group value={isInvoiceRequired} onChange={e => this.handleChange({ isInvoiceRequired: e.target.value })}>
          <Radio value={0}>否</Radio>
          <Radio value={1}>是</Radio>
        </Radio.Group>
        {
          isInvoiceRequired === 1
          && (
            <section>
              { `${invoiceType}: ${invoiceCompanyName}` }
              <a onClick={this.showInvoiceInfoModal} style={{ marginLeft: 10 }}>修改</a>
            </section>
          )
        }
        {
          imVisible
            && (
              <section>
                弹出发票Modal
                <span onClick={() => this.setState({ imVisible: false })}>{`     关闭`}</span>
              </section>
            )
        }
      </section>
    );
  }
}
