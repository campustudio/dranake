import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import * as serviceWorker from './shares/serviceWorker';
// import 'whatwg-fetch';
// import 'promise-polyfill/src/polyfill';
import store, { history } from './shares/store';
import './index.less';
import LoginPanel from '@pages/admin/LoginPanel';
import Home from '@pages/admin/Home';
import CodingTest from '@pages/admin/CodingTest';
import Main from './routes/main';
import H5Main from './routes/h5main';
import NotFound from '@components/NotFound';

const rootElement = document.getElementById('root');

class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <BrowserRouter basename="/rspa/mall">
              <Switch>
                <Route exact path="/" component={CodingTest} />
                <Route exact path="/main" component={Main} />
                {/* <Route exact path="/main" component={H5Main} /> */}
                <Route component={NotFound} />
              </Switch>
            </BrowserRouter>
          </ConnectedRouter>
        </Provider>
      </ConfigProvider>
    );
  }
}

render(<div className="bbgColor"><App /></div>, rootElement);

serviceWorker.unregister();
