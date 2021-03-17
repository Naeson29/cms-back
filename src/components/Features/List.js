import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import {
    HiPencil, HiTrash, HiSearch,
} from 'react-icons/hi';
import { getRoles } from '../../utils/Role';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const List = (props) => {
    const {state, getDetail, getMore, type, allow, openModal, deleteAction, content, loading, openPanel, panels} = props;
    const {current, list, pagination} = state;

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
     * @param permission
     * @param key
     */
    const remove = (permission, key) => {
        if (permission) openModal(deleteAction(key));
    };

    /**
     *
     * @param permission
     * @param id
     */
    const update = (permission, id) => {
        if (permission) {
            openPanel(panels.update);
            getDetail(id);
        }
    };

    return (
        <InfiniteScroll
            dataLength={list.length}
            next={() => {
                if (pagination.current_page < pagination.last_page) getMore(pagination.current_page + 1);
            }}
            hasMore={pagination.current_page < pagination.last_page}
            loader={loading}
            refreshFunction={() => {}}
            pullDownToRefreshThreshold={50}
            className="list-card"
        >
            {
                list.map((key, index) => {
                    const { edit, trash } = allow({
                        ...getRoles(current),
                        isMe: current.id === key.id,
                    });

                    return (
                        <div
                            className={`card-container ${type}`}
                            key={index.toString()}
                        >
                            <div className="card">
                                {content(key)}
                                <div className="action">
                                    <div className="button-container left">
                                        <button
                                            onClick={() => update(edit, key.id)}
                                            className={`button edit ${!edit && 'disabled'}`}
                                            type="button"
                                        >
                                            <HiPencil className="icon" />
                                        </button>
                                        <button
                                            onClick={() => remove(trash, key)}
                                            className={`button trash ${!trash && 'disabled'}`}
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
                    );
                })
            }
        </InfiniteScroll>
    );
};

List.propTypes = {
    state: PropTypes.oneOfType([PropTypes.object]),
    getDetail: PropTypes.func,
    getMore: PropTypes.func,


    allow: PropTypes.func,
    loading: PropTypes.element,
    openPanel: PropTypes.func,
    openModal: PropTypes.func,
    deleteAction: PropTypes.func,

    content: PropTypes.func,
    type: PropTypes.string,
};

List.defaultProps = {
    state: {},
    allow: () => {},
    loading: (<div />),
    openPanel: () => {},
    openModal: () => {},
    deleteAction: () => {},
    getDetail: () => {},
    content: () => {},
    type: '',
};


export default List;
