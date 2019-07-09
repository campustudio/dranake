import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '@components/NotFound';
import ShoppingHome from '@pages/shopping/Home';
import Parts from '@pages/shopping/Parts';
import Part from '@pages/shopping/Part';

export default class Admin extends Component {
  render() {
    return (
      <div className="shopping-container">
        <Switch>
          <Route exact path="/main/shopping" component={ShoppingHome} />
          <Route exact path="/main/shopping/parts" component={Parts} />
          <Route exact path="/main/shopping/part" component={Part} />
          <Route exact path="/main/shopping/cart-detail" component={ShoppingHome} />
          <Route exact path="/main/shopping/order" component={ShoppingHome} />
          <Route exact path="/main/shopping/pay" component={ShoppingHome} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
