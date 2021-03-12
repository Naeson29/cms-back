import { createHttpApiClass } from './index';

const fakeApiConfiguration = {
    baseURL: 'https://reqres.in/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};

describe('createHttpApiClass', () => {
    it('is provided', () => {
        expect(createHttpApiClass).toBeDefined();
    });

    it('is a function', () => {
        expect(createHttpApiClass).toBeInstanceOf(Function);
    });

    it('can be used via function call', () => {
        const ParameterizedApi = createHttpApiClass(fakeApiConfiguration);
        const api = new ParameterizedApi();
        expect(api).toBeInstanceOf(ParameterizedApi);
    });

    it('can be extended via inheritance', () => {
        const youShould = 'not pass';

        class ParameterizedApi extends createHttpApiClass(fakeApiConfiguration) {
            constructor(shouldYou) {
                super();
                this.youShould = shouldYou;
            }

            tableTennis(message) {
                if (message === 'ping') return 'pong';
                return null;
            }
        }

        const api = new ParameterizedApi(youShould);
        expect(api).toBeInstanceOf(ParameterizedApi);

        expect(api.youShould).toBe(youShould);
        expect(api.tableTennis('ping')).toBe('pong');
        expect(api.tableTennis('pong')).toBe(null);
    });
});

let apiInstance = null;
describe('HttpApi', () => {
    beforeAll(() => {
        apiInstance = new (createHttpApiClass(fakeApiConfiguration))();
    });

    describe('.get', () => {
        it('is provided', () => {
            expect(apiInstance.get).toBeDefined();
        });

        it('is a function', () => {
            expect(apiInstance.get).toBeInstanceOf(Function);
        });

        it('sends a valid GET request and receives a valid response', async () => {
            const { data: response, status } = (await apiInstance.get({ url: '/users' }));
            expect(status).toBe(200);
            expect(typeof response).toBe(typeof {});
        });
    });

    describe('.post', () => {
        it('is provided', () => {
            expect(apiInstance.post).toBeDefined();
        });

        it('is a function', () => {
            expect(apiInstance.post).toBeInstanceOf(Function);
        });

        it('sends a valid POST request and receives a valid response', async () => {
            const { data: response, status } = (await apiInstance.post({ url: '/users' }));
            expect(status).toBe(201);
            expect(typeof response).toBe(typeof {});
        });
    });

    describe('.put', () => {
        it('is provided', () => {
            expect(apiInstance.put).toBeDefined();
        });

        it('is a function', () => {
            expect(apiInstance.put).toBeInstanceOf(Function);
        });

        it('sends a valid PUT request and receives a valid response', async () => {
            const { data: response, status } = (await apiInstance.put({ url: '/users/1' }));
            expect(status).toBe(200);
            expect(typeof response).toBe(typeof {});
        });
    });


    describe('.patch', () => {
        it('is provided', () => {
            expect(apiInstance.patch).toBeDefined();
        });

        it('is a function', () => {
            expect(apiInstance.patch).toBeInstanceOf(Function);
        });

        it('sends a valid PATCH request and receives a valid response', async () => {
            const { data: response, status } = (await apiInstance.patch({ url: '/users/1' }));
            expect(status).toBe(200);
            expect(typeof response).toBe(typeof {});
        });
    });

    describe('.delete', () => {
        it('is provided', () => {
            expect(apiInstance.delete).toBeDefined();
        });

        it('is a function', () => {
            expect(apiInstance.delete).toBeInstanceOf(Function);
        });

        it('sends a valid DELETE request and receives a valid response', async () => {
            const { status } = (await apiInstance.delete({ url: '/users/1' }));
            expect(status).toBe(204);
        });
    });
});
