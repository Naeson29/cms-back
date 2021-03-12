import { isolateMemoization } from './index';

describe('isolateMemoization', () => {
    it('is provided', () => {
        expect(isolateMemoization).toBeDefined();
    });

    it('is a function', () => {
        expect(isolateMemoization).toBeInstanceOf(Function);
    });

    it('creates a new instance of the provided selector parameter without changing its behavior', () => {
        const selector = () => 'spec';
        const isolatedOne = isolateMemoization(selector);
        const isolatedTwo = isolateMemoization(selector);

        expect(isolatedOne()).toBe(selector());
        expect(isolatedTwo()).toBe(selector());
        expect(isolatedOne()).toBe(isolatedTwo());

        expect(isolatedOne).not.toBe(selector);
        expect(isolatedTwo).not.toBe(selector);
        expect(isolatedOne).not.toBe(isolatedTwo);
    });
});
