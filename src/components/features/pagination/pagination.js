import React from 'react';
import {
    HiChevronRight,
    HiChevronLeft,
} from 'react-icons/hi';
import PropTypes from 'prop-types';
import { Button } from '..';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Pagination = (props) => {
    const { state, paginate } = props;
    const { pagination, loadings } = state;
    const { current_page, last_page } = pagination;

    const navigate = (direction) => {
        let page;

        if (direction === 'previous') {
            if (current_page > 1) {
                page = current_page - 1;
            }
        }

        if (direction === 'next') {
            if (current_page < last_page) {
                page = current_page + 1;
            }
        }

        if (page && !loadings.list) paginate(page);
    };

    return (
        <div className="pagination">
            <div className="pagination-nav">
                <Button
                    action={() => navigate('previous')}
                    className="button button-paginate"
                    icon={HiChevronLeft}
                    disabled={current_page === 1}
                />
            </div>
            <div className="pagination-current">
                <p>
                    {'Page '}
                    {pagination.current_page}
                    {' / '}
                    {pagination.last_page}
                </p>
            </div>
            <div className="pagination-nav">
                <Button
                    action={() => navigate('next')}
                    className="button button-paginate"
                    icon={HiChevronRight}
                    disabled={current_page === last_page}
                />
            </div>
        </div>
    );
};

Pagination.propTypes = {
    state: PropTypes.oneOfType([PropTypes.object]),
    paginate: PropTypes.func,
};

Pagination.defaultProps = {
    state: {},
    paginate: () => {},
};

export default Pagination;
