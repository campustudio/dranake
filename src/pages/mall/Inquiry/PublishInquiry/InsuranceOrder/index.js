import React, { Component } from 'react';
import { Form, Radio, Input } from 'antd';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};

class InsuranceOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received form values: ', values);
      }
    });
  };

  handleChange = (changedObj) => {
    const { onInsuranceInfoChange = () => {} } = this.props;
    onInsuranceInfoChange(changedObj);
  };

  render() {
    const { form, insuranceInfoObj = {} } = this.props;
    const { isInsurance = 0, insuranceCaseNo } = insuranceInfoObj;
    const { getFieldDecorator } = form;

    return (
      <section>
        <Radio.Group value={isInsurance} onChange={e => this.handleChange({ isInsurance: e.target.value })}>
          <Radio value={0}>否</Radio>
          <Radio value={1}>是</Radio>
        </Radio.Group>
        {
          isInsurance === 1
          && (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <Form.Item label="事故车类型">
                {getFieldDecorator('insuranceCaseNoPart1', {
                  rules: [{ required: true }],
                })(
                  <Input
                    style={{ width: 80 }}
                    placeholder="前三位"
                    onChange={this.handleChange}
                    maxLength="3"
                  />,
                )}
              </Form.Item>
              <Form.Item label="车牌号">
                {getFieldDecorator('insuranceCaseNoPart1', {
                  rules: [{ required: true }],
                })(
                  <Input
                    style={{ width: 80 }}
                    placeholder="前三位"
                    onChange={this.handleChange}
                    maxLength="3"
                  />,
                )}
              </Form.Item>
              <Form.Item label="案件号">
                {getFieldDecorator('insuranceCaseNoPart1', {
                  rules: [{ required: true }],
                })(
                  <Input
                    style={{ width: 80 }}
                    placeholder="前三位"
                    onChange={this.handleChange}
                    maxLength="3"
                  />,
                )}
                {getFieldDecorator('insuranceCaseNoPart3', {
                  rules: [{ required: true }],
                })(
                  <Input
                    style={{ width: 150 }}
                    placeholder="后八位"
                    onChange={this.handleChange}
                    maxLength="8"
                  />,
                )}
              </Form.Item>
              <Form.Item label="保险公司">
                {getFieldDecorator('insuranceCaseNoPart1', {
                  rules: [{ required: true }],
                })(
                  <Input
                    style={{ width: 80 }}
                    placeholder="前三位"
                    onChange={this.handleChange}
                    maxLength="3"
                  />,
                )}
              </Form.Item>
            </Form>
          )
        }
      </section>
    );
  }
}

export default Form.create({ name: 'insurance_order' })(InsuranceOrder);
