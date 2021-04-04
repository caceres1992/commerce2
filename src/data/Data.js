import imagenFeatured1 from '../img/polo2.jpg'
import imagenFeatured2 from '../img/polo3.jpg'
import imagenFeatured3 from '../img/polo4.jpg'
import imagenFeatured4 from '../img/polera6.png'


import imagenNuevo1 from '../img/polera4.png'
import imagenNuevo2 from '../img/polera6.png'
import imagenNuevo3 from '../img/polera5.png'
import imagenNuevo4 from '../img/poloman.jpg'

import imagenDescuento1 from '../img/camisahero.jpg'
import imagenDescuento2 from '../img/camisahero.jpg'
import imagenDescuento3 from '../img/camisahero.jpg'
import imagenDescuento4 from '../img/camisahero.jpg'
import imagenDescuento5 from '../img/camisahero.jpg'
import imagenDescuento6 from '../img/camisahero.jpg'
import imagenDescuento7 from '../img/camisahero.jpg'
import imagenDescuento8 from '../img/camisahero.jpg'
import imagenDescuento9 from '../img/camisahero.jpg'
import imagenDescuento10 from '../img/camisahero.jpg'


export const FeaturedData = [
    {
        id: 1,
        name: 'Polo Dep',
        description: 'polo decorado  suave',
        brand: 'Rachelson',
        price: 25.00,
        descuento: false,
        nuevo: false,
        featured: true,
        priceDes: 0,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenFeatured1
    },
    {
        id: 2,
        name: 'Polo Javascript',
        description: 'polo decorado  suave',
        brand: 'Rachelson',
        price: 24.00,
        descuento: false,
        nuevo: false,
        featured: true,
        priceDes: 0,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenFeatured2
    },
    {
        id: 3,
        name: 'Polo Smart',
        description: 'polo decorado  suave',
        brand: 'NikeTe',
        price: 37.00,
        descuento: false,
        nuevo: false,
        featured: true,
        priceDes: 0,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenFeatured3
    },
    {
        id: 4,
        name: 'Polo XXX',
        description: 'polo decorado  suave',
        brand: 'ArDidas',
        price: 31.00,
        descuento: false,
        nuevo: false,
        featured: true,
        priceDes: 0,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenFeatured4
    }
]


export const NewdData = [
    {
        id: 1,
        name: 'Polo Dep',
        description: 'polo decorado  suave',
        brand: 'Rachelson',
        price: 25.00,
        descuento: false,
        nuevo: true,
        featured: false,
        priceDes: 0,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenNuevo1
    },
    {
        id: 2,
        name: 'Polo Javascript',
        description: 'polo decorado  suave',
        brand: 'Rachelson',
        price: 24.00,
        descuento: false,
        nuevo: true,
        featured: false,
        priceDes: 0,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenNuevo2
    },
    {
        id: 3,
        name: 'Polo Smart',
        description: 'polo decorado  suave',
        brand: 'NikeTe',
        price: 37.00,
        descuento: false,
        nuevo: true,
        featured: false,
        priceDes: 0,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenNuevo3
    },
    {
        id: 4,
        name: 'Polo XXX',
        description: 'polo decorado  suave',
        brand: 'ArDidas',
        price: 31.00,
        descuento: false,
        nuevo: true,
        featured: false,
        priceDes: 0,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenNuevo4
    }
]

export const DescuentodData = [
    {
        id: 1,
        name: 'Polo Dep',
        description: 'polo decorado  suave',
        brand: 'Rachelson',
        price: 25.00,
        descuento: true,
        nuevo: false,
        featured: false,
        priceDes: .25,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenDescuento1
    },
    {
        id: 2,
        name: 'Polo Javascript',
        description: 'polo decorado  suave',
        brand: 'Rachelson',
        price: 24.00,
        descuento: true,
        nuevo: false,
        featured: false,
        priceDes: .4,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenDescuento2
    },
    {
        id: 3,
        name: 'Polo Smart',
        description: 'polo decorado  suave',
        brand: 'NikeTe',
        price: 37.00,
        descuento: true,
        nuevo: false,
        featured: false,
        priceDes: .5,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenDescuento3
    },
    {
        id: 4,
        name: 'Polo XXX',
        description: 'polo decorado  suave',
        brand: 'ArDidas',
        price: 31.00,
        descuento: true,
        nuevo: false,
        featured: false,
        priceDes: .36,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenDescuento4
    },
    {
        id: 5,
        name: 'Polo XXX',
        description: 'polo decorado  suave',
        brand: 'ArDidas',
        price: 31.00,
        descuento: true,
        nuevo: false,
        featured: false,
        priceDes: .22,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenDescuento5
    },
    {
        id: 6,
        name: 'Polo XXX',
        description: 'polo decorado  suave',
        brand: 'ArDidas',
        price: 31.00,
        descuento: true,
        nuevo: false,
        featured: false,
        priceDes: .5,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenDescuento6
    },
    {
        id: 7,
        name: 'Polo XXX',
        description: 'polo decorado  suave',
        brand: 'ArDidas',
        price: 31.00,
        descuento: true,
        nuevo: false,
        featured: false,
        priceDes: .2,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenDescuento7
    },
    {
        id: 8,
        name: 'Polo XXX',
        description: 'polo decorado  suave',
        brand: 'ArDidas',
        price: 31.00,
        descuento: true,
        nuevo: false,
        featured: false,
        priceDes: .12,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenDescuento8
    },
    {
        id: 9,
        name: 'Polo XXX',
        description: 'polo decorado  suave',
        brand: 'ArDidas',
        price: 31.00,
        descuento: true,
        nuevo: false,
        featured: false,
        priceDes: .15,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenDescuento9
    },
    {
        id: 10,
        name: 'Polo XXX',
        description: 'polo decorado  suave',
        brand: 'ArDidas',
        price: 31.00,
        descuento: true,
        nuevo: false,
        featured: false,
        priceDes: .1,
        color: [{name: 'rojo'}, {name: 'azul'}, {name: 'verde'}],
        size: [{name: 'XL'}, {name: 'L'}, {name: 'M'}, {name: 'S'}],
        imagen: imagenDescuento10
    }
]
