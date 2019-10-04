import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.less';
import Home from '@pages/admin/Home';
// import AdminHome from '@pages/admin/AdminHome';
import AdminHome from '@pages/admin/Home';
import PromotersManage from '@pages/admin/PromotersManage';
import Promoters from '@pages/admin/Promoters';
import Configs from '@pages/admin/Configs';
import ProductsManage from '@pages/admin/ProductsManage';
import ThirdProducts from '@pages/admin/ThirdProducts';
import PostSales from '@pages/admin/PostSales';
import PostSale from '@pages/admin/PostSale';
import SettleAccountVerifies from '@pages/admin/SettleAccountVerifies';
import Verify from '@pages/admin/Verify';
import Sidebar from '@components/Sidebar';
import NotFound from '@components/NotFound';

export default class Admin extends Component {
  render() {
    return (
      <div className="admin-container">
        <div className="left-panel" />
        <Sidebar />
        <div className="right-panel">
          <Switch>
            <Route exact path="/main" component={AdminHome} />
            <Route exact path="/main/promoters-manage" component={PromotersManage} />
            <Route exact path="/main/promoters" component={Promoters} />
            <Route exact path="/main/configs" component={Configs} />
            <Route exact path="/main/products-manage" component={ProductsManage} />
            <Route exact path="/main/third-products" component={ThirdProducts} />
            <Route exact path="/main/post-sales" component={PostSales} />
            <Route exact path="/main/post-sale" component={PostSale} />
            <Route exact path="/main/settle-account-verifies" component={SettleAccountVerifies} />
            <Route exact path="/main/c-withdraw-verify" component={Verify} />
            <Route exact path="/main/h-withdraw-verify" component={Verify} />
            <Route exact path="/main/h-spread-settle-verify" component={Verify} />
            <Route exact path="/main/user/:id" component={Home} />
            <Route exact path="/main/user-add" component={Home} />
            <Route exact path="/main/user-edit/:id" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}
