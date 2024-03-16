import { Image, useColorMode } from "@chakra-ui/react";
import logoDark from "../../assets/drive_right_dark.png";
import logoLight from "../../assets/drive_right_light.png";

interface Props {
  logoSize: string;
}

const NavBarLogo = ({ logoSize }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === "light" ? logoLight : logoDark}
      boxSize={logoSize}
      cursor="pointer"
      borderRadius="5px"
    />
  );
};

export default NavBarLogo;
