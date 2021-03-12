import { DEFAULT_MODEL_ACTION_NAMES, createModelActionTypes, createDefaultModelActionTypes } from './index';

describe('DEFAULT_MODEL_ACTION_NAMES', () => {
    it('is provided', () => {
        expect(DEFAULT_MODEL_ACTION_NAMES).toBeDefined();
    });

    it('is a non-empty string array', () => {
        expect(Array.isArray(DEFAULT_MODEL_ACTION_NAMES)).toBe(true);
        expect(DEFAULT_MODEL_ACTION_NAMES.length > 0).toBe(true);
        expect(DEFAULT_MODEL_ACTION_NAMES.every(s => typeof s === typeof '')).toBe(true);
    });
});


describe('createModelActionTypes', () => {
    it('is provided', () => {
        expect(createModelActionTypes).toBeDefined();
    });

    it('is a function', () => {
        expect(createModelActionTypes).toBeInstanceOf(Function);
    });

    it('generates a namespaced action types strings tree', () => {
        expect(createModelActionTypes('namespace', ['NAME1', 'NAME2'], ['STEP1', 'STEP2'])).toStrictEqual({
            NAME1: {
                STEP1: 'namespace/NAME1_STEP1',
                STEP2: 'namespace/NAME1_STEP2',
            },
            NAME2: {
                STEP1: 'namespace/NAME2_STEP1',
                STEP2: 'namespace/NAME2_STEP2',
            },
        });
    });

    it('allows to omit the actionNames parameter to use the DEFAULT_MODEL_ACTION_NAMES', () => {
        expect(createModelActionTypes('namespace'))
            .toStrictEqual(createModelActionTypes('namespace', DEFAULT_MODEL_ACTION_NAMES));
    });
});

describe('createDefaultModelActionTypes', () => {
    it('is provided', () => {
        expect(createDefaultModelActionTypes).toBeDefined();
    });

    it('is a function', () => {
        expect(createDefaultModelActionTypes).toBeInstanceOf(Function);
    });

    it('is equivalent to createModelActionTypes with DEFAULT_MODEL_ACTION_NAMES provided as actionNames', () => {
        expect(createDefaultModelActionTypes('namespace'))
            .toStrictEqual(createModelActionTypes('namespace', DEFAULT_MODEL_ACTION_NAMES));
    });
});
