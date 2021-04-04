import {FILTER_CATEGORIA, GET_PRODUCTS} from "../../components/types";


export default (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                productos: action.payload
            }
        default:
            return state
    }
}
