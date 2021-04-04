import styled from "styled-components";
import {Link} from "react-router-dom";

const fontTile = '\'Source Sans Pro\', sans-serif;'
export const HeroBox = styled(Link)`


`
export const HeroImgCarrusel = styled.div`
  height: 600px;
`
export const CarruselImg = styled.img`

  @media screen and (min-width: 480px) {
    height: 100%;
    object-fit: cover;
    object-position: center bottom;
  }
`

export const PromocionContainer = styled.section`
  width: 100%;
  height: calc(100vh - 3rem);
  background: linear-gradient(#737373, #4c4c4c);
`

export const PromocionContent = styled.div`

  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
  max-width: 1240px;
  margin: 0 auto;
`
export const ContentBox = styled.div`
  position: relative;
  display: grid;

  align-items: center;
  grid-auto-columns: 1fr;
  height: 100%;
  @media screen and (min-width: 768px) {

    grid-template-columns: 1fr 1fr;
  }
`
export const ContentBoxData = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`
export const ConentBoxImg = styled.img`
  max-width: 260px;
  position: absolute;
  bottom: 0;
  width: 100%;
  right: auto;
  left: auto;
  object-fit: contain;
  @media screen and (min-width: 768px) {
    max-width: none;
    width: 100%;
    height: 100%;
    object-fit: initial;
  }

`
export const TitleBoxData = styled.h1`
  font-size: 3rem;
  font-family: ${fontTile};
  @media screen and (min-width: 768px) {
    font-size: 5rem;
    padding: 0 0 2rem 0;
  }
`


export const TitleArrivals = styled.p`
  font-size: 1rem;
  color: white;
  font-weight: 400;
  padding: 0;
  margin: 0;
  line-height: 0;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }

`

export const ButtonBuyNow = styled(Link)`
  color: white;
  text-decoration: none;
  background-color: #07ac39;
  padding: .5rem 3rem;
  margin-top: 1rem;
  border-radius: 4px;
  transition: .5s ease-in-out;

  :hover {
    transform: translateY(-.3rem);
    transition: .5s ease-in-out;
    background-color: rgba(0, 0, 0, .6);
  }
`
