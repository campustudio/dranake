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
import LoginPanel from '@pages/LoginPanel';
import Main from './routes/main';
import H5Main from './routes/h5main';
import NotFound from '@components/NotFound';

const rootElement = document.getElementById('root');

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BrowserRouter basename="/rspa/msh5">
            <Switch>
              <Route exact path="/" component={LoginPanel} />
              {/* <Route path="/main" component={H5Main} /> */}
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
