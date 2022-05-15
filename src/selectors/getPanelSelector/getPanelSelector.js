import { createSelector } from 'reselect';

const getPanelSubState = ({ panel = {} }) => panel;

const GetPanel = createSelector(
    getPanelSubState,
    ({ panel }) => panel,
);

export default {
    GetPanel,
};
