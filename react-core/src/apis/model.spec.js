import { createHttpApiClass, createModelApiClass } from './index';

const fakeApiConfiguration = {
    baseURL: 'https://reqres.in/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};

class ParameterizedApi extends createHttpApiClass(fakeApiConfiguration) {}

describe('createModelApiClass', () => {
    it('is provided', () => {
        expect(createModelApiClass).toBeDefined();
    });

    it('is a function', () => {
        expect(createModelApiClass).toBeInstanceOf(Function);
    });

    it('can be used via function call', () => {
        const PostsApi = createModelApiClass(ParameterizedApi, '/posts');

        const postsApi = new PostsApi();
        expect(postsApi).toBeInstanceOf(PostsApi);
    });

    it('can be extended via inheritance', () => {
        const youShould = 'not pass';

        class PostsApi extends createModelApiClass(ParameterizedApi, '/posts') {
            constructor(shouldYou) {
                super();
                this.youShould = shouldYou;
            }

            tableTennis(message) {
                if (message === 'ping') return 'pong';
                return null;
            }
        }

        const postsApi = new PostsApi(youShould);
        expect(postsApi).toBeInstanceOf(PostsApi);

        expect(postsApi.youShould).toBe(youShould);
        expect(postsApi.tableTennis('ping')).toBe('pong');
        expect(postsApi.tableTennis('pong')).toBe(null);
    });
});


let apiInstance = null;
describe('ModelApi', () => {
    beforeAll(() => {
        apiInstance = new (createModelApiClass(ParameterizedApi, '/users'))();
    });

    describe('.search', () => {
        it('is provided', () => {
            expect(apiInstance.search).toBeDefined();
        });

        it('is a function', () => {
            expect(apiInstance.search).toBeInstanceOf(Function);
        });

        it('sends a valid GET / request and receives a valid response', async () => {
            const { data: response, status } = (await apiInstance.search());
            expect(status).toBe(200);
            expect(typeof response).toBe(typeof {});
        });
    });

    describe('.create', () => {
        it('is provided', () => {
            expect(apiInstance.create).toBeDefined();
        });

        it('is a function', () => {
            expect(apiInstance.create).toBeInstanceOf(Function);
        });

        it('sends a valid POST / request and receives a valid response', async () => {
            const { data: response, status } = (await apiInstance.create({}));
            expect(status).toBe(201);
            expect(typeof response).toBe(typeof {});
        });
    });

    describe('.read', () => {
        it('is provided', () => {
            expect(apiInstance.read).toBeDefined();
        });

        it('is a function', () => {
            expect(apiInstance.read).toBeInstanceOf(Function);
        });

        it('sends a valid GET /{id} request and receives a valid response', async () => {
            const { data: response, status } = (await apiInstance.read({ id: 1 }));
            expect(status).toBe(200);
            expect(typeof response).toBe(typeof {});
        });
    });

    describe('.update', () => {
        it('is provided', () => {
            expect(apiInstance.update).toBeDefined();
        });

        it('is a function', () => {
            expect(apiInstance.update).toBeInstanceOf(Function);
        });

        it('sends a valid PUT /{id} request and receives a valid response', async () => {
            const { data: response, status } = (await apiInstance.update({ id: 1 }));
            expect(status).toBe(200);
            expect(typeof response).toBe(typeof {});
        });
    });

    describe('.destroy', () => {
        it('is provided', () => {
            expect(apiInstance.destroy).toBeDefined();
        });

        it('is a function', () => {
            expect(apiInstance.destroy).toBeInstanceOf(Function);
        });

        it('sends a valid DELETE /{id} request and receives a valid response', async () => {
            const { status } = (await apiInstance.destroy({ id: 1 }));
            expect(status).toBe(204);
        });
    });
});
