import { createActionTypes } from '../../../react-core';

export const types = {
    PUSH: createActionTypes('navigation', 'PUSH', ['DO']),
    BACK: createActionTypes('navigation', 'BACK', ['DO']),
};

export const creators = {
    push: {
        do: path => ({
            type: types.PUSH.DO,
            payload: {
                path,
            },
        }),
    },
    back: {
        do: () => ({ type: types.BACK.DO }),
    },
};
