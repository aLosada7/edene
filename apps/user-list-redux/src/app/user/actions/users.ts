import axios, { AxiosResponse } from 'axios';
import { IFilter } from '../../shared/model/filter';

export const getUsers =
    (filter: IFilter) =>
    (
        dispatch: (arg0: {
            type: string;
            payload: Promise<AxiosResponse<any, any>>;
        }) => any
    ) => {
        return dispatch({
            type: 'GET_USERS',
            payload: axios.get(
                `https://api.instantwebtools.net/v1/passenger?page=${filter.page}&size=${filter.limit}`
            ),
        });
    };
