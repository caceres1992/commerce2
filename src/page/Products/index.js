import React, {useState, useEffect, useContext} from 'react'
import {Checkbox, CircularProgress, Container, Grid, makeStyles} from "@material-ui/core";
import ProductList from "../../components/Product/ProductList";
import ProductsContext from "../../context/product/ProductsContext";
import CartContext from "../../context/car/CartContext";

import Pagination from "./Pagination";
import CategoriaContext from "../../context/categorias/CategoriaContext";
import styled from "styled-components";
import CategoriaFilter from "../../components/CategoriaFilter";
import {
    CategoriaContent,
    CategoriaFilterContainer,
    DivMenuFilter, IconFilterClose, IconFilterShow
} from "../../components/CategoriaFilter/CategoriaFilterElements";
import {GrClose} from "react-icons/all";
import {HiOutlineFilter} from "react-icons/hi"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    progress: {
        position: 'absolute',
        right: '50%',
        top: '50%'
    },
    contenidoPrincipal: {
        margin: '30px auto',
        position: 'relative'
    }
}));


const ButtonCheckCategoria = ({cate, getCategoriasById}) => {
    const [isChecked, setIsChecked] = useState(false);
    const filterCategory = (id) => {
        getCategoriasById(id)
    }
    if (!cate) {
        return (
            <>
                No hay categoria para mostrar
            </>
        )
    }

    return (
        <li>
            <a onClick={() => filterCategory(cate.id)} href="#">{cate.name}</a>
        </li>
    )

}

const Products = () => {

    const productsContext = useContext(ProductsContext)
    const cartContext = useContext(CartContext)
    const categoriaContext = useContext(CategoriaContext)

    const {getProducts, productos, getCategoriasById} = productsContext
    const {getCarrito} = cartContext
    const {getCategorias, categorias} = categoriaContext;

    const [activarCa, setActivarCa] = useState(false)
    const [filterCategory, setFilterCategory] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

//canrtidad que se publicara por pagina
    const [postPerPage, setPostPerPage] = useState(30);


    const classes = useStyles();
    useEffect(() => {

        getProducts();
        getCarrito();
        getCategorias();

    }, [])


    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;

    console.log(indexOfLastPost)
    console.log(indexOfFirstPost)
    const currentPost = productos.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (page) => {
        setCurrentPage(page)
    }
    const CambiarCantidadParaMostrar = (e) => {

        switch (e.target.value) {
            case '1' :
                setPostPerPage(4);
                break;
            case '2':
                setPostPerPage(6);
                break;
            case '3':
                setPostPerPage(20)
                break;
            default:
                setPostPerPage(4)
        }
        console.log(e.target.value)
    }


    return (
        <div style={{paddingTop: 70}}>


            <Container className={classes.contenidoPrincipal}>

                <Grid container spacing={2}>

                    <Grid item xs={12} sm={3}>
                        <CategoriaFilterContainer>
                            {/*<select name="selecCantidad" onChange={(e) => CambiarCantidadParaMostrar(e)}>*/}
                            {/*    <option value="1">ordernar por 4</option>*/}
                            {/*    <option value="2" selected>ordernar por 5</option>*/}
                            {/*    <option value="3">ordenar por 20</option>*/}
                            {/*</select>*/}
                            <DivMenuFilter>
                                <h3>Categories</h3>
                                <IconFilterShow
                                    onClick={() => setActivarCa(true)}
                                />
                            </DivMenuFilter>

                            <CategoriaContent activarCa={activarCa}>
                                <ul>
                                    <div style={{width: '100%'}}>
                                        <IconFilterClose
                                            onClick={() => setActivarCa(false)}


                                        />
                                    </div>

                                    {
                                        categorias.map(cate => (
                                            <CategoriaFilter key={cate.id} getCategoriasById={getCategoriasById}
                                                             setActivarCa={setActivarCa} cate={cate}/>
                                        ))


                                    }
                                </ul>


                            </CategoriaContent>
                        </CategoriaFilterContainer>

                    </Grid>


                    {productos.length > 0 ?
                        (
                            <Grid item xs={12} sm={9} container className={classes.root} spacing={2}>
                                {currentPost.map((producto) => <ProductList key={producto.id}
                                                                            producto={producto}
                                                                            getCarrito={getCarrito}
                                />)}
                            </Grid>
                        )
                        :
                        <CircularProgress className={classes.progress} color="secondary"/>
                    }
                </Grid>
            </Container>
            <Pagination postPerPage={postPerPage} paginate={paginate} totalPost={productos.length}/>
        </div>
    )
}


export default Products
