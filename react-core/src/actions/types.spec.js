import { createActionTypes } from './index';

describe('createActionTypes', () => {
    it('is provided', () => {
        expect(createActionTypes).toBeDefined();
    });

    it('is a function', () => {
        expect(createActionTypes).toBeInstanceOf(Function);
    });

    it('generates a namespaced action types strings dictionnary', () => {
        expect(createActionTypes('namespace', 'NAME', ['STEP1', 'STEP2', 'STEP3', 'STEP4'])).toStrictEqual({
            STEP1: 'namespace/NAME_STEP1',
            STEP2: 'namespace/NAME_STEP2',
            STEP3: 'namespace/NAME_STEP3',
            STEP4: 'namespace/NAME_STEP4',
        });
    });
});
