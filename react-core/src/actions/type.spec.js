import { createActionType } from './index';

describe('createActionType', () => {
    it('is provided', () => {
        expect(createActionType).toBeDefined();
    });

    it('is a function', () => {
        expect(createActionType).toBeInstanceOf(Function);
    });

    it('generates a namespaced action type string', () => {
        expect(createActionType('namespace', 'NAME', 'STEP')).toBe('namespace/NAME_STEP');
    });
});
