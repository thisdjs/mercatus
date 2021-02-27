/** @jsx jsx */
import { jsx, ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import Navbar from "../components/Navbar";
import HSlider from "../components/HomepageSlider";
import { Box } from "rebass";
import { graphql } from "gatsby";
import ProductSlider from "../components/ProductSlider";

function IndexPage({ data }) {
  const sanityImg = data.allSanityImageAsset.edges.map((img) => img.node);
  console.log("data: ", data);
  console.log("images: ", sanityImg);
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
      ></Box>
      <Box my={3} py={3} />
      <ProductSlider img={sanityImg} />
    </ThemeProvider >
  );
}

export default IndexPage;

export const query = graphql`
  query MyQuery {
    allSanityProduct {
      edges {
        node {
          id
        }
      }
    }
    allSanityImageAsset {
      edges {
        node {
          id
          fixed {
            base64
            srcWebp
            srcSetWebp
          }
          fluid {
            base64
            srcWebp
            srcSetWebp
          }
        }
      }
    }
  }
`;
