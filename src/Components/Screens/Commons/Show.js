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
    const { last_name, first_name } = detail;

    return (
        <div>
            <p>{`${first_name} ${last_name}`}</p>
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
