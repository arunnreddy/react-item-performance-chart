import { all, fork } from "redux-saga/effects";

import Sagacall, {fetchTodoSaga} from "./SagaCall";

export function* RootSaga() {
  yield all([fork(fetchTodoSaga)]);
}