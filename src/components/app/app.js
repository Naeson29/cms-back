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
    Header, Sidebar,
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
        const { loaded, initLoading } = props;
        const { menu } = state;

        if (initLoading) {
            return null;
        }

        const propsMenu = {
            menu, toggle: this.toggleMenu, models,
        };

        return (
            <div className="container-app">
                <Header
                    {...props}
                    propsMenu={propsMenu}
                />
                <Sidebar
                    {...props}
                    propsMenu={propsMenu}
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
    loaded: PropTypes.bool,
    initLoading: PropTypes.bool,
};

App.defaultProps = {
    load: () => {},
    loaded: false,
    initLoading: true,
};

export default App;
