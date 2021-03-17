// Library
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Routes
import {
    Route, Switch,
} from 'react-router-dom';
import routes from '../Routes';

// Components
import Header from './Features/Header';
import Sidebar from './Features/Sidebar';

class App extends Component {
    constructor(props) {
        super(props);
        props.load();
    }

    render() {
        const { props } = this;

        return (
            <div className="container-app">
                <div className="header-app">
                    <Header {...props} />
                </div>
                <Sidebar {...props} />
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
