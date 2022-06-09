import { modelContainer } from '../containers';

const routes = (models) => {
    const modelRoutes = Object.keys(models).map(model => models[model]);

    let id = 1;

    const routeList = [{
        exact: true,
        path: '/',
        name: 'dashboard',
        component: modelContainer(),
        id,
    }];

    modelRoutes.forEach((model) => {
        const { route, screens = [] } = model;

        screens.forEach((key) => {
            id += 1;
            const { screen, label } = key;
            let pathName;

            switch (screen) {
            case 'index': {
                pathName = route;
                break;
            }
            case 'show':
            case 'update': {
                pathName = `${route}/${label}/:id`;
                break;
            }
            default:
                pathName = `${route}/${label}`;
            }

            routeList.push({
                exact: true,
                path: `/${pathName}`,
                name: `${route}-${screen}`,
                component: modelContainer({
                    model,
                    screen,
                }),
                id,
            });
        });
    });

    // TODO other routes

    return routeList;
};

export default routes;

export const auth = {
    login: {
        path: '/login', name: 'Login',
    },
};
