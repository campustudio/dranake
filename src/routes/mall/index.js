import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '@components/NotFound';
import MallHome from '@pages/mall';
import Parts from '@pages/mall/Parts';
import Part from '@pages/mall/Part';

export default class Admin extends Component {
  render() {
    return (
      <div className="mall-container">
        <Switch>
          <Route exact path="/main/mall" component={MallHome} />
          <Route exact path="/main/mall/parts" component={Parts} />
          <Route exact path="/main/mall/part" component={Part} />
          <Route exact path="/main/mall/cart-detail" component={MallHome} />
          <Route exact path="/main/mall/order" component={MallHome} />
          <Route exact path="/main/mall/pay" component={MallHome} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
