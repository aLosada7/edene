import users from './users';

describe('User reducer', () => {
    const initialState = {
        users: [],
        loading: false,
        error: null,
    };

    it('returns the initial state when an action type is not passed', () => {
        const reducer = users(undefined, {
            type: undefined,
        });
        expect(reducer).toEqual(initialState);
    });

    it('handles GET_USERS_PENDING as expected', () => {
        const reducer = users(initialState, {
            type: 'GET_USERS_PENDING',
        });
        expect(reducer).toEqual({ ...initialState, loading: true });
    });

    it('handles GET_USERS_FULLFILLED as expected', () => {
        const reducer = users(initialState, {
            type: 'GET_USERS_FULLFILLED',
            payload: { data: [{ id: 1, name: 'John' }] },
        });
        expect(reducer).toEqual({
            ...initialState,
            users: [{ id: 1, name: 'John' }],
        });
    });

    it('handles GET_USERS_REJECTED as expected', () => {
        const reducer = users(initialState, {
            type: 'GET_USERS_REJECTED',
            payload: { data: [{ id: 1, name: 'John' }] },
        });
        expect(reducer).toEqual({ error: true, loading: false, users: [] });
    });
});
