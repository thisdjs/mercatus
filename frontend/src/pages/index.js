/** @jsx jsx */
import { jsx, ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import Navbar from "../components/Navbar";
import HSlider from "../components/HomepageSlider";
import { Box } from "rebass";
import ProductSlider from "../components/ProductSlider";

function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <HSlider />
      <Box
        fontSize={3}
        fontWeight="bold"
        letterSpacing="1px"
        width="100vw"
        color={theme.colors.headline}
        sx={{
          maxWidth: 1280,
          mx: "auto",
          p: 3,
          mt: [2, 3, 3, 4],
          mb: [1, 2, 2, 2],
        }}
      >
        New In
      </Box>
      <Box
        sx={{
          maxWidth: 1280,
          mx: "auto",
        }}
      >
        <ProductSlider />
      </Box>
      <Box my={3} py={3} />
    </ThemeProvider>
  );
}

export default IndexPage;
