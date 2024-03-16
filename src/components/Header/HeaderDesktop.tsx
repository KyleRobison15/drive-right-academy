import { HStack, Link as ChakraLink, Button } from "@chakra-ui/react";
import HeaderLogo from "./HeaderLogo";
import { IoIosCall } from "react-icons/io";
import ColorModeButton from "../ColorModeButton";

const HeaderDesktop = () => {
  return (
    <>
      <HeaderLogo logoSize="100px" />
      <HStack spacing="20px">
        <ColorModeButton />
        <ChakraLink href="tel:7192009298">
          <Button
            leftIcon={<IoIosCall fontSize="20px" />}
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

export default HeaderDesktop;
