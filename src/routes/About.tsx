import {
  Flex,
  Heading,
  Stack,
  Text,
  List,
  ListItem,
  ListIcon,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { componentColorScheme } from "../theme";
import { FaCaretRight } from "react-icons/fa6";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const About = () => {
  const sectionMargins: string[] = ["5%", "5%", "5%", "12%"];
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
      <Stack
        direction={"row"}
        flexWrap="wrap"
        mx={sectionMargins}
        justify="space-between"
        spacing={5}
      >
        <Stack maxW="500px">
          <Heading textColor={`${componentColorScheme}.500`}>Location</Heading>
          <Text>Our 40-Hour Teen Driving Program is Located at:</Text>
          <LinkBox
            as="article"
            maxW="275px"
            p="8px"
            borderWidth="1px"
            borderRadius="5px"
            bg="gray.50"
            _hover={{
              bg: `${componentColorScheme}.50`, // Change background color on hover
              boxShadow: "md", // Add shadow on hover
              cursor: "pointer", // Change cursor to pointer
              borderColor: `${componentColorScheme}.500`,
            }}
          >
            <ExternalLinkIcon mb="8px" />
            <Stack spacing={1}>
              <LinkOverlay
                fontWeight="bold"
                href="https://www.google.com/maps/place/Pikes+Peak+State+College/@38.7642369,-104.7910429,17z/data=!3m1!4b1!4m6!3m5!1s0x871343bcdbb452ed:0xd3518e581b39799a!8m2!3d38.7642369!4d-104.788468!16zL20vMDZ6a3F3?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
              >
                Pikes Peak Community College
              </LinkOverlay>
              <Text>Centennial Campus</Text>
              <Text>5675 S. Academy Blvd</Text>
              <Text>Colorado Springs, CO 80906</Text>
            </Stack>
          </LinkBox>
        </Stack>
        <Stack maxW="400px">
          <Heading textColor={`${componentColorScheme}.500`}>
            Our Vehicles
          </Heading>
          <Stack spacing={5}>
            <Text fontWeight="bold">Current Drive-Right Academy Vehicles:</Text>
            <List spacing={2} ml="15px">
              <ListItem>
                <ListIcon
                  as={FaCaretRight}
                  color={`${componentColorScheme}.500`}
                />
                2022 Mini Cooper
              </ListItem>
              <ListItem>
                <ListIcon
                  as={FaCaretRight}
                  color={`${componentColorScheme}.500`}
                />
                2013 Fiat 500 (Manual Transmission)
              </ListItem>
            </List>
            <Text>
              Not only do our cars feature the highest safety and performance
              standards on the market, they're also cool and downright fun cars
              to drive!
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack mx={sectionMargins} mt="24px">
        <Heading textColor={`${componentColorScheme}.500`}>
          Our Approach to Success
        </Heading>
        <Stack spacing={5}>
          <Text>
            Drive-Right Academy is locally owned and has been teaching teens and
            adults the skills necessary to become successful and legal drivers
            for the last 22 years. Through the years, we've learned a thing or
            two about how to teach Driver's Education effectively.
          </Text>
          <Text>
            We not only offer the benefit of a Skills-Based Driving Lab, but we
            also invest a lot of effort to ensure that the classroom portion is
            an interactive dialogue between the instructor and students. Rather
            than reading straight through a textbook, we employ a variety of
            learning techniques to keep students engaged and interested. We
            believe this approach is an essential reason why our student's
            retain the information we teach, and leave our programs with the
            fundamentals and skills required to drive responsibly in the real
            world.
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
