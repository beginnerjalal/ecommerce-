import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });
    const { data } = await axios.get("/api/products");
    dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "PRODUCT_LIST_FAILS",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  // console.log(id,"id from action");
  try {
    dispatch({ type: "PRODUCT_DETAILS_REQUEST" });
    const { data } = await axios.get(`/api/products/${id}`);
    // console.log(data,"data from action");
    dispatch({ type: "PRODUCT_DETAILS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "PRODUCT_DETAILS_FAILS",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};