import { Image, useColorMode } from "@chakra-ui/react";
import logoDark from "../../assets/drive_right_dark.png";
import logoLight from "../../assets/logoTransparentBkgd.png";
import { Link } from "react-router-dom";

const NavBarLogo = () => {
  const { colorMode } = useColorMode();
  const logoWidths = ["120px", "150px"];
  const logoHeights = ["55px", "60px"];

  return (
    <Link to="/">
      <Image
        src={colorMode === "light" ? logoLight : logoDark}
        h={logoHeights}
        w={logoWidths}
        cursor="pointer"
        borderRadius="5px"
        aria-label="Drive Right Academy Logo"
      />
    </Link>
  );
};

export default NavBarLogo;
