import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducer as contactReducer } from "./contact";
import { reducer as contactDetailReducer } from "./contactDetail";
import { reducer as filterReducer } from "./filter";
import { reducer as paginationReducer } from "./pagination";

const reducer = combineReducers({
  contacts: contactReducer,
  contactDetails: contactDetailReducer,
  filters: filterReducer,
  pagination: paginationReducer,
});

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default createStore(reducer, enhancer);
