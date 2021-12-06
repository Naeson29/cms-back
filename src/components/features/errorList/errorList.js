import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ErrorList = (props) => {
    const { errors } = props;

    return (
        <div className="overlay">
            <div className="errors">
                {
                    Object.keys(errors).map(key => (
                        <p key={`error_${key}`}>{errors[key]}</p>
                    ))
                }
            </div>
        </div>
    );
};

ErrorList.propTypes = {
    errors: PropTypes.oneOfType([PropTypes.object]),
};

ErrorList.defaultProps = {
    errors: {},
};

export default ErrorList;
