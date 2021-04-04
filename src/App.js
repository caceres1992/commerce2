import './App.css';
import React, {useState, useEffect, useContext} from 'react'
import Products from "./page/Products";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PayProducts from "./page/payProducts";
import ProductsState from "./context/product/ProductsState";
import CartState from "./context/car/CartState";
import CheckoutState from "./context/checkout/CheckoutState";
import CartContext from "./context/car/CartContext";
import CheckoutContext from "./context/checkout/CheckoutContext";
import NavBar from "./components/NavBar";
import Carrito from "./components/Carrito";
import Hero from "./components/Hero";
import HomeInicio from "./page/Home";
import Footer from "./components/Footer";
import PageNotFound from "./page/PageNotFound";
import CategoriaState from "./context/categorias/CategoriaState";

function App() {


    const [isActive, setIsActive] = useState(false);


    return (
        <ProductsState>
            <CartState>
                <CheckoutState>
                    <CategoriaState>


                        <Router>
                            <NavBar setIsActive={setIsActive}/>
                            <Carrito isActive={isActive}
                                     setIsActive={setIsActive}/>
                            <Switch>
                                <Route exact path="/products" component={Products}/>
                                <Route exact path="/" component={HomeInicio}/>
                                <Route exact path="/pay" component={PayProducts}/>
                                <Route component={PageNotFound}/>
                            </Switch>

                            <Footer/>
                        </Router>

                    </CategoriaState>
                </CheckoutState>
            </CartState>
        </ProductsState>

    );
}

export default App;
