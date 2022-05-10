import { createSelector } from 'reselect';

const getInitSubState = ({ init = {} }) => init;

const GetData = createSelector(
    getInitSubState,
    ({ data }) => data,
);

const GetErrors = createSelector(
    getInitSubState,
    ({ errors }) => errors,
);

const GetLoading = createSelector(
    getInitSubState,
    ({ loading }) => loading,
);

export default {
    GetData,
    GetErrors,
    GetLoading,
};
