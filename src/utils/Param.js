/**
 *
 * @type {{user: {params: {limit: number, order: {column: string}}}}}
 */
const params = {
    user : {
        params: {
            limit: 50,
            order: {
                column: 'first_name',
            },
        }
    }
};

export default (model) => (params[model]);