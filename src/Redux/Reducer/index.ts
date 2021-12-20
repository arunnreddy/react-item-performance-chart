import { combineReducers } from "redux";

import ProductReducer from "./ProductReducer";

const RootReducer = combineReducers({
  Product : ProductReducer,
});

// export type AppState = ReturnType<typeof RootReducer>;

export default RootReducer;