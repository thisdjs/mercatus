/** @jsx jsx */
import { jsx } from "@emotion/react";
import { slide as Menu } from "react-burger-menu";
import { Text } from "rebass";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";

const styles = {
  bmBurgerButton: {
    position: "relative",
    width: "24px",
    height: "24px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    marginLeft: "-16px",
  },
  bmMenu: {
    background: "#eff0f3",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    overflowY: "hidden",
    height: "calc(100% - 38px)",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
};

function BurguerMenu() {
  return (
    <Menu styles={styles} noOverlay customBurgerIcon={<FiMenu />} customCrossIcon={ false }>
      <Text as="div">
        <a id="home" className="menu-item" href="/">
          Home
        </a>
      </Text>
      <Text as="div">
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      </Text>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
}

export default BurguerMenu;
