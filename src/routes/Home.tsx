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
import OnlineDriversEdImg from "../assets/IMG_5014.jpg";
import FamilyOwnedImg from "../assets/IMG_4992.jpg";
import RightApproachImg from "../assets/DSC_9883.jpg"
import { yearsInBusiness } from "../utils/dateUtils";

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
        <Box maxW="40rem">
          <Text
            fontSize="xl"
            fontWeight="bold"
            color={`${componentColorScheme}.500`}
            mb={4}
          >
            More than just the basics.
          </Text>
          <Heading mb={4} size={["xl", "xl", "xl", "2xl"]}>
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
              rightIcon={<PhoneIcon boxSize="14px" ml="4px" />}
            >
              Call Now to Enroll
            </Button>
          </ChakraLink>
        </Box>
      </Stack>
      <Divider my="24px" />
      <Heading size="lg" textAlign="center" my="12px">
        Why Choose Drive-Right?
      </Heading>
      <Stack p="24px" spacing={8} align="center">
        <Feature
          title={"The Right Approach"}
          desc={
            "At our driving school, we're committed to more than just helping you pass the test. We're here to help you become a confident, legal, and responsible driver for life. We take the time to go beyond the basics to ensure that every driver gains an appreciation for responsible driving."
          }
          justifyImage="left"
          imageSrc={RightApproachImg}
          ariaLabel="Driver Image"
          objectFit="cover"
        />
        <Feature
          title={"Experienced and Locally Owned"}
          desc={`Drive-Right Academy is locally and family owned and has been teaching teens and adults the skills necessary to become successful and legal drivers for over ${yearsInBusiness} years! We take pride in serving our community by utilizing our many years of experience to deliver the finest driver's education in Colorado Springs and the surrounding Pikes Peak region.`}
          justifyImage="right"
          imageSrc={FamilyOwnedImg}
          ariaLabel="Family Owned Image"
          objectFit="cover"
        />
        <Feature
          title={"Online Drivers Education"}
          desc={
            "The Colorado Teen On-line Program allows you to get the required 30 hour course completed on your own time."
          }
          justifyImage="left"
          button_one={signUpButton}
          button_two={logInButton}
          imageSrc={OnlineDriversEdImg}
          ariaLabel="Online Drivers Education Image"
          objectFit=""
        />
      </Stack>
    </Flex>
  );
};

export default Home;
