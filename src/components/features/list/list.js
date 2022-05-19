import React from 'react';
import { useHistory } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import {
    HiPencil, HiTrash, HiSearch,
} from 'react-icons/hi';

// Utils
import {
    modalUtility,
    permissionUtility,
} from '../../utilities';

import {
    hasMorePage, plurial,
} from '../../../utilities/functions';

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
        type, state, route, current, getMore, openModal, content, loading, modals,
    } = props;

    const {
        model, list, pagination, screenList,
    } = state;

    const { total } = pagination;

    const permission = getPermissionModel(current.permissions, model);
    const history = useHistory();

    /**
     *
     * @param id
     */
    const show = (id) => {
        history.push(`/${route}/detail/${id}`);
    };

    /**
     *
     * @param key
     * @param userMe
     */
    const remove = (key) => {
        openModal(modalUtility.destroy(key, modals.destroy));
    };

    /**
     *
     * @param id
     */
    const update = (id) => {
        history.push(`/${route}/edit/${id}`);
    };

    const hasMore = screenList.pagination === 'scroll' && hasMorePage(pagination);

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
            <div className="list-result">
                <p>
                    <span>{`${total} `}</span>
                    {plurial(total, 'résultat')}
                </p>
            </div>
            {
                list.map((key, index) => {
                    const userModel = (model === 'user');
                    const permissionRemove = !userModel || (userModel && (current.id !== key.id) && (current.role < key.role));
                    const permissionUpdate = !userModel || (userModel && (current.id === key.id || current.role < key.role));

                    const hasUpdate = permission.update && permissionUpdate;
                    const hasDelete = screenList.deletion && (permission.delete && permissionRemove);

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
                                        permission.show && (
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
    route: PropTypes.string,
    state: PropTypes.oneOfType([PropTypes.object]),
    current: PropTypes.oneOfType([PropTypes.object]),
    modals: PropTypes.oneOfType([PropTypes.object]),
    loading: PropTypes.element,
    getMore: PropTypes.func,
    openModal: PropTypes.func,
    content: PropTypes.func,
};

List.defaultProps = {
    type: 'small',
    route: '',
    state: {},
    current: {},
    modals: {},
    loading: (<div />),
    getMore: () => {},
    openModal: () => {},
    content: () => {},
};

export default List;
