import React from 'react';
import {
    Route, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { auth } from '../../../routes';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const PrivateRoutes = (props) => {
    const {
        Fragment, location, token, ...rest
    } = props;

    return (
        <Route
            {...rest}
            render={prop => (token ? (
                <Fragment {...prop} />
            ) : (
                <Redirect
                    to={{
                        pathname: auth.login.path, state: { from: location },
                    }}
                />
            ))}
        />
    );
};

PrivateRoutes.propTypes = {
    token: PropTypes.string,
    Fragment: PropTypes.func,
    location: PropTypes.oneOfType([PropTypes.object]),
};

PrivateRoutes.defaultProps = {
    token: '',
    Fragment: () => {},
    location: '',
};

export default PrivateRoutes;
