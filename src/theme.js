// ---------------------- Colors

export const colors_dark = {
  background_primary: "#0D303B",
  background_secondary: "#2D5658",
  
  text_accent: "#FF737B", // contrast

  text_header_lg: "#E3E3E3",
  text_header_lg_sub: "#908888",
  text_header_sm: "#dde5ea",
  
  text: "#C1BFC6" // body text

};

export const colors_light = {
  background_primary: "#EEEFF0",
  background_secondary: "#E3E5EC",
  text_accent: "#FE4F4F",
  text_header: "#33436F",
  text_header_sub: "#33436E"

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
  header_sm: "1.2rem", 
  body: "1rem",
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
// ---------------------- Box Shadows


// ---------------------- Media Query Helper
const theme = {
  colors_light,
  colors_dark,
  font
}

export default theme;