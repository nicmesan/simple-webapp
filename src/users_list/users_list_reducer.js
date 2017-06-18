import { FETCH_PENDING, FETCH_FULFILLED, FETCH_REJECTED, PENDING, FULFILLED, REJECTED } from './constants';


const initialState = {
    status: '',
    data: null,
};


export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PENDING:
            return Object.assign({}, state, {data: null, status: PENDING });
        case FETCH_FULFILLED:
            return Object.assign({}, state, {data: action.payload.data.results, status: FULFILLED });
        case FETCH_REJECTED:
            return Object.assign({}, state, {data: null, status: REJECTED });
        default:
            return state;
    }
}