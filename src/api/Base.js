import { createHttpApiClass } from  '../../react-core';

const configuration = {
    baseURL: process.env.API_URL + 'api',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
};

export default class Core extends createHttpApiClass(configuration) {}