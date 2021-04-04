import {FILTER_CATEGORIA, GET_CATEGORIA} from "../../components/types";


export default (state, action) => {

    switch (action.type) {
        case GET_CATEGORIA:

            return {
                ...state,
                categorias: action.payload
            }


        default:
            return state
    }
}
