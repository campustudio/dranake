import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavHeader from '@modules/NavHeader';
import LogoBar from '@modules/LogoBar';
import Mall from '../mall'; // 商城子模块
import Admin from '../admin'; // 管理员子模块

/**
 * 主模块Main
 */
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemType: '/main/mall',
    };
  }

  componentDidMount() {
    // console.log('this.props ', this.props);
    const { location = {} } = this.props;

    // 服务于浏览器刷新操作
    this.setState({
      itemType: location.pathname,
    });
  }

  // 路由跳转
  activeRoute = (itemType) => {
    console.log('activeRoute itemType ', itemType);
    const { history = {} } = this.props;
    this.setState({
      itemType,
    }, () => {
      history.push(itemType);
    });
  }

  // 具体路由模块 展示 控制器
  // 参照当前路由 更新 当前需展示的 路由模块
  activeModule = (itemType) => {
    if (itemType.indexOf('/main/mall') !== -1) {
      return <Mall />;
    }

    return <Admin />;
  }

  render() {
    const { itemType = '/main/mall' } = this.state;

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
