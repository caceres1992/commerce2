import {GET_CATEGORIA, FILTER_CATEGORIA} from "../../components/types";
import React, {useReducer} from "react";
import CheckoutReducer from "../checkout/CheckoutReducer";
import {commerce} from "../../lib/commerce";
import CategoriaContext from "../categorias/CategoriaContext";
import CategoriaReducer from "./CategoriaReducer";

const CategoriaState = ({children}) => {

    const initialState = {
        categorias: []
    }

    const [state, dispatch] = useReducer(CategoriaReducer, initialState)


    const getCategorias = async () => {

        try {

            const resultado = await commerce.categories.list()
            dispatch({
                type: 'GET_CATEGORIA',
                payload: resultado.data
            })
        } catch (error) {
            console.log('There was an error in generating a token', error);
        }

    }


    return (
        <CategoriaContext.Provider
            value={{
                categorias: state.categorias,
                getCategorias,
            }}>
            {children}
        </CategoriaContext.Provider>
    )

}

export default CategoriaState
