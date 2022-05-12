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
        const { name, routeName, actions = [] } = model;

        actions.forEach((key) => {
            id += 1;
            const { action } = key;
            const pathName = action !== 'index' ? `${name}-${action}` : name;

            routeList.push({
                exact: true,
                path: `/${pathName}`,
                name: routeName,
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
