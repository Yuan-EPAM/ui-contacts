import {
  FILTER_BY_NAME,
  SEARCH_BY_NAME_STARTED,
  SEARCH_BY_NAME_SUCCESSED,
  SEARCH_BY_NAME_FAILURE,
} from "./actionTypes";
import * as Status from "./status";

import { updateObj } from "../utilities";

const initialState = {
  filter: null,
  searchStatus: null,
  searchResult: null,
  error: null,
};

const filterByName = (state, action) => {
  return updateObj(state, {
    filter: action.filter,
    searchStatus: null,
    searchResult: null,
    error: null,
  });
};

const searchStarted = (state) => {
  return updateObj(state, {
    searchStatus: Status.SEARCHING,
    searchResult: null,
    error: null,
  });
};

const searchSuccessed = (state, action) => {
  return updateObj(state, {
    searchStatus: Status.SUCCESS,
    searchResult: action.searchResult,
  });
};

const searchFailure = (state, action) => {
  return updateObj(state, {
    searchStatus: Status.FAILURE,
    searchResult: null,
    error: action.error,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return filterByName(state, action);
    case SEARCH_BY_NAME_STARTED:
      return searchStarted(state);
    case SEARCH_BY_NAME_SUCCESSED:
      return searchSuccessed(state, action);
    case SEARCH_BY_NAME_FAILURE:
      return searchFailure(state, action);
    default:
      return state;
  }
};
