import {
  Flex,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { componentColorScheme } from "../theme";

const SiteMap = () => {
  return (
    <Flex direction="column" flexGrow={1} alignItems="center" mt="50px">
      {/* Header */}
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        Sitemap
      </Heading>

      {/* Main Content */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} mt="24px">
        {/* Section 1 */}
        <VStack align="start" spacing={4}>
          <ChakraLink as={ReactRouterLink} to="/">
            <Heading as="h2" size="md">
              Home
            </Heading>
          </ChakraLink>
          <List spacing={2}>
            <ListItem>
              <ChakraLink
                href="tel:7192009298"
                color={`${componentColorScheme}.500`}
              >
                Call Now to Enroll
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                href="tel:7192009298"
                color={`${componentColorScheme}.500`}
              >
                Sign Up - Online Drivers Education
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                href="tel:7192009298"
                color={`${componentColorScheme}.500`}
              >
                Log In - Online Drivers Education
              </ChakraLink>
            </ListItem>
          </List>
        </VStack>

        {/* Section 2 */}
        <VStack align="start" spacing={4}>
          <ChakraLink as={ReactRouterLink} to="/programs">
            <Heading as="h2" size="md">
              Programs
            </Heading>
          </ChakraLink>
          <List spacing={2}>
            <ListItem>
              <ChakraLink
                as={ReactRouterLink}
                to="/contact"
                color={`${componentColorScheme}.500`}
              >
                Contact Us
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                href="tel:7192009298"
                color={`${componentColorScheme}.500`}
              >
                Enroll Now
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                href="tel:7192009298"
                color={`${componentColorScheme}.500`}
              >
                Sign Up - Online Drivers Education
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                href="tel:7192009298"
                color={`${componentColorScheme}.500`}
              >
                Log In - Online Drivers Education
              </ChakraLink>
            </ListItem>
          </List>
        </VStack>

        {/* Section 3 */}
        <VStack align="start" spacing={4}>
          <ChakraLink as={ReactRouterLink} to="/schedule">
            <Heading as="h2" size="md">
              Schedule
            </Heading>
          </ChakraLink>
          <List spacing={2}>
            <ListItem>
              <ChakraLink
                as={ReactRouterLink}
                to="/contact"
                color={`${componentColorScheme}.500`}
              >
                Contact Us
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                href="tel:7192009298"
                color={`${componentColorScheme}.500`}
              >
                Enroll Now
              </ChakraLink>
            </ListItem>
          </List>
        </VStack>

        {/* Section 4 */}
        <VStack align="start" spacing={4}>
          <ChakraLink as={ReactRouterLink} to="/about">
            <Heading as="h2" size="md">
              About
            </Heading>
          </ChakraLink>
          <List spacing={2}>
            <ListItem>
              <ChakraLink
                href="https://www.google.com/maps/place/Pikes+Peak+State+College/@38.7642369,-104.7910429,17z/data=!3m1!4b1!4m6!3m5!1s0x871343bcdbb452ed:0xd3518e581b39799a!8m2!3d38.7642369!4d-104.788468!16zL20vMDZ6a3F3?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
                color={`${componentColorScheme}.500`}
              >
                Location - Pikes Peak Community College
              </ChakraLink>
            </ListItem>
          </List>
        </VStack>

        {/* Section 5 */}
        <VStack align="start" spacing={4}>
          <ChakraLink as={ReactRouterLink} to="/contact">
            <Heading as="h2" size="md">
              Contact
            </Heading>
          </ChakraLink>
          <List spacing={2}>
            <ListItem>
              <ChakraLink
                href="tel:7192009298"
                color={`${componentColorScheme}.500`}
              >
                Enroll Now
              </ChakraLink>
            </ListItem>
          </List>
        </VStack>

        {/* Section 6 */}
        <VStack align="start" spacing={4}>
          <Heading as="h2" size="md">
            Footer
          </Heading>
          <List spacing={2}>
            <ListItem>
              <ChakraLink
                as={ReactRouterLink}
                to="/sitemap"
                color={`${componentColorScheme}.500`}
              >
                Sitemap
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                href="https://github.com/KyleRobison15"
                color={`${componentColorScheme}.500`}
              >
                GitHub - Website Creator
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                href="https://www.linkedin.com/in/kyle-robison/"
                color={`${componentColorScheme}.500`}
              >
                LinkedIn - Website Creator
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                href="https://kylerobison.com/"
                color={`${componentColorScheme}.500`}
              >
                Portfolio - Website Creator
              </ChakraLink>
            </ListItem>
          </List>
        </VStack>
      </SimpleGrid>
    </Flex>
  );
};

export default SiteMap;
