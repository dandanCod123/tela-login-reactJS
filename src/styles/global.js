import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

body {
    width: 100w;
    height: 100vh;
    background-color: #f0f2f5;
    font-family: Arial, Helvetica, sans-serif;
}

`;
export default GlobalStyled;