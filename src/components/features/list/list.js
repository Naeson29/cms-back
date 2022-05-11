import React from 'react';
import { useHistory } from "react-router-dom";
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

// import { hasMorePage } from '../../../utilities/functions';

// features
import { Button } from '..';

const {
    getPermissionModel,
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
    const history = useHistory();

    /**
     *
     * @param id
     */
    const show = (id) => {
        // openPanel(panelUtility.actions.show);
        getDetail(id);
        history.push(`/invoices`);
    };

    /**
     *
     * @param key
     * @param userMe
     */
    const remove = (key) => {
        openModal(modalUtility.actions.destroy(key, modals.destroy));
    };

    /**
     *
     * @param id
     */
    const update = (id) => {
        openPanel(panelUtility.actions.update);
        getDetail(id);
    };

    const hasMore = false; // hasMorePage(pagination);

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

                    const hasUpdate = (panels && panels.update) && (permission.update && permissionUpdate);
                    const hasDelete = withDelete && (permission.delete && permissionRemove);
                    const hasShow = (panels && panels.show) && permission.show;

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
                                            hasUpdate && (
                                                <Button
                                                    action={() => update(key.id)}
                                                    className="button edit"
                                                    icon={HiPencil}
                                                />
                                            )
                                        }
                                        {
                                            hasDelete && (
                                                <Button
                                                    action={() => remove(key)}
                                                    className="button trash"
                                                    icon={HiTrash}
                                                />
                                            )
                                        }
                                    </div>
                                    {
                                        hasShow && (
                                            <div className="button-container right">
                                                <Button
                                                    action={() => show(key.id)}
                                                    className="button show"
                                                    icon={HiSearch}
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
