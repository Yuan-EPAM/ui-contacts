import {
  FILTER_BY_NAME,
  SEARCH_BY_NAME_STARTED,
  SEARCH_BY_NAME_SUCCESSED,
  SEARCH_BY_NAME_FAILURE,
} from "./actionTypes";

const setFilter = (name) => ({
  type: FILTER_BY_NAME,
  filter: name,
});

const searchContactStarted = () => ({
  type: SEARCH_BY_NAME_STARTED,
});

const searchContactSuccess = (result) => ({
  type: SEARCH_BY_NAME_SUCCESSED,
  searchResult: result,
});

const searchConactFailure = (error) => ({
  type: SEARCH_BY_NAME_FAILURE,
  error: error,
});

const fetchData = async (url, dispatch) => {
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (response.status !== 200) {
      throw new Error(
        `Fail to get response duirng fetching contacts... Status: ${response.status}`
      );
    }

    return response;
  } catch (err) {
    dispatch(searchConactFailure(err));
  }
};

const searchContact = (name) => {
  return async (dispatch) => {
    dispatch(searchContactStarted());

    const apiUrl = "http://localhost:8080" + "/contact" + `/name/?name=${name}`;
    const response = await fetchData(apiUrl, dispatch);
    let result;
    try {
      result = await response.json();
      console.log(result.data);
      dispatch(searchContactSuccess(result.data));
    } catch (err) {
      dispatch(searchConactFailure(err));
    }
  };
};

export { setFilter, searchContact };
