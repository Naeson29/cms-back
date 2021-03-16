import { createSelector } from 'reselect';
import {
    createModelDestroyViewSelector,
    createModelIndexViewSelector,
    createModelShowViewSelector,
} from '../../react-core';

const model = 'User';

export const list = createSelector(
    createModelIndexViewSelector(model),
    ({ content = [] }) => content,
);

export const loadingList = createSelector(
    createModelIndexViewSelector(model),
    ({ loading = true }) => loading,
);

export const paginationList = createSelector(
    createModelIndexViewSelector(model),
    ({ pagination = {} }) => pagination,
);

export const detail = id => createSelector(
    createModelShowViewSelector(model, id),
    ({ content = {} }) => content,
);

export const loadingDetail = id => createSelector(
    createModelShowViewSelector(model, id),
    ({ loading = false }) => loading,
);

export const loadingDestroy = id => createSelector(
    createModelDestroyViewSelector(model, id),
    ({ loading = false }) => loading,
);

export const getUserSubState = ({ User = {} }) => User;

export const getCurrent = createSelector(
    getUserSubState,
    ({ current }) => current,
);
