import { updateState } from '@libs';

const initialState = {
  inquiryData: {
    vehicleType: '01',
    vinCode: '',
    // vinCode: '83746593748273468',
    carBrand: '',
    photos: [], // 要么 [] 要么 得符合antd的数据结构
    isInsurance: 0,
    insuranceCaseNo: '',
    partEnquiries: [],
    isInvoiceRequired: 0,
    invoice: {
      isInvoiceRequired: 0,
      id: -1,
      invoiceType: 1,
      invoiceCompanyName: '佛山金利',
    },
    vendorType: 1,
    vendorCompanyList: [],
  },
};

export default function handleInquiry(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_INQUIRY_DATA':
      return updateState(state, action, 'inquiryData');
    default:
      return state;
  }
}
