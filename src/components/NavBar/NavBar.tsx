import { Button, HStack } from "@chakra-ui/react";
import NavBarLogo from "./NavBarLogo";
import { Link } from "react-router-dom";
import { componentColorScheme } from "../../theme";

const NavBar = () => {
  const navLinkFontSizes = ["12px", "12px", "16px", "18px"];

  return (
    <>
      <NavBarLogo logoSize="100px" />
      <HStack spacing={["20px", "20px", "20px", "40px"]}>
        <Link to={"/"}>
          <Button
            colorScheme="default"
            fontSize={navLinkFontSizes}
            variant="link"
          >
            Home
          </Button>
        </Link>
        <Link to={"/programs"}>
          <Button
            colorScheme="default"
            fontSize={navLinkFontSizes}
            variant="link"
          >
            Programs
          </Button>
        </Link>
        <Link to={"/schedule"}>
          <Button
            colorScheme="default"
            fontSize={navLinkFontSizes}
            variant="link"
          >
            Schedule
          </Button>
        </Link>
        <Link to={"/about"}>
          <Button
            colorScheme="default"
            fontSize={navLinkFontSizes}
            variant="link"
          >
            About
          </Button>
        </Link>
        <Link to={"/frequently-asked-questions"}>
          <Button
            colorScheme="default"
            fontSize={navLinkFontSizes}
            variant="link"
          >
            FAQs
          </Button>
        </Link>
        <Link to={"/glossary"}>
          <Button
            colorScheme="default"
            fontSize={navLinkFontSizes}
            variant="link"
          >
            Glossary
          </Button>
        </Link>
        <Link to={"/contact"}>
          <Button
            colorScheme={componentColorScheme}
            size={["sm", "md", "md", "lg"]}
            variant="solid"
          >
            Contact Us
          </Button>
        </Link>
      </HStack>
    </>
  );
};

export default NavBar;
