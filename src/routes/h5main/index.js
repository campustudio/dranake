import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.less';
import Home from '@screens/Home';
import InvitedUsers from '@screens/InvitedUsers';
import AwardActivity from '@screens/AwardActivity';
import NotFound from '@components/NotFound';

export default class H5Main extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <div className="page-container">
          <div className="main-panel">
            <Switch>
              <Route exact path="/main" component={Home} />
              <Route exact path="/main/invited-users" component={InvitedUsers} />
              <Route exact path="/main/award-activity/:id" component={AwardActivity} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
