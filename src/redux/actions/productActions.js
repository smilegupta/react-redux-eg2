import { ActionTypes } from "../constants/action-types";
import fakestoreapi from "../../apis/fakestoreapi";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const fetchProducts = () => 
  async (dispatch ) => {
    const response = await fakestoreapi.get("/products");
    dispatch({type: ActionTypes.FETCH_PRODUCT, payload:response.data})
}
