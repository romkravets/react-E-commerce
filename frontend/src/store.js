import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import { cartReducer } from "./reducers/cartReducer";
import thunk from "redux-thunk";
import Cookie from 'js-cookie';

import { productListReducer, productDetailsReducer } from "./reducers/productListReducer";
import { userSigninReducer, userRegisterReducer } from './reducers/userReducers';

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = { cart: { cartItems } };

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
});

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (null || compose);

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;