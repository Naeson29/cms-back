import { createSelector } from 'reselect';
import {
    createModelDestroyViewSelector,
    createModelIndexViewSelector,
    createModelShowViewSelector,
} from '../../../react-core';

export default (model) => {
    const getUserSubState = ({ User = {} }) => User;
    const getModalSubState = ({ Modal = {} }) => Modal;
    const getPanelSubState = ({ Panel = {} }) => Panel;

    const getCurrent = createSelector(
        getUserSubState,
        ({ current }) => current,
    );

    const getModal = createSelector(
        getModalSubState,
        ({ modal }) => modal,
    );

    const getPanel = createSelector(
        getPanelSubState,
        ({ panel }) => panel,
    );

    const list = createSelector(
        createModelIndexViewSelector(model),
        ({ content = [] }) => content,
    );

    const loadingList = createSelector(
        createModelIndexViewSelector(model),
        ({ loading = true }) => loading,
    );

    const paginationList = createSelector(
        createModelIndexViewSelector(model),
        ({ pagination = {} }) => pagination,
    );

    const detail = createSelector(
        createModelShowViewSelector(model),
        ({ content = {} }) => content,
    );

    const loadingDetail = createSelector(
        createModelShowViewSelector(model),
        ({ loading }) => loading,
    );

    const loadingDestroy = createSelector(
        createModelDestroyViewSelector(model),
        ({ loading }) => loading,
    );

    return {
        getCurrent,
        list,
        detail,
        loadingList,
        loadingDetail,
        loadingDestroy,
        paginationList,
        getModal,
        getPanel,
    };
};
