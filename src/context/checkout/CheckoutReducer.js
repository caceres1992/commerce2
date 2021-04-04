import {GENERATE_TOKEN} from "../../components/types";


export default (state, action) => {

    switch (action.type) {
        case GENERATE_TOKEN:
            localStorage.setItem('token', JSON.stringify(action.payload));
            return {
                ...state,
                checkoutToken: action.payload
            }
        default:
            return state
    }
}
