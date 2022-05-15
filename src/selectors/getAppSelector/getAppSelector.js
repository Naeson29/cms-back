import { createSelector } from 'reselect';

const getAppSubState = ({ app = {} }) => app;

const GetData = createSelector(
    getAppSubState,
    ({ data }) => data,
);

const GetErrors = createSelector(
    getAppSubState,
    ({ errors }) => errors,
);

const GetLoading = createSelector(
    getAppSubState,
    ({ loading }) => loading,
);

export default {
    GetData,
    GetErrors,
    GetLoading,
};
