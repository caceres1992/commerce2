import styled from "styled-components";
import {Link} from "react-router-dom";


export const HeroContainer = styled.section`
  padding-top: 4rem;

  @media screen and (max-width: 768px) {
    padding-top: 3rem;
  }
`
export const HeroCategories = styled.div`
  display: grid;
 
  grid-auto-rows: 120px;
  max-width: 1240px;

  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding-top: 3rem;
  margin-right: 1.5rem;
  margin-left: 1.5rem;

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 150px;

  }

  @media screen and (min-width: 1280px) {
    margin: auto;

  }

`

export const HeroBoxLink = styled(Link)`
  position: relative;
`

export const HeroBoxImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center top;

`

export const HeroDescription = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  color: #151313;
  background-color: rgba(255, 255, 255, .4);
  padding: 0.4rem 1rem;
  font-weight: bold;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    font-weight: 700;
  }
`
