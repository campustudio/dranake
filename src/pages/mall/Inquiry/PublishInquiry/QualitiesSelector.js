import React, { Component } from 'react';
import { Select } from 'antd';

const { Option } = Select;
const qualities = [
  { label: '原厂件', oldNewMatchupList: 2 },
  { label: 'NSF认证件', oldNewMatchupList: 3 },
  { label: '再制造件', oldNewMatchupList: 5 },
  { label: '售后件', oldNewMatchupList: 6 },
];

export default class QualitiesSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange = (oldNewMatchupList) => {
    const { onItemChange = () => {} } = this.props;
    onItemChange({
      oldNewMatchupList,
    });
  };

  render() {
    const { oldNewMatchupList } = this.props;

    return (
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Please select"
        onChange={this.handleChange}
        value={oldNewMatchupList}
      >
        {
          qualities.map(q => (
            <Option key={q.oldNewMatchupList} value={q.oldNewMatchupList}>{q.label}</Option>
          ))
        }
      </Select>
    );
  }
}
