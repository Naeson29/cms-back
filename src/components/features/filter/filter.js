import React, {
    useState,
    useEffect,
} from 'react';
import { BsFilterSquareFill } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import { HiCheck } from 'react-icons/hi';
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
    columnSelect,
} = filterUtility;

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Filter = (props) => {
    const { state, getList } = props;
    const { params, orderColumns } = state;
    const { order } = params;

    const [open, setFilter] = useState(false);
    const [paramsFilter, setParams] = useState({});

    useEffect(() => {
        setParams(params);
    }, [params]);

    const toogleFilter = () => setFilter(!open);

    const handleChangeColumn = (key, value) => {
        setParams({
            ...paramsFilter,
            order: {
                ...paramsFilter.order,
                column: value,
            },
        });
    };

    const handleChangeOrder = (key, value) => {
        setParams({
            ...paramsFilter,
            [key]: {
                column: paramsFilter[key].column,
                [value]: true,
            },
        });
    };

    const applyFilter = () => {
        getList({ params: paramsFilter });
        setFilter(false);
    };

    return (
        <div className="filter">
            {
                open && (
                    <Button
                        action={applyFilter}
                        className="button button-apply"
                        icon={HiCheck}
                    />
                )
            }
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
                            <p className="title">Classer par</p>
                            <div className="content-order">
                                <Select
                                    attributes={{
                                        ...columnSelect,
                                        options: orderColumns,
                                    }}
                                    value={order.column}
                                    handleChange={handleChangeColumn}
                                />
                                <Select
                                    attributes={orderSelect}
                                    value={order.desc ? 'desc' : 'asc'}
                                    handleChange={handleChangeOrder}
                                />
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
    state: PropTypes.oneOfType([PropTypes.object]),
    getList: PropTypes.func,
};

Filter.defaultProps = {
    state: {},
    getList: () => {},
};

export default Filter;
