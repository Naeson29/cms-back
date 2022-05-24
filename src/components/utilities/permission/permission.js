const getPermissionModel = (permissions, model, screen = null) => (
    (permissions && permissions.data[model]) ? (!screen ? permissions.data[model] : permissions.data[model][screen]) : {}
);

export default {
    getPermissionModel,
};
