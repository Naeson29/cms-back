import { createSelector } from 'reselect';
import {
    createModelDestroyViewSelector,
    createModelIndexViewSelector,
    createModelShowViewSelector,
    createModelEditViewSelector,
} from '../../../react-core';

export default (model) => {
    const getSubState = obj => obj[model];

    const GetCurrent = createSelector(
        getSubState,
        ({ current = {} }) => current,
    );

    const List = createSelector(
        createModelIndexViewSelector(model),
        ({ content = [] }) => content,
    );

    const Pagination = createSelector(
        createModelIndexViewSelector(model),
        ({ pagination = {} }) => pagination,
    );

    const Detail = createSelector(
        createModelShowViewSelector(model),
        ({ content = {} }) => content,
    );

    const LoadingList = createSelector(
        createModelIndexViewSelector(model),
        ({ loading = true }) => loading,
    );

    const ParamsList = createSelector(
        createModelIndexViewSelector(model),
        ({ params = {} }) => params,
    );

    const FilterList = createSelector(
        createModelIndexViewSelector(model),
        ({ filters = {} }) => filters,
    );

    const LoadingDetail = createSelector(
        createModelShowViewSelector(model),
        ({ loading = true }) => loading,
    );

    const LoadingDestroy = createSelector(
        createModelDestroyViewSelector(model),
        ({ loading = false }) => loading,
    );

    const LoadingEdit = createSelector(
        createModelEditViewSelector(model),
        ({ loading = false }) => loading,
    );

    const ErrorEdit = createSelector(
        createModelEditViewSelector(model),
        ({ error = false }) => error,
    );

    return {
        GetCurrent,
        List,
        Detail,
        Pagination,
        ParamsList,
        FilterList,
        LoadingList,
        LoadingDetail,
        LoadingDestroy,
        LoadingEdit,
        ErrorEdit,
    };
};
