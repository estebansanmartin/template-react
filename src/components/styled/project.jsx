import styled from 'styled-components'

export const ImageContent = styled.div`
    height: 550px;
    background-size: container;
    margin: 0 6% 0 6%;
    padding: 0 30px 0 30px;
    position: relative;
    filter: grayscale(100%);
    transition: 1s linear;
    &:hover {
        filter: grayscale(0%);
    }
`;
export const BoxImage = styled.div `
    padding: 30px;
    margin: 0 18% 150px 18%;
    z-index: 99;
    position: relative;
    border-style: solid;
    border-width: 1px 2px 0 0;
    border-color: black;
    text-decoration: none;
`;
export const LinkPortfolio = styled.h2 `
  color: aqua;
  font-family: sans-serif;
  font-size: 30px;
  font-weight: 100;
  letter-spacing: 5px;
  text-align: center;
  z-index: 999;
  padding: 0 20px 0 20px;
  position: absolute;
  background-color: black;
`;
export const BoxTitle = styled.div `
    right: 10%;
`;
export const Footer = styled.div `
  background-color: black;
  color: white;
  position: fixed; 
  bottom:0; 
  width:100%; 
  height:100px;
`;