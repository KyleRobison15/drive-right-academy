import { HStack, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Stack
      direction={["column", "column", "row", "row"]}
      as="footer"
      id="footer"
      minH="50px"
      w="100%"
      px="32px"
      py="10px"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.50"
      borderTopWidth="1px"
    >
      <HStack spacing={1}>
        <Icon as={FaRegCopyright} boxSize="12px" />
        <Text fontSize="sm">2024 Drive Right Academy</Text>
      </HStack>
      <Stack direction="row" alignItems="center">
        <Text fontSize="sm">Website created by Kyle Robison:</Text>
        <HStack spacing={3}>
          <Link href="https://github.com/KyleRobison15" isExternal>
            <Icon as={BsGithub} boxSize="18px" color="brand.600" />
          </Link>
          <Link href="https://www.linkedin.com/in/kyle-robison/" isExternal>
            <Icon as={BsLinkedin} boxSize="18px" color="brand.600" />
          </Link>
          <Link href="mailto: kylerobison15@gmail.com" isExternal>
            <Icon as={MdAlternateEmail} boxSize="22px" color="brand.600" />
          </Link>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default Footer;
