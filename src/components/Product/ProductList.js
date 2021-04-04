import React, {useState} from 'react'
import '../../Card.css'
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    makeStyles,
    Typography
} from "@material-ui/core";
import {commerce} from '../../lib/commerce';
import {stripHtml} from 'string-strip-html';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    image: {
        width: 200,
        height: 200,
    },
    img: {
        objectFit: 'contain',
        backgroundColor: '#f1f1f1',
        maxHeight: 200,

    },
    cardContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemPolo: {
        fontSize: 14,
        padding: 0,
        margin: 0,

    },
    itemPrecio: {
        padding: 0,
        margin: 0,
        fontSize: 14,
        color: "#217345"
    },
    activarActiones: {
        position: "relative",
        '&:hover .MuiCardActions-root ': {
            bottom: "0",
        }
    },
    cardAction: {
        position: 'absolute',
        bottom: "-1000px",
        transition: ".4s ease-in-out",
        backgroundColor: 'rgba(255, 255, 255,0.9)',

        left: 0,
        right: 0,
        height: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',

        '& button': {
            width: '100%',
            margin: 10
        }
    }
}));


const ProductList = ({producto, setCart, getCarrito}) => {

    const {result} = stripHtml(producto.description)

    const classes = useStyles();

    const addToCart = async (productId) => {
        try {
            const resultado = await commerce.cart.add(productId, 1);
            setCart(resultado);

        } catch (e) {
            console.error(e)
        }
        getCarrito();

    };


    return (
        <Grid item xs={6} md={3} sm={4}>
            <Card className={classes.activarActiones}>
                <CardActionArea>

                    <CardMedia
                        component='img'
                        alt={producto.name}

                        className={classes.img}
                        image={producto.media.source}
                        title="Contemplative Reptile"
                    />

                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.itemPolo}>
                            {producto.name}
                        </Typography>


                        <Typography variant={"span"} className={classes.itemPrecio}>
                            {producto.price.formatted_with_code}
                        </Typography>
                    </CardContent>


                </CardActionArea>
                <CardActions className={classes.cardAction}>
                    <Button size="small" variant={'outlined'} color="default">
                        Details
                    </Button>
                    <Button size="small"
                            onClick={() => addToCart(producto.id)}
                            variant={"contained"} color="secondary">
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>

        </Grid>
    )
}

export default ProductList;
