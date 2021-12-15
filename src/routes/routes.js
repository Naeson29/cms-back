import models from '../models';
import { setContainer } from '../containers';

const panel = true;
const modal = true;

let id = 1;

const index = [{
    exact: true,
    path: '/',
    name: 'Dashboard',
    component: setContainer(),
    id,
},
...Object.keys(models).map((key) => {
    id += 1;
    return {
        exact: true,
        path: `/${models[key].name}`,
        name: models[key].routeName,
        component: setContainer({
            model: models[key],
            panel,
            modal,
        }),
        id,
    };
})];

export default index;

export const auth = {
    login: {
        path: '/login', name: 'Login',
    },
};
