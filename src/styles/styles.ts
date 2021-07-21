import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    min-height: 100vh;
    background-color: hsl(252,20%,30%);
    display: flex;
    align-items: center;
    justify-content: center;
}
`