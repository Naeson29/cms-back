import { createSelector } from 'reselect';

export const getPanelSubState = ({ Panel = {} }) => Panel;

export const panel = createSelector(
    getPanelSubState,
    ({panel}) => panel
);

