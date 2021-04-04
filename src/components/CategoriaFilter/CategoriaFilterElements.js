import styled from "styled-components";
import {Link} from "react-router-dom";
import {HiOutlineFilter} from "react-icons/hi";
import {GrClose} from "react-icons/all";


export const CategoriaFilterContainer = styled.div`
  background-color: #d0d0d0;
  position: relative;


`
export const DivMenuFilter = styled.div`
  text-align: center;
  padding: 10px;
  color: #4e6257;
  display: flex;
  justify-content: space-between;
  align-items: center;



`

export const IconFilterShow = styled(HiOutlineFilter)`
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const IconFilterClose = styled(GrClose)`
  padding-left: 15px;
  font-size: 29px;
  cursor: pointer;
  position: relative;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const CategoriaContent = styled.div`
  position: fixed;
  top: ${({activarCa}) => activarCa ? 0 : -1000}px;

  left: 0;
  right: 0;
  margin: 0;
  z-index: 999;
  width: 100%;
  height: 100%;

  transition: .5s ease-in-out;

  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    bottom: 0;
    transition: .5s ease-in-out;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }

  @media screen and (min-width: 768px) {
    position: initial;

    height: 50vh;
    top: 0;
    background-color: white;
    :before {
      content: '';
      background-color: transparent;
    }
  }

  ul {
    background-color: white;
    position: relative;
    width: 100%;
    padding: 3rem 1rem;
    @media screen and (min-width: 768px) {
      background-color: transparent;
    }
  }
`
export const CateriaFilterLI = styled.li`
  list-style: none;
  z-index: 9999;
  position: relative;
  padding-top: 10px;
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    z-index: 0
  }
`

export const CategoriaFilterLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: lighter;
  font-family: 'Roboto', sans-serif;
  color: black;
`
