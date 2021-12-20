import {
    FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE,
  } from "./ActionTypes";
  import { ITodo, TodoField } from "../../Api/Type";
 
  
  export interface TodoState {
    pending: boolean;
    products: TodoField[];
    error: string | null;
  }
  
  export interface FetchTodoSuccessPayload {
    todos: TodoField[];
  }
  
  export interface FetchTodoFailurePayload {
    error: string;
  }
  
  export interface FetchTodoRequest {
    type: typeof FETCH_TODO_REQUEST;
  }
  
  export type FetchTodoSuccess = {
    type: typeof FETCH_TODO_SUCCESS;
    payload: FetchTodoSuccessPayload;
  };
  
  export type FetchTodoFailure = {
    type: typeof FETCH_TODO_FAILURE;
    payload: FetchTodoFailurePayload;
  };
  
  export type TodoActions =
    | FetchTodoRequest
    | FetchTodoSuccess
    | FetchTodoFailure;