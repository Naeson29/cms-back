import React from 'react';
import Switch from 'react-switch';
import PropTypes from 'prop-types';

const SwitchComponent = (props) => {
    const { attributes, value, handleChange } = props;
    const {
        label = '', name = 'switch', onColor = '#28bb2f', offColor = '#c3c3c3', uncheckedIcon = false, checkedIcon = false, height = 25, width = 50,
    } = attributes;

    return (
        <div className={`container-field container-${name}`}>
            {
                label && (
                    <p className="label">{label}</p>
                )
            }
            <Switch
                onChange={checked => handleChange(name, checked)}
                checked={value}
                onColor={onColor}
                offColor={offColor}
                uncheckedIcon={uncheckedIcon}
                checkedIcon={checkedIcon}
                height={height}
                width={width}
            />
        </div>
    );
};

SwitchComponent.propTypes = {
    attributes: PropTypes.oneOfType([PropTypes.object]),
    handleChange: PropTypes.func,
    value: PropTypes.bool,
};

SwitchComponent.defaultProps = {
    attributes: {},
    handleChange: () => {},
    value: false,
};

export default SwitchComponent;
