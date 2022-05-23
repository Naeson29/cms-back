import React, {
    useState,
    useEffect,
} from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import {
    HiX,
} from 'react-icons/hi';
import PropTypes from 'prop-types';
import {
    Button,
    Input,
    Select,
    SelectMultiple,
} from '..';

import { filterUtility } from '../../utilities';

const {
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
    const { state, refresh, closePanel } = props;
    const { params = {}, filters = [], screenList, loadings = {} } = state;
    const { selectOrder = [], selectFilter = [], inputSearch = {} } = screenList;
    const { columns = [], placeholder = '' } = inputSearch;
    const { order = {}, search = [] } = params;

    const [filterParams, setParams] = useState({});
    const [searchString, setSearchString] = useState('');
    const [searching, setSearching] = useState(false);
    const [selectedMultiple, setSelectedMultiple] = useState([]);

    const applyFilter = () => {
        if (!loadings.list) {
            refresh({
                params: {
                    ...filterParams,
                    page: 1,
                },
                filters: selectedMultiple,
            });
        }
    };

    const applySearch = () => {
        if (searchString) {
            setSearching(true);
            applyFilter();
        }
    };

    const cleanSearch = () => {
        setSearching(false);
        setSearchString('');
        delete filterParams.search;
        setParams(filterParams);
    };

    const handleChangeColumn = (key, value) => {
        setParams({
            ...filterParams,
            order: {
                ...filterParams.order,
                column: value,
            },
        });
    };

    const handleChangeOrder = (key, value) => {
        setParams({
            ...filterParams,
            [key]: {
                column: filterParams[key].column,
                [value]: true,
            },
        });
    };

    const handleChangeFilter = (value) => {
        setSelectedMultiple(value);
        const filterValue = value.map(key => key.filter);
        setParams({
            ...filterParams,
            filter: selectFilter.length !== filterValue.length ? filterValue : [],
        });
    };

    const handleChangeSearch = (key, value) => {
        setSearchString(value);
        setParams({
            ...filterParams,
            search: [
                ...columns.map(column => ({
                    column,
                    operator: 'LIKE',
                    value,
                })),
            ],
        });
    };

    useEffect(() => {
        if (Object.keys(params).length > 0) {
            setParams(params);
            setSelectedMultiple(filters);
            if (params.search && search.length > 0) {
                setSearchString(params.search[0].value);
                setSearching(true);
            }
        }
    }, [params]);

    const hasSearch = columns.length > 0;
    const hasOrder = selectOrder.length > 0;
    const hasFilter = selectFilter.length > 0;
    const hasButton = hasSearch || hasOrder || hasFilter;

    return (
        <div className="filter-box">
            {
                hasSearch && (
                    <div className="filter-content border">
                        <p className="title">Rechercher</p>
                        <div className="content-search">
                            <Input
                                attributes={{
                                    className: 'search',
                                    name: 'search',
                                    placeholder,
                                }}
                                value={searchString}
                                handleChange={handleChangeSearch}
                                handleKeypress={applySearch}
                            />
                            <Button
                                action={applySearch}
                                className="button button-search"
                                icon={BiSearchAlt2}
                            />
                            {
                                searching && (
                                    <Button
                                        action={cleanSearch}
                                        className="button button-clean"
                                        icon={HiX}
                                    />
                                )
                            }
                        </div>
                    </div>
                )
            }
            {
                hasOrder && (
                    <div className="filter-content border">
                        <p className="title">Classer</p>
                        <div className="content-order">
                            <Select
                                attributes={{
                                    ...columnSelect,
                                    data: selectOrder,
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
                )
            }
            {
                hasFilter && (
                    <div className="filter-content">
                        <p className="title">Filtrer</p>
                        <div className="content-order">
                            <SelectMultiple
                                attributes={{
                                    data: selectFilter,
                                    name: 'published',
                                    hasSelectAll: false,
                                }}
                                value={selectedMultiple}
                                handleChange={handleChangeFilter}
                            />
                        </div>
                    </div>
                )
            }
            {
                hasButton && (
                    <div className="buttons">
                        <Button
                            text="Appliquer"
                            action={applyFilter}
                            className="button button-apply"
                        />
                        <Button
                            text="Fermer"
                            action={() => closePanel()}
                            className="button button-close"
                        />
                    </div>
                )
            }
        </div>
    );
};

Filter.propTypes = {
    state: PropTypes.oneOfType([PropTypes.object]),
    closePanel: PropTypes.func,
    refresh: PropTypes.func,
};

Filter.defaultProps = {
    state: {},
    closePanel: () => {},
    refresh: () => {},
};

export default Filter;
