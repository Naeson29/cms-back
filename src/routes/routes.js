import { screenContainer } from '../containers';

const routes = (models) => {
    const modelRoutes = Object.keys(models).filter(key => !!models[key].name && !!models[key].routeName).map(model => models[model]);

    const panel = true;
    const modal = true;

    let id = 1;

    const routeList = [{
        exact: true,
        path: '/',
        name: 'Dashboard',
        component: screenContainer(),
        id,
    }];

    modelRoutes.forEach((model) => {
        const { path, routeName, actions = [] } = model;

        actions.forEach((key) => {
            id += 1;
            const { action, label } = key;
            let pathName;

            switch (action) {
            case 'index': {
                pathName = path;
                break;
            }
            case 'show':
            case 'update': {
                pathName = `${path}/${label}/:id`;
                break;
            }
            case 'create': {
                pathName = `${path}/${label}`;
                break;
            }
            default:
                pathName = '';
            }

            routeList.push({
                exact: true,
                path: `/${pathName}`,
                name: `${routeName}-${action}`,
                component: screenContainer({
                    model,
                    action,
                    panel,
                    modal,
                }),
                id,
            });
        });
    });

    return routeList;
};

export default routes;

export const auth = {
    login: {
        path: '/login', name: 'Login',
    },
};
