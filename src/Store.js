import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducer as contactReducer } from "./contact";

const reducer = combineReducers({
  contacts: contactReducer,
});

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default createStore(reducer, enhancer);
