import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {    
    margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body{
    
    background-color: #333;
    color: #999999;
    -webkit-font-smoothing: antialiased;
}


body, input, button, p { 
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
}

button {
  cursor: pointer;
}

`;

export { GlobalStyle };
