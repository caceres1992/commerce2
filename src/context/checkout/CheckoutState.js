import React, {useReducer} from 'react'
import {commerce} from "../../lib/commerce";
import {GET_PRODUCTS} from "../../components/types";
import CheckoutContext from "./CheckoutContext";
import CheckoutReducer from "./CheckoutReducer";


const CheckoutState = ({children}) => {

    const initialState = {
        checkoutToken: {}//JSON.parse(localStorage.getItem('token'))
    }

    const [state, dispatch] = useReducer(CheckoutReducer, initialState)


    const generateCheckoutToken = async (cart) => {

        try {

            const tokenResultado = await commerce.checkout.generateToken(cart.id, {type: 'cart'})
            dispatch({
                type: 'GENERATE_TOKEN',
                payload: tokenResultado
            })
            console.log(tokenResultado)
        } catch (error) {
            console.log('There was an error in generating a token', error);
        }

    }

    return (
        <CheckoutContext.Provider
            value={{
                checkoutToken: state.checkoutToken,
                generateCheckoutToken
            }}>
            {children}
        </CheckoutContext.Provider>
    )

}

export default CheckoutState
