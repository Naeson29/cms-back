const getPermissionModel = (permissions, model) => (permissions !== undefined ? permissions.data[model] : {});

export default {
    getPermissionModel,
};
