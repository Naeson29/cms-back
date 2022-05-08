import React from 'react';
import PropTypes from 'prop-types';
import { MultiSelect } from 'react-multi-select-component';

const SelectMultiple = (props) => {
    const { attributes, value, handleChange } = props;

    const {
        label = '',
        name = 'select',
        className = '',
        options = [],
        hasSelectAll = true,
        disableSearch = true,
    } = attributes;

    return (
        <div className={`container-field container-${name}`}>
            {
                label && (
                    <p className="label">{label}</p>
                )
            }
            <MultiSelect
                className={className}
                options={options}
                value={value}
                onChange={handleChange}
                labelledBy="Select"
                hasSelectAll={hasSelectAll}
                disableSearch={disableSearch}
            />
        </div>
    );
};

SelectMultiple.propTypes = {
    attributes: PropTypes.oneOfType([PropTypes.object]),
    handleChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.array]),
};

SelectMultiple.defaultProps = {
    attributes: {},
    handleChange: () => {},
    value: '',
};

export default SelectMultiple;
