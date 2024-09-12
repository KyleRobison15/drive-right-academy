import { Image } from "@chakra-ui/react";
import logoLight from "../../assets/logoTransparentBkgd.png";
import { Link } from "react-router-dom";

const NavBarLogo = () => {
  const logoWidths = ["120px", "150px"];
  const logoHeights = ["55px", "60px"];

  return (
    <Link to="/">
      <Image
        src={logoLight}
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
