import React from 'react';
import {
    FeatruredTitle,
    FeaturedContainer,
    FeaturedContent, FeaturedData, FeaturedImg,
    FeaturedImgContent, FeaturedPrice,
    FeaturedSubtitle, FeaturedTitle
} from "./FeaturedElements";

import polo1 from '../../img/polo2.jpg'
import polo2 from '../../img/polo3.jpg'
import polo3 from '../../img/polo4.jpg'
import polo4 from '../../img/camisahero.jpg'

const Featured = () => {
    return (
        <>
            <FeaturedContainer>
                <FeatruredTitle>Featured</FeatruredTitle>
                <FeaturedSubtitle/>


                {/*<FeaturedContent>*/}
                {/*    <div>*/}
                {/*        <FeaturedImgContent>*/}
                {/*            <FeaturedImg src={polo1}/>*/}
                {/*        </FeaturedImgContent>*/}
                {/*        <FeaturedData>*/}
                {/*            <FeaturedTitle>Polo Nerdy</FeaturedTitle>*/}
                {/*            <span>View </span>*/}
                {/*        </FeaturedData>*/}
                {/*        <FeaturedPrice>PRICE S/16.00</FeaturedPrice>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <FeaturedImgContent>*/}
                {/*            <FeaturedImg src={polo2}/>*/}
                {/*        </FeaturedImgContent>*/}
                {/*        <FeaturedData>*/}
                {/*            <FeaturedTitle>Polo Google</FeaturedTitle>*/}
                {/*            <span>View </span>*/}
                {/*        </FeaturedData>*/}
                {/*        <FeaturedPrice>PRICE S/12.00</FeaturedPrice>*/}
                {/*    </div>*/}

                {/*    <div>*/}
                {/*        <FeaturedImgContent>*/}
                {/*            <FeaturedImg src={polo3}/>*/}
                {/*        </FeaturedImgContent>*/}
                {/*        <FeaturedData>*/}
                {/*            <FeaturedTitle>Polo You Had me at</FeaturedTitle>*/}
                {/*            <span>View </span>*/}
                {/*        </FeaturedData>*/}
                {/*        <FeaturedPrice>PRICE S/23.00</FeaturedPrice>*/}
                {/*    </div>*/}

                {/*    <div>*/}
                {/*        <FeaturedImgContent>*/}
                {/*            <FeaturedImg src={polo4}/>*/}
                {/*        </FeaturedImgContent>*/}
                {/*        <FeaturedData>*/}
                {/*            <FeaturedTitle>Camisa Moda 2021</FeaturedTitle>*/}
                {/*            <span>View </span>*/}
                {/*        </FeaturedData>*/}
                {/*        <FeaturedPrice>PRICE S/45.00</FeaturedPrice>*/}
                {/*    </div>*/}

                {/*</FeaturedContent>*/}
            </FeaturedContainer>
        </>
    );
};

export default Featured;
