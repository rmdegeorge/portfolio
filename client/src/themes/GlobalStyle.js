import { createGlobalStyle } from "styled-components";
import backgroundImg from "../img/background.jpg";

const size = {
  mobile: "425px",
  tablet: "768px",
  computer: "1024px"
};
export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  computer: `(min-width: ${size.computer})`
};

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: rgb(20 30 34);
  }
  body {
    font-family: 'Muli', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-position: center -175px;
    background-attachment: scroll;
    background-size: auto 100%;
    background-color: rgb(20 30 34);

  }  
  * {
    box-sizing: border-box;
  }
`;

const breakpoint = {
  mobile: "600px",
  tabletPortrait: "900px",
  tabletLandscape: "1200px",
  dsktop: "1800px"
};
export const media = {
  mobile: `(max-width: ${breakpoint.mobile})`,
  tabletPortrait: `(min-width: ${breakpoint.mobile})`,
  tabletLandscape: `(min-width: ${breakpoint.tabletPortrait})`,
  desktop: `(min-width: ${breakpoint.tabletLandscape})`,
  desktopLarge: `(min-width: ${breakpoint.desktop})`
};

export default GlobalStyle;
