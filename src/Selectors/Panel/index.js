import { createSelector } from 'reselect';

export const getPanelSubState = ({ Panel = {} }) => Panel;

export const getPanel = createSelector(
    getPanelSubState,
    ({ panel }) => panel,
);
