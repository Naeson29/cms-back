import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const { action, className, icon, disabled } = props;
    const Icon = icon;

    return (
        <button
            onClick={action}
            className={`button ${className} ${disabled}`}
            type="button"
        >
            <Icon className="icon" />
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.string,
    icon: PropTypes.func,
    action: PropTypes.func,
};

Button.defaultProps = {
    className: '',
    disabled: '',
    icon: () => {},
    action: () => {},
};

export default Button;
