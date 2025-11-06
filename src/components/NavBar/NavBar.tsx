import { Link, useLocation } from "react-router-dom";
import { Button, HStack } from "@chakra-ui/react";
import NavBarLogo from "./NavBarLogo";
import ContactButton from "../ContactButton";

const NavBar = () => {
  const navLinkFontSizes = ["12px", "14px", "14px", "14px", "16px"];
  const location = useLocation();

  const getButtonVariant = (path: string) => {
    if (location.pathname === path) {
      return "solid";
    }

    return "ghost";
  };

  return (
    <>
      <HStack>
        <NavBarLogo />
      </HStack>
      <HStack justify="space-evenly" flex="1">
        <Link to={"/"}>
          <Button
            fontSize={navLinkFontSizes}
            variant={getButtonVariant("/")}
            borderRadius="full"
          >
            Home
          </Button>
        </Link>
        <Link to={"/programs"}>
          <Button
            fontSize={navLinkFontSizes}
            variant={getButtonVariant("/programs")}
            borderRadius="full"
          >
            Programs
          </Button>
        </Link>
        <Link to={"/about"}>
          <Button
            fontSize={navLinkFontSizes}
            variant={getButtonVariant("/about")}
            borderRadius="full"
          >
            About
          </Button>
        </Link>
        <Link to={"/contact"}>
          <Button
            fontSize={navLinkFontSizes}
            variant={getButtonVariant("/contact")}
            borderRadius="full"
          >
            Contact
          </Button>
        </Link>
      </HStack>
      <HStack>
        <ContactButton />
      </HStack>
    </>
  );
};

export default NavBar;
