import { parseJson } from '../../utilities/functions';

const getPermissionModel = (permissions, model) => parseJson(permissions.data)[model];

const isDisabled = permission => (!permission ? 'disabled' : '');

export {
    getPermissionModel,
    isDisabled,
};
