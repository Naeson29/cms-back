import { createActionTypes } from '../../react-core';

export const types = {
    CLOSE: createActionTypes('panel', 'CLOSE', ['DO']),
    OPEN: createActionTypes('panel', 'OPEN', ['DO']),
};

export const creators = {
    close: {
        do() {
            return {
                type: types.CLOSE.DO
            };
        }
    },
    open: {
        do(panel, parameters, callbacks) {
            return {
                type: types.OPEN.DO,
                payload: {
                    label: panel,
                    parameters: parameters,
                    callbacks: callbacks,
                }
            };
        }
    },
};