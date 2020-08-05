import React from "react";

import ContactHeaderItem from "./ContactHeaderItem";

const ContactHeader = () => {
  const HEADERS = [
    { val: "Title", key: 0 },
    { val: "Name", key: 1 },
    { val: "Age", key: 2 },
    { val: "Favorite", key: 3 },
  ];

  return (
    <thead>
      <tr className="contactHeader">
        {HEADERS.map((elem) => (
          <ContactHeaderItem key={elem.key} item={elem.val} />
        ))}
      </tr>
    </thead>
  );
};

export default ContactHeader;
