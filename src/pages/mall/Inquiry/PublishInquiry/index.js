import React, { Component } from 'react';
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
} from 'antd';

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class PublishInquiry extends Component {
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
        this.setState({
          submitLoading: true,
        });
      }
    });
  };

  render() {
    const { submitLoading } = this.state;
    const { form } = this.props;
    const { getFieldDecorator, getFieldsError } = form;

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item wrapperCol={{ offset: 3 }}>
          <h3>车辆信息</h3>
        </Form.Item>
        <Form.Item label="车辆类型">
          {getFieldDecorator('radio-group', {
            rules: [{ required: true, message: '请选择车辆类型!' }],
            initialValue: '01',
          })(
            <Radio.Group>
              <Radio value="01">乘用车</Radio>
              <Radio value="02">商用车</Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 3 }}>
          <h3>其它信息</h3>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button
            loading={submitLoading}
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            发布询价
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'publish_inquiry' })(PublishInquiry);
