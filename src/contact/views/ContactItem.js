import React, { useState } from "react";

import PropTypes from "prop-types";

const ContactItem = ({ title, name, birth, isFavorite }) => {
  const getAge = (birthStr) => {
    return Math.floor(
      (new Date() - new Date(birthStr).getTime()) / 3.15576e10
    ).toString();
  };

  const age = getAge(birth);

  return (
    <tr className="contactItem">
      <td>{title}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{isFavorite}</td>
    </tr>
  );
};

ContactItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  birth: PropTypes.string,
  isFavorite: PropTypes.bool,
};

export default ContactItem;
