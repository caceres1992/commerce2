import React from 'react'
import backGround from '../../img/paperback.jpg'
import woman from '../../img/beagirl.jpg'
import children from '../../img/boy.jpg'
import hombre from '../../img/mencategory.jpg'
import girlHero from '../../img/girlHero.png'
import {Button, Container, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import NavBar from "../NavBar";
import Promociones from "../Promoiciones/Promociones";
import {HeroBoxImg, HeroBoxLink, HeroCategories, HeroContainer, HeroDescription} from "./HeroComponents";

const Hero = () => {
    return (
        <HeroContainer>

            <Promociones/>

            <HeroCategories>
                <HeroBoxLink>
                    <HeroBoxImg src={woman}/>
                    <HeroDescription>Woman</HeroDescription>
                </HeroBoxLink>

                <HeroBoxLink>
                    <HeroBoxImg src={hombre}/>
                    <HeroDescription>Men</HeroDescription>
                </HeroBoxLink>
                <HeroBoxLink>
                    <HeroBoxImg src={children}/>
                    <HeroDescription>Kids</HeroDescription>
                </HeroBoxLink>
            </HeroCategories>


        </HeroContainer>
    )
}
export default Hero;
