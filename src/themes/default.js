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

const darkColor = "#03001C";
const darkBrown = "#603601";
const lightColor = "#FFFAF4";
const blueGradient = "linear-gradient(270deg, #00dbd8 0%, #b133ff 100%)";
const redGradient =
  "linear-gradient(100deg,rgb(242,103,152) 0%,rgb(48,35,174) 100%)";
const whiteGradient =
  "linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%)";
const brownGradient =
  "linear-gradient(110.3deg, rgb(238, 179, 123) 8.7%, rgb(216, 103, 77) 47.5%, rgb(114, 43, 54) 89.1%)";
("linear-gradient(90deg,rgb(79,251,223) 0%,rgb(196,147,255) 100%)");
const lightOrange = "#d8bfbf";
const lightBlue = "#9cc9e3";
const fadedWhite_50 = "rgba(255, 255, 255, 0.5)";
const fadedWhite_75 = "rgba(255, 255, 255, 0.75)";
const lightYellow = "#d0bb57";

export const darkTheme = {
  fonts: fonts,
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: darkColor,
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(34.9,98.6%,72.9%)",
    sectionBody: fadedWhite_75,
    socialIcons: "white",
    themeSwitch: blueGradient,
    gradient: blueGradient,
    projectTitle: lightBlue,
    projectDivider: lightYellow,
    projectBody: "white",
    projectTags: lightOrange,
    projectLinks: "#6b3030",
    technologiesCaption: "white",
    technologiesDescription: fadedWhite_75,
    timelineStop: "white",
    timelineDescription: fadedWhite_75,
    hover: "white",
    bottomLine: "rgba(255, 255, 255, 0.1)",
  },
  breakpoints: breakpoints,
};

export const lightTheme = {
  fonts: fonts,
  colors: {
    primary1: darkBrown,
    background1: lightColor,
    accent1: darkBrown,
    button: darkBrown,
    background2: "#060726",
    sectionBody: darkBrown,
    socialIcons: darkBrown,
    themeSwitch: darkBrown,
    gradient: brownGradient,
    projectTitle: "#B3541E",
    projectDivider: "#890F0D",
    projectBody: "#876445",
    projectTags: "#FC8621",
    projectLinks: "#DE834D",
    technologiesCaption: darkBrown,
    technologiesDescription: darkBrown,
    timelineStop: darkBrown,
    timelineDescription: darkBrown,
    hover: darkBrown,
    bottomLine: "rgba(0, 0, 0, 0.1)",
  },
  breakpoints: breakpoints,
};
