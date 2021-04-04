import React, {useContext} from 'react';
import {Container, Drawer, makeStyles, Typography, List, Button} from "@material-ui/core";
import ItemCart from "./ItemCart";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import InfoIcon from '@material-ui/icons/Info';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Link} from "react-router-dom";
import ProductsContext from "../../context/product/ProductsContext";
import CartContext from "../../context/car/CartContext";
import CheckoutContext from "../../context/checkout/CheckoutContext";

const useStyles = makeStyles((theme) => ({
    drawer: {},
    ProductoTitle: {
        fontSize: '25px',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0',

    },
    priceTotal: {
        color: 'green',
        fontSize: 14,
        border: '1px solid green',
        padding: '3px 6px',
        borderRadius: 4
    }
}))

const Carrito = ({isActive, setIsActive}) => {


    const cartContext = useContext(CartContext)
    const chekcoutContext = useContext(CheckoutContext)

    const {cart} = cartContext
    const {generateCheckoutToken} = chekcoutContext


    const classes = useStyles();
    const {total_unique_items, line_items} = cart;

    console.log(total_unique_items)
    return (
        <Drawer
            className={classes.drawer}
            anchor={'right'}
            open={isActive}
            onClose={() => setIsActive(!isActive)}
        >
            <div style={{height: "100%", width: "300px"}}>
                <Typography className={classes.ProductoTitle} variant={"h2"}>Shopping Cart</Typography>
                <Container>
                    <List>
                        {total_unique_items > 0 ? line_items.map(item => (
                                <>
                                    <ItemCart key={item.id} item={item}/>
                                    <Divider/>

                                </>

                            )
                        ) : <div style={{
                            display: 'flex',
                            justifyContent: 'center', border: '1px solid #3b7dae',
                            padding: '5px ',
                            color: '#3b7dae',

                        }}>
                            <InfoIcon/> <p> Canasta Vacia </p>
                        </div>}
                        <ListItem style={{display: "flex", justifyContent: "space-between"}}>

                            <Typography style={{fontSize: "15px"}} variant={'h4'}>
                                Subtotal
                            </Typography>

                            <Typography className={classes.priceTotal} variant={'h3'}>
                                {total_unique_items > 0 ? cart.subtotal.formatted_with_code : '00 USD'}
                            </Typography>


                        </ListItem>
                        <Divider/>
                        <Link to={'/pay'}>

                            <Button variant={'contained'} fullWidth={1}
                                    style={{backgroundColor: '#000', color: '#fff', marginTop: 10}}
                                    endIcon={<ArrowForwardIcon/>}
                                    onclick={() => generateCheckoutToken(cart)}
                            >Checkout
                            </Button>
                        </Link>

                    </List>

                </Container>

            </div>

        </Drawer>
    )
}

export default Carrito
