import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {GiShoppingCart} from 'react-icons/gi'
import {RiBarChartHorizontalFill} from 'react-icons/ri'

// const useStyles = makeStyles((theme, visible) => ({
//     grow: {
//         flexGrow: 1,
//         position: 'relative',
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//
//     },
//
//     iconButon: {
//         color: '#3e3e3e'
//     },
//     title: {
//         display: 'none',
//         [theme.breakpoints.up('sm')]: {
//             display: 'block',
//         },
//     },
//     toolbar: {},
//     search: {
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: fade(theme.palette.common.white, 0.15),//
//         transition: '0.5s ease-in-out'
//         ,//      backgroundColor:'rgba(255,255,255,0.15)'  son similares
//         '&:hover': {
//             backgroundColor: fade(theme.palette.common.white, 0.25),
//         },
//         marginRight: theme.spacing(2),
//         marginLeft: 0,
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             marginLeft: theme.spacing(3),
//             width: 'auto',
//         },
//     },
//     searchIcon: {
//         padding: theme.spacing(0, 2),
//         height: '100%',
//         color: '#3e3e3e',
//         position: 'absolute',
//         pointerEvents: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     inputRoot: {
//         color: 'inherit',
//     },
//     inputInput: {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         color: '#3e3e3e',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
//
//     sectionDesktop: {
//         display: 'none',
//         color: '#3e3e3e',
//         [theme.breakpoints.up('md')]: { //funciona como el media query
//             display: 'flex',
//         },
//         justifyContent: "end"
//     },
// }));


// export default useStyles


const fontTile = '\'Slabo 27px\', serif;'


export const HeaderContainer = styled.header`
  background-color: #dbdbdb;

  width: 100%;
  position: fixed;
  z-index: 999;

`

export const NavContent = styled.nav`

  max-width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  width: calc(100% - 3rem);


  @media screen and (min-width: 768px) {
    justify-content: initial;
    height: 4rem;
    margin: 0 auto;
  }



`
export const NavLogo = styled.div`
  font-weight: bold;

  a {
    color: #2f2f2f;
    text-decoration: none;
  }
`
export const NavMenu = styled.div`

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 3rem;
    background-color: #f2f2f2;
    padding: 2rem;
    width: 70%;
    left: ${({toggle}) => toggle ? 0 : -1000}px;
    min-width: 200px;
    max-width: 350px;
    height: 100vh;
    transition: .4s ease-in-out;
  }
`

export const NavList = styled.ul`


  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

`
export const NavItem = styled.li`
  margin-bottom: 2rem;
  list-style: none;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`

export const NavLinks = styled(Link)`
  text-decoration: none;
  color: dimgrey;
  font-weight: 700;
  font-family: ${fontTile};
`
export const SocialMedia = styled.div`
  width: 100%;
  padding-top: 5rem;

  svg {
    font-size: 1.5rem;
    cursor: pointer;
    color: #999;
    margin-right: 2rem;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const IconCart = styled(GiShoppingCart)`
  margin-right: 10px;
  cursor: pointer;
  font-size: 1.6rem;
`
export const IconToggle = styled(RiBarChartHorizontalFill)`
  cursor: pointer;
  font-size: 1.6rem;
  @media screen and (min-width: 768px) {

    display: none;
  }
`

export const ContentIconCart = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    margin-right: 0;
  }
`
