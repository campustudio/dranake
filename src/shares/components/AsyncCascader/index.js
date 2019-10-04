import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import CascaderPlate from './CascaderPlate';

const testUrl = '//jsonplaceholder.typicode.com/posts/';

export default class AsyncCascader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: null,
      finalVal: [],
    };
    this.targetOption = null;
  }

  componentDidMount = async () => {
    const { type, fieldNames = {} } = this.props;
    const { value = 'value' } = fieldNames;
    const resOptions = await this.getOptions();

    if (type === 'edit') {
      const currentVal = await this.getValue();
      this.setState({
        finalVal: currentVal || [],
      });
      resOptions.forEach((ele) => {
        if (ele[value] === currentVal[0]) {
          this.targetOption = ele;
        }
      });
      if (this.targetOption) {
        this.targetOption = await this.addChildren(this.targetOption);
      }
      // console.log('type is edit => this.targetOption: ', this.targetOption);
    } else {
      console.log('this.targetOption: ', this.targetOption);
    }

    this.setState({
      options: resOptions || [],
    });
  }

  getOptions = async () => {
    try {
      const { optionsUrl } = this.props;
      const apiRes = await fetch(optionsUrl);
      const apiOptions = await apiRes.json() || [];
      const resOptions = apiOptions.map((ele) => {
        return { ...ele, isLeaf: false };
      });
      return resOptions;
    } catch (err) {
      message.error(err.toString());
      return [];
    }
  }

  getChildren = async () => {
    try {
      const { childrenUrl } = this.props;
      const apiRes = await fetch(childrenUrl);
      const apiChildren = await apiRes.json() || [];
      return apiChildren;
    } catch (err) {
      message.error(err.toString());
      return [];
    }
  }

  getValue = async () => {
    try {
      const { valueUrl } = this.props;
      const apiRes = await fetch(valueUrl);
      const apiValue = await apiRes.json() || [];
      return apiValue;
    } catch (err) {
      message.error(err.toString());
      return [];
    }
  }

  onCascaderChange = ({ value, selectedOptions }) => {
    const { onCascaderChange } = this.props;
    onCascaderChange({
      value,
      selectedOptions,
    });
    this.setState({
      finalVal: value,
    });
  }

  asyncLoad = async (tarOpt) => {
    const { options } = this.state;
    tarOpt = await this.addChildren(tarOpt);
    this.setState({
      options
    });
  }

  addChildren = async (tarOpt) => {
    tarOpt.loading = true;
    const resChildren = await this.getChildren();
    tarOpt.loading = false;
    tarOpt.children = resChildren || [];

    return tarOpt;
  }

  render() {
    const { fieldNames, type } = this.props;
    const { options, finalVal } = this.state;

    return (
      <div>
        {
          options
          && (
            <CascaderPlate
              fieldNames={fieldNames}
              options={options}
              onCascaderChange={this.onCascaderChange}
              asyncLoad={this.asyncLoad}
              type={type}
              matchOption={this.targetOption}
              value={finalVal}
            />
          )
        }
      </div>
    );
  }
}

AsyncCascader.propTypes = {
  fieldNames: PropTypes.object.isRequired,
  optionsUrl: PropTypes.string,
  onCascaderChange: PropTypes.func,
  childrenUrl: PropTypes.string,
  type: PropTypes.string,
  valueUrl: PropTypes.string,
};

AsyncCascader.defaultProps = {
  optionsUrl: testUrl,
  onCascaderChange: () => {},
  childrenUrl: testUrl,
  type: 'add',
  valueUrl: testUrl,
};
