import { creators } from '../../Actions/User';
import selectors from '../../Selectors/User';

/**
 *
 * @type {{params: {limit: number, order: {column: string}}}}
 */
const paramsList = {
    params: {
        limit: 50,
        order: {
            column: 'first_name',
        },
    },
};

export default {
    creators,
    selectors,
    paramsList,
};
