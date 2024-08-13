import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <SunIcon fontSize="14px" />
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        size="sm"
      />
      <MoonIcon fontSize="14px" />
    </HStack>
  );
};

export default ColorModeSwitch;
