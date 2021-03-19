import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const { action, className, icon, disabled } = props;
    const Icon = icon;

    return (
        <button
            onClick={action}
            className={`${className} ${disabled}`}
            type="button"
        >
            <Icon className="icon" />
        </button>
    );
};

Input.propTypes = {

};

Input.defaultProps = {

};

export default Input;
