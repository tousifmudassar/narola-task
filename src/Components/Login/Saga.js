import {takeEvery,put,call} from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'js-cookie';
import actions from './Actions';

//Worker saga for login
function* userLogin(action) {
    // console.log('Inside the worker saga for user login',action);
    const result = yield call(axios.get,`https://jsonplaceholder.typicode.com/users?email=${action.payload}`);
    console.log('response form api',result);
    if(result.data.length) {
        Cookies.set('token',action.payload);
        yield put(actions.updateUserData(result.data[0]));
    } else {
        Cookies.remove('token');
        yield put(actions.updateUserData({}));
    }
}

//Worker saga for logout
function* userLogout(action) {
    Cookies.remove('token');
    yield put(actions.updateUserData({}));
}

//watcher saga for login
export default function* watcherSaga() {
    yield takeEvery(actions.USER_LOGIN,userLogin);
    yield takeEvery(actions.USER_LOGOUT,userLogout);
}