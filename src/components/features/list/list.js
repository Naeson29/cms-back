import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import {
    HiPencil, HiTrash, HiSearch,
} from 'react-icons/hi';

// Utils
import {
    panelUtility,
    modalUtility,
    permissionUtility,
} from '../../utilities';

import { hasMorePage } from '../../../utilities/functions';

// features
import { Button } from '..';

const {
    getPermissionModel, isDisabled,
} = permissionUtility;


/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const List = (props) => {
    const {
        state,
        panels,
        getDetail,
        getMore,
        type,
        openModal,
        content,
        loading,
        openPanel,
        withDelete,
        modals = {},
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
            openPanel(panelUtility.actions.show);
            getDetail(id);
        }
    };

    /**
     *
     * @param key
     * @param userMe
     */
    const remove = (key, permissionRemove) => {
        if (permission.delete && permissionRemove) openModal(modalUtility.actions.destroy(key, modals.destroy));
    };

    /**
     *
     * @param id
     */
    const update = (id, permissionUpdate) => {
        if (permission.update && permissionUpdate) {
            openPanel(panelUtility.actions.update);
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
                    const userModel = (model === 'user');
                    const permissionRemove = !userModel || (userModel && (current.id !== key.id) && (current.role < key.role));
                    const permissionUpdate = !userModel || (userModel && (current.id === key.id || current.role < key.role));

                    return (
                        <div
                            className={`card-container ${type}`}
                            key={index.toString()}
                        >
                            <div className="card">
                                {
                                    content && content(key)
                                }
                                <div className="action">
                                    <div className="button-container left">
                                        {
                                            (panels && panels.update) && (
                                                <Button
                                                    action={() => update(key.id, permissionUpdate)}
                                                    className="button edit"
                                                    icon={HiPencil}
                                                    disabled={isDisabled(!permission.update || !permissionUpdate)}
                                                />
                                            )
                                        }
                                        {
                                            withDelete && (
                                                <Button
                                                    action={() => remove(key, permissionRemove)}
                                                    className="button trash"
                                                    icon={HiTrash}
                                                    disabled={isDisabled(!permission.delete || !permissionRemove)}
                                                />
                                            )
                                        }
                                    </div>
                                    {
                                        (panels && panels.show) && (
                                            <div className="button-container right">
                                                <Button
                                                    action={() => show(key.id)}
                                                    className="button show"
                                                    icon={HiSearch}
                                                    disabled={isDisabled(!permission.show)}
                                                />
                                            </div>
                                        )
                                    }
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
    panels: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    loading: PropTypes.element,
    getDetail: PropTypes.func,
    getMore: PropTypes.func,
    openPanel: PropTypes.func,
    openModal: PropTypes.func,
    content: PropTypes.func,
    withDelete: PropTypes.bool,
};

List.defaultProps = {
    type: 'small',
    state: {},
    modals: {},
    panels: false,
    withDelete: true,
    loading: (<div />),
    getDetail: () => {},
    getMore: () => {},
    openPanel: () => {},
    openModal: () => {},
    content: () => {},
};

export default List;
