import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const { attributes, value, error, handleChange } = props;
    const {
        label = '', type = 'text', name = 'input', className = 'input', placeholder = '',
    } = attributes;

    return (
        <div className={type !== 'hidden' ? 'container-field' : ''}>
            {
                label && (
                    <p className="label">{label}</p>
                )
            }
            <input
                type={type}
                name={name}
                className={className + (error ? ' error' : '')}
                placeholder={placeholder}
                defaultValue={value}
                onChange={e => handleChange(name, e)}
                autoComplete="new-password"
            />
        </div>
    );
};

Input.propTypes = {
    attributes: PropTypes.oneOfType([PropTypes.object]),
    handleChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.bool,
};

Input.defaultProps = {
    attributes: {},
    handleChange: () => {},
    value: '',
    error: false,
};

export default Input;
