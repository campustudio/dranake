import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavHeader from '@modules/NavHeader';
import LogoBar from '@modules/LogoBar';
import Shopping from '../shopping'; // 商城子模块
import Admin from '../admin'; // 管理员子模块

/**
 * 主模块Main
 */
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemType: '/main/shopping',
    };
  }

  componentDidMount() {
    // console.log('this.props: ', this.props);
    const { location = {} } = this.props;

    // 服务于浏览器刷新操作
    this.setState({
      itemType: location.pathname,
    });
  }

  // 路由跳转
  activeRoute = (itemType) => {
    // console.log('itemType: ', itemType);
    const { history = {} } = this.props;
    this.setState({
      itemType,
    }, () => {
      history.push(itemType);
    });
  }

  // 参照当前路由更新当前需展示的子模块
  activeModule = (itemType) => {
    if (itemType.indexOf('/main/shopping') !== -1) {
      return <Shopping />;
    }

    return <Admin />;
  }

  render() {
    const { itemType = '/main/shopping' } = this.state;

    return (
      <div>
        <NavHeader activeRoute={this.activeRoute} />
        {/* <LogoBar activeRoute={this.activeRoute} />
        { this.activeModule(itemType) } */}
      </div>
    );
  }
}

export default withRouter(Main);
