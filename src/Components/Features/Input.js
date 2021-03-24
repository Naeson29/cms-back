import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const { data, value } = props;
    const {
        type = 'text', name = 'input', className = 'input', placeholder = '',
    } = data;

    return (
        <div className="container-field">
            <p className="label">{data.label}</p>
            <input
                type={type}
                name={name}
                className={className}
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
};

Input.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object]),
    value: PropTypes.string,
};

Input.defaultProps = {
    data: {},
    value: '',
};

export default Input;
