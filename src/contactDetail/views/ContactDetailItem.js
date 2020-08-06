import React from "react";

import PropTypes from "prop-types";

const ContactDetailItem = ({ type, content }) => {
  return (
    <tr className="contactDetailItem">
      <td>{type}</td>
      <td>{content}</td>
    </tr>
  );
};

ContactDetailItem.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
};

export default ContactDetailItem;
