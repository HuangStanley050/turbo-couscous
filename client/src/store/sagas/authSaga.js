import ActionType from "../actions/";
import API from "../../API";
import { takeEvery, put } from "redux-saga/effects";
import { loginOkay } from "../actions/authActions";
import axios from "axios";

function* loginSagaWorker(action) {
  const { username, password } = action.userInfo;
  let result = yield axios.post(API.login, { username, password });
  //console.log(result.data);
  yield put(loginOkay(result.data.fileIds.pdf));
}

export default function* authSagaWatcher() {
  yield takeEvery(ActionType.LOGIN_START, loginSagaWorker);
}
