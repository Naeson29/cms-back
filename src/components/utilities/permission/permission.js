const getPermissionScreen = (current, model, screen, params = {}) => {
    const { permissions, role } = current;

    let permission = true;

    if (permissions.data[model] && permissions.data[model][screen]) {
        permission = permissions.data[model][screen];

        if (model === 'user' && screen === 'update') {
            permission = current.id === Number(params.id) || role === 1;
        }
    }

    return permission;
};

const getPermissionButton = (current, model) => {
    const { permissions } = current;

    let permissionsScreen = {};

    if (permissions.data[model]) {
        permissionsScreen = permissions.data[model];
    }

    return permissionsScreen;
};

export default {
    getPermissionScreen,
    getPermissionButton,
};
