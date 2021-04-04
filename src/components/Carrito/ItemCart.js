import React, {useContext} from 'react';

import {Card, IconButton, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";

import ListItem from '@material-ui/core/ListItem';
import CloseIcon from '@material-ui/icons/Close';

import CartContext from "../../context/car/CartContext";

const ItemCart = ({item}) => {

    const cartContext = useContext(CartContext)
    const {updateCartQuantity, removeItem} = cartContext;


    const quantityAndPrice = () => {
        return (
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center'}}>
                <Card style={{}}

                >
                    <IconButton color="primary" aria-label="upload picture" component="span"
                                size={'small'}
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                                onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                    >-</IconButton>

                </Card>
                {item.quantity}
                <Card


                >
                    <IconButton color="primary" aria-label="upload picture" component="span"
                                size={'small'}
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                                onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                    >+</IconButton>
                </Card>
                <Typography style={{
                    fontSize: 12,
                    color: 'green'
                }}>{item.price.formatted_with_symbol}</Typography></div>
        )
    }


    return (
        <ListItem>
            <ListItemAvatar>
                <div>
                    <img src={item.media.source} style={{width: 40, height: 40}} alt={"dddd"}/>
                </div>
            </ListItemAvatar>

            <ListItemText primary={item.name} secondary={quantityAndPrice()}/>
            <CloseIcon
                fontSize={'small'}
                onClick={() => removeItem(item.id)}
                color={'secondary'}
                cursor={'pointer'}
            />
        </ListItem>

    )
}

export default ItemCart;
