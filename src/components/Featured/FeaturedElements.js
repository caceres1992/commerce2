import styled, {keyframes} from "styled-components";
import {WiSunset} from 'react-icons/wi'
import {Link} from "react-router-dom";

const subtitle = '\'Dancing Script\', cursive;'

const animationTop = keyframes`
  from {
    left: -1250px;

  }

  to {

    left: 0;
  }
`

export const FeaturedContainer = styled.section`
  width: 100%;
  max-width: 1240px;

  padding-top: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media screen and (min-width: 1220px) {
    margin: 0 auto;
    padding-left: 0;
    padding-right: 0;
  }

`

export const FeatruredTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-family: 'Dancing Script', cursive;;
`
export const FeaturedSubtitle = styled(WiSunset)`
  display: inline-block;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin: 5px auto;
  width: 100%;
  color: #9d9d9d;
  position: relative;


`


export const FeaturedData = styled(Link)`
  text-decoration: none;
  position: absolute;
  top: 0;
  z-index: 999;
  left: -1250px;
  right: 0;
  width: 80%;
  height: 80%;
  bottom: 0;
  background-color: rgba(255, 255, 255, .95);
  display: flex;
  flex-direction: column;
  margin: auto;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  transform: translateY(-6rem);
  transition: .3s all ease-in-out;

  span {
    color: white;
    font-weight: bold;
    font-size: 10px;
    background-color: green;
    padding: .4rem .7rem;
    border-radius: 10px;
    text-transform: uppercase;
  }


`

export const FeaturedContent = styled.div`
  display: grid;
  grid-auto-rows: 200px;
  grid-template-columns:repeat(2, 1fr);
  grid-gap: 1rem;

  padding-top: 3rem;
  @media screen and (min-width: 768px) {
    grid-template-columns:repeat(4, 1fr);
    margin: 0 auto;
  }

  div {
    position: relative;
    overflow: hidden;
    display: flex;
    border-radius: 5px;

    :hover ${FeaturedData} {
      left: 0;
      transform: translateY(0);
      transition: .3s ease-in-out
    }

  }


`


export const FeaturedTitle = styled.h2`
  font-size: 10px;
  color: #5b5b5b;
  text-transform: uppercase;
  padding: .5rem 1rem;
  border-radius: 3px;
  text-align: center;
  font-weight: bold;

`
export const FeaturedImgContent = styled.div`
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

`

export const FeaturedImg = styled.img`

  object-fit: cover;
  max-width: 200px;



`

export const FeaturedPrice = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #474545;
  padding: .4rem .6rem;
  border-top-right-radius: 10px;
  font-weight: bold;
  font-size: 10px;
  letter-spacing: 1px;
  color: white;
`


