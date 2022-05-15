import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const { attributes, value, error, handleChange, handleKeypress } = props;
    const {
        label = '', type = 'text', name = 'input', className = 'input', placeholder = '', required = false,
    } = attributes;

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
                defaultValue={value}
                onChange={e => handleChange(name, e.target.value)}
                onKeyPress={onKeyPress}
                autoComplete="new-password"
            />
        </div>
    );
};

Input.propTypes = {
    attributes: PropTypes.oneOfType([PropTypes.object]),
    handleChange: PropTypes.func,
    handleKeypress: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.bool,
};

Input.defaultProps = {
    attributes: {},
    handleChange: () => {},
    handleKeypress: () => {},
    value: '',
    error: false,
};

export default Input;
