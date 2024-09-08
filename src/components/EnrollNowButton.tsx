import { PhoneIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { componentColorScheme } from "../theme";

const EnrollNowButton = () => {
  return (
    <Box
      as="a"
      href="tel:7192009298"
      flex="1"
      display="flex"
      justifyContent="center"
    >
      <Button
        flex="1"
        variant="solid"
        colorScheme={componentColorScheme}
        rightIcon={<PhoneIcon boxSize="14px" ml="4px" />}
      >
        Enroll Now
      </Button>
    </Box>
  );
};

export default EnrollNowButton;
