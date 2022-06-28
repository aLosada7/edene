import { IUser } from '../model/user';

export default (
    state = {
        list: [],
        total: 0,
        isNextPageLoading: false,
        error: null,
        hasNextPage: true,
    },
    action: { type: any; payload?: any }
) => {
    switch (action.type) {
        case 'GET_USERS_PENDING':
            return {
                ...state,
                isNextPageLoading: true,
            };
        case 'GET_USERS_FULFILLED':
            return {
                ...state,
                isNextPageLoading: false,
                list: state.list.concat(action.payload.data.data),
                total: action.payload.data.totalPassengers,
            };
        case 'GET_USERS_REJECTED':
            return Object.assign({}, state, {
                isNextPageLoading: false,
                error: true,
            });
        default:
            return state;
    }
};
