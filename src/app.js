import React from 'react';
import {
    Router,
    Route,
    Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { I18nextProvider } from 'react-i18next';
import moment from 'moment';
import i18n from './locales/i18n';
import store, {
    persist,
    history,
} from './store';

import { auth } from './routes';

import {
    setContainer,
    appContainer,
    authenticationContainer,
    privateRoutesContainer,
} from './containers';

import {
    app,
    authentication,
    privateRoutes,
} from './components';

moment.locale('fr');
require('moment/locale/fr.js');

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default () => {
    const PrivateRoutes = setContainer({
        component: privateRoutes,
        mapState: privateRoutesContainer.mapState,
    });

    return (
        <I18nextProvider i18n={i18n}>
            <Provider store={store}>
                <PersistGate persistor={persist}>
                    <Router history={history}>
                        <Switch>
                            <Route
                                exact
                                path={auth.login.path}
                                name={auth.login.name}
                                component={setContainer({
                                    component: authentication,
                                    mapDispatch: authenticationContainer.mapDispatch,
                                    mapState: authenticationContainer.mapState,
                                })}
                            />
                            <PrivateRoutes
                                path="/"
                                name="App"
                                Fragment={setContainer({
                                    component: app,
                                    mapDispatch: appContainer.mapDispatch,
                                })}
                            />
                        </Switch>
                    </Router>
                </PersistGate>
            </Provider>
        </I18nextProvider>
    );
};
