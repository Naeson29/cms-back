import { createActionTypes } from '../../../react-core';

export const types = {
    ADD: createActionTypes('toast', 'ADD', ['DO']),
    REMOVE: createActionTypes('toast', 'REMOVE', ['DO']),
};

export const creators = {
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
