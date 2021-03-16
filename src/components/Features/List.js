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
    const {
        type,
        current,
        data,
        pagination,
        more,
        allow,
        deleteModal,
        deleteAction,
        content,
        loading,
        panel,
        openPanel,
        detail,
    } = props;

    /**
     *
     * @param id
     */
    const show = (id) => {
        openPanel({
            type: panel.type,
            action: panel.actions.SHOW,
        });
        detail(id);
    };

    /**
     *
     * @param permission
     * @param key
     */
    const remove = (permission, key) => {
        if (permission) deleteModal(deleteAction(key));
    };

    /**
     *
     * @param permission
     * @param id
     */
    const update = (permission, id) => {
        if (permission) {
            openPanel({
                type: panel.type,
                action: panel.actions.UPDATE,
            });
            detail(id);
        }
    };

    return (
        <InfiniteScroll
            dataLength={data.length}
            next={() => {
                if (pagination.current_page < pagination.last_page) more(pagination.current_page + 1);
            }}
            hasMore={pagination.current_page < pagination.last_page}
            loader={loading}
            refreshFunction={() => {}}
            pullDownToRefreshThreshold={50}
            className="list-card"
        >
            {
                data.map((key, index) => {
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
    data: PropTypes.oneOfType([PropTypes.array]),
    pagination: PropTypes.oneOfType([PropTypes.object]),
    current: PropTypes.oneOfType([PropTypes.object]),
    panel: PropTypes.oneOfType([PropTypes.object]),
    more: PropTypes.func,
    allow: PropTypes.func,
    loading: PropTypes.element,
    openPanel: PropTypes.func,
    deleteModal: PropTypes.func,
    deleteAction: PropTypes.func,
    detail: PropTypes.func,
    content: PropTypes.func,
    type: PropTypes.string,
};

List.defaultProps = {
    data: [],
    pagination: {},
    current: {},
    panel: {},
    more: () => {},
    allow: () => {},
    loading: (<div />),
    openPanel: () => {},
    deleteModal: () => {},
    deleteAction: () => {},
    detail: () => {},
    content: () => {},
    type: '',
};


export default List;
