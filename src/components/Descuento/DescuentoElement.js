import styled from "styled-components";
import {Link} from "react-router-dom";

const fontTile = '\'Source Sans Pro\', sans-serif;'
export const DescuentoContainer = styled.section`
  margin-top: 4rem;
  background-color: #ced3ca;
`
export const DescuentoContent = styled.div`

  background-color: rgba(255, 255, 255, .9);
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1240px;


  @media screen and (min-width: 768px) {
    grid-template-columns: 30% 70%;
    grid-auto-rows: 500px;
    margin: 0 auto;
  }

`
export const DescuentoData = styled.div`

  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
  }
`

export const DescuentoLink = styled(Link)`
  color: #020202;
  text-decoration: none;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 1.5rem 0;
  width: 130px;

  @media screen and (min-width: 768px) {
    margin: 2.5rem 0;
  }

  svg {
    margin-left: 1rem;
  }




`
export const DescuentoTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  color: #020202;

  font-family: ${fontTile};


  @media screen and (min-width: 769px) {
    max-width: 220px;
  }
`

export const DescuentoImg = styled.img`
  width: 100%;
  max-height: 450px;
  object-fit: contain;
  align-self: center;
`

