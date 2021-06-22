import { createSelector } from 'reselect';
import {
    createModelDestroyViewSelector,
    createModelIndexViewSelector,
    createModelShowViewSelector,
    createModelEditViewSelector,
} from '../../../react-core';

export default (model) => {
    const getUserSubState = ({ User = {} }) => User;
    const getModalSubState = ({ Modal = {} }) => Modal;
    const getPanelSubState = ({ Panel = {} }) => Panel;

    const GetCurrent = createSelector(
        getUserSubState,
        ({ current }) => current,
    );

    const GetModal = createSelector(
        getModalSubState,
        ({ modal }) => modal,
    );

    const GetPanel = createSelector(
        getPanelSubState,
        ({ panel }) => panel,
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

    const LoadingDetail = createSelector(
        createModelShowViewSelector(model),
        ({ loading }) => loading,
    );

    const LoadingDestroy = createSelector(
        createModelDestroyViewSelector(model),
        ({ loading }) => loading,
    );

    const LoadingEdit = createSelector(
        createModelEditViewSelector(model),
        ({ loading }) => loading,
    );

    return {
        GetCurrent,
        List,
        Detail,
        Pagination,
        GetModal,
        GetPanel,
        LoadingList,
        LoadingDetail,
        LoadingDestroy,
        LoadingEdit,
    };
};
