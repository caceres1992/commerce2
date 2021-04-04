import React, {useReducer} from 'react'
import ProductsReducer from "./ProductsReducer";
import ProductsContext from "./ProductsContext";
import {commerce} from "../../lib/commerce";
import {GET_PRODUCTS} from "../../components/types";


const ProductsState = ({children}) => {

    const initialState = {
        productos: [

        ],
        productoFilter: []
    }


    const [state, dispatch] = useReducer(ProductsReducer, initialState)


    const getProducts = async () => {
        try {


            const resultado = await commerce.products.list();

            dispatch({
                type: GET_PRODUCTS,
                payload: resultado.data
            })

        } catch (e) {
            console.log(e)
        }

    }

    const getCategoriasById = async (id) => {

        try {

            const resultado = await commerce.categories.retrieve(id)

            dispatch({
                type: 'FILTER_CATEGORIA',
                payload: resultado.id
            })

        } catch (error) {
            console.log('There was an error in generating a token', error);
        }

    }


    return (
        <ProductsContext.Provider value={{
            productos: state.productos,
            productoFilter: state.productoFilter,
            getProducts,
            getCategoriasById

        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsState
