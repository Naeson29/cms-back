import { screenContainer } from '../containers';
import {
    screenList,
    screenShow,
} from '../components/screens';

const routes = (models) => {
    const modelRoutes = Object.keys(models).filter(key => !!models[key].name && !!models[key].routeName).map(model => models[model]);

    const panel = true;
    const modal = true;

    let id = 1;

    const screens = {
        index: screenList,
        show: screenShow,
    };

    const routeList = [{
        exact: true,
        path: '/',
        name: 'Dashboard',
        component: screenContainer(),
        id,
    }];

    modelRoutes.forEach((model) => {
        const { name, routeName, actions = [] } = model;

        actions.forEach((action) => {
            id += 1;
            const pathName = action.value !== 'index' ? `${name}-${action.value}` : name;

            routeList.push({
                exact: true,
                path: `/${pathName}`,
                name: routeName,
                component: screenContainer({
                    model,
                    component: screens[action.value],
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
