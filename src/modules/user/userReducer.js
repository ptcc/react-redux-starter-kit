import { userActionTypes } from './userActions';

const initialState = {
    list: [],
    item: null,
    error: null,
    loading: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case userActionTypes.list.REQUEST:
    case userActionTypes.item.REQUEST:
        return {
            ...state,
            loading: true,
        };

    case userActionTypes.list.SUCCESS:
        return {
            ...state,
            list: payload,
            error: null,
            loading: false,
        };

    case userActionTypes.list.FAILURE:
        return {
            ...state,
            list: [],
            error: payload,
            loading: false,
        };

    case userActionTypes.item.SUCCESS:
        return {
            ...state,
            item: payload,
            error: null,
            loading: false,
        };

    case userActionTypes.item.FAILURE:
        return {
            ...state,
            item: null,
            error: payload,
            loading: false,
        };

    default:
        return state;
    }
};
