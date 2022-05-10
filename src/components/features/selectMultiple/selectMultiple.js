import React from 'react';
import PropTypes from 'prop-types';
import { MultiSelect } from 'react-multi-select-component';

const SelectMultiple = (props) => {
    const { attributes, value, handleChange } = props;

    const {
        label = '',
        name = 'multi-select',
        className = 'multi-select',
        options = [],
        hasSelectAll = true,
        disableSearch = true,
    } = attributes;

    const strings = {
        allItemsAreSelected: 'Tout est sélectionné',
        clearSearch: 'Effacer la recherche',
        clearSelected: 'Effacer la sélection',
        noOptions: 'Aucune option',
        search: 'Recherche',
        selectAll: 'Tout sélectionner',
        selectAllFiltered: 'Tout sélectionner (Filtrés)',
        selectSomeItems: 'Sélectionner...',
        create: 'Créer',
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
                options={options}
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
