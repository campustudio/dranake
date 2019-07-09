import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import { Switch } from 'antd';
import { dispatchAction } from '@libs';

class TaxTypeSwitcher extends Component {
  switchTaxType = (taxIncluded) => {
    console.log('switchTaxType taxIncluded: ', taxIncluded);
    const { dpSwitchTaxType = () => {} } = this.props;
    dpSwitchTaxType(taxIncluded);
  }

  render() {
    const { taxIncluded } = this.props;
    console.log('taxIncluded: ', taxIncluded);

    return (
      <div style={{ display: 'inline-block' }}>
        显示含税价
        <Switch checked={taxIncluded} onChange={this.switchTaxType} style={{ marginLeft: 5 }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  taxIncluded: state.priceReducer.taxIncluded,
});

const mapDispatchToProps = dispatch => ({
  dpSwitchTaxType: taxIncluded => dispatch(dispatchAction('SWITCH_TAX_TYPE', taxIncluded)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaxTypeSwitcher);
