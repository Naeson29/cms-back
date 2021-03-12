import React, {Component}  from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authentication }  from '../../routes/Routes';

class PrivateRoute extends Component {
    render() {
        const {component: Component, token, ...rest} = this.props;

        return (
            <Route
                {...rest}

                render={ props =>

                    !!token ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{ pathname: authentication.login.path, state: {from: props.location} }}
                        />
                    )
                }
            />
        );
    }
}

export default PrivateRoute;