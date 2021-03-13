// Library
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Routes
import {
    Route, Switch,
} from 'react-router-dom';
import routes from '../routes/Routes';

// Components
import Header from '../containers/Features/Header';
import Sidebar from '../containers/Features/Sidebar';
import Panel from '../containers/Features/Panel';
import Modal from '../containers/Features/Modal';

class App extends Component {
    constructor(props) {
        super(props);
        props.load();
    }

    render() {
        return (
            <div className="container-app">
                <div className="header-app">
                    <Header />
                </div>
                <Sidebar />
                <div className="content-app">
                    <Switch>
                        {
                            routes.map(route => (
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
                    <Panel />
                    <Modal />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    load: PropTypes.func,
};

App.defaultProps = {
    load: () => {},
};

export default App;
