import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools } from "redux-devtools-extension";
import {productListReducer, productDetailsReducer} from './reducers/productReducers'
import { cartReducer } from "./reducers/cartReducer";

const cartItemFromStorage = localStorage.getItem("cartitems") ? JSON.parse(localStorage.getItem("cartitems")):[]
const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart : cartReducer
});
const initialState = {
    cart:{cartItems:cartItemFromStorage}
};
const middleware = [thunk];
const Store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default Store; 