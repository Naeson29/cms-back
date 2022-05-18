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
    const { state, refresh } = props;
    const { params = {}, screenList, loadings = {} } = state;
    const { orders = [], filters = [], searches = {} } = screenList;
    const { columns = [], placeholder = '' } = searches;
    const { order = {} } = params;

    const [filterParams, setParams] = useState({});
    const [searchString, setSearchString] = useState('');
    const [searching, setSearching] = useState(false);
    const [selectedMultiple, setSelectedMultiple] = useState([]);

    const launchList = () => {
        if (!loadings.list) {
            if (searchString) {
                setSearching(true);
            }
            refresh({ params: filterParams });
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
        const filterValue = value.map(key => key.value);
        setParams({
            ...filterParams,
            filter: filters.length !== filterValue.length ? filterValue : [],
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
        }
    }, [params]);

    return (
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
                        handleKeypress={launchList}
                    />
                    <Button
                        action={launchList}
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
                <p className="title">Classer</p>
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
            <Button
                text="Appliquer"
                action={launchList}
                className="button-apply"
            />
        </div>
    );
};

Filter.propTypes = {
    state: PropTypes.oneOfType([PropTypes.object]),
    refresh: PropTypes.func,
};

Filter.defaultProps = {
    state: {},
    refresh: () => {},
};

export default Filter;
