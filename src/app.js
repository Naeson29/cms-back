import React from 'react';
import {
    Router, Route, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { I18nextProvider } from 'react-i18next';
import moment from 'moment';
import store, {
    persist, history,
} from './store';
import i18n from './locales/i18n';

import { authentication } from './routes';

import { App } from './components';
import { setContainer } from './containers';


import AuthenticationContainer from './containers/screens/authentication';
import PrivateRoute from './containers/features/privateRoute';

require('moment/locale/fr.js');

moment.locale('fr');

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default () => (
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>
            <PersistGate persistor={persist}>
                <Router history={history}>
                    <Switch>
                        <Route exact path={authentication.login.path} name={authentication.login.name} component={AuthenticationContainer} />
                        <PrivateRoute
                            path="/"
                            name="App"
                            Fragment={setContainer({
                                component: App,
                            })}
                        />
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    </I18nextProvider>
);
