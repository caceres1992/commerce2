import React, {useReducer} from 'react'
import CartReducer from "./CartReducer";
import CartContext from "./CartContext";

import {GET_CART, GET_PRODUCTS, UPDATE_QUANTITY} from "../../components/types";
import {commerce} from "../../lib/commerce";

const CartState = ({children}) => {

    const initialState = {
        cart: {},
        checkoutToken: {}
    }


    const [state, dispatch] = useReducer(CartReducer, initialState)

    const getCarrito = async () => {
        try {
            const resultado = await commerce.cart.retrieve();

            dispatch({
                type: GET_CART,
                payload: resultado
            })


            generateCheckoutToken(resultado)
        } catch (e) {
            console.log(e)
        }
    }


    const updateCartQuantity = async (ProductId, quantity) => {
        try {


            const updateItemQuantity = await commerce.cart.update(ProductId, {quantity})
            console.log(updateItemQuantity)

            dispatch({
                type: UPDATE_QUANTITY,
                payload: updateItemQuantity.cart
            })


        } catch (e) {
            console.log('There was an error updating the cart items', e);
        }


    }


    const removeItem = async (itemId) => {
        try {
            await commerce.cart.remove(itemId);
            getCarrito();
        } catch (e) {
            console.log(e);
        }

    }

    const generateCheckoutToken = async (cart) => {

        try {

            const tokenResultado = await commerce.checkout.generateToken(cart.id, {type: 'cart'})
            dispatch({
                type: 'GENERATE_TOKEN',
                payload: tokenResultado
            })

        } catch (error) {
            console.log('There was an error in generating a token', error);
        }

    }
    return (
        <CartContext.Provider value={{
            cart: state.cart,
            checkoutToken: state.checkoutToken,

            getCarrito,
            updateCartQuantity,
            removeItem,
            generateCheckoutToken
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState
