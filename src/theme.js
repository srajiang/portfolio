import { css } from 'styled-components';
// ---------------------- Colors

export const colors_dark = {
  background_primary: "#002732",
  background_secondary: "#18494be3",
  background_shadow: "#021B1A",
  box_shadow: "rgba(2,27,26,1)",
  
  text_accent: "#FF737B", // contrast

  text_header_lg: "#cdcfcf",
  text_header_lg_sub: "#828788",
  text_header_sm: "#cdcfcf",
  
  text: "#C1BFC6", // body text
  isDark: true,

};

export const colors_light = {
  background_primary: "#dbdfdf",
  background_secondary: "#e7e7e7",
  background_shadow: "",
  box_shadow: "rgba(13, 22, 20,0.31)",

  text_accent: "#FE4F4F",

  text_header_lg: "#285260",
  text_header_lg_sub: "#839195",
  text_header_sm:  "#285260",

  text: "#535353",
  isDark: false,
}


// ---------------------- Font

export const fontWeights = {
  light: 200,
  regular: 300,
  bold: 700,
  extraBold: 800
}

export const fontSizes = {
  header: "4rem",
  header_med: "1.75rem",
  header_sm: "1.10rem", 
  body: ".75rem",
  accent: ".8rem",
}

export const fontFamily = {
  accent: "Roboto Mono",
  header: "Raleway",
  body: "Roboto",
}

export const font = {
  weight: fontWeights,
  family: fontFamily,
  size: fontSizes
}
// ---------------------- Transition
export const transition = {
  cubic: "all .25s cubic-bezier(0.645, 0.045, 0.355, 1)",
};

// ---------------------- Box Shadows
export const boxShadow = {
  medium: "rgba(2, 27, 26, 1) 0px 10px 30px -15px"
}

// ---------------------- Media Query Helper
const breakpoints = {
  desktop_lg: { px: 1228 },
  desktop_sm: { px: 670 },
  tablet: { px: 768 },
  mobile_lg: { px: 600} 
}

/* 
  exports a media query helper object
  with keys for all the media types (desktoplg, dtsml, and tablet)
  and values are a function which accepts template literal argument
  and returns the correct max-width css syntax along with any other rules
  supplied

 */

export const mediaQuery = Object.keys(breakpoints).reduce((acc, mediaType) => {
  const { px } = breakpoints[mediaType];
  acc[mediaType] = (...args) => css`
  
    @media (max-width: ${px}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {})

const theme = {
  colors_light,
  colors_dark,
  font, 
  transition
}

export default theme;