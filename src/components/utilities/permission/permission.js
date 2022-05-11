const getPermissionModel = (permissions, model) => (permissions !== undefined ? permissions.data[model] : {});

const isDisabled = disabled => (disabled ? 'disabled' : '');

export default {
    getPermissionModel,
    isDisabled,
};
