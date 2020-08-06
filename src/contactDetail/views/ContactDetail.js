import React from "react";

import ContactDetailHeader from "./ContactDetailHeader";
import ContactDetailList from "./ContactDetailList";

const ContactDetail = () => {
  console.log("you are in detail page");
  return (
    <div className="contactDetail">
      <div>userName: 101</div>
      <table>
        <ContactDetailHeader />
        <ContactDetailList />
      </table>
    </div>
  );
};

export default ContactDetail;
