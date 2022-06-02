const getPermissionModel = (current, model, screen = null, params = {}) => {
    const { permissions, role } = current;

    let permissionsScreen = {};

    if (permissions && permissions.data[model]) {
        permissionsScreen = permissions.data[model];

        if (model === 'user') {
            if (role > 1 && (screen === 'update' || screen === 'show')) {
                permissionsScreen.update = current.id === Number(params.id);
            }
        }
    }

    return permissionsScreen;
};

export default {
    getPermissionModel,
};
