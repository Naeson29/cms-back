import React from 'react';
import PropTypes from 'prop-types';

const Panel = (props) => {
    const { children } = props;

    return (
        <div className="content">
            {children}
        </div>
    );
};

Panel.propTypes = {
    children: PropTypes.element,
};

Panel.defaultProps = {
    children: (<div />),
};

export default Panel;
