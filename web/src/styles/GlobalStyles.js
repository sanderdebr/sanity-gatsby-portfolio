import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    word-wrap: break-word;
  }

  html {
    min-height: 100%;
  }

  html,
  body {
    font-size: 14px;
    line-height: 1.5;
    font-style: normal;
    font-stretch: normal;
    font-family: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: normal;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-y: none;
    letter-spacing: -0.02em;
    text-shadow: 0px 10px 20px rgb(0 0 0 / 10%);
  }

  ul,
  menu,
  dir {
    padding-left: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  *:focus,
  *:active {
    outline: 0 !important;
  }

  a,
  button {
   transition: opacity .3s;
  }

  a:hover,
  a:active,
  button:hover,
  button:active {
    opacity: .9;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
