import { createActionTypes } from '../types';

export const DEFAULT_HTTP_ACTION_STEPS = ['REQUEST', 'SUCCESS', 'FAILURE'];

export const createDefaultHttpActionTypes = (namespace, actionName) => createActionTypes(namespace, actionName, DEFAULT_HTTP_ACTION_STEPS);
