import { createSelector } from 'reselect';

const getFilterSubState = ({ filter = {} }) => filter;

const GetFilter = createSelector(
    getFilterSubState,
    ({ filter }) => filter,
);

export default {
    GetFilter,
};
