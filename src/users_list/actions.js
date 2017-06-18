import { FETCH } from './constants';
import axios from 'axios';

export const fetchData = () => {
    const url = process.env.NODE_ENV === "production" ? '/users' : 'https://randomuser.me/api/';
    return {
        type: FETCH,
        payload: axios.get(url),
    }
};