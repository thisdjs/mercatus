/** @jsx jsx */
import { jsx, ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Slider />
    </ThemeProvider>
  );
}

export default IndexPage;
