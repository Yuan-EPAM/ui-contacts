import { DISPLAY_CONTACT_DETAIL } from "./actionType";

const displayContactDetails = (userID, contactDetails) => ({
  type: DISPLAY_CONTACT_DETAIL,
  userID: userID,
  contactDetails: contactDetails,
});

export { displayContactDetails };
