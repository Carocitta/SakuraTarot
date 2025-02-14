import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
 }

 :root {
  font-family:"Sour Gummy", serif;

--brown: #795743;
--yellow: #fccb4a;
--purple: #9083e3;
--lightpurple: #d7b9fb;
--black: #08090a;
--white: #fff;

}

 body {
  margin: 0;
  background-color: var(--yellow);
  
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
