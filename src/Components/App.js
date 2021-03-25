// Library
import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

// Routes
import {
    Route, Switch,
} from 'react-router-dom';
import routes from '../Routes';

// Components
import Header from './Features/Header';
import Sidebar from './Features/Sidebar';
import { scrollBody } from '../Utilities/Functions';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: false,
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        props.load();
    }

    toggleMenu() {
        const { menu } = this.state;
        this.setState({
            menu: !menu,
        }, () => scrollBody(!menu));
    }

    render() {
        const { props, state } = this;
        const { menu } = state;

        return (
            <div className="container-app">
                <div className="header-app">
                    <Header {...props} toggleMenu={this.toggleMenu} />
                </div>
                <Sidebar {...props} active={menu} toggleMenu={this.toggleMenu} />
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
};

App.defaultProps = {
    load: () => {},
};

export default App;
