import { createSelector } from 'reselect';
import {
    createModelDestroyViewSelector,
    createModelIndexViewSelector,
    createModelShowViewSelector,
} from '../../react-core';

export const list = createSelector(
    createModelIndexViewSelector('User'),
    ({ content = [] }) => content,
);

export const loadingList = createSelector(
    createModelIndexViewSelector('User'),
    ({ loading = true }) => loading,
);

export const paginationList = createSelector(
    createModelIndexViewSelector('User'),
    ({ pagination = {} }) => pagination,
);

export const detail = id => createSelector(
    createModelShowViewSelector('User', id),
    ({ content = {} }) => content,
);

export const loadingDestroy = id => createSelector(
    createModelDestroyViewSelector('User', id),
    ({ loading = false }) => loading,
);

export const getUserSubState = ({ User = {} }) => User;

export const getCurrent = createSelector(
    getUserSubState,
    ({ current }) => current,
);
