import styled from "styled-components";
import {Link} from "react-router-dom";


export const NewItemContainer = styled.section`

  margin-top: 4rem;

`
export const NewItemContent = styled.div`
  background-color: #EAA800;
`

export const NewItemLink = styled(Link)`
`

export const NewItemImg = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
`


export const NewItemContentBox = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 300px;
  padding: 0 1.5rem;

  grid-gap: 1rem;
  max-width: 1240px;


  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1240px) {
    margin: 0 auto;
    padding: 2rem 0 0

  }


`

export const ContentBox = styled.div`
  display: grid;
  grid-template-rows: 70% 30%;
  grid-template-columns: 100%;
  transition: 0.5s ease-in-out;
  position: relative;
  background-color: white;
  :hover {
    transform: translateY(-1rem);
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
  }
`


export const ContentBoxData = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


export const ContentBoxTitle = styled.div`
  margin-bottom: 5px;
`
export const BoxTitle = styled.h2``
export const BoxDescription = styled.p``

export const ContentBoxAction = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;

  align-items: center;
  border-top: 1px solid #cdcdcd;
  padding: 5px 1rem;

`

export const ContentPrice = styled.span``
export const ConentCart = styled.button`
  border: none;
  background-color: transparent;

`


export const ContentButtonView = styled(Link)`
  position: absolute;
  top: -1110px;
  text-decoration: none;
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 1rem 3rem;

  border-radius: .5rem;
  color: green;

  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: .5s ease-in-out


`
export const ContentBoxImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
export const ContentBoxImgAndButton = styled.div`
  position: relative;
  overflow: hidden;

  :hover ${ContentButtonView} {
    top: 0;

    transition: .3s ease-in-out
  }
`

export const ContentNew = styled.div`
  position: absolute;
  background-color: green;
  color: #e2e2e2;
  font-weight: 600;
  padding: .4rem .8rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`
