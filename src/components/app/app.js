// Library
import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

// routes
import {
    Route, Switch,
} from 'react-router-dom';
import models from '../../models';
import routes from '../../routes';

// features
import {
    Header, Sidebar, Loading,
} from '../features';

import { scrollBody } from '../../utilities/functions';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: false,
        };

        this.routes = routes(models);

        props.load();

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(bool) {
        this.setState({
            menu: bool,
        }, () => scrollBody(bool));
    }

    render() {
        const { props, state } = this;
        const { appLoaded, logout } = props;
        const { menu } = state;

        if (!appLoaded) {
            return (
                <div className="container-app app-loading">
                    <Loading />
                </div>
            );
        }

        const menuProps = {
            menu,
            toggle: this.toggleMenu,
        };

        return (
            <div className="container-app">
                <Header
                    logout={logout}
                    menuProps={menuProps}
                />
                <Sidebar
                    menuProps={menuProps}
                    models={models}
                />
                <div className="content-app">
                    <Switch>
                        {
                            this.routes.map(route => (
                                <Route
                                    key={route.id}
                                    exact={route.exact}
                                    path={route.path}
                                    name={route.name}
                                    component={route.component}
                                />
                            ))
                        }
                    </Switch>
                </div>
                <ToastContainer
                    className="toast-container"
                    toastClassName="toast-content"
                    bodyClassName="toast-body"
                    autoClose={3000}
                    hideProgressBar
                />
            </div>
        );
    }
}

App.propTypes = {
    load: PropTypes.func,
    logout: PropTypes.func,
    appLoaded: PropTypes.bool,
};

App.defaultProps = {
    load: () => {},
    logout: () => {},
    appLoaded: false,
};

export default App;
