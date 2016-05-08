import { fork } from 'redux-saga/effects';
import userSagas from 'modules/user/userSagas';

export default function* (getState) {
    yield fork(userSagas, getState);
}
