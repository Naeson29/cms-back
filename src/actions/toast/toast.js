import { createActionTypes } from '../../../react-core';

const types = {
    ADD: createActionTypes('toast', 'ADD', ['DO']),
    REMOVE: createActionTypes('toast', 'REMOVE', ['DO']),
};

const creators = {
    add: {
        do: payload => ({
            type: types.ADD.DO,
            payload,
        }),
    },
    remove: {
        do: () => ({
            type: types.REMOVE.DO,
        }),
    },
};

export default {
    types,
    creators,
};
