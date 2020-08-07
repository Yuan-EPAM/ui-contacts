import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as paginationActions from "../actions";

import "./style.css";

const Pagination = ({ pageNum, onChangePage }) => {
  const handleClick = (isNext) => {
    onChangePage(isNext);
  };

  return (
    <div className="pagination_item">
      <button className="pagination-button" onClick={() => handleClick(false)}>
        <span>Back</span>
      </button>
      <span>Page {pageNum}</span>
      <button className="pagination-button" onClick={() => handleClick(true)}>
        <span>Next</span>
      </button>
    </div>
  );
};

Pagination.propTypes = {
  pageNum: PropTypes.number,
  onChangePage: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.pagination;
};

const mapDispatchToProps = (dispatch) => ({
  onChangePage: (isNext) =>
    isNext
      ? dispatch(paginationActions.addPage())
      : dispatch(paginationActions.decreasePage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
