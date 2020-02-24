import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect, Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { LoginConnected } from './scenes/login/login';
import { rootReducer } from './store/rootReducer';
import PageNotFound from './components/pageNotFound/PageNotFound';
import PrivateRoute from './components/authentication/Auth';
import { DashboardConnected } from './scenes/dashboard/Dashboard';

import { IntlProvider, addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as fr from 'react-intl/locale-data/fr';
import * as login_en from "./common/translation/en/EnglishProperties";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import Translate from './common/translation/Translate';

const persistedReducer = rootReducer;

export const store = compose(applyMiddleware(thunk))(createStore)(persistedReducer);
let persistor = persistStore(store);

addLocaleData([...en, ...fr]);

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Translate />
        <Switch>
            <Redirect path="/" exact to="/login"/>
            <Route path="/login" exact component={LoginConnected} />
            <PrivateRoute path="/dashboard" component={DashboardConnected} />
            <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <IntlProvider locale="en" messages={login_en.EnglishProperties.i18nConfig.messages}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </PersistGate>
</Provider>, document.getElementById('root'));
