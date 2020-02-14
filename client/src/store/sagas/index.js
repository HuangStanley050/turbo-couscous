import { all } from "redux-saga/effects";
//import billingSaga from "./billingSaga";
import authSaga from "./authSaga";
import dataSaga from "./dataSaga";

export default function* rootSaga() {
  yield all([authSaga(), dataSaga()]);
}
