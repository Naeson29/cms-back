import React from 'react';
import { useTranslation } from 'react-i18next';
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
    hasMorePage,
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

    const { t } = useTranslation('list');

    const {
        model, list, pagination, screenList, loadings,
    } = state;

    const { total } = pagination;
    const paramsList = screenList(t);

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
        openModal(modalUtility.destroy(key, modals.destroy, t));
    };

    /**
     *
     * @param id
     */
    const update = (id) => {
        history.push(`/${route}/edit/${id}`);
    };

    const hasMore = paramsList.pagination === 'scroll' && hasMorePage(pagination);

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
                !loadings.list && (
                    <div className="list-result">
                        <p>
                            <span>{`${total} `}</span>
                            {t('results')}
                        </p>
                    </div>
                )
            }
            {
                list.map((key, index) => {
                    const userModel = (model === 'user');
                    const permissionRemove = !userModel || (userModel && (current.id !== key.id) && (current.role < key.role));
                    const permissionUpdate = !userModel || (userModel && (current.id === key.id || current.role < key.role));

                    const hasUpdate = permission.update && permissionUpdate;
                    const hasDelete = paramsList.deletion && (permission.delete && permissionRemove);

                    return (
                        <div
                            className={`card-container ${type}`}
                            key={index.toString()}
                        >
                            <div className="card">
                                {
                                    content && content(key, t)
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
    getMore: PropTypes.func,
    openModal: PropTypes.func,
    content: PropTypes.func,
    type: PropTypes.string,
    route: PropTypes.string,
    state: PropTypes.oneOfType([PropTypes.object]),
    current: PropTypes.oneOfType([PropTypes.object]),
    modals: PropTypes.oneOfType([PropTypes.object]),
    loading: PropTypes.element,
};

List.defaultProps = {
    getMore: () => {},
    openModal: () => {},
    content: () => {},
    type: 'small',
    route: '',
    state: {},
    current: {},
    modals: {},
    loading: (<div />),
};

export default List;
