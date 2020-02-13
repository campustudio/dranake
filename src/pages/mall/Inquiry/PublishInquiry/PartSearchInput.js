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

  componentDidMount() {
  }

  fetchUser = (value) => {
    console.log('fetching user', value);
    if (value) {
      const { onItemChange = () => {} } = this.props;
      onItemChange({
        standardPartName: value,
      });

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
    }
  };

  handleChange = (standardPartName) => {
    console.log('handleChange: ');
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

  onFocus = () => {
    console.log('onFocus: ');
    const a1 = document.getElementById('partsearcher0');
    console.log('a1: ', a1);
    const b1 = a1.getElementsByClassName('ant-select-search__field');
    // b1[0].setAttribute('onblur', "alert('99')");
    // b1[0].blur();


    // const c1 = a1.firstChild;
    // const cl1 = c1.classList;
    // cl1.remove('ant-select-focused');
    // cl1.remove('ant-select-open');

    // const d1 = c1.firstChild;
    // d1.setAttribute('aria-expanded', false);
    // d1.blur();
  }

  render() {
    const { fetching, data } = this.state;
    const { standardPartName, index } = this.props;

    return (
      <section id={`partsearcher${index}`}>
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
          onFocus={this.onFocus}
          autoClearSearchValue={false}
          defaultActiveFirstOption={false}
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
