import React, { useEffect } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import ContactItem from "./ContactItem";
import * as contactActions from "../actions";
import { actions as filterActions } from "../../filter";

const ContactList = ({ contacts, onLoad, pagination }) => {
  useEffect(() => {
    onLoad(pagination.pageNum);
  }, [onLoad, pagination.pageNum]);

  return (
    <tbody className="contactContent">
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

const filterContacts = (data, filters) => {
  if (!filters.filter) {
    return data;
  }
  const results = data.contacts.filter(
    (contact) => contact.Name === filters.filter
  );

  return { ...data, contacts: results };
};

const mapStateToProps = (state) => ({
  contacts: filterContacts(state.contacts, state.filters).contacts,
  filters: state.filters,
  pagination: state.pagination,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (page) => dispatch(contactActions.fetchContacts(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
