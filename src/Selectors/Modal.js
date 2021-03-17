import { createSelector } from 'reselect';

export const getModalSubState = ({ Modal = {} }) => Modal;

export const getModal = createSelector(
    getModalSubState,
    ({ modal }) => modal,
);
