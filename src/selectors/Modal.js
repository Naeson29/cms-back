import { createSelector } from 'reselect';

export const getModalSubState = ({ Modal = {} }) => Modal;

export const open = createSelector(
    getModalSubState,
    ({open}) => open
);

export const type = createSelector(
    getModalSubState,
    ({type}) => type
);

export const params = createSelector(
    getModalSubState,
    ({params}) => params
);

