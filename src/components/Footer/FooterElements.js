import styled from "styled-components";
import {Link} from "react-router-dom";


export const FooterContainer = styled.footer`
  background-color: #303030;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 480px) {
    height: 30vh;
  }
`

export const FooterContent = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  padding: 1rem 1.5rem;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 1rem 0;
  }

`

export const FooterDisplay = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const FooterDisplayTitle = styled.h3`
  font-size: 1rem;
  color: #acacac;

`

export const FooterDisplayImg = styled.img`
  width: 150px;

`
export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterLi = styled(Link)`
  color: #acacac;
  padding-top: 10px;
  text-decoration: none;

`
export const FooterCopyright = styled.p`
  text-align: center;
  background-color: #373737;
  color: white;
  margin-top: 20px;
  padding: 20px 0;


`
