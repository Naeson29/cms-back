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

export const detail = createSelector(
    createModelShowViewSelector(model),
    ({ content = {} }) => content,
);

export const loadingDetail = createSelector(
    createModelShowViewSelector(model),
    ({ loading }) => loading,
);

export const loadingDestroy = createSelector(
    createModelDestroyViewSelector(model),
    ({ loading }) => loading,
);

export const getUserSubState = ({ User = {} }) => User;

export const getCurrent = createSelector(
    getUserSubState,
    ({ current }) => current,
);
