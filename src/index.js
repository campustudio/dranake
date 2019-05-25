import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import 'whatwg-fetch';
import 'promise-polyfill/src/polyfill';
import store, { history } from './shares/store';
import * as serviceWorker from './shares/serviceWorker';
import './index.less';
import Login from '@pages/Login';
import Main from './routes/main';
import NotFound from '@pages/NotFound';

const rootElement = document.getElementById('root');

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BrowserRouter basename="/rspa/auth">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/main" component={Main} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    );
  }
}

render(<div className="bbgColor"><App /></div>, rootElement);

serviceWorker.unregister();
