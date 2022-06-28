import users from './users';

describe('User reducer', () => {
    const initialState = {
        list: [],
        isNextPageLoading: false,
        error: null,
        total: 0,
        hasNextPage: true,
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
        expect(reducer).toEqual({ ...initialState, isNextPageLoading: true });
    });

    it('handles GET_USERS_FULLFILLED as expected', () => {
        const reducer = users(initialState, {
            type: 'GET_USERS_FULLFILLED',
            payload: { data: [{ id: 1, name: 'John' }] },
        });
        expect(reducer).toEqual({
            ...initialState,
            list: [{ id: 1, name: 'John' }],
        });
    });

    it('handles GET_USERS_REJECTED as expected', () => {
        const reducer = users(initialState, {
            type: 'GET_USERS_REJECTED',
            payload: { data: [{ id: 1, name: 'John' }] },
        });
        expect(reducer).toEqual({
            error: true,
            isNextPageLoading: false,
            list: [],
        });
    });
});
