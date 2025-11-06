import { HamburgerIcon } from "@chakra-ui/icons";
import { IoIosCall } from "react-icons/io";
import {
  IoHomeOutline,
  IoReaderOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { componentColorScheme } from "../../theme";
import { MdOutlineMailOutline } from "react-icons/md";

const NavMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options Menu"
        icon={<HamburgerIcon h="24px" w="24px" color="gray" />}
        variant="outline"
        boxSize="42px"
        borderWidth="2px"
        colorScheme="gray"
      />
      <MenuList>
        <Link to="/">
          <MenuItem icon={<IoHomeOutline fontSize="18px" />} fontSize="md">
            Home
          </MenuItem>
        </Link>
        <Link to="/programs">
          <MenuItem icon={<IoReaderOutline fontSize="18px" />} fontSize="md">
            Programs
          </MenuItem>
        </Link>
        <Link to="/about">
          <MenuItem icon={<IoPeopleOutline fontSize="18px" />} fontSize="md">
            About
          </MenuItem>
        </Link>
        <Link to="/contact">
          <MenuItem
            icon={<MdOutlineMailOutline fontSize="18px" />}
            fontSize="md"
          >
            Contact
          </MenuItem>
        </Link>
        <MenuDivider />
        <ChakraLink href="tel:7192009298">
          <MenuItem
            color={`${componentColorScheme}.500`}
            icon={
              <IoIosCall
                fontSize="22px"
                color={`${componentColorScheme}.500`}
              />
            }
            fontSize="md"
            fontWeight="bold"
            aria-label="Call Us"
          >
            (719) 200-9298
          </MenuItem>
        </ChakraLink>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
