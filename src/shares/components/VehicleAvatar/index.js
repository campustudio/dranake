import React, { Component } from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default class VehicleAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [],
      manufacturers: [],
      seriesList: [],
      groups: [],
      models: [],
    };
  }

  componentDidMount() {
    this.getBrands();
  }

  getReqParams = () => {
    let params = '';
    const {
      brand,
      manufacturer,
      series,
    } = this.state;

    // params = `?brand=${brand}&manufacturer=${manufacturer}&series=${series}`;
    params = `${brand},${manufacturer},${series}`;

    return params;
  }

  getBrands = () => {
    // api logic
    setTimeout(() => {
      this.setState({ brands: ['奥迪', '宝马'] });
    }, 2000);
  }

  changeBrand = (brand) => {
    this.setState({
      brand,
      manufacturer: undefined,
      manufacturers: [],
      series: undefined,
      seriesList: [],
      group: undefined,
      groups: [],
      model: undefined,
      models: [],
    }, () => {
      this.getManufacturers();
    });
  }

  getManufacturers = () => {
    // api logic 1
    setTimeout(() => {
      this.getReqParams();
      this.setState({ manufacturers: ['奥迪厂家', '宝马厂家'] });
    }, 2000);
  }

  changeManufacturer = (manufacturer) => {
    this.setState({
      manufacturer,
      series: undefined,
      seriesList: [],
      group: undefined,
      groups: [],
      model: undefined,
      models: [],
    }, () => {
      this.getSeries();
    });
  }

  getSeries = () => {
    // api logic 2
    setTimeout(() => {
      this.getReqParams();
      this.setState({ seriesList: ['奥迪系列', '宝马系列'] });
    }, 2000);
  }

  changeSeries = (series) => {
    this.setState({
      series,
      group: undefined,
      groups: [],
      model: undefined,
      models: [],
    }, () => {
      this.getGroups();
    });
  }

  getGroups = () => {
    // api logic 3
    setTimeout(() => {
      this.getReqParams();
      this.setState({ groups: ['奥迪车组', '宝马车组'] });
    }, 2000);
  }

  changeGroup = (group) => {
    this.setState({
      group,
      model: undefined,
      models: [],
    }, () => {
      this.getModels();
    });
  }

  getModels = () => {
    // api logic 4
    setTimeout(() => {
      this.getReqParams();
      this.setState({ models: ['奥迪车型', '宝马车型'] });
    }, 2000);
  }

  render() {
    const {
      brands = [],
      brand,
      manufacturers = [],
      manufacturer,
      seriesList = [],
      series,
      groups = [],
      group,
      models = [],
      model,
    } = this.state;

    return (
      <div>
        <Select
          value={brand}
          onChange={this.changeBrand}
          style={{ width: 200 }}
          placeholder="请选择品牌"
        >
          {
            brands.map(br => (
              <Option key={br}>{br}</Option>
            ))
          }
        </Select>
        <Select
          value={manufacturer}
          onChange={this.changeManufacturer}
          style={{ width: 200 }}
          placeholder="请选择生产厂家"
        >
          {
            manufacturers.map(br => (
              <Option key={br}>{br}</Option>
            ))
          }
        </Select>
        <Select
          value={series}
          onChange={this.changeSeries}
          style={{ width: 200 }}
          placeholder="请选择车系"
        >
          {
            seriesList.map(br => (
              <Option key={br}>{br}</Option>
            ))
          }
        </Select>
        <Select
          value={group}
          onChange={this.changeGroup}
          style={{ width: 200 }}
          placeholder="请选择车组"
        >
          {
            groups.map(br => (
              <Option key={br}>{br}</Option>
            ))
          }
        </Select>
        <Select
          value={model}
          onChange={v => this.setState({ model: v })}
          style={{ width: 200 }}
          placeholder="请选择车型"
        >
          {
            models.map(br => (
              <Option key={br}>{br}</Option>
            ))
          }
        </Select>
      </div>
    );
  }
}
