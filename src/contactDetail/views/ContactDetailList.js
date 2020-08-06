import React from "react";

import { connect } from "react-redux";

import ContactDetailItem from "./ContactDetailItem";

const ContactDetailList = ({ contactDetails }) => {
  // const contactDetails = [
  //   { UserID: 0, ContactDetailType: "email", ConactDetailContent: "abc@.com" },
  // ];
  console.log(contactDetails);
  // TODO Memo
  return (
    <tbody>
      {contactDetails &&
        contactDetails.map((item, idx) => (
          <ContactDetailItem
            key={idx}
            type={item.ContactDetailType}
            content={item.ContactDetailContent}
          />
        ))}
    </tbody>
  );
};

const mapStateToProps = (state) => state.contactDetails;

export default connect(mapStateToProps)(ContactDetailList);
