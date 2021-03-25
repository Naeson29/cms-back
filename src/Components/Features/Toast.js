import React from 'react';
import {
    ToastProvider,
    useToasts
} from 'react-toast-notifications';
import PropTypes from 'prop-types';


/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Toast = (props) => {
    const { children } = props;

    return (
        <ToastProvider autoDismiss>
            {children}
        </ToastProvider>
    );
};

Toast.propTypes = {
    children: PropTypes.element,
};

Toast.defaultProps = {
    children: <div />,
};

export default Toast;
