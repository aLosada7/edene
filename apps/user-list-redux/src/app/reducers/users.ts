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
        case 'GET_USERS_FULLFILLED':
            return {
                ...state,
                users: action.payload.data,
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
