import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { TodoReducer } from "./reducers/TodoReducers";
import thunk from "redux-thunk";

const reducer = combineReducers({
  Todo: TodoReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
