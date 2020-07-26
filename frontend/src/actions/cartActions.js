import axios from 'axios';
import {CART_ADD_ITEM} from "../constants/cartConstants";

const  addToCart = (productId, qty) => async (dispatch)  => {
    console.log("yes");
    try{
        const {data} = await axios.get("/api/products/" + productId);
        console.log({data});
        dispatch({ type: CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        })
    }catch (e) {
    console.log(e, 'e');
    }
}

export {addToCart};