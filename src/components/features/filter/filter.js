import React, { useState } from 'react';
import { BsFilterSquareFill } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';
import {
    Button,
    Input,
    Select,
} from '..';

import { filterUtility } from '../../utilities';

const {
    searchInput,
    orderSelect,
} = filterUtility;

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Filter = (props) => {
    const { columns } = props;
    const [open, setFilter] = useState(false);
    const toogleFilter = () => setFilter(!open);

    return (
        <div className="filter">
            <Button
                action={toogleFilter}
                className="button button-filter"
                icon={BsFilterSquareFill}
            />
            {
                open && (
                    <div className="filter-box">
                        <div className="filter-content border">
                            <p className="title">Rechercher</p>
                            <div className="content-search">
                                <Input attributes={searchInput} />
                                <Button
                                    action={() => {}}
                                    className="button button-search"
                                    icon={BiSearchAlt2}
                                />
                            </div>
                        </div>
                        <div className="filter-content border">
                            <p className="title">Classer</p>
                            <div className="content-order">
                                <Select attributes={orderSelect} />
                            </div>              
                        </div>
                        <div className="filter-content">
                            <p className="title">Filtrer</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

Filter.propTypes = {
    columns: PropTypes.oneOfType([PropTypes.array]),
};

Filter.defaultProps = {
    columns: [],
};

export default Filter;
