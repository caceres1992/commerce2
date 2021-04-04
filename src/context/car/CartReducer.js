import {GENERATE_TOKEN, GET_CART, UPDATE_QUANTITY} from "../../components/types";


export default (state, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                cart: action.payload
            }
        case GENERATE_TOKEN:
            // localStorage.setItem('token', JSON.stringify(action.payload));
            return {
                ...state,
                checkoutToken: action.payload
            }
        case UPDATE_QUANTITY:
            return {
                ...state,
                cart: action.payload
            }
    }
}
