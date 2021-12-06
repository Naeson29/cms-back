const getPermissionModel = (permissions, model) => (permissions !== undefined ? permissions.data[model] : {});

const isDisabled = permission => (!permission ? 'disabled' : '');

export default {
    getPermissionModel,
    isDisabled,
};
