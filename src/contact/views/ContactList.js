import React, { useEffect } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import ContactItem from "./ContactItem";
import * as contactActions from "../actions";

const ContactList = ({ contacts, onLoad }) => {
  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <tbody>
      {contacts &&
        contacts.map((contact) => (
          <ContactItem
            key={contact.UserID}
            userID={contact.UserID}
            title={contact.Title}
            name={contact.Name}
            birth={contact.BirthDate}
            contactDetails={contact.ContactDetails}
            isFavorite={contact.isFavorite}
          />
        ))}
    </tbody>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onLoad: PropTypes.func,
};

const mapStateToProps = (state) => state.contacts;

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => dispatch(contactActions.fetchContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
