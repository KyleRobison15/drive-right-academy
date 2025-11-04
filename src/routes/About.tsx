import {
  Flex,
  Heading,
  Stack,
  Text,
  List,
  ListItem,
  ListIcon,
  Box,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { componentColorScheme } from "../theme";
import { FaCaretRight } from "react-icons/fa6";
import MiniCooperImg from "../assets/mini_cooper.png";
import Fiat500Img from "../assets/fiat_500.png";
import { yearsInBusiness } from "../utils/dateUtils";

const About = () => {
  const sectionMargins: string[] = ["5%", "5%", "5%", "12%"];

  const vehicleCardBg = useColorModeValue("gray.50", "gray.700");

  const vehicles = [
    {
      name: "2022 Mini Cooper",
      img: MiniCooperImg,
    },
    {
      name: "2013 Fiat 500 (Manual Transmission)",
      img: Fiat500Img,
    },
  ];

  const skillsLabSkills: string[] = [
    "Slalom Course",
    "Threshold Braking",
    "Braking While Turning",
    "Pull-Push Steering",
    "Emergency Lane Changes",
    "Successful Backing",
    "Parallel parking",
    "Arm-Lock Steering",
    "Aim High Vision",
  ];

  return (
    <Flex direction="column" flexGrow={1}>
      <Stack alignItems="center" mx="14px" mb="32px" mt="50px" spacing={4}>
        <Heading size={["xl", "2xl"]}>About</Heading>
      </Stack>
      <Stack mx={sectionMargins} mb="32px" spacing={6}>
        <Heading textColor={`${componentColorScheme}.500`}>
          Our Vehicles
        </Heading>

        <Text maxW="700px">
          Not only do our cars feature the highest safety and performance
          standards on the market, they're also cool and downright fun cars to
          drive!
        </Text>

        <Flex wrap="wrap" justify="space-around" gap={6}>
          {vehicles.map((vehicle) => (
            <Box
              key={vehicle.name}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg={vehicleCardBg}
              boxShadow="sm"
              maxW="400px"
              minW="400px"
            >
              <Image
                src={vehicle.img}
                alt={vehicle.name}
                objectFit="cover"
                w="100%"
                h="200px"
              />
              <Box p="4">
                <Text fontWeight="bold" fontSize="lg">
                  {vehicle.name}
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Stack>
      <Stack mx={sectionMargins} mt="24px">
        <Heading textColor={`${componentColorScheme}.500`}>
          Our Approach to Success
        </Heading>
        <Stack spacing={5}>
          <Text>
            Drive-Right Academy is locally owned and has been teaching teens and
            adults the skills necessary to become successful and legal drivers
            for the last {yearsInBusiness} years. Through the years, we've
            learned a thing or two about how to teach Driver's Education
            effectively.
          </Text>
          <Text>
            At Drive-Right Academy we invest a lot of effort to provide an
            interactive dialogue between the instructor and students. While
            confident, legal driving is our number one goal, we also believe
            driving should be fun. We employ a variety of learning techniques to
            keep students engaged and interested. We believe this approach is an
            essential reason why our student's retain the information we teach,
            and leave our programs with the fundamentals and skills required to
            drive responsibly in the real world.
          </Text>
          <Text>
            Drive-Right Academy is your road to successful Driver's Education.
          </Text>
        </Stack>
      </Stack>
      <Stack mx={sectionMargins} mt="24px">
        <Heading textColor={`${componentColorScheme}.500`}>
          Skills-Based Driving Lab
        </Heading>
        <Stack spacing={5}>
          <Text>
            Our Skills-Based Driving Lab is an invaluable learning clinic for
            your teen to develop the fundamental skills needed before the On-the
            Road Lessons. Held in a parking lot in a highly controlled
            environment, instructors work individually with each student on the
            following exercises:
          </Text>
          <List spacing={2} ml="15px">
            {skillsLabSkills.map((skill) => (
              <ListItem key={skill}>
                <ListIcon
                  as={FaCaretRight}
                  color={`${componentColorScheme}.500`}
                />
                {skill}
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
      <Stack mx={sectionMargins} mt="24px">
        <Heading textColor={`${componentColorScheme}.500`}>
          Insurance Discounts
        </Heading>
        <Stack spacing={5}>
          <Text>
            Many of our programs qualify for insurance discounts. The discounts
            vary among insurance companies, so you should check with your
            provider. Upon completion of the course, we issue a certificate for
            submission to your insurance company.
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default About;
