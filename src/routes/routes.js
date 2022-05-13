import { screenContainer } from '../containers';

const routes = (models) => {
    const modelRoutes = Object.keys(models).filter(key => !!models[key].name && !!models[key].route).map(model => models[model]);

    let id = 1;

    const routeList = [{
        exact: true,
        path: '/',
        name: 'dashboard',
        component: screenContainer(),
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
            case 'create': {
                pathName = `${route}/${label}`;
                break;
            }
            default:
                pathName = '';
            }

            routeList.push({
                exact: true,
                path: `/${pathName}`,
                name: `${route}-${screen}`,
                component: screenContainer({
                    model,
                    screen,
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
