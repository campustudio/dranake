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
  List,
  Typography,
  Table,
  Divider,
  Tag,
  Input,
} from 'antd';
import PicturesWall from '@components/PicturesWall';
import ItemList from './ItemList';
import VinParser from './VinParser';
import InsuranceOrder from './InsuranceOrder';
import Invoice from './Invoice';
import Vendors from './Vendors';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

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

const parts = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    standardPartName: '大灯1',
    // oeCode: '90897867567',
    oldNewMatchupList: [2],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    standardPartName: '大灯2',
    oeCode: '90893232322',
    oldNewMatchupList: [5, 3],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    standardPartName: '大灯3',
    // oeCode: '90892111221',
    oldNewMatchupList: [6],
  },
];

class PublishInquiry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [], // 要么 [] 要么 得符合antd的数据结构
      partList: [],
      vinCode: '',
      // vinCode: '83746593748273468',
      carInfoObj: {
        carBrand: '',
      },
      insuranceInfoObj: {
        isInsurance: 0,
        insuranceCaseNo: '',
      },
      invoiceInfoObj: {
        isInvoiceRequired: 0,
        id: -1,
        invoiceType: 1,
        invoiceCompanyName: '佛山金利',
      },
      vendorsInfoObj: {
        vendorType: 1,
        vendorCompanyList: [],
      },
    };
  }

  componentDidMount() {
    this.setState({
      partList: parts,
    });
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

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  onChange = (photos) => {
    this.setState({
      photos
    });
  }

  onItemListChange = (changedObj, index) => {
    console.log('changedObj: ', changedObj);
    console.log('index: ', index);

    const { partList } = this.state;
    partList[index] = {
      ...partList[index],
      ...changedObj,
    };

    this.setState({ partList });
  }

  onVinCodeChange = (vinCode) => {
    console.log('vinCode: ', vinCode);
    this.setState({ vinCode });
  }

  onCarInfoChange = (carInfoObj) => {
    this.setState({ carInfoObj });
  }

  onInsuranceInfoChange = (changedObj) => {
    console.log('changedObj: ', changedObj);
    const { insuranceInfoObj = {} } = this.state;
    this.setState({
      insuranceInfoObj: {
        ...insuranceInfoObj,
        ...changedObj,
      },
    });
  }
  
  onInvoiceInfoChange = (changedObj) => {
    const { invoiceInfoObj = {} } = this.state;
    this.setState({
      invoiceInfoObj: {
        ...invoiceInfoObj,
        ...changedObj,
      },
    });
  }

  onVendorsInfoChange = (changedObj) => {
    const { vendorsInfoObj = {} } = this.state;
    this.setState({
      vendorsInfoObj: {
        ...vendorsInfoObj,
        ...changedObj,
      },
    });
  }

  render() {
    const {
      submitLoading,
      photos,
      partList,
      vinCode,
      carInfoObj,
      insuranceInfoObj,
      invoiceInfoObj,
      vendorsInfoObj,
    } = this.state;
    const { form } = this.props;
    const { getFieldDecorator, getFieldsError } = form;

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item wrapperCol={{ offset: 3 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>车辆信息</h3>
            <a>草稿箱</a>
          </div>
        </Form.Item>
        <Form.Item label="车辆类型">
          {getFieldDecorator('vehicleType', {
            rules: [{ required: true, message: '请选择车辆类型!' }],
            initialValue: '01',
          })(
            <Radio.Group>
              <Radio value="01">乘用车</Radio>
              <Radio value="02">商用车</Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        <Form.Item label="VIN码">
          {getFieldDecorator('vinCode', {
            rules: [{ required: true }],
          })(
            <VinParser
              vehicleType="01"
              vinCode={vinCode}
              onVinCodeChange={this.onVinCodeChange}
              carInfoObj={carInfoObj}
              onCarInfoChange={this.onCarInfoChange}
            />,
          )}
        </Form.Item>
        <Form.Item label="车辆照片" extra="最多上传3张">
          {getFieldDecorator('photos', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <PicturesWall
              files={photos}
              onChange={this.onChange}
              action={jsonph}
            />,
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 3 }}>
          <h3>案件信息</h3>
        </Form.Item>
        <Form.Item label="保险单">
          {getFieldDecorator('isInsurance', {
            rules: [{ required: true }],
            initialValue: 0,
          })(
            <InsuranceOrder
              insuranceInfoObj={insuranceInfoObj}
              onInsuranceInfoChange={this.onInsuranceInfoChange}
            />
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 3 }}>
          <h3>配件信息</h3>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 3 }}>
          <ItemList
            itemList={partList}
            onItemListChange={this.onItemListChange}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 3 }}>
          <h3>其它要求</h3>
        </Form.Item>
        <Form.Item label="发票信息">
          {getFieldDecorator('isInvoiceRequired', {
            rules: [{ required: true }],
            initialValue: 0,
          })(
            <Invoice
              invoiceInfoObj={invoiceInfoObj}
              onInvoiceInfoChange={this.onInvoiceInfoChange}
            />
          )}
        </Form.Item>
        <Form.Item label="供应商">
          {getFieldDecorator('vendorType', {
            rules: [{ required: true }],
            initialValue: 1,
          })(
            <Vendors
              vendorsInfoObj={vendorsInfoObj}
              onVendorsInfoChange={this.onVendorsInfoChange}
            />
          )}
        </Form.Item>
        <Form.Item label="期望到货时间">
          {getFieldDecorator('expectedDay', {
            rules: [{ required: true }],
            initialValue: -1,
          })(
            <Select style={{ width: 200 }}>
              <Option value={-1}>不限</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 3 }}>
          <h3>联系方式</h3>
        </Form.Item>
        <Form.Item label="联系人">
          {getFieldDecorator('contactPerson', {
            initialValue: '',
          })(
            <Input
              style={{ width: 200 }}
              placeholder="请输入联系人"
            />
          )}
        </Form.Item>
        <Form.Item label="联系电话">
          {getFieldDecorator('contactPhone', {
            initialValue: '',
          })(
            <Input
              style={{ width: 200 }}
              placeholder="请输入电话"
            />
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 12 }}>
          <Button
            loading={submitLoading}
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
            type="primary"
          >
            发布询价
          </Button>
          <Button
            htmlType="submit"
            style={{ marginLeft: 20 }}
          >
            保存草稿
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'publish_inquiry' })(PublishInquiry);
