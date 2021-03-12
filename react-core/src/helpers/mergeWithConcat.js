import { merge, mergeWith, isArray } from 'lodash';

const concatCustomizer = (objValue, srcValue) => {
    if (isArray(objValue)) {
        return objValue.concat(srcValue);
    }

    return undefined;
};

export const mergeWithConcat = (object, other) => mergeWith(merge({}, object), other, concatCustomizer);

export default mergeWithConcat;
