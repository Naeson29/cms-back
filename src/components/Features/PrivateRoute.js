import React, { Component } from 'react';
import {
    Route, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { authentication } from '../../routes/Routes';

// eslint-disable-next-line react/prefer-stateless-function
class PrivateRoute extends Component {
    render() {
        const { Fragment, token, ...rest } = this.props;

        return (
            <Route
                {...rest}
                render={props => (token ? (
                    <Fragment {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: authentication.login.path, state: { from: props.location },
                        }}
                    />
                ))
                }
            />
        );
    }
}

PrivateRoute.propTypes = {
    token: PropTypes.string,
    Fragment: PropTypes.func,
};

PrivateRoute.defaultProps = {
    token: '',
    Fragment: () => {},
};

export default PrivateRoute;
