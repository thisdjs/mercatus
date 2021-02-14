/** @jsx jsx */
import { jsx, useTheme, css } from "@emotion/react";
import { Flex, Box, Text, Link } from "rebass";
import { FiUser } from "@react-icons/all-files/fi/FiUser";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import BurguerMenu from "./BurguerMenu";

function Navbar() {
  const { colors, breakpoints } = useTheme();
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
      <Link
        p={2}
        mx={2}
        variant="nav"
        href="#"
        color={colors.paragraph}
        css={{ textDecoration: "none" }}
      >
        <FiUser
          css={{ height: "18px", width: "18px", verticalAlign: "middle" }}
        />
        <Text
          as="span"
          pl={2}
          mb={2}
          fontSize={15}
          css={css`
            @media (max-width: ${breakpoints[2]}px) {
              display: none;
            }
          `}
        >
          David
        </Text>
      </Link>
      <Link variant="nav" href="#" pl={2}>
        <FiShoppingCart
          css={{ height: "18px", width: "18px", verticalAlign: "middle" }}
        />
      </Link>
    </Flex>
  );
}

export default Navbar;
