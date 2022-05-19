import React from 'react';
import PropTypes from 'prop-types';

const Textarea = (props) => {
    const { attributes, value, error, handleChange } = props;
    const {
        label = '', name = 'textarea', className = 'textarea', placeholder = '',
    } = attributes;

    return (
        <div className="container-field">
            {
                label && (
                    <p className="label">{label}</p>
                )
            }
            <textarea
                name={name}
                className={className + (error ? ' error' : '')}
                placeholder={placeholder}
                defaultValue={value}
                onChange={e => handleChange(name, e.target.value)}
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

Textarea.propTypes = {
    attributes: PropTypes.oneOfType([PropTypes.object]),
    handleChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.bool,
};

Textarea.defaultProps = {
    attributes: {},
    handleChange: () => {},
    value: '',
    error: false,
};

export default Textarea;
