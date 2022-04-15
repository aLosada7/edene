import axios, { AxiosResponse } from 'axios';

export const getUsers =
    () =>
    (
        dispatch: (arg0: {
            type: string;
            payload: Promise<AxiosResponse<any, any>>;
        }) => any
    ) => {
        return dispatch({
            type: 'GET_USERS',
            payload: axios.get('https://jsonplaceholder.typicode.com/users'),
        });
    };
