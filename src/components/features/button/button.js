import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {
        action, className, text, icon, disabled,
    } = props;
    const Icon = icon;

    return (
        <button
            onClick={action}
            className={`${className} ${disabled}`}
            type="button"
        >
            {
                Icon && (
                    <Icon className="icon" />
                )
            }
            {
                text && text
            }
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    action: PropTypes.func,
};

Button.defaultProps = {
    className: '',
    disabled: '',
    text: '',
    icon: false,
    action: () => {},
};

export default Button;
