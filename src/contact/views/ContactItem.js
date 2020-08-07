import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import { actions as contactDetailActions } from "../../contactDetail";

const ContactItem = ({
  userID,
  title,
  name,
  birth,
  contactDetails,
  isFavorite,
  onClick,
}) => {
  const getAge = (birthStr) => {
    return Math.floor(
      (new Date() - new Date(birthStr).getTime()) / 3.15576e10
    ).toString();
  };

  const age = getAge(birth);
  const contactDetailCount = contactDetails ? contactDetails.length : 0;

  return (
    <tr className="contactItem">
      <td>{title}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{contactDetailCount}</td>
      <td>{isFavorite}</td>
      <td>
        <Link to="/detail" className="detailLink" onClick={onClick}>
          Detail
        </Link>
      </td>
    </tr>
  );
};

ContactItem.propTypes = {
  userID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  name: PropTypes.string,
  birth: PropTypes.string,
  contactDetails: PropTypes.arrayOf(PropTypes.object),
  isFavorite: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};

const mapDispatchToProps = (dispath, ownProps) => ({
  onClick: () => {
    dispath(
      contactDetailActions.displayContactDetails(
        ownProps.userID,
        ownProps.contactDetails
      )
    );
  },
});

export default connect(null, mapDispatchToProps)(ContactItem);
