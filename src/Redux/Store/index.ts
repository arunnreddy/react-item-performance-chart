import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from '../Reducer';
import {RootSaga} from '../Redux-Saga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    RootReducer,
  applyMiddleware(sagaMiddleware)
);

// Then run the saga
sagaMiddleware.run(RootSaga);

export default store;