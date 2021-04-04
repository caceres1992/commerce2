import React from 'react';
import {

    DescuentoContainer,
    DescuentoContent,
    DescuentoData,
    DescuentoImg,
    DescuentoLink,
    DescuentoTitle
} from "./DescuentoElement";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import descuento1 from '../../img/bannerDesc.png'
import {IconCart} from "../NavBar/NavbarElement";


const Descuento = () => {
    return (
        <DescuentoContainer>
            <div style={{padding: '2rem 1.5rem'}}>
                <DescuentoContent>
                    <DescuentoData>
                        <DescuentoTitle>
                            Final Stock - Up to 50% Off
                        </DescuentoTitle>
                        <DescuentoLink to={'/products'}>Shop the Sale <HiOutlineArrowNarrowRight/></DescuentoLink>
                    </DescuentoData>
                    <DescuentoImg src={descuento1}/>
                </DescuentoContent>
            </div>


        </DescuentoContainer>
    );
};

export default Descuento;
