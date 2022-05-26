import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { MultiSelect } from 'react-multi-select-component';

const SelectMultiple = (props) => {
    const { attributes, value, handleChange } = props;
    const { t } = useTranslation('selectMultiple');

    const {
        label = '',
        name = 'multi-select',
        className = 'multi-select',
        data = [],
        hasSelectAll = true,
        disableSearch = true,
    } = attributes;

    const strings = {
        allItemsAreSelected: t('allItemsAreSelected'),
        clearSearch: t('clearSearch'),
        clearSelected: t('clearSelected'),
        noOptions: t('noOptions'),
        search: t('search'),
        selectAll: t('selectAll'),
        selectAllFiltered: t('selectAllFiltered'),
        selectSomeItems: t('selectSomeItems'),
        create: t('create'),
    };

    return (
        <div className={`container-field container-${name}`}>
            {
                label && (
                    <p className="label">{label}</p>
                )
            }
            <MultiSelect
                className={className}
                options={data}
                value={value}
                onChange={handleChange}
                labelledBy="Select"
                hasSelectAll={hasSelectAll}
                disableSearch={disableSearch}
                overrideStrings={strings}
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
