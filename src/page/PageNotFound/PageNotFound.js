import styled from "styled-components";
import {Link} from "react-router-dom";


export const NotFoundContainer = styled.section`
  height: calc(100vh - 30vh);
  padding: 4rem 1.5rem;
  background: linear-gradient(rgb(181, 8, 8), rgb(210, 145, 145))
`

export const FoundErrorTitle = styled.h2`
  text-align: center;
  margin-top: 10px;
  font-size: 3rem;
  color: #55cfcf;
  letter-spacing: 1px;
  font-weight: bold;
  text-shadow: 0 5px 4px #5a5959;

  font-family: cursive;

`

export const FoundContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const FoundImg = styled.img`
  width: 100%;

`

export const FoundButtonReturn = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c4c4c4;
  font-size: 1rem;


  svg {
    margin-right: 10px;
    font-size: 1.4rem;


  }
`
