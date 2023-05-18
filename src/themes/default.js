const fonts = {
  title: "Space Grotesk, sans-serif",
  main: "Space Grotesk, sans-serif",
};

const breakpoints = {
  sm: "screen and (max-width: 640px)",
  md: "screen and (max-width: 768px)",
  lg: "screen and (max-width: 1024px)",
  xl: "screen and (max-width: 1280px)",
};

const darkColor = "#060726";
const lightColor = "#cfd4fc";
const blueGradient = "linear-gradient(270deg, #00dbd8 0%, #b133ff 100%)";
const redGradient =
  "linear-gradient(100deg,rgb(242,103,152) 0%,rgb(48,35,174) 100%)";
const whiteGradient =
  "linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%)";
const lightBlueGradient =
  "linear-gradient(90deg,rgb(79,251,223) 0%,rgb(196,147,255) 100%)";
const lightOrange = "#d8bfbf";
const lightBlue = "#9cc9e3";
const fadedWhite_50 = "rgba(255, 255, 255, 0.5)";
const fadedWhite_75 = "rgba(255, 255, 255, 0.75)";

export const darkTheme = {
  fonts: fonts,
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: darkColor,
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(34.9,98.6%,72.9%)",
    sectionTitle: blueGradient,
    sectionBody: fadedWhite_50,
    socialIcons: "white",
    themeSwitch: blueGradient,
    gradient: blueGradient,
    projectTitle: lightBlue,
    projectBody: "white",
    projectTags: lightOrange,
    technologiesCaption: "white",
    technologiesDescription: fadedWhite_75,
    timelineDescription: fadedWhite_75,
    hover: "white",
  },
  breakpoints: breakpoints,
};

export const lightTheme = {
  fonts: fonts,
  colors: {
    primary1: "#060726",
    background1: lightColor,
    accent1: "#060726",
    button: "#060726",
    background2: "#060726",
    sectionTitle: redGradient,
    sectionBody: darkColor,
    socialIcons: darkColor,
    themeSwitch: darkColor,
    gradient: blueGradient,
    projectTitle: darkColor,
    projectBody: darkColor,
    projectTags: darkColor,
    technologiesCaption: "black",
    technologiesDescription: darkColor,
    timelineDescription: darkColor,
    hover: "black",
  },
  breakpoints: breakpoints,
};
