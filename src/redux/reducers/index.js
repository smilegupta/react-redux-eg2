import { productsReducer, selectedProductsReducer } from "./productReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer,
});

export default reducers;
