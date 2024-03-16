import { Link } from "react-router-dom";
import { Button, HStack, Link as ChakraLink } from "@chakra-ui/react";
import { IoIosCall } from "react-icons/io";
import NavBarLogo from "./NavBarLogo";
import { componentColorScheme } from "../../theme";

const NavBar = () => {
  const navLinkFontSizes = ["12px", "12px", "14px", "16px"];

  return (
    <>
      <NavBarLogo logoSize="100px" />
      <HStack spacing={["16px", "16px", "16px", "35px"]}>
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
        <ChakraLink href="tel:7192009298">
          <Button
            leftIcon={<IoIosCall fontSize="20px" />}
            colorScheme={componentColorScheme}
            size={["sm", "sm", "sm", "md"]}
            variant="solid"
          >
            (719) 200-9298
          </Button>
        </ChakraLink>
      </HStack>
    </>
  );
};

export default NavBar;
