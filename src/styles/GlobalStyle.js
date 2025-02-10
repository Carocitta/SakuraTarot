import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
 }

 :root {
  font-family:"Sour Gummy", serif; ;

}

 body,
 h1, h2, h3, h4, p {
  margin: 0;
  background-color: #FCCB4A;
 }


 ul {
  list-style: none;
  margin: 0;
  padding: 0;
 }

 img {
 max-width: 100%
 }

 a {
  text-decoration: none;
  color: inherit;
 }     

 input,
 textarea,
 select {
  font: inherit;
  border: none;
 }

 button {
  border: none;
  font: inherit;
  cursor: grab;
 }

`;

export default GlobalStyle;
