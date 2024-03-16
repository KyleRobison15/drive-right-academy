import { HamburgerIcon } from "@chakra-ui/icons";
import { IoIosCall } from "react-icons/io";
import {
  IoHomeOutline,
  IoReaderOutline,
  IoCalendarOutline,
  IoHelpCircleOutline,
  IoSchoolOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon h="32px" w="32px" color="gray" />}
        variant="outline"
        boxSize="50px"
        borderWidth="3px"
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
        <Link to="/schedule">
          <MenuItem icon={<IoCalendarOutline fontSize="18px" />} fontSize="md">
            Schedule
          </MenuItem>
        </Link>
        <Link to="/programs">
          <MenuItem icon={<IoPeopleOutline fontSize="18px" />} fontSize="md">
            About
          </MenuItem>
        </Link>
        <Link to="/programs">
          <MenuItem
            icon={<IoHelpCircleOutline fontSize="18px" />}
            fontSize="md"
          >
            FAQs
          </MenuItem>
        </Link>
        <Link to="/programs">
          <MenuItem icon={<IoSchoolOutline fontSize="18px" />} fontSize="md">
            Glossary
          </MenuItem>
        </Link>
        <MenuDivider />
        <MenuItem
          color={"green"}
          icon={<IoIosCall fontSize="20px" color="green" />}
          fontSize="lg"
          fontWeight="bold"
        >
          Contact Us
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
