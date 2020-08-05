import React from "react";
import ContactHeader from "./ContactHeader";
import ContactList from "./ContactList";

import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <table className="contactTable">
        <ContactHeader />
        <ContactList />
      </table>
    </div>
  );
};

export default Contact;
