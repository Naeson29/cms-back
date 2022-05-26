const getPermissionModel = (permissions, model, screen = null) => {
    let permissionsScreen = {};

    if (permissions && permissions.data[model]) {
        permissionsScreen = (!screen ? permissions.data[model] : permissions.data[model][screen]);
    }

    return permissionsScreen;
};

export default {
    getPermissionModel,
};
