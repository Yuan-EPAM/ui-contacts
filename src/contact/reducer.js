import {
  FETCH_CONTACT_STARTED,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_FAILURE,
} from "./actionTypes";
import * as Status from "./status";

const initialState = {
  contacts: [
    {
      UserID: 0,
      Title: "",
      Name: "",
      BirthDate: "",
      ContactDetails: [],
      isFavorite: false,
    },
  ],
  fetchStatus: null,
  error: null,
};

const updateObj = (oldState, newState) => ({ ...oldState, ...newState });

const fetchStart = (state) => {
  return updateObj(state, { fetchStatus: Status.LOADING, error: null });
};

const fetchSuccess = (state, action) => {
  return updateObj(state, {
    fetchStatus: Status.SUCCESS,
    contacts: action.contacts,
    error: null,
  });
};

const fetchFailure = (state) => {
  return updateObj(state, {
    fetchStatus: Status.FAILURE,
    error: state.error,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACT_STARTED:
      return fetchStart(state);
    case FETCH_CONTACT_SUCCESS:
      return fetchSuccess(state, action);
    case FETCH_CONTACT_FAILURE:
      return fetchFailure(state);
    default:
      return state;
  }
};
