import preset from "@rebass/preset";

const theme = {
  ...preset,
  colors: {
    background: "#eff0f3",
    headline: "#0d0d0d",
    paragraph: "#2a2a2a",
    button: "#ff8e3c",
    buttonText: "#0d0d0d",
  },
  illustration: {
    stroke: "#0d0d0d",
    main: "#eff0f3",
    highlight: "#ff8e3c",
    secondary: "#fffffe",
    terciary: "#d9376e",
  },
  breakpoints: ["640", "768", "1024", "1280"],
};

export default theme;
