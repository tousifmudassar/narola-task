import { all } from "redux-saga/effects";
import loginSaga from "./../Components/Login/Saga";
import moviesSaga from "./../Components/Movies/Saga";

export default function* rootSagas() {
  yield all([loginSaga(), moviesSaga()]);
}
