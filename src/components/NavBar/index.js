import React, {useContext, useEffect, useState} from 'react'
import {
    ContentIconCart,
    HeaderContainer,
    IconCart,
    IconToggle,
    NavContent,
    NavItem,
    NavLinks,
    NavList,
    NavLogo,
    NavMenu, SocialMedia
} from './NavbarElement'
import IconButton from '@material-ui/core/IconButton';
import {AppBar, Badge, Button, Drawer, InputBase, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import MailIcon from '@material-ui/icons/Mail'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ProductsContext from "../../context/product/ProductsContext";
import CartContext from "../../context/car/CartContext";
import Sticky from 'react-sticky-el';
import {Link} from "react-router-dom";

import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram} from 'react-icons/ai'

const NavBar = ({setIsActive}) => {


    const cartContext = useContext(CartContext)
    const {cart} = cartContext
    // const classes = useStyles();

    const {total_unique_items} = cart;

    const [prevScrollPos, setPrevScrollPos] = useState(80);
    const [visible, setVisible] = useState(true);
    const [toggle, setToggle] = useState(false);


    const handleScroll = () => {

        // find current scroll position
        const currentScrollPos = window.pageYOffset;
        // set state based on location info (explained in more detail below)
        setVisible((prevScrollPos > currentScrollPos));
        // set state to new scroll position
        setPrevScrollPos(currentScrollPos);
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

    }, [handleScroll, visible, prevScrollPos])

    const constAbrirCarrito = () => {
        setIsActive(true)
        setToggle(false)
    }
    return (
        <>
            <HeaderContainer>
                <NavContent>

                    <NavLogo>
                        <Link to="/">RACHELSON</Link>
                    </NavLogo>


                    <NavMenu toggle={toggle}

                    >
                        <NavList>
                            <NavItem><NavLinks>Home</NavLinks></NavItem>
                            <NavItem><NavLinks>Feature</NavLinks></NavItem>
                            <NavItem><NavLinks>New</NavLinks></NavItem>
                            <NavItem><NavLinks>Suscribed</NavLinks></NavItem>
                        </NavList>
                        <SocialMedia>
                            <AiFillFacebook/>
                            <AiFillTwitterSquare/>
                            <AiFillInstagram/>
                        </SocialMedia>
                    </NavMenu>
                    <div>
                        <ContentIconCart>
                            <IconCart onClick={() => constAbrirCarrito()}/>
                            {total_unique_items > 0 ?
                                <span style={{
                                    position: 'absolute',
                                    right: 5,
                                    top: -8,
                                    width: 20,
                                    textAlign: 'center',
                                    color: '#f2f2f2',
                                    backgroundColor: 'black',
                                    borderRadius: 10,
                                    padding: 2,
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    transition: '.5s ease-in-out',
                                }}>{total_unique_items}</span>
                                :
                                null
                            }

                        </ContentIconCart>

                        <IconToggle onClick={() => setToggle(!toggle)}/>
                    </div>

                </NavContent>
            </HeaderContainer>

        </>
    )


    // return (
    //     <div className={classes.grow}>
    //
    //
    //         <AppBar style={{
    //             ...navbarStyles,
    //             top: visible ? '0' : '-60px',
    //
    //
    //         }}>
    //             <Toolbar visible={visible} className={classes.toolbar}>
    //                 <IconButton
    //                     edge="start"
    //                     className={classes.menuButton}
    //                     color="inherit"
    //                     aria-label="open drawer"
    //                 >
    //                     <MenuIcon/>
    //                 </IconButton>
    //                 <Typography className={classes.title} variant="h6" noWrap>
    //                     E-Commerce
    //                 </Typography>
    //
    //                 <div className={classes.search}>
    //                     <div className={classes.searchIcon}>
    //                         <SearchIcon/>
    //                     </div>
    //                     <InputBase
    //                         placeholder="Search…"
    //                         classes={{
    //                             root: classes.inputRoot,
    //                             input: classes.inputInput,
    //                         }}
    //                         inputProps={{'aria-label': 'search'}}
    //                     />
    //                 </div>
    //                 <div className={classes.grow}>
    //                     <div className={classes.sectionDesktop}>
    //                         <Link to={"/products"}>
    //                             <Button className={classes.iconButon} aria-label="show 4 new mails" color="inherit">
    //                                 Productos
    //                             </Button>
    //
    //                         </Link>
    //
    //
    //                         <IconButton className={classes.iconButon} onClick={() => setIsActive(true)}
    //                                     aria-label="show 17 new notifications"
    //                                     color="inherit">
    //                             <Badge badgeContent={total_unique_items} color="secondary">
    //                                 <ShoppingBasket/>
    //                             </Badge>
    //                         </IconButton>
    //
    //
    //                         <IconButton
    //                             edge="end"
    //                             aria-label="account of current user"
    //                             // aria-controls={menuId}
    //                             aria-haspopup="true"
    //                             className={classes.iconButon}
    //                             color="inherit"
    //                         >
    //                             <AccountCircle/>
    //                         </IconButton>
    //                     </div>
    //                 </div>
    //             </Toolbar>
    //         </AppBar>
    //
    //     </div>
    // )
}

export default NavBar
