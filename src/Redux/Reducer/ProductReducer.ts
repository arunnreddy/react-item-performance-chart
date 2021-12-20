import {
    FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE,
  } from "../Action/ActionTypes";
  
  import { TodoActions, TodoState } from "../Action/Types";
  
  const initialState: TodoState = {
    pending: false,
    products: [],
    error: null,
  };
  
  export default (state = initialState, action: TodoActions) => {
    switch (action.type) {
      case FETCH_TODO_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_TODO_SUCCESS:
        return {
          ...state,
          pending: false,
          products: action.payload,
          error: null,
        };
      case FETCH_TODO_FAILURE:
        return {
          ...state,
          pending: false,
          products: [],
          error: action.payload,
        };
      default:
        return {
          ...state,
        };
    }
  };