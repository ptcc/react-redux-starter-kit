import { takeLatest } from 'redux-saga';
import userActions, { userActionTypes } from './userActions';
import { fetchUser as fetchUserApi, fetchUsers as fetchUsersApi } from './userApi';
import { loadListFactory, loadItemFactory } from 'app/entities/sagas';

export const loadUsers = fetchUsers =>
    loadListFactory(userActionTypes, userActions, fetchUsers);

export const loadUser = fetchUser =>
    loadItemFactory(userActionTypes, userActions, fetchUser);

const sagas = function* sagas() {
    yield [
        takeLatest(userActionTypes.item.REQUEST, loadUser(fetchUserApi)),
        takeLatest(userActionTypes.list.REQUEST, loadUsers(fetchUsersApi)),
    ];
};

export default sagas;
