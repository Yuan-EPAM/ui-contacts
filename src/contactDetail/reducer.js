import { DISPLAY_CONTACT_DETAIL } from "./actionType";

const initialState = {
  contactDetails: [{ contactType: null, Content: null }],
};

const updateObj = (oldState, newState) => ({ ...oldState, ...newState });

const displayContactDetail = (state, action) => {
  return updateObj(state, {
    userID: action.userID,
    contactDetails: action.contactDetails,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_CONTACT_DETAIL:
      return displayContactDetail(state, action);
    default:
      return state;
  }
};
