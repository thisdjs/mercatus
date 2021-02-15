/** @jsx jsx */
import { jsx } from "@emotion/react";
import { slide as BMenu } from "react-burger-menu";
import { Text } from "rebass";
import { SVG } from "css.gg";
import { useMediaQuery } from 'react-responsive'

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
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
};

function BurguerMenu() {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 })
  return (
    <BMenu
      styles={styles}
      noOverlay
      customBurgerIcon={
        <svg width="24" height="24">
          <use xlinkHref={SVG + "#gg-menu"} />
        </svg>
      }
      customCrossIcon={false}
      width = { isTabletOrMobile ? '100vw' : 300}
    >
      <Text>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
      </Text>
      <Text>
        <a id="about" className="menu-item" href="/about">
          prod
        </a>
      </Text>
      <Text>
        <a id="contact" className="menu-item" href="/contact">
          Account
        </a>
      </Text>
    </BMenu>
  );
}

export default BurguerMenu;
