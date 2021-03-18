import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import {
    HiPencil, HiTrash, HiSearch,
} from 'react-icons/hi';

// Utils
import setModalDelete from '../Utilities/Modal';
import { hasMorePage } from '../../Utilities/Functions';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const List = (props) => {
    const { state, getDetail, getMore, type, openModal, content, loading, openPanel, panels } = props;
    const { model, list, pagination } = state;

    /**
     *
     * @param id
     */
    const show = (id) => {
        openPanel(panels.show);
        getDetail(id);
    };

    /**
     *
     * @param key
     */
    const remove = (key) => {
        openModal(setModalDelete(model, key));
    };

    /**
     *
     * @param id
     */
    const update = (id) => {
        openPanel(panels.update);
        getDetail(id);
    };

    const hasMore = hasMorePage(pagination);

    return (
        <InfiniteScroll
            dataLength={list.length}
            next={() => { if (hasMore) getMore(pagination.current_page + 1); }}
            hasMore={hasMore}
            loader={loading}
            refreshFunction={() => {}}
            pullDownToRefreshThreshold={50}
            className="list-card"
        >
            {
                list.map((key, index) => (
                    <div
                        className={`card-container ${type}`}
                        key={index.toString()}
                    >
                        <div className="card">
                            {content(key)}
                            <div className="action">
                                <div className="button-container left">
                                    <button
                                        onClick={() => update(key.id)}
                                        className="button edit"
                                        type="button"
                                    >
                                        <HiPencil className="icon" />
                                    </button>
                                    <button
                                        onClick={() => remove(key)}
                                        className="button trash"
                                        type="button"
                                    >
                                        <HiTrash className="icon" />
                                    </button>
                                </div>
                                <div className="button-container right">
                                    <button
                                        onClick={() => show(key.id)}
                                        className="button show"
                                        type="button"
                                    >
                                        <HiSearch className="icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </InfiniteScroll>
    );
};

List.propTypes = {
    type: PropTypes.string,
    state: PropTypes.oneOfType([PropTypes.object]),
    panels: PropTypes.oneOfType([PropTypes.object]),
    loading: PropTypes.element,
    getDetail: PropTypes.func,
    getMore: PropTypes.func,
    openPanel: PropTypes.func,
    openModal: PropTypes.func,
    content: PropTypes.func,
};

List.defaultProps = {
    type: 'small',
    state: {},
    panels: {},
    loading: (<div />),
    getDetail: () => {},
    getMore: () => {},
    openPanel: () => {},
    openModal: () => {},
    content: () => {},
};


export default List;
