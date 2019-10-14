import React, { Component } from 'react';
import {
  Input,
  Button,
} from 'antd';

export default class VinParser extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.parsedNum = 0;
  }

  handleChange = (e) => {
    const vinCode = e.target.value;
    const { onVinCodeChange = () => {} } = this.props;
    onVinCodeChange(vinCode);
    if (vinCode && vinCode.length === 17) {
      // this.parseVin(vinCode);
    }
  }

  parseVin = (vinCode) => {
    const { vehicleType } = this.props;
    if (vehicleType && vinCode) {
      if (vehicleType === '01') {
        this.setState({ parseLoading: true }, () => {
          this.parseCYC(vinCode);
        });
      }
      if (vehicleType === '02') {
        this.setState({ parseLoading: true }, () => {
          this.parseSYC(vinCode);
        });
      }
    }
  }

  parseCYC = (vinCode) => {
    this.setState({ parseLoading: false }, () => {
      this.parsedNum++;
      const { onCarInfoChange = () => {} } = this.props;
      onCarInfoChange({
        carBrand: '奔驰乘用车',
      });
    });
  }

  parseSYC = (vinCode) => {
    this.setState({ parseLoading: false }, () => {
      this.parsedNum++;
      const { onCarInfoChange = () => {} } = this.props;
      onCarInfoChange({
        carBrand: '奔驰商用车',
      });
    });
  }

  showCarInfoSelector = () => {
    this.setState({ cisVisible: true });
  }

  hiddenCarInfoSelector = () => {
    this.setState({ cisVisible: false });
  }

  render() {
    const { vinCode = '', carInfoObj } = this.props;
    const { carBrand } = carInfoObj;
    const { parseLoading, cisVisible } = this.state;
    const vcl = vinCode.length || 0;

    return (
      <section>
        <section>
          <Input
            style={{ width: 200, marginRight: 20 }}
            value={vinCode}
            placeholder="请输入VIN码"
            onChange={this.handleChange}
            maxLength={17}
          />
          <Button disabled={vcl !== 17} onClick={this.parseVin} loading={parseLoading}>解析</Button>
        </section>
        <section>
          <div><span style={{ color: 'red' }}>{vinCode.length}</span>/17</div>
          <div>
            {
              vcl === 0 && <span style={{ color: 'red' }}>请输入VIN码！</span>
            }
          </div>
          {
            this.parsedNum > 0 && (
              carBrand
                ? (
                  <span>
                    { carBrand }
                    <a onClick={this.showCarInfoSelector} style={{ marginLeft: 10 }}>修改</a>
                  </span>
                ) : (
                  <span>
                    VIN码解析失败
                    <a onClick={this.showCarInfoSelector} style={{ marginLeft: 10 }}>请选择车型</a>
                  </span>
                )
            )
          }
        </section>
        {
          cisVisible
            && (
              <section>
                弹出车架选择器
                <span onClick={this.hiddenCarInfoSelector}>{`     关闭`}</span>
              </section>
            )
        }
      </section>
    );
  }
}
