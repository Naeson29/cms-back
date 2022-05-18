import React, {
    useState,
    useEffect,
} from 'react';
import { BsFilterSquareFill } from 'react-icons/bs';
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
    const { state, refresh, closePanel, openPanel } = props;
    const { params = {}, screenList, loadings = {}, panel = {} } = state;
    const { orders = [], filters = [], searches = {} } = screenList;
    const { columns = [], placeholder = '' } = searches;
    const { order = {} } = params;

    const [filterParams, setParams] = useState({});
    const [searchString, setSearchString] = useState('');
    const [searching, setSearching] = useState(false);
    const [selectedMultiple, setSelectedMultiple] = useState([]);
    const [change, setChange] = useState(false);
    const isOpen = panel.open && panel.filter;

    const launchList = () => {
        if (!loadings.list) {
            refresh({ params: filterParams });
            setChange(false);
        }
    };

    const applySearch = () => {
        if (searchString) {
            setSearching(true);
            launchList();
        }
    };

    const cleanSearch = () => {
        setSearching(false);
        setSearchString('');
        delete filterParams.search;
        setParams(filterParams);
        setChange(true);
    };

    const handleChangeColumn = (key, value) => {
        setParams({
            ...filterParams,
            order: {
                ...filterParams.order,
                column: value,
            },
        });
        setChange(true);
    };

    const handleChangeOrder = (key, value) => {
        setParams({
            ...filterParams,
            [key]: {
                column: filterParams[key].column,
                [value]: true,
            },
        });
        setChange(true);
    };

    const handleChangeFilter = (value) => {
        setSelectedMultiple(value);
        const filterValue = value.map(key => key.value);
        setParams({
            ...filterParams,
            filter: filters.length !== filterValue.length ? filterValue : [],
        });
        setChange(true);
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

    const render = () => (
        <div className="filter-box">
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
            <div className="filter-content border">
                <p className="title">Classer par</p>
                <div className="content-order">
                    <Select
                        attributes={{
                            ...columnSelect,
                            options: orders,
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
                <div className="content-order">
                    <SelectMultiple
                        attributes={{
                            options: filters,
                            name: 'published',
                            hasSelectAll: false,
                        }}
                        value={selectedMultiple}
                        handleChange={handleChangeFilter}
                    />
                </div>
            </div>
        </div>
    );

    const toogleFilter = () => (isOpen ? closePanel() : openPanel({
        open: true,
        content: render(),
        filter: true,
    }));

    useEffect(() => {
        if (Object.keys(params).length > 0) {
            setParams(params);
        }
    }, [params]);

    useEffect(() => {
        if (change) {
            launchList();
        }
    }, [change]);

    return (
        <div className="filter">
            <Button
                action={toogleFilter}
                className="button button-filter"
                icon={BsFilterSquareFill}
            />
        </div>
    );
};

Filter.propTypes = {
    state: PropTypes.oneOfType([PropTypes.object]),
    refresh: PropTypes.func,
    openPanel: PropTypes.func,
    closePanel: PropTypes.func,
};

Filter.defaultProps = {
    state: {},
    refresh: () => {},
    openPanel: () => {},
    closePanel: () => {},
};

export default Filter;
