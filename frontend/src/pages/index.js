import React from "react";
import { Flex, Box, Text, Link } from "rebass";
import Slider from "../components/Slider";

function IndexPage() {
  return (
    <>
      <Flex
        p={0}
        m={0}
        height={55}
        color="white"
        bg="black"
        alignItems="center"
      >
        <Text p={2} fontWeight="bold">
          Rebass
        </Text>
        <Box mx="auto" />
        <Link variant="nav" href="#!">
          Login
        </Link>
      </Flex>
      <Slider />
    </>
  );
}

export default IndexPage;
