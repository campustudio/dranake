import React, { Component } from 'react';
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';

const { Option } = Select;

export default class PartSearchInput extends Component {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.fetchUser = debounce(this.fetchUser, 800);
  }

  state = {
    data: [],
    fetching: false,
  };

  fetchUser = (value) => {
    console.log('fetching user', value);
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ data: [], fetching: true });
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then((body) => {
        if (fetchId !== this.lastFetchId) {
          // for fetch callback order
          return;
        }
        const data = body.results.map(user => ({
          text: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }));
        this.setState({ data, fetching: false });
      });
  };

  handleChange = (standardPartName) => {
    this.setState({
      fetching: false,
      data: [],
    }, () => {
      const { onItemChange = () => {} } = this.props;
      onItemChange({
        standardPartName,
      });
    });
  };

  render() {
    const { fetching, data } = this.state;
    const { standardPartName } = this.props;

    return (
      <section>
        <Select
          value={standardPartName}
          showSearch
          showArrow={false}
          placeholder="请输入配件名称"
          notFoundContent={fetching ? <Spin size="small" /> : null}
          filterOption={false}
          onSearch={this.fetchUser}
          onChange={this.handleChange}
          style={{ width: '100%' }}
        >
          {data.map(d => (
            <Option key={d.value}>{d.text}</Option>
          ))}
        </Select>
        {
          standardPartName === '' && <span style={{ color: 'red' }}>请输入配件名称！</span>
        }
      </section>
    );
  }
}
