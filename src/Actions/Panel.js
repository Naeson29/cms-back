import { createActionTypes } from '../../react-core';

export const types = {
    CLOSE: createActionTypes('panel', 'CLOSE', ['DO']),
    OPEN: createActionTypes('panel', 'OPEN', ['DO']),
};

export const creators = {
    close: {
        do: () => ({
            type: types.CLOSE.DO,
        }),
    },
    open: {
        do: payload => ({
            type: types.OPEN.DO,
            payload,
        }),
    },
};
