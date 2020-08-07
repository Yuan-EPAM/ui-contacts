import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import * as filterActions from "../actions";

import "./style.css";

const Filter = ({ onClick }) => {
  // TODO filter/search current return data firstly, if null, request to db

  const [filterVal, setFilterVal] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onClick(filterVal);
  };

  const handleChange = (event) => {
    let { value } = event.target;
    setFilterVal(value);
  };

  return (
    <form className="search" onSubmit={handleOnSubmit}>
      <input
        className="search_input"
        type="text"
        placeholder="Search a contact name"
        name="search name"
        value={filterVal}
        onChange={handleChange}
      />
      <button className="search_button" type="submit">
        {/* Detail */}
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (name) => dispatch(filterActions.setFilter(name)),
  // searchItem: (val) => dispatch(filterActions.searchContact(val)),
});

export default connect(null, mapDispatchToProps)(Filter);
