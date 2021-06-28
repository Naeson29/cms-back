import { parseJson } from '../../../utilities/functions';

const getPermissionModel = (permissions, model) => (permissions !== undefined ? parseJson(permissions.data)[model] : {});
const isDisabled = permission => (!permission ? 'disabled' : '');

export default {
    getPermissionModel,
    isDisabled,
};
