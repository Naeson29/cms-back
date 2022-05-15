import { createSelector } from 'reselect';

const getModalSubState = ({ modal = {} }) => modal;

const GetModal = createSelector(
    getModalSubState,
    ({ modal }) => modal,
);

export default {
    GetModal,
};
