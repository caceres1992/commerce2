import React from 'react';
import {Link} from "react-router-dom";
import {Carousel} from "react-responsive-carousel";
import list from '../../img/boni1.jpg'
import list2 from '../../img/boni2.jpg'
import list3 from '../../img/bannerHero.png'

import {Typography} from "@material-ui/core";
import {
    ButtonBuyNow,
    CarruselImg,
    ConentBoxImg, ContentBox, ContentBoxData,
    HeroBox,
    HeroImgCarrusel,
    PromocionContainer,
    PromocionContent, TitleArrivals, TitleBoxData
} from "./PromocionesElements";


const Promociones = () => {
    return (
        <PromocionContainer>
            <PromocionContent>
                <ContentBox>
                    <ContentBoxData>
                        <TitleArrivals>New Arrivals</TitleArrivals>
                        <TitleBoxData style={{color: 'white'}}>Coat Hooddy</TitleBoxData>

                        <ButtonBuyNow to={"/products"}>Buy now </ButtonBuyNow>
                    </ContentBoxData>
                    <div style={{position: 'relative', height: '100%', display: 'flex', justifyContent: 'center',}}>
                        <ConentBoxImg src={list3}/>
                    </div>

                </ContentBox>
            </PromocionContent>
        </PromocionContainer>
    )
}

export default Promociones;
