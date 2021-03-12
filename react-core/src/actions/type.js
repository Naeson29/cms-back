export const createActionType = (namespace, actionName, actionStep) => `${namespace}/${actionName}_${actionStep}`;

export default createActionType;
