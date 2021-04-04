import styled from "styled-components";


export const SuscribedContainer = styled.section`
  padding: 6rem 1.5rem;
  width: 100%;
  text-align: center;
  position: relative;
  @media screen and (min-width: 768px) {

  }
`
export const SucribedContent = styled.div`
  margin: 0 auto;
  max-width: 380px;


`

export const SuscribedTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
`

export const SuscribedDescription = styled.p`
  margin-top: 1rem;
  font-weight: 400;

`

export const FormularioSuscribe = styled.form`
  margin-top: 1rem;
  display: grid;
  grid-template-columns:1fr .5fr;
  grid-gap: 1rem;

`
export const FormularioInput = styled.input`
  border: none;
  font-size: 1rem;
  padding: 0.5em;
  font-weight: 400;
  font-family: sans-serif;
  outline: none;
`
export const ButoonSuscribed = styled.button`
  border: none;
  padding: 0.5em;
  background-color: #34be87;
  color: white;
  font-weight: bold;
  cursor: pointer;
`
export const AlertaExitosa = styled.div`

  ${({isSuccess}) => isSuccess ? 'background-color:#081f58' : 'transparent'};
  ${({isFailure}) => isFailure ? 'background-color:#480b1e' : 'transparent'};
  color: #e9e9e9;
  position: absolute;
  font-weight: bold;
  width: 250px;
  transition: .5s ease-in-out;

  height: ${({isSuccess, isFailure}) => isSuccess || isFailure ? '60' : 0}px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  bottom: 10px;
  right: 50px;
  overflow: hidden;


  p {
    color: #ececec;
    z-index: 999;
    position: relative;
    padding: 0.5rem 1rem;


  }
`
