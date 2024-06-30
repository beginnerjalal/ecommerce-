import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools } from "redux-devtools-extension";
import {productListReducer, productDetailsReducer} from './reducers/productReducers'
import { cartReducer } from "./reducers/cartReducer";
import { userLoginReducer , userRegisterReducer, userDetailsReducer, userUpdateProfileReducer} from "./reducers/userReducers";

const userInfoFromLocalStorage = localStorage.getItem('userInfo') 
                                ? JSON.parse(localStorage.getItem('userInfo')) : null;

const cartItemFromStorage = localStorage.getItem("cartitems") ? JSON.parse(localStorage.getItem("cartitems")):[];

const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart : cartReducer,
    userLogin: userLoginReducer,
    userRegister : userRegisterReducer,
    userDetails : userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer
});

const initialState = {
    cart:{cartItems:cartItemFromStorage},
    userLogin :{userInfo: userInfoFromLocalStorage}
};

const middleware = [thunk];
const Store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default Store; 