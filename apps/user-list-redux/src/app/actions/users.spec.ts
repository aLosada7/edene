import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { getUsers } from './users';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockStore = configureMockStore([thunk, promiseMiddleware]);

describe('User actions', () => {
    let store: any;

    beforeEach(() => {
        store = mockStore({
            users: {},
        });
    });

    describe('getUsers action creator', () => {
        it('dispatches GET_USERS action and returns data on success', async () => {
            mockedAxios.get.mockImplementationOnce(() =>
                Promise.resolve({
                    data: [{ id: 1, name: 'Vasilis' }],
                })
            );

            await store.dispatch(getUsers());
            const actions = store.getActions();

            expect.assertions(3);
            expect(actions[0].type).toEqual('GET_USERS_PENDING');
            expect(actions[1].type).toEqual('GET_USERS_FULFILLED');
            expect(actions[1].payload.data[0].name).toEqual('Vasilis');
        });
    });
});
