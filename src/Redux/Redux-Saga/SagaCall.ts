import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchTodoFailure, fetchTodoSuccess } from "../Action";
import { FETCH_TODO_REQUEST } from "../Action/ActionTypes";
import { ITodo } from "../../Api/Type";
import TutorialDataService from "../../Api/ApiCall";

const getTodos  = () =>
TutorialDataService.getAll();

export function* fetchTodoSaga() {   
  try {
    const response: ITodo = yield call(getTodos);
    // console.log('response  ==> ', response);
    yield put(
      fetchTodoSuccess({
        todos: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchTodoFailure({
        error: e.message,
      })
    );
  }
}

function* Sagacall() {
    console.log('saga ===');
    fetchTodoSaga();
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default Sagacall;