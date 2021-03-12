import { createDefaultModelActionCreators } from './index';

describe('createDefaultModelActionCreators', () => {
    it('is provided', () => {
        expect(createDefaultModelActionCreators).toBeDefined();
    });

    it('is a function', () => {
        expect(createDefaultModelActionCreators).toBeInstanceOf(Function);
    });

    it('creates the usual actions creators tree', () => {
        const types = {
            SEARCH: { REQUEST: 'spec/SEARCH_REQUEST', SUCCESS: 'spec/SEARCH_SUCCESS', FAILURE: 'spec/SEARCH_FAILURE' },
            CREATE: { REQUEST: 'spec/CREATE_REQUEST', SUCCESS: 'spec/CREATE_SUCCESS', FAILURE: 'spec/CREATE_FAILURE' },
            READ: { REQUEST: 'spec/READ_REQUEST', SUCCESS: 'spec/READ_SUCCESS', FAILURE: 'spec/READ_FAILURE' },
            UPDATE: { REQUEST: 'spec/UPDATE_REQUEST', SUCCESS: 'spec/UPDATE_SUCCESS', FAILURE: 'spec/UPDATE_FAILURE' },
            DESTROY: { REQUEST: 'spec/DELETE_REQUEST', SUCCESS: 'spec/DELETE_SUCCESS', FAILURE: 'spec/DELETE_FAILURE' },
        };

        const creators = createDefaultModelActionCreators(types);

        expect(creators).toMatchObject({
            search: {
                request: expect.any(Function),
                success: expect.any(Function),
                failure: expect.any(Function),
            },
            create: {
                request: expect.any(Function),
                success: expect.any(Function),
                failure: expect.any(Function),
            },
            read: {
                request: expect.any(Function),
                success: expect.any(Function),
                failure: expect.any(Function),
            },
            update: {
                request: expect.any(Function),
                success: expect.any(Function),
                failure: expect.any(Function),
            },
            destroy: {
                request: expect.any(Function),
                success: expect.any(Function),
                failure: expect.any(Function),
            },
        });

        const id = 'spec';
        const data = { key: 'value' };

        expect(creators.search.request(data)).toStrictEqual({ type: types.SEARCH.REQUEST, payload: data, meta: null });
        expect(creators.search.success(data)).toStrictEqual({ type: types.SEARCH.SUCCESS, payload: data, meta: null });
        expect(creators.search.failure(data)).toStrictEqual({ type: types.SEARCH.FAILURE, payload: data, meta: null });

        expect(creators.create.request(data)).toStrictEqual({ type: types.CREATE.REQUEST, payload: { data }, meta: null });
        expect(creators.create.success(data)).toStrictEqual({ type: types.CREATE.SUCCESS, payload: data, meta: null });
        expect(creators.create.failure(data)).toStrictEqual({ type: types.CREATE.FAILURE, payload: data, meta: null });

        expect(creators.read.request(id)).toStrictEqual({ type: types.READ.REQUEST, payload: { id }, meta: null });
        expect(creators.read.success(data)).toStrictEqual({ type: types.READ.SUCCESS, payload: data, meta: null });
        expect(creators.read.failure(data)).toStrictEqual({ type: types.READ.FAILURE, payload: data, meta: null });

        expect(creators.update.request(id, data)).toStrictEqual({ type: types.UPDATE.REQUEST, payload: { id, data }, meta: null });
        expect(creators.update.success(data)).toStrictEqual({ type: types.UPDATE.SUCCESS, payload: data, meta: null });
        expect(creators.update.failure(data)).toStrictEqual({ type: types.UPDATE.FAILURE, payload: data, meta: null });

        expect(creators.destroy.request(id)).toStrictEqual({ type: types.DESTROY.REQUEST, payload: { id }, meta: null });
        expect(creators.destroy.success(data)).toStrictEqual({ type: types.DESTROY.SUCCESS, payload: data, meta: null });
        expect(creators.destroy.failure(data)).toStrictEqual({ type: types.DESTROY.FAILURE, payload: data, meta: null });
    });
});
