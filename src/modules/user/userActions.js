import { createAction } from 'redux-actions';
import createRequestActionTypes from 'app/entities/createRequestActionTypes';

export const userActionTypes = {
    item: createRequestActionTypes('USER'),
    list: createRequestActionTypes('USERS'),
};

export default {
    item: {
        request: createAction(userActionTypes.item.REQUEST),
        success: createAction(userActionTypes.item.SUCCESS),
        failure: createAction(userActionTypes.item.FAILURE),
    },
    list: {
        request: createAction(userActionTypes.list.REQUEST),
        success: createAction(userActionTypes.list.SUCCESS),
        failure: createAction(userActionTypes.list.FAILURE),
    },
};
