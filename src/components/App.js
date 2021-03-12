// Library
import React, {Component, Fragment} from 'react';
import PropTypes          from 'prop-types';
import { ToastContainer } from 'react-toastify';

// Routes
import { Route, Switch } from 'react-router-dom';
import routes from '../routes/Routes';

// Components
import Header from "../containers/Features/Header";
import Sidebar from "./Features/Sidebar";
import Panel from "../containers/Features/Panel";

class App extends Component {
    constructor(props) {
        super(props);
        props.load();
    }


    render() {
        const { current } = this.props;

        return (
            <div className="container-app">
                <div className="header-app">
                    <Header/>
                </div>
                <Sidebar/>
                <div className={'content-app'}>
                    <Switch>
                        {
                            routes.map((route, index) => (
                                <Route
                                    key={index}
                                    exact={route.exact}
                                    path={route.path}
                                    name={route.name}
                                    component={route.component}
                                />
                            ))
                        }
                    </Switch>
                    <Panel/>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    load: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

export default App;
