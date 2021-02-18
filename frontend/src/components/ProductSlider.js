import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import { Box } from "rebass";
import { useMediaQuery } from "react-responsive";

const images = [
  {
    src:
      "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1515622472995-1a06094d2224?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1531525797753-909788106ccb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1549326483-d8ecdf9611c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1562966700-49bb28f1c62d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
  },
];

function ProductSlider() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <InfiniteCarousel
      showSides={isTabletOrMobile}
      sidesOpacity={0.5}
      sideSize={0.1}
      slidesToScroll={4}
      slidesToShow={4}
      scrollOnDevice={true}
      arrows={!isTabletOrMobile}
      autoCycle={false}
    >
      {images.map((img, index) => {
        return (
          <Box key={index}>
            <img
              src={img.src}
              alt="placeholder-banner"
              height={"100%"}
              width={"100%"}
            />
          </Box>
        );
      })}
    </InfiniteCarousel>
  );
}

export default ProductSlider;
