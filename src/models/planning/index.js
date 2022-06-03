import { BiNews } from 'react-icons/bi';
import { model } from '../model';

const name = 'planning';

export default {

    ...model,

    name,

    route: 'planning',

    menu: t => ({
        label: t('planning'),
        icon: BiNews,
    }),

    screens: [
        {
            screen: 'index',
        },
    ],

    renders: {
    },
};
