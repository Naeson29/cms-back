import React from 'react';
import PropTypes from 'prop-types';

const Show = (props) => {
    const { detail } = props;
    const { lastName, firstName } = detail;

    return (
        <div>
            <p>{`${firstName} ${lastName}`}</p>
        </div>
    );
};

Show.propTypes = {
    detail: PropTypes.oneOfType([PropTypes.object]),
};

Show.defaultProps = {
    detail: {},
};

export default Show;
