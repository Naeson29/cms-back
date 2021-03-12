import {
    createModelSelector,
    createModelIndexViewSelector,
    createModelNewViewSelector,
    createModelShowViewSelector,
    createModelEditViewSelector,
    createModelDestroyViewSelector,
} from './index';

describe('createModelSelector', () => {
    it('is provided', () => {
        expect(createModelSelector).toBeDefined();
    });

    it('is a function', () => {
        expect(createModelSelector).toBeInstanceOf(Function);
    });

    it('returns the model dedicated substate', () => {
        const Model = 'spec';
        const state = { Model };

        const selector = createModelSelector('Model');
        expect(selector(state)).toBe(Model);
    });
});

describe('createModelIndexViewSelector', () => {
    it('is provided', () => {
        expect(createModelIndexViewSelector).toBeDefined();
    });

    it('is a function', () => {
        expect(createModelIndexViewSelector).toBeInstanceOf(Function);
    });

    it('returns the model index view with derived data', () => {
        const results = ['keyTwo', 'keyOne'];
        const Model = { data: { keyOne: 'valueOne', keyTwo: 'valueTwo' }, views: { index: { error: null, loading: false, results } } };
        const state = { Model };

        const selector = createModelIndexViewSelector('Model');
        expect(selector(state)).toStrictEqual({ ...Model.views.index, content: ['valueTwo', 'valueOne'] });
    });
});

describe('createModelNewViewSelector', () => {
    it('is provided', () => {
        expect(createModelNewViewSelector).toBeDefined();
    });

    it('is a function', () => {
        expect(createModelNewViewSelector).toBeInstanceOf(Function);
    });

    it('returns the model new view with derived data', () => {
        const Model = { views: { new: { error: null, loading: false } } };
        const state = { Model };

        const selector = createModelNewViewSelector('Model');
        expect(selector(state)).toStrictEqual({ ...Model.views.new });
    });
});

describe('createModelShowViewSelector', () => {
    it('is provided', () => {
        expect(createModelShowViewSelector).toBeDefined();
    });

    it('is a function', () => {
        expect(createModelShowViewSelector).toBeInstanceOf(Function);
    });

    it('returns the model show view with derived data', () => {
        const targetKey = 'keyOne';
        const targetValue = 'valueOne';
        const Model = { data: { [targetKey]: targetValue, keyTwo: 'valueTwo' }, views: { show: { error: null, loading: false } } };
        const state = { Model };

        const selector = createModelShowViewSelector('Model', targetKey);
        expect(selector(state)).toStrictEqual({ ...Model.views.show, content: targetValue });
    });
});

describe('createModelEditViewSelector', () => {
    it('is provided', () => {
        expect(createModelEditViewSelector).toBeDefined();
    });

    it('is a function', () => {
        expect(createModelEditViewSelector).toBeInstanceOf(Function);
    });

    it('returns the model edit view with derived data', () => {
        const targetKey = 'keyOne';
        const targetValue = 'valueOne';
        const Model = { data: { [targetKey]: targetValue, keyTwo: 'valueTwo' }, views: { edit: { error: null, loading: false } } };
        const state = { Model };

        const selector = createModelEditViewSelector('Model', targetKey);
        expect(selector(state)).toStrictEqual({ ...Model.views.edit, content: targetValue });
    });
});

describe('createModelDestroyViewSelector', () => {
    it('is provided', () => {
        expect(createModelDestroyViewSelector).toBeDefined();
    });

    it('is a function', () => {
        expect(createModelDestroyViewSelector).toBeInstanceOf(Function);
    });

    it('returns the model destroy view with derived data', () => {
        const targetKey = 'keyOne';
        const targetValue = 'valueOne';
        const Model = { data: { [targetKey]: targetValue, keyTwo: 'valueTwo' }, views: { destroy: { error: null, loading: false } } };
        const state = { Model };

        const selector = createModelDestroyViewSelector('Model', targetKey);
        expect(selector(state)).toStrictEqual({ ...Model.views.destroy, content: targetValue });
    });
});
