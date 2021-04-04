import styled from "styled-components";
import {Link} from "react-router-dom";
import {VscCircleOutline} from 'react-icons/vsc'

export const DescuentoContentItem = styled.div`
  padding: 1rem 1.5rem;

  grid-template-columns: 1fr;
  max-width: 1240px;
  position: relative;
  margin: 0 auto;
  grid-gap: 1rem;
  @media screen and (min-width: 480px) {

  }
  @media screen and (min-width: 768px) {

    padding: 1rem 0;
  }

`
export const DescuentoBox = styled.div`
  display: grid;
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
  grid-template-rows: 70% 30%;
  grid-template-columns: 100%;
  background-color: #fff;
  transition: .4s ease-in-out;



`


export const DescuentoBoxData = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

`

export const DescuentoBoxDataDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`

export const DescuentoBoxTitlle = styled.h2`
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0

`

export const DescuentoBoxDescription = styled.p`
  padding: 0;
  font-size: .8rem;
  margin-top: .5rem;
`

export const DescuentoAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #999;
  padding: 5px 1rem;
  align-self: stretch;

`

export const DescuentoActionPrice = styled.p`
  font-size: 14px;
  letter-spacing: 1px;
  color: #6b6b6b;
  font-weight: 500;


  span {
    font-weight: bold;
    text-decoration: line-through;
    color: #8f8f8f;
    padding-right: 10px;

  }
`
export const DescuentoActionButton = styled.button`
  border: none;
  background-color: transparent;
`


export const ButtonViewItem = styled(Link)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
  top: -1000px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: green;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: .3s ease-in-out;
`
export const DescuentoBoxImg = styled.img`
  width: 180px;
  height: 250px;
  object-fit: contain;


`
export const DescuentoImgButoon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  :hover ${ButtonViewItem} {
    top: 0;
    transition: .3s ease-in-out;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    padding: .5rem 1rem;
    color: #f2f2f2;

    ${({dato}) => dato.descuento ? ' background-color: green;' : null}
    ${({dato}) => dato.nuevo ? ' background-color: orange;' : null}
    ${({dato}) => dato.featured ? ' background-color: skyblue   ;' : null}

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

`

export const ActivarCircle = styled(VscCircleOutline)`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: ${({active}) =>
          active ? '#e3360b' : '#7e7e7e'
  }
`
