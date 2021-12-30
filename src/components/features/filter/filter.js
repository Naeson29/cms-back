import React, { useState } from 'react';
import { BsFilterSquareFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Button } from '..';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Filter = (props) => {
    const { columns } = props;
    const [open, setFilter] = useState(false);

    // eslint-disable-next-line no-console
    console.log(columns);

    const toogleFilter = () => setFilter(!open);

    return (
        <div className="filter">
            <Button
                action={toogleFilter}
                className="button square"
                icon={BsFilterSquareFill}
            />
            {
                open && (
                    <div className="filter-box" />
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
