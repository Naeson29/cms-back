import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
    const { attributes, value, error, handleChange } = props;
    const {
        label = '', name = 'select', className = '', options = [],
    } = attributes;

    return (
        <div className="container-field">
            {
                label && (
                    <p className="label">{label}</p>
                )
            }
            <select
                name={name}
                className={`select ${className} ${(error ? ' error' : '')}`}
                defaultValue={value}
                onChange={e => handleChange(name, e.target.value)}
            >
                {
                    options.map((option, index) => (
                        <option key={index.toString()} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </div>
    );
};

Select.propTypes = {
    attributes: PropTypes.oneOfType([PropTypes.object]),
    handleChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.bool,
};

Select.defaultProps = {
    attributes: {},
    handleChange: () => {},
    value: '',
    error: false,
};

export default Select;
