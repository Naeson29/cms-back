import { DEFAULT_HTTP_ACTION_STEPS, createActionTypes, createDefaultHttpActionTypes } from '../index';

describe('DEFAULT_HTTP_ACTIONS_STEPS', () => {
    it('is provided', () => {
        expect(DEFAULT_HTTP_ACTION_STEPS).toBeDefined();
    });

    it('is a non-empty string array', () => {
        expect(Array.isArray(DEFAULT_HTTP_ACTION_STEPS)).toBe(true);
        expect(DEFAULT_HTTP_ACTION_STEPS.length > 0).toBe(true);
        expect(DEFAULT_HTTP_ACTION_STEPS.every(s => typeof s === typeof '')).toBe(true);
    });
});

describe('createDefaultHttpActionTypes', () => {
    it('is provided', () => {
        expect(createDefaultHttpActionTypes).toBeDefined();
    });

    it('is a function', () => {
        expect(createDefaultHttpActionTypes).toBeInstanceOf(Function);
    });

    it('is equivalent to createActionTypes with DEFAULT_HTTP_ACTION_STEPS provided as actionSteps', () => {
        expect(createDefaultHttpActionTypes('namespace', 'NAME'))
            .toStrictEqual(createActionTypes('namespace', 'NAME', DEFAULT_HTTP_ACTION_STEPS));
    });
});
