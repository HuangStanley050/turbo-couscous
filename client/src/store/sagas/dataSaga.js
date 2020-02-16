import ActionType from "../actions";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import API from "../../API";

function* uploadSagaWorker(action) {
  yield console.log("file now in saga");
  let result = yield axios.post(API.upload, action.file);
  console.log(result.data);
}

export default function* dataSagaWatcher() {
  yield takeEvery(ActionType.UPLOAD_FILE, uploadSagaWorker);
}
