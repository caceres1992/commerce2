import React from 'react';
import descuento from "../../img/polera6.png";
import {IconCart} from "../NavBar/NavbarElement";

import {
    ActivarCircle,
    ButtonViewItem,
    DescuentoAction, DescuentoActionButton, DescuentoActionPrice,
    DescuentoBox,
    DescuentoBoxData, DescuentoBoxDataDescription, DescuentoBoxDescription,
    DescuentoBoxImg, DescuentoBoxTitlle,
    DescuentoContentItem,
    DescuentoImgButoon
} from "./ItemElements";
import Carousel from 'react-elastic-carousel'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import {Button} from "@material-ui/core";


const ArrowCustumer = ({type, onClick, isEdge}) => {

    const point = type === 'PREV' ? <MdKeyboardArrowLeft fontSize={40}/> :
        <MdKeyboardArrowRight fontSize={40}/>
    // console.log(type)
    // console.log(onClick)
    // console.log(isEdge)
    return (
        <Button onClick={onClick} disabled={isEdge}>
            {point}
        </Button>
    )
}


const pagination = ({pages, activePage, onClick}) => {

    // console.log(pages)
    // console.log(activePage)
    // console.log(onClick)


    return (<div style={{flexDirection: 'row', display: 'flex'}}>
        {pages.map(page => {
            const isActivePage = activePage === page
            return (
                <ActivarCircle
                    key={page}
                    onClick={() => onClick(page)}
                    active={isActivePage}
                />
            )
        })}
    </div>)
}


const Item = ({Datos}) => {

    function financial(x) {
        return Number.parseFloat(x).toFixed(2);
    }

    const BreakPoinst = [
        // {width: 1, itemsToShow: 1, showArrows: false},
        // {width: 380, itemsToShow: 1, itemsToScroll: 1, showArrows: false},
        // {width: 550, itemsToShow: 2, itemsToScroll: 2, itemPadding: [0, 10]},
        // {width: 768, itemsToShow: 3, itemsToScroll: 2, itemPadding: [0, 10]},
        // {width: 1000, itemsToShow: 4, itemsToScroll: 2, itemPadding: [0, 10]},
        {width: 1, itemsToShow: 1, showArrows: false},
        {width: 550, itemsToShow: 2, itemsToScroll: 2, itemPadding: [0, 10], showArrows: false},
        {width: 850, itemsToShow: 3, itemPadding: [0, 10], showArrows: false},
        {width: 1000, itemsToShow: 4, itemsToScroll: 2, itemPadding: [0, 10], showArrows: false},

    ]

    if (!Datos) {
        return null
    }
    return (


        <DescuentoContentItem>
            <Carousel style={{
                height: 500,
                diisplay: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} breakPoints={BreakPoinst}
                      renderArrow={ArrowCustumer}
                      renderPagination={pagination}
            >

                {Datos.map(dato => (
                    <DescuentoBox>
                        <DescuentoImgButoon dato={dato}>
                            <DescuentoBoxImg src={dato.imagen}/>

                            <ButtonViewItem to={'/'}>View Item</ButtonViewItem>

                            {dato.descuento ? <span>{dato.priceDes * 100}% Off</span> : null}
                            {dato.featured ? <span>Featured</span> : null}
                            {dato.nuevo ? <span>New</span> : null}

                        </DescuentoImgButoon>

                        <DescuentoBoxData>
                            <DescuentoBoxDataDescription>
                                <DescuentoBoxTitlle>{dato.brand}</DescuentoBoxTitlle>
                                <DescuentoBoxDescription>{dato.name}</DescuentoBoxDescription>
                            </DescuentoBoxDataDescription>
                            <DescuentoAction>
                                <DescuentoActionPrice> {dato.descuento ?
                                    <span> S/{dato.price}.0 </span> : null} S/{financial(dato.price - (dato.price * dato.priceDes))}</DescuentoActionPrice>
                                <DescuentoActionButton><IconCart/></DescuentoActionButton>
                            </DescuentoAction>
                        </DescuentoBoxData>
                    </DescuentoBox>
                ))}

            </Carousel>
        </DescuentoContentItem>

    );
};

export default Item;
