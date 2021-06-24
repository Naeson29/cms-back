import { createActionTypes } from '../../../react-core';

const types = {
    OPEN: createActionTypes('panel', 'OPEN', ['DO']),
    CLOSE: createActionTypes('panel', 'CLOSE', ['DO']),
};

const creators = {
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

export default {
    types,
    creators,
};
