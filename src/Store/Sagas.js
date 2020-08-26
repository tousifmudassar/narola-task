import {all} from 'redux-saga/effects';
import loginSaga from './../Components/Login/Saga';
import todoSaga from './../Components/Todos/Saga';

export default function* rootSagas() {
    yield all([
        loginSaga(),
        todoSaga()
    ]);
}