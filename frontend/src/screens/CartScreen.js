import React, {useEffect} from "react";
import {addToCart} from "../actions/cartActions";
import {useDispatch} from "react-redux";

function CartScreen(props) {
    const productId = props.match.params.id;
    console.log(productId, 'productId');
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    console.log(qty, 'qty');
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, []);

    return <div>Cart Screen</div>
}

export  default CartScreen;