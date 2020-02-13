import { all } from "redux-saga/effects";
//import billingSaga from "./billingSaga";
import authSaga from "./authSaga";

export default function* rootSaga() {
  yield all([authSaga()]);
}
