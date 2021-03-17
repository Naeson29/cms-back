import { createActionTypes } from '../../../react-core';

export const types = {
    OPEN: createActionTypes('modal', 'OPEN', ['DO']),
    CLOSE: createActionTypes('modal', 'CLOSE', ['DO'])
};

export const creators = {
    open: {
        do: payload => ({
            type: types.OPEN.DO,
            payload,
        }),
    },
    close: {
        do: payload => ({
            type: types.CLOSE.DO,
            payload,
        }),
    }
};