import { createSelector } from 'reselect';

export const getModalSubState = ({ Modal = {} }) => Modal;

export const getOpen = createSelector(
    getModalSubState,
    ({ open }) => open,
);

export const getType = createSelector(
    getModalSubState,
    ({ type }) => type,
);

export const getParams = createSelector(
    getModalSubState,
    ({ params }) => params,
);
