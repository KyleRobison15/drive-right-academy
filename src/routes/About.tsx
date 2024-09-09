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
                2015 Mini Cooper
              </ListItem>
              <ListItem>
                <ListIcon
                  as={FaCaretRight}
                  color={`${componentColorScheme}.500`}
                />
                2013 Fiat 500 (manual)
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
      {/* <Stack mx={sectionMargins} mt="24px">
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
              2015 Mini Cooper
            </ListItem>
            <ListItem>
              <ListIcon
                as={FaCaretRight}
                color={`${componentColorScheme}.500`}
              />
              2013 Fiat 500 (manual)
            </ListItem>
          </List>
          <Text>
            Not only do our cars feature the highest safety and performance
            standards on the market, they're also cool and downright fun cars to
            drive!
          </Text>
        </Stack>
      </Stack> */}
      <Stack mx={sectionMargins} mt="24px">
        <Heading textColor={`${componentColorScheme}.500`}>
          Our Approach to Success
        </Heading>
        <Stack spacing={5}>
          <Text>
            Our Driver's Education Program philosophy is simple. What makes a
            successful driver? When they can demonstrate a skill. We don't tell
            your teen what to do or what not to do behind the wheel, we teach
            the skills necessary to make him or her a successful driver. Ask
            yourself “How much is my child worth? Don't I want to do everything
            I can to keep him or her as safe as possible?” Starting with a
            quality, skills based Driver's Education Program from Drive-Right
            Academy will ease your mind and keep your child safe in the most
            dangerous place of all: behind the wheel.
          </Text>
          <Text>
            Drive-Right Academy is locally owned and has been teaching teens and
            adults the skills necessary to become successful and legal drivers
            for 11 years. I was told recently by an adult Driver's Education
            student, amazed at how much even a seasoned driver can learn from
            our Program: “Before I took the [Drive-Right] course, no one ever
            took the time to teach me the techniques! If I had found myself in a
            skid what would I have done? I found out that something as simple as
            where I place my hands on the wheel will guarantee that I avoid
            accidents!”
          </Text>
          <Text>
            Did you learn to drive from your parents? From your High school shop
            teacher in a four hour Saturday driving class with two other
            students in the back seat? You learned to stop at a stop sign, you
            learned to use your turn signal before you make a turn, but chances
            are you didn't learn the skills you need to avoid accidents. You
            learned to drive like your parents who probably learned from their
            parents. Why do we do what we do they way we do it? To save lives.
            Pure and simple. Teaching your child proper hand placement on the
            wheel, how to avoid accidents, how to recover from a skid, learning
            these skills saves lives.
          </Text>
          <Text>
            Why is a course from Drive-Right Academy so successful? We teach
            your student driver the skills in the classroom before they even get
            in the car. They'll know successful driving techniques before they
            get behind the wheel. Other Driver's Education Programs put your
            child behind the wheel the second you drop them off. They are never
            taught the skills they need to become good drivers. They learn
            enough to pass their driving test, but have no idea what to do to
            avoid a collision, to recover from a skid.
          </Text>
          <List spacing={2} ml="15px">
            <ListItem>
              <ListIcon
                as={FaCaretRight}
                color={`${componentColorScheme}.500`}
              />
              We teach the skills. We ease your mind.
            </ListItem>
            <ListItem>
              <ListIcon
                as={FaCaretRight}
                color={`${componentColorScheme}.500`}
              />
              We create successful, responsible, educated drivers.
            </ListItem>
          </List>
          <Text>
            Drive-Right Academy is Your Road to Successful Driver's Education.
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default About;
