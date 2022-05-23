import React from 'react';
import Switch from 'react-switch';
import PropTypes from 'prop-types';
import { colorUtility } from '../../utilities';

const SwitchComponent = (props) => {
    const { attributes, value, handleChange } = props;
    const { primaryColor, gray } = colorUtility;
    const {
        name = 'switch',
        label = 'label',
        options = {},        
        className = 'switch',
    } = attributes;

    const {
        textOn = 'oui',
        textOff = 'non',
        onColor = primaryColor,
        offColor = gray,
        uncheckedIcon = false,
        checkedIcon = false,
        height = 22,
        width = 50,
    } = options;

    return (
        <div className={`container-field container-${name}`}>
            {
                label && (
                    <p className="label">{label}</p>
                )
            }
            <div className={className}>
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
                <p className="label-value">{!value ? textOff : textOn}</p>
            </div>
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
