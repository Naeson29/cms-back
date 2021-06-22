import { createActionTypes } from '../../../react-core';

export const types = {
    OPEN: createActionTypes('panel', 'OPEN', ['DO']),
    CLOSE: createActionTypes('panel', 'CLOSE', ['DO']),
};

export const creators = {
    open: {
        do: payload => ({
            type: types.OPEN.DO,
            payload,
        }),
    },
    close: {
        do: () => ({
            type: types.CLOSE.DO,
        }),
    },
};
