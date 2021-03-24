import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import {
    HiPencil, HiTrash, HiSearch,
} from 'react-icons/hi';

// Utils
import { actions as ModalActions } from '../Utilities/Modal';
import { hasMorePage } from '../../Utilities/Functions';
import {
    getPermissionModel, isDisabled,
} from '../Utilities/Permission';

import { actions as PanelActions } from '../Utilities/Panel';

// Features
import Button from './Button';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const List = (props) => {
    const {
        state, getDetail, getMore, type, openModal, content, loading, openPanel, modals,
    } = props;
    const {
        model, list, pagination, current,
    } = state;
    const { permissions } = current;
    const permission = getPermissionModel(permissions, model);

    /**
     *
     * @param id
     */
    const show = (id) => {
        if (permission.show) {
            openPanel(PanelActions.show);
            getDetail(id);
        }
    };

    /**
     *
     * @param key
     * @param isUserAndMe
     */
    const remove = (key, isUserAndMe = false) => {
        if (permission.delete && !isUserAndMe) openModal(ModalActions.destroy(key, modals.destroy));
    };

    /**
     *
     * @param id
     */
    const update = (id) => {
        if (permission.update) {
            openPanel(PanelActions.update);
            getDetail(id);
        }
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
                list.map((key, index) => {
                    const isUserAndMe = (model === 'user') && (current.id === key.id);

                    return (
                        <div
                            className={`card-container ${type}`}
                            key={index.toString()}
                        >
                            <div className="card">
                                {content(key)}
                                <div className="action">
                                    <div className="button-container left">
                                        <Button
                                            action={() => update(key.id)}
                                            className="button edit"
                                            icon={HiPencil}
                                            disabled={isDisabled(permission.update)}
                                        />
                                        <Button
                                            action={() => remove(key, isUserAndMe)}
                                            className="button trash"
                                            icon={HiTrash}
                                            disabled={isDisabled(permission.delete && !isUserAndMe)}
                                        />
                                    </div>
                                    <div className="button-container right">
                                        <Button
                                            action={() => show(key.id)}
                                            className="button show"
                                            icon={HiSearch}
                                            disabled={isDisabled(permission.show)}
                                        />
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
    modals: PropTypes.oneOfType([PropTypes.object]),
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
    modals: {},
    loading: (<div />),
    getDetail: () => {},
    getMore: () => {},
    openPanel: () => {},
    openModal: () => {},
    content: () => {},
};

export default List;
