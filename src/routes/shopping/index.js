import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ShoppingHome from '@pages/ShoppingHome';
import NotFound from '@components/NotFound';

export default class Admin extends Component {
  render() {
    return (
      <div className="admin-container">
        <Switch>
          <Route exact path="/main" component={ShoppingHome} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
