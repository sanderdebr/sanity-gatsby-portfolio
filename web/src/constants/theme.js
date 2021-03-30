const settings = {
  containerWidth: "80vw",
  spacing: "2rem"
};

const breakpoints = {
  screenXS: "374px",
  screenSM: "750px",
  screenMD: "992px",
  screenLG: "1200px",
  screenXL: "1600px"
};

const palette = {
  light: {
    background: "#d6d8ec",
    textPrimary: "#673a6d",
    textSecondary: "#37364d",
    buttonPrimary: "#5a4fff",
    buttonGhost: "transparent"
  },
  dark: {
    background: "#5d4561",
    textPrimary: "#fff",
    textSecondary: "#37364d",
    buttonPrimary: "#fff",
    buttonGhost: "transparent"
  }
};

const baseTheme = { ...settings, ...breakpoints };
const light = { ...baseTheme, ...palette.light };
const dark = { ...baseTheme, ...palette.dark };
const theme = { light, dark };

export default theme;
