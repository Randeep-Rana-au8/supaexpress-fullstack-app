import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducer = combineReducers({});

const middlewares = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
