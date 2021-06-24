import { createActionTypes } from '../../../react-core';

const types = {
    PUSH: createActionTypes('navigation', 'PUSH', ['DO']),
    BACK: createActionTypes('navigation', 'BACK', ['DO']),
};

const creators = {
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

export default {
    types,
    creators,
};
