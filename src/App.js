import React                   from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {Provider}              from 'react-redux';
import {syncHistoryWithStore}  from 'react-router-redux';
import {createBrowserHistory}  from 'history';
import {PersistGate}           from "redux-persist/integration/react";
import {persistor}             from "./store";
import { I18nextProvider }     from 'react-i18next';
import i18n                    from './locales/i18n';

import store from './store';
import { authentication} from './routes/Routes';
require('moment/locale/fr.js');

// Containers
import AuthenticationContainer from './containers/Screens/Authentication/Login';
import PrivateRoute            from "./containers/Features/PrivateRoute";
import AppContainer            from "./containers/App";
import moment                  from "moment";

const history = createBrowserHistory();

export { history };

syncHistoryWithStore(history, store);

moment.locale('fr');

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Switch>
                        <Route exact path={authentication.login.path} name={authentication.login.name} component={AuthenticationContainer} />
                        <PrivateRoute path={'/'} name={'App'} component={AppContainer} />
                    </Switch>
                </Router>
                </PersistGate>
            </Provider>
        </I18nextProvider>
    );
}
export default App;
