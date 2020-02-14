import ActionType from "../actions";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* uploadSagaWorker(action) {
  yield console.log(action.file);
}

export default function* dataSagaWatcher() {
  yield takeEvery(ActionType.UPLOAD_FILE, uploadSagaWorker);
}
