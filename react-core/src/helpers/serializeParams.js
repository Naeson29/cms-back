import { stringify } from 'qs';

export const DEFAULT_PARAMS_SERIALIZATION_OPTIONS = { encode: false, arrayFormat: 'indices' };

export const paramsSerializationFunction = stringify;

export const serializeParams = (params, options = DEFAULT_PARAMS_SERIALIZATION_OPTIONS) => paramsSerializationFunction(params, options);
