import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import { Switch } from 'antd';
import { dispatchAction } from '@libs';

class Header extends Component {
  switchTaxType = (taxIncluded) => {
    console.log('switchTaxType taxIncluded: ', taxIncluded);
    const { dpSwitchTaxType = () => {} } = this.props;
    dpSwitchTaxType(taxIncluded);
  }

  render() {
    const { taxIncluded } = this.props;
    console.log('taxIncluded: ', taxIncluded);

    return (
      <div className="pc-header-container">
        HEADER
        <Switch checked={taxIncluded} onChange={this.switchTaxType} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
