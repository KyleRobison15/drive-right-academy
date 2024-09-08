import {
  Box,
  Button,
  Flex,
  Stack,
  Heading,
  Highlight,
  Link as ChakraLink,
  Text,
  Divider,
} from "@chakra-ui/react";
import { componentColorScheme } from "../theme";
import Feature, { FeatureButton } from "../components/Feature";
import { PhoneIcon } from "@chakra-ui/icons";

const Home = () => {
  const signUpButton: FeatureButton = {
    name: "sign-up",
    label: "Sign Up",
    url: "https://driverightacademy.bedrivingus.com/affiliate/partner/index/enroll",
  };

  const logInButton: FeatureButton = {
    name: "log-in",
    label: "Log In",
    url: "https://driverightacademy.bedrivingus.com/affiliate/partner/index/login",
  };

  return (
    <Flex flexDir="column" flexGrow={1}>
      <Stack
        direction={["column", "column", "row", "row"]}
        minH="400px"
        p="24px"
        justify="space-evenly"
        align="center"
        textAlign={["center", "center", "left", "left"]}
      >
        <Box maxW="32rem">
          <Text
            fontSize="xl"
            fontWeight="bold"
            color={`${componentColorScheme}.500`}
            mb={4}
          >
            More than just the basics.
          </Text>
          <Heading mb={4}>
            <Highlight
              query={"Drive Right!"}
              styles={{
                color: `${componentColorScheme}.500`,
              }}
            >
              Learn how to Drive Right!
            </Highlight>
          </Heading>
          <Text fontSize="lg">
            Start your journey to becoming a confident, legal and responsible
            driver today.
          </Text>
          <ChakraLink href="tel:7192009298">
            <Button
              size="lg"
              colorScheme={componentColorScheme}
              mt="24px"
              mb="24px"
              rightIcon={<PhoneIcon boxSize="14px" ml="4px" />}
            >
              Call Now to Enroll
            </Button>
          </ChakraLink>
        </Box>
        <Box
          boxSize="350px"
          minW="350px"
          bg={`${componentColorScheme}.50`}
        ></Box>
      </Stack>
      <Divider my="24px" />
      <Heading size="lg" textAlign="center" my="12px">
        Why Choose Drive-Right?
      </Heading>
      <Stack p="24px" spacing={8} align="center">
        <Feature
          title={"The Right Approach"}
          desc={
            "Our classroom portion and top-notch road sessions provide an interactive, upbeat approach. We take the time to go beyond the basics to ensure that your teen gains an appreciation for responsible driving."
          }
          justifyImage="left"
        />
        <Feature
          title={"Experienced and Locally Owned"}
          desc={
            "Drive-Right Academy is locally and family owned and has been teaching teens and adults the skills necessary to become successful and legal drivers for over 20 years! We take pride in serving our community by utilizing our many years of experience to deliver the finest drivers education in Colorado Springs."
          }
          justifyImage="right"
        />
        <Feature
          title={"Online Drivers Education"}
          desc={
            "We also offer an online Drivers Education option for those who are interested. More details about the online drivers education program to come."
          }
          justifyImage="left"
          button_one={signUpButton}
          button_two={logInButton}
        />
        <Feature
          title={"Cost Friendly Option"}
          desc={
            "At Drive-Right Academy, we believe learning the skills to become a confident, legal and safe driver shouldn't break the bank. We offer our Drivers Education services at a much lower cost than other competitors in the area."
          }
          justifyImage="right"
        />
      </Stack>
    </Flex>
  );
};

export default Home;
