import { HStack, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa6";
import KRDevIcon from "./KRDevIcon";
import { Link as ReactRouterLink } from "react-router-dom";
import { componentColorScheme } from "../theme";

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
      <HStack spacing={3}>
        <HStack spacing={1}>
          <Icon as={FaRegCopyright} aria-label="Copyright" boxSize="12px" />
          <Text fontSize="sm">2024 Drive Right Academy</Text>
        </HStack>
        <Text fontSize="sm">|</Text>
        <Link fontSize="sm" as={ReactRouterLink} to="/sitemap" color={`${componentColorScheme}.500`}>
          Sitemap
        </Link>
        <Text fontSize="sm">|</Text>
        <Link fontSize="sm" as={ReactRouterLink} to="/accessibility" color={`${componentColorScheme}.500`}>
          Accessibility
        </Link>
      </HStack>
      <Stack direction="row" alignItems="center">
        <Text fontSize="sm">Website created by Kyle Robison:</Text>
        <HStack spacing={3} alignItems="center">
          <Link href="https://github.com/KyleRobison15" isExternal>
            <Icon
              as={BsGithub}
              boxSize="24px"
              aria-label="KyleRobison15 GitHub"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/kyle-robison/" isExternal>
            <Icon
              aria-label="kyle-robison LinkedIn"
              as={BsLinkedin}
              boxSize="24px"
            />
          </Link>
          <Link href="https://kylerobison.com/" isExternal mb="10px" mt="0px">
            <KRDevIcon />
          </Link>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default Footer;
