import {
  FETCH_CONTACT_STARTED,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_FAILURE,
} from "./actionTypes";

const fetchContactStarted = () => ({
  type: FETCH_CONTACT_STARTED,
});

const fetchContactSuccess = (result) => ({
  type: FETCH_CONTACT_SUCCESS,
  contacts: result,
});

const fetchContactFailure = (error) => ({
  type: FETCH_CONTACT_FAILURE,
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
    dispatch(fetchContactFailure(err));
  }
};

const fetchContacts = () => {
  return async (dispatch) => {
    dispatch(fetchContactStarted());

    const apiUrl = "http://localhost:8080/";
    console.log("apiUrl:" + apiUrl);
    const response = await fetchData(apiUrl, dispatch);
    let result;
    try {
      result = await response.json();
      console.log(result.data);
      dispatch(fetchContactSuccess(result.data));
    } catch (err) {
      dispatch(fetchContactFailure(err));
    }
  };
};

export {
  fetchContactStarted,
  fetchContactSuccess,
  fetchContactFailure,
  fetchContacts,
};
