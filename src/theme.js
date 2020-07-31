// ---------------------- Colors

export const colors_dark = {
  primary: "#192444",
  secondary: "#3D4465", // %55 percent
  accent: "#FF737B", 
  text_header: "#E3E3E3",
  text_header_sub: "#908888"
};

export const colors_light = {
  primary: "#EEEFF0",
  secondary: "#E3E5EC",
  accent: "#FE4F4F",
  text_header: "#33436F",
  text_header_sub: "#33436E"

}

// ---------------------- Font
export const font = {
  weights: fontWeights,
  detail: "Roboto Mono",
  header: "Raleway",
  body: "Roboto"
}

export const fontWeights = {
  light: 200,
  regular: 400,
  bold: 700,
  extraBold: 800
}

export const fontSizes = {
  header: "4rem",
  header_sub: "4rem", 
  body: "2rem",
  detail: "1rem",
}

// ---------------------- Box Shadows


// ---------------------- Media Query Helper
const theme = {
  colors_light,
  colors_dark,
  font
}

export default theme;