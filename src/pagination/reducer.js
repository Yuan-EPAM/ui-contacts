import { ADD_PAGE, DECREASE_PAGE } from "./actionTypes";

import { updateObj } from "../utilities";

const initialState = { pageNum: 1, maxPageNum: 2000 };

const addPageNum = (state, action) => {
  const nextPageNum = state.pageNum + action.val;
  console.log("nextPageNum: " + nextPageNum);
  return updateObj(state, {
    pageNum: nextPageNum <= state.maxPageNum ? nextPageNum : state.maxPageNum,
  });
};

const decreasePageNum = (state, action) => {
  const prevPageNum = state.pageNum + action.val;
  return updateObj(state, {
    pageNum: prevPageNum >= 1 ? prevPageNum : 1,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PAGE:
      return addPageNum(state, action);
    case DECREASE_PAGE:
      return decreasePageNum(state, action);
    default:
      return state;
  }
};
