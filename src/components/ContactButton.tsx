import { Button, Link as ChakraLink } from "@chakra-ui/react";
import { IoIosCall } from "react-icons/io";
import { componentColorScheme } from "../theme";

const ContactButton = () => {
  return (
    <ChakraLink href="tel:7192009298">
      <Button
        aria-label="Call Us"
        leftIcon={<IoIosCall fontSize="24px" />}
        colorScheme={componentColorScheme}
        size={["sm", "sm", "sm", "md"]}
        variant="solid"
      >
        (719) 200-9298
      </Button>
    </ChakraLink>
  );
};

export default ContactButton;
