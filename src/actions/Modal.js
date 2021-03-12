import { createActionTypes } from '../../react-core';

export const types = {
    CLOSE: createActionTypes('modal', 'CLOSE', ['DO']),
    OPEN: createActionTypes('modal', 'OPEN', ['DO']),
};

export const creators = {
    close: {
        do : payload => ({
            type: types.CLOSE.DO,
            payload
        })
    },
    open: {
        do : payload => ({
            type: types.OPEN.DO,
            payload
        })
    },
};