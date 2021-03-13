import { DEFAULT_HTTP_ACTION_STEPS } from '../http';
import { createActionTypes } from '../types';

export const DEFAULT_MODEL_ACTION_NAMES = ['SEARCH', 'MORE', 'CREATE', 'READ', 'UPDATE', 'DESTROY'];

export const createModelActionTypes = (namespace, actionNames = DEFAULT_MODEL_ACTION_NAMES, actionSteps = DEFAULT_HTTP_ACTION_STEPS) => (
    actionNames.reduce((actionTypes, actionName) => (
        { ...actionTypes, [actionName]: createActionTypes(namespace, [actionName], actionSteps) }
    ), {})
);

export const createDefaultModelActionTypes = namespace => createModelActionTypes(namespace);
