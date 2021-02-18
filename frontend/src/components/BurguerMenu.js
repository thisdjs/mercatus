/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import { slide as BMenu } from "react-burger-menu";
import { Link } from "rebass";
import { SVG } from "css.gg";
import { useMediaQuery } from "react-responsive";
import "./burguerMenu.css";

// styles that BMenu accepts
const styles = {
  bmBurgerButton: {
    position: "relative",
    width: "24px",
    height: "24px",
  },
  bmBurgerBars: {
    background: "#373a47",
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
  bmItem: {
    outline: "none",
    textDecoration: "none",
  },
};

function BurguerMenu() {
  const {isTabletOrMobile} = useMediaQuery({ maxWidth: 1024 });
  const { colors } = useTheme();
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
      width={isTabletOrMobile ? "100vw" : 300}
    >
      <Link id="home" className="menu-item" href="/" color={colors.paragraph} py={2}>
        Home
      </Link>
      <Link id="home" className="menu-item" href="/" color={colors.paragraph} py={2}>
        Prod
      </Link>
      <Link id="home" className="menu-item" href="/" color={colors.paragraph} py={2}>
        Account
      </Link>
    </BMenu>
  );
}

export default BurguerMenu;
