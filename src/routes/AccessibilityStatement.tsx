import {Heading, HStack, Stack, Text, Link as ChakraLink } from "@chakra-ui/react";
import { componentColorScheme } from "../theme";

const AccessibilityStatement = () => {
  return (
    <Stack spacing={4} mt="50px" mx="24px">
      <Heading textAlign="center" size={["xl", "2xl"]} mb="32px">
        Accessibility
      </Heading>
      <Heading>Website Accessibility Statement</Heading>
      <Text fontSize={["lg", "xl"]}>
        driverightacademy.com is committed to providing equitable access to our
        site for all users.
      </Text>
      <Text fontSize={["lg", "xl"]}>
        Our ongoing accessibility effort works towards being in line with the
        Web Content Accessibility Guidelines (WCAG) version 2.1, level AA
        criteria. These guidelines not only help make technology accessible to
        users with sensory, cognitive and mobility disabilities, but ultimately
        to all users, regardless of ability.
      </Text>
      <Text fontSize={["lg", "xl"]}>
        We welcome comments on how to improve our website's accessibility for
        users with disabilities.
      </Text>
      <Stack spacing={4} mt="50px">
        <Heading size="md">Kyle Robison</Heading>
        <HStack>
          <Text fontSize="md" fontWeight="bold">Email:</Text>
          <ChakraLink
            href="mailto:kylerobison15@gmail.com"
            color={`${componentColorScheme}.500`}
          >
            kylerobison15@gmail.com
          </ChakraLink>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default AccessibilityStatement;
