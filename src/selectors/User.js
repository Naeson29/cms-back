import {createModelIndexViewSelector, createModelShowViewSelector} from "../../react-core";
import { createSelector } from 'reselect';

export const getUsersData = createSelector(
    createModelIndexViewSelector('User'),
    ({ content = [] }) =>  content
);

export const getUsersLoading = createSelector(
    createModelIndexViewSelector('User'),
    ({ loading = true }) =>  loading
);

export const getUsersPagination = createSelector(
    createModelIndexViewSelector('User'),
    ({ pagination = {} }) =>  pagination
);

export const getUserData = (id) => createSelector(
    createModelShowViewSelector('User', id),
    ({ content = {} }) =>  content
);

export const getUserSubState = ({ User = {} }) => User;

export const getCurrentUserSubscription = createSelector(
    getUserSubState,
    ({current}) => current
);

