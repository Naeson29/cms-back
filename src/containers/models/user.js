import { creators } from '../../actions/user';
import selectors from '../../selectors/user';

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
