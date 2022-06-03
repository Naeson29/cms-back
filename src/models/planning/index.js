import { BiCalendar } from 'react-icons/bi';
import { model } from '../model';

const name = 'planning';

export default {

    ...model,

    name,

    route: 'planning',

    menu: t => ({
        label: t('planning'),
        icon: BiCalendar,
    }),

    screens: [
        {
            screen: 'index',
        },
    ],

    actions: {
        planning: true,
    },

    renders: {
    },
};
