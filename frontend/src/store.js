import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import { productListReducer, productDetailsReducer } from "./reducers/productListReducer";
import { cartReducer } from "./reducers/cartReducer";
import thunk from "redux-thunk";

const initialState = {};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
});

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (null || compose);

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;