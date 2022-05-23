import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const { attributes, value, error, handleChange, handleKeypress } = props;
    const {
        label = '', type = 'text', name = 'input', className = 'input', placeholder = '', options = {},
    } = attributes;
    const { required = false } = options;

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleKeypress();
        }
    };

    return (
        <div className={type !== 'hidden' ? 'container-field' : ''}>
            {
                label && (
                    <p className="label">
                        {label}
                        {required ? ' *' : ''}
                    </p>
                )
            }
            <input
                type={type}
                name={name}
                className={className + (error ? ' error' : '')}
                placeholder={placeholder}
                value={value}
                onChange={e => handleChange(name, e.target.value)}
                onKeyPress={onKeyPress}
                autoComplete="new-password"
            />
            {
                error && (
                    <p className="error-text">
                        {error}
                    </p>
                )
            }
        </div>
    );
};

Input.propTypes = {
    attributes: PropTypes.oneOfType([PropTypes.object]),
    handleChange: PropTypes.func,
    handleKeypress: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

Input.defaultProps = {
    attributes: {},
    handleChange: () => {},
    handleKeypress: () => {},
    value: '',
    error: false,
};

export default Input;
