import { createActionTypes } from '../../../react-core';

const types = {
    OPEN: createActionTypes('modal', 'OPEN', ['DO']),
    CLOSE: createActionTypes('modal', 'CLOSE', ['DO']),
};

const creators = {
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
    },
};

export default {
    types,
    creators,
};
