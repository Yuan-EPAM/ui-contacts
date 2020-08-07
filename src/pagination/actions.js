import { ADD_PAGE, DECREASE_PAGE } from "./actionTypes";

const addPage = () => ({
  type: ADD_PAGE,
  val: 1,
});

const decreasePage = () => ({
  type: DECREASE_PAGE,
  val: -1,
});

export { addPage, decreasePage };
