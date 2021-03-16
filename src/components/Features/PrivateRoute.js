import React from 'react';
import {
    Route, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { authentication } from '../../routes/Routes';

const PrivateRoute = (props) => {
    const { Fragment, location, token, ...rest } = props;

    return (
        <Route
            {...rest}
            render={prop => (token ? (
                <Fragment {...prop} />
            ) : (
                <Redirect
                    to={{
                        pathname: authentication.login.path, state: { from: location },
                    }}
                />
            ))
            }
        />
    );
};

PrivateRoute.propTypes = {
    token: PropTypes.string,
    Fragment: PropTypes.func,
    location: PropTypes.oneOfType([PropTypes.object]),
};

PrivateRoute.defaultProps = {
    token: '',
    Fragment: () => {},
    location: '',
};

export default PrivateRoute;
