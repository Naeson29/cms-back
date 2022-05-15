import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => {
    const { errors } = props;

    return (
        <div className="errors">
            <div className="errors-content">
                {
                    Object.keys(errors).map(key => (
                        <p key={`error_${key}`}>
                            {'* '}
                            {errors[key]}
                        </p>
                    ))
                }
            </div>
        </div>
    );
};

Error.propTypes = {
    errors: PropTypes.oneOfType([PropTypes.object]),
};

Error.defaultProps = {
    errors: {},
};

export default Error;
