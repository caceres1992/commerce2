import React from 'react';
import Hero from "../../components/Hero";
import Promociones from "../../components/Promoiciones/Promociones";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Products from "../Products";
import Featured from "../../components/Featured";
import NewItem from "../../components/NewItem";
import Descuento from "../../components/Descuento";
import Item from "../../components/item";
import Suscribed from "../../components/Suscbribed";
import {FeaturedData, NewdData, DescuentodData} from '../../data/Data'

const HomeInicio = () => {


    return (
        <div>
            <Hero/>
            <Featured/>
            <Item Datos={FeaturedData}/>
            <NewItem/>
            <Item Datos={NewdData}/>
            <Descuento/>
            <Item Datos={DescuentodData}/>
            <Suscribed/>
        </div>
    );
};

export default HomeInicio;
