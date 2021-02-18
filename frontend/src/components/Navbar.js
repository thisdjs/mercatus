/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import { Flex, Box, Text, Link } from "rebass";
import { User, ShoppingCart } from "css.gg";
import BurguerMenu from "./BurguerMenu";

function Navbar() {
  const { colors } = useTheme();
  return (
    <Flex
      px={3}
      m={0}
      height={55}
      color={colors.headline}
      bg={colors.background}
      alignItems="center"
    >
      <BurguerMenu />
      <Box mx="auto" sx={{ display: ["block", "block", "none", "none"] }} />
      <Text
        p={2}
        mx={2}
        fontWeight="bold"
        fontSize="x-large"
        letterSpacing="2px"
      >
        Mercatus
      </Text>
      <Box mx="auto" />
      <Box pr={2} sx={{ display: ["none", "none", "block", "block"] }}>
        <Link variant="nav" href="#" color={colors.paragraph}>
          <User css={{ color: colors.paragraph }} />
        </Link>
      </Box>
      <Box mr={3} sx={{ display: ["none", "none", "block", "block"] }}>
        <Link
          variant="nav"
          href="#"
          color={colors.paragraph}
          css={{ textDecoration: "none" }}
        >
          <Text fontSize={15}>David</Text>
        </Link>
      </Box>

      <Link variant="nav" href="#" ml={[0, 0, 3, 3]}>
        <ShoppingCart css={{ color: colors.paragraph }} />
      </Link>
    </Flex>
  );
}

export default Navbar;
