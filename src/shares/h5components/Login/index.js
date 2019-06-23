import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Icon, Toast } from 'antd-mobile';
import PhoneInput from '@h5components/PhoneInput';
import NumberInput from '@h5components/NumberInput';
import Avatar from '@h5components/Avatar';
import '../h5c.less';
import './index.less';
import logo from '@static/media/favicon.ico';
import intro from '@static/media/nyc.jpeg';
import apis from '@apis';

const codePic = 'https://miaowuhui-01-1257236255.cos.ap-shanghai.myqcloud.com/wx_images/verification_code.jpg';

const LoginPanel = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneError: false,
      codeError: false,
      phoneValue: '',
      codeValue: '',
      guiderVisible: false,
    };
  }

  onPhoneChange = (phoneValue) => {
    console.log('onPhoneChange phoneValue: ', phoneValue.replace(/\s+/g, ''));
    this.setState({
      phoneValue: phoneValue.replace(/\s+/g, ''),
    });
  }

  onCodeChange = (codeValue) => {
    console.log('onCodeChange codeValue: ', codeValue);
    this.setState({
      codeValue,
    });
  }

  showCodeGuider = () => {
    console.log('showCodeGuider: ');
    this.setState({
      guiderVisible: true,
    });
  }

  hideCodeGuider = () => {
    this.setState({
      guiderVisible: false,
    });
  }

  onSubmit = async () => {
    this.setState({
      loading: true,
    });
    const { phoneValue = '', codeValue = '' } = this.state;

    const loginedObj = await apis.login({
      phoneValue,
      codeValue,
    });
    console.log('loginedObj: ', loginedObj);

    if (loginedObj.status === 0) {
      localStorage.setItem('mobile', phoneValue);
      localStorage.setItem('token', loginedObj.meowToken);
      this.setState({
        loading: false,
      });
      Toast.success('登录成功', 1);
      this.props.history.push('/main');
    } else {
      Toast.fail('登录失败，请确认手机号和校验码', 1);
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { loading, guiderVisible, phoneValue = '', codeValue = '' } = this.state;

    return (
      <div className="login-container">
        {
          guiderVisible
          && (
            <section>
              <div style={{ position: 'fixed', right: 20, top: 20, zIndex: 100 }}>
                <Icon onClick={this.hideCodeGuider} type="cross" color="#fff" />
              </div>
              <div className="code-intro-container">
                <img src={codePic} alt="intro" style={{ height: '80%' }} />
              </div>
            </section>
          )
        }
        <section>
          <div className="updown-space">
            <Avatar size={80} src={logo} />
          </div>
          <div className="updown-space title">
            <div>快成团推广项目</div>
            <div>管理系统</div>
          </div>
          <div className="updown-space">
            <PhoneInput onChange={this.onPhoneChange} />
          </div>
          <div className="white-f">*需要与登录快成团小程序的手机号码一致</div>
          <div className="updown-space">
            <NumberInput maxLength={6} placeholder="请输入6位校验码" label="校验码" onChange={this.onCodeChange} />
          </div>
          <div className="white-f">
            *校验码获取方式？
            <span onClick={this.showCodeGuider} style={{ textDecoration: 'underline' }}>戳 点此查看</span>
          </div>
          <div className="updown-space">
            <Button
              type="primary"
              onClick={this.onSubmit}
              loading={loading}
              disabled={!phoneValue || !codeValue}
            >
              登录
            </Button>
          </div>
        </section>
      </div>
    );
  }
};

export default withRouter(LoginPanel);
