import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import {
    HiPencil, HiTrash, HiSearch,
} from 'react-icons/hi';

// Utils
import setModalDelete from '../../utils/Modal';
import {hasMorePage} from '../../utils/Functions';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const List = (props) => {
    const { state, getDetail, getMore, type, openModal, content, loading, openPanel, panels } = props;
    const { model, list, pagination, allowButton, current } = state;

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
        if (permission) openModal(setModalDelete(model, key));
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

    const hasMore = hasMorePage(pagination);

    return (
        <InfiniteScroll
            dataLength={list.length}
            next={() => { if (hasMore) getMore(pagination.current_page + 1) }}
            hasMore={hasMore}
            loader={loading}
            refreshFunction={() => {}}
            pullDownToRefreshThreshold={50}
            className="list-card"
        >
            {
                list.map((key, index) => {
                    const { edit, trash, role } = allowButton;
                    const isMe = (current.id === key.id);
                    const isUserMe = (!!role.isUser && isMe);

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
                                            onClick={() => update((edit || isUserMe), key.id)}
                                            className={`button edit ${(!edit && (!isUserMe)) && 'disabled'}`}
                                            type="button"
                                        >
                                            <HiPencil className="icon" />
                                        </button>
                                        <button
                                            onClick={() => remove((trash && !isMe), key)}
                                            className={`button trash ${(!trash || isMe) && 'disabled'}`}
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
