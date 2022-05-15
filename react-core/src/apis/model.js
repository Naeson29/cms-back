/**
 *
 * @function createModelApiClass
 * @param {HttpApi} HttpApi
 * @param {string} path
 * @return {ModelApi}
 *
 * @example
 * const mySuperApiConfiguration = {
 *     baseURL: 'https://my-json-server.typicode.com/typicode/demo',
 *     headers: {
 *         'Content-Type': 'application/json',
 *         'Accept': 'application/json',
 *     },
 * };
 *
 * const MySuperApi = createHttpApiClass(mySuperApiConfiguration); // or class MySuperApi extends createHttpApiClass(mySuperApiConfiguration) {}
 * const MySuperUsersApi = createModelApiClass(MySuperApi, '/users'); // or class MySuperUsersApi extends createModelApiClass(MySuperApi, '/users') {}
 * const mySuperUserApi = new MySuperUsersApi();
 * const data = await mySuperUserApi.get('/');
 */
export const createModelApiClass = (HttpApi, path) => {
    /**
     *
     * @class ModelApi
     */
    class ModelApi extends HttpApi {
        // @TODO unit test the config overrides
        constructor(axiosRequestConfigurationOverrides) {
            super(axiosRequestConfigurationOverrides);
            this.path = path;
        }

        /**
         *
         * @method ModelApi#search
         * @param {object} [params={}]
         * @return {AxiosPromise}
         */
        search = ({ params = {}, ...options } = {}) => this.get({
            url: this.path, params, options,
        });

        /**
         *
         * @method ModelApi#search
         * @param {object} [params={}]
         * @return {AxiosPromise}
         */
        refresh = ({ params = {}, ...options } = {}) => this.get({
            url: this.path, params, options,
        });

        /**
         *
         * @method ModelApi#search
         * @param {object} [params={}]
         * @return {AxiosPromise}
         */
        more = ({ params = {}, ...options } = {}) => this.get({
            url: this.path, params, options,
        });

        /**
         *
         * @method ModelApi#search
         * @param {object} [params={}]
         * @return {AxiosPromise}
         */
        paginate = ({ params = {}, ...options } = {}) => this.get({
            url: this.path, params, options,
        });

        /**
         *
         * @method ModelApi#read
         * @param {string} id
         * @return {AxiosPromise}
         */
        read = ({ id, params = {}, ...options }) => this.get({
            url: `${this.path}/${id}`, params, options,
        });

        /**
         *
         * @method ModelApi#create
         * @param {object} [data={}]
         * @return {AxiosPromise}
         */
        create = ({ data = {}, ...options }) => this.post({
            url: this.path, data, options,
        });

        /**
         *
         * @method ModelApi#update
         * @param {string} id
         * @param {object} [data={}]
         * @return {AxiosPromise}
         */
        update = ({ id, data = {}, ...options }) => this.put({
            url: `${this.path}/${id}`, data, options,
        });

        /**
         *
         * @method ModelApi#destroy
         * @param {string} id
         * @return {AxiosPromise}
         */
        destroy = ({ id, ...options }) => this.delete({
            url: `${this.path}/${id}`, options,
        });
    }

    return ModelApi;
};

export default createModelApiClass;
