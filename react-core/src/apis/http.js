/**
 *
 * @file createHttpApiClass.js
 */

import Axios from 'axios';
import { mergeWithConcat, serializeParams } from '../helpers';

export const METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
    PATCH: 'patch',
};

/**
 *
 * @function createHttpApiClass
 * @param {{headers: {Authorization: string, Accept: string, "Content-Type": string}, baseURL: string}} axiosRequestConfiguration
 * @return {HttpApi}
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
 * const mySuperApi = new MySuperApi();
 * const data = await mySuperApi.get('/');
 */
export const createHttpApiClass = (axiosRequestConfiguration) => {
    /**
     *
     * @class HttpApi
     */
    class HttpApi {
        DEFAULT_AXIOS_REQUEST_CONFIGURATION = { paramsSerializer: serializeParams };

        // @TODO unit test the config overrides
        constructor(axiosRequestConfigurationOverrides = {}) {
            this.axiosRequestConfiguration = this.DEFAULT_AXIOS_REQUEST_CONFIGURATION;
            this.addConfiguration(axiosRequestConfiguration);
            this.addConfiguration(axiosRequestConfigurationOverrides);
        }

        addConfiguration(additionalAxiosRequestConfiguration = {}) {
            const { params = {}, data = {} } = additionalAxiosRequestConfiguration;
            this.axiosRequestConfiguration = mergeWithConcat(this.axiosRequestConfiguration, additionalAxiosRequestConfiguration);
            this.httpClient = Axios.create(this.axiosRequestConfiguration);
            this.defaultParams = mergeWithConcat(this.defaultParams, params);
            this.defaultData = mergeWithConcat(this.defaultData, data);
        }

        /**
         *
         * @method HttpApi#request
         * @param {string} method
         * @return {HttpApi.CurriedRequest}
         */
        request(method) {
            /**
             *
             * @typedef HttpApi.CurriedRequestParameters
             * @type {object}
             * @property {string} url
             * @property {*} *
             */

            /**
             *
             * @typedef HttpApi.CurriedRequest
             * @type {function}
             * @param {HttpApi.CurriedRequestParameters} curriedRequestParameters
             * @return {AxiosPromise}
             */
            return async ({ url, params, data, ...args }) => this.httpClient.request({
                method,
                url,
                params: mergeWithConcat(this.defaultParams, params),
                /* Prevent the NSURLErrorDataLengthExceedsMaximum on iOS 13+ by removing the GET requests body */
                data: method !== METHODS.GET ? mergeWithConcat(this.defaultData, data) : null,
                ...args,
            });
        }

        /**
         *
         * @method HttpApi#get
         * @param {string} url
         * @param {object} [params={}]
         * @param {object} [options={}]
         * @return {AxiosPromise}
         */

        // get({ url, params = {}, options = {}}) {
        get(...args) {
            /** @deprecated */
            if (typeof args[0] === typeof '') {
                const [url, params = {}, options = {}] = args;
                // eslint-disable-next-line max-len, no-console
                console.warn('Usage HttpApi.get(url, params, options) is deprecated and will be deleted in the final version of react-core@1. Please migrate to HttpApi.get({ url, params, options }) as soon as possible !');
                return this.request(METHODS.GET)({ url, params, ...options });
            }

            const { url, params = {}, options = {} } = args[0];
            return this.request(METHODS.GET)({ url, params, ...options });
        }

        /**
         *
         * @method HttpApi#post
         * @param {string} url
         * @param {object} [data={}]
         * @param {object} [options={}]
         * @return {AxiosPromise}
         */
        // post(url, data = {}, options = {}) {
        post(...args) {
            /** @deprecated */
            if (typeof args[0] === typeof '') {
                const [url, data = {}, options = {}] = args;
                // eslint-disable-next-line max-len, no-console
                console.warn('Usage HttpApi.post(url, data, options) is deprecated and will be deleted in the final version of react-core@1. Please migrate to HttpApi.post({ url, data, options }) as soon as possible !');
                return this.request(METHODS.POST)({ url, data, ...options });
            }

            const { url, data = {}, options = {} } = args[0];
            return this.request(METHODS.POST)({ url, data, ...options });
        }

        /**
         *
         * @method HttpApi#put
         * @param {string} url
         * @param {object} [data={}]
         * @param {object} [options={}]
         * @return {AxiosPromise}
         */
        // put(url, data = {}, options = {}) {
        put(...args) {
            /** @deprecated */
            if (typeof args[0] === typeof '') {
                const [url, data = {}, options = {}] = args;
                // eslint-disable-next-line max-len, no-console
                console.warn('Usage HttpApi.put(url, data, options) is deprecated and will be deleted in the final version of react-core@1. Please migrate to HttpApi.put({ url, data, options }) as soon as possible !');
                return this.request(METHODS.PUT)({ url, data, ...options });
            }

            const { url, data = {}, options = {} } = args[0];
            return this.request(METHODS.PUT)({ url, data, ...options });
        }

        /**
         *
         * @method HttpApi#patch
         * @param {string} url
         * @param {object} [data={}]
         * @param {object} [options={}]
         * @return {AxiosPromise}
         */
        // patch(url, data = {}, options = {}) {
        patch(...args) {
            /** @deprecated */
            if (typeof args[0] === typeof '') {
                const [url, data = {}, options = {}] = args;
                // eslint-disable-next-line max-len, no-console
                console.warn('Usage HttpApi.patch(url, data, options) is deprecated and will be deleted in the final version of react-core@1. Please migrate to HttpApi.patch({ url, data, options }) as soon as possible !');
                return this.request(METHODS.PATCH)({ url, data, ...options });
            }

            const { url, data = {}, options = {} } = args[0];
            return this.request(METHODS.PATCH)({ url, data, ...options });
        }

        /**
         *
         * @method HttpApi#delete
         * @param {string} url
         * @param {object} [options={}]
         * @return {AxiosPromise}
         */
        // delete(url, options = {}) {
        delete(...args) {
            /** @deprecated */
            if (typeof args[0] === typeof '') {
                const [url, options = {}] = args;
                // eslint-disable-next-line max-len, no-console
                console.warn('Usage HttpApi.delete(url, options) is deprecated and will be deleted in the final version of react-core@1. Please migrate to HttpApi.delete({ url, options }) as soon as possible !');
                return this.request(METHODS.DELETE)({ url, ...options });
            }

            const { url, options = {} } = args[0];
            return this.request(METHODS.DELETE)({ url, ...options });
        }
    }

    return HttpApi;
};

export default createHttpApiClass;
