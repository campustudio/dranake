import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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
import { dispatchAction } from '@libs';
import PicturesWall from '@components/PicturesWall';
import ItemList from './ItemList';
import VinParser from './VinParser';
import InsuranceOrder from './InsuranceOrder';
import Invoice from './Invoice';
import Vendors from './Vendors';
import DraftListDrawer from './DraftListDrawer';

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
    standardPartName: '大灯1',
    // oeCode: '90897867567',
    oldNewMatchupList: [2],
    standardPartId: -1,
    quantity: 1,
    remarks: '',
    photos: [],
    photo: '',
  },
  {
    key: '2',
    standardPartName: '大灯2',
    oeCode: '90893232322',
    oldNewMatchupList: [5, 3],
    standardPartId: -2,
    quantity: 1,
    remarks: '',
    photos: [],
    photo: '',
  },
  {
    key: '3',
    standardPartName: '大灯3',
    // oeCode: '90892111221',
    oldNewMatchupList: [6],
    standardPartId: -3,
    quantity: 1,
    remarks: '',
    photos: [],
    photo: '',
  },
];

class PublishInquiry extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.updateInquiryReducer({ partEnquiries: parts });
  }

  updateInquiryReducer = (dataObjToUpdate) => {
    const {
      inquiryData,
      dpUpdateInquiryData = () => {},
    } = this.props;
    dpUpdateInquiryData({
      ...inquiryData,
      ...dataObjToUpdate,
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

  onItemListChange = (changedObj, index) => {
    console.log('onItemListChange changedObj: ', changedObj);
    console.log('onItemListChange index: ', index);
    const { partEnquiries = [] } = this.props;

    if (changedObj) { // 配件属性变化 或 增加配件
      if (index || index === 0) { // 配件属性变化
        partEnquiries[index] = {
          ...partEnquiries[index],
          ...changedObj,
        };
        this.updateInquiryReducer({ partEnquiries });
      } else { // 增加配件
        this.updateInquiryReducer({ partEnquiries: changedObj });
      }
    } else if (index || index === 0) { // 删除配件操作
      this.updateInquiryReducer({ partEnquiries: partEnquiries.filter((p, i) => i !== index) });
    }
  }

  onCarInfoChange = (carInfoObj) => {
    const { inquiryData = {} } = this.props;
    this.updateInquiryReducer({
      ...inquiryData,
      ...carInfoObj,
    });
  }

  onInsuranceInfoChange = (changedObj) => {
    console.log('changedObj: ', changedObj);
    const { inquiryData = {} } = this.props;
    this.updateInquiryReducer({
      ...inquiryData,
      ...changedObj,
    });
  }

  onInvoiceInfoChange = (changedObj) => {
    console.log('onInvoiceInfoChange changedObj: ', changedObj);
    const { inquiryData = {} } = this.props;
    const { invoice = {} } = inquiryData;

    this.updateInquiryReducer({
      ...inquiryData,
      isInvoiceRequired: changedObj.isInvoiceRequired,
      invoice: {
        ...invoice,
        ...changedObj,
      },
    });
  }

  onVendorsInfoChange = (changedObj) => {
    const { inquiryData = {} } = this.props;
    this.updateInquiryReducer({
      ...inquiryData,
      ...changedObj,
    });
  }

  onDlDrawerChange = (changedObj = {}) => {
    const { dlDrawerVisible = false } = changedObj;
    if (!dlDrawerVisible) {
      this.setState({ dlDrawerVisible: false });
    }
  }

  render() {
    const {
      submitLoading,
      dlDrawerVisible,
    } = this.state;
    const {
      form,
      vehicleType,
      vinCode,
      carBrand,
      photos,
      isInsurance,
      insuranceCaseNo,
      partEnquiries = [],
      isInvoiceRequired,
      invoice,
      vendorType,
      vendorCompanyList,
    } = this.props;
    const { getFieldDecorator, getFieldsError } = form;

    return (
      <section>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item wrapperCol={{ offset: 3 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>车辆信息</h3>
              <a onClick={() => this.setState({ dlDrawerVisible: true })}>草稿箱</a>
            </div>
          </Form.Item>
          <Form.Item label="车辆类型">
            {getFieldDecorator('vehicleType', {
              rules: [{ required: true, message: '请选择车辆类型!' }],
              initialValue: vehicleType,
            })(
              <Radio.Group onChange={e => this.updateInquiryReducer({ vehicleType: e.target.value })}>
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
                onVinCodeChange={v => this.updateInquiryReducer({ vinCode: v })}
                carInfoObj={{ carBrand }}
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
                onChange={ps => this.updateInquiryReducer({ photos: ps })}
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
                insuranceInfoObj={{
                  isInsurance,
                  insuranceCaseNo,
                }}
                onInsuranceInfoChange={this.onInsuranceInfoChange}
              />
            )}
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 3 }}>
            <h3>配件信息</h3>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 3 }}>
            <ItemList
              itemList={partEnquiries}
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
                invoiceInfoObj={{
                  isInvoiceRequired,
                  invoice,
                }}
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
                vendorsInfoObj={{
                  vendorType,
                  vendorCompanyList,
                }}
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
        <DraftListDrawer dlDrawerVisible={dlDrawerVisible} onDlDrawerChange={this.onDlDrawerChange} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  inquiryData: state.inquiryReducer.inquiryData,
  ...state.inquiryReducer.inquiryData,
});

const mapDispatchToProps = dispatch => ({
  dpUpdateInquiryData: data => dispatch(dispatchAction('UPDATE_INQUIRY_DATA', data)),
});

export default Form.create(
  { name: 'publish_inquiry' }
)(connect(mapStateToProps, mapDispatchToProps)(withRouter(PublishInquiry)));
