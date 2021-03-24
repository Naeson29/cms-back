import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Show = (props) => {
    const { state } = props;
    const { detail } = state;
    const { lastName, firstName } = detail;

    return (
        <div>
            <p>{`${firstName} ${lastName}`}</p>
        </div>
    );
};

Show.propTypes = {
    state: PropTypes.oneOfType([PropTypes.object]),
};

Show.defaultProps = {
    state: {},
};

export default Show;
