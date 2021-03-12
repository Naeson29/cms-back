
import { createActionType } from './type';

export const createActionTypes = (namespace, actionName, actionSteps) => (
    actionSteps.reduce((actionTypes, actionStep) => (
        { ...actionTypes, [actionStep]: createActionType(namespace, actionName, actionStep) }
    ), {})
);

export default createActionTypes;
