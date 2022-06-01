const getPermissionModel = (current, model, screen = null, params = {}) => {
    const { permissions, role } = current;

    let permissionsScreen = {};

    if (permissions && permissions.data[model]) {
        permissionsScreen = permissions.data[model];

        if (screen) {
            permissionsScreen = permissions.data[model][screen];

            if (model === 'user') {
                if (role > 1 && screen === 'update') {
                    permissionsScreen = current.id === Number(params.id);
                }
            }
        }
    }

    return permissionsScreen;
};

export default {
    getPermissionModel,
};
