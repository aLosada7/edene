export default (
    state = {
        users: [],
        loading: false,
        error: null,
    },
    action: { type: any; payload?: any }
) => {
    switch (action.type) {
        case 'GET_USERS_PENDING':
            return {
                ...state,
                loading: true,
            };
        case 'GET_USERS_FULFILLED':
            return {
                ...state,
                loading: false,
                users: state.users.concat(action.payload.data),
            };
        case 'GET_USERS_REJECTED':
            return Object.assign({}, state, {
                loading: false,
                error: true,
            });
        default:
            return state;
    }
};
