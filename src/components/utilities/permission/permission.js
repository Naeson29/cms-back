const getPermissionModel = (current, model, screen = null, params = {}) => {
    const { permissions, role } = current;

    let permissionsScreen = {};

    if (permissions && permissions.data[model]) {
        permissionsScreen = permissions.data[model];

        if (screen) {
            permissionsScreen = permissions.data[model][screen];
            if (role > 1 && model === 'user' && screen === 'update') {
                permissionsScreen = current.id === Number(params.id);
            }
        }
    }

    return permissionsScreen;
};

export default {
    getPermissionModel,
};
