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
} from './Store';
import i18n from './Locales/i18n';

import { authentication } from './Routes';

// Containers
import AuthenticationContainer from './Containers/Screens/Authentication';
import PrivateRoute from './Containers/Features/PrivateRoute';
import AppContainer from './Containers/App';

require('moment/locale/fr.js');

moment.locale('fr');

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => (
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>
            <PersistGate persistor={persist}>
                <Router history={history}>
                    <Switch>
                        <Route exact path={authentication.login.path} name={authentication.login.name} component={AuthenticationContainer} />
                        <PrivateRoute path="/" name="App" Fragment={AppContainer} />
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    </I18nextProvider>
);

export default App;
