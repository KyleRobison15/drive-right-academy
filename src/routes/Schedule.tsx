import {
  Flex,
  Stack,
  Heading,
  Text,
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { componentColorScheme } from "../theme";
import CohortsGrid from "../components/CohortsGrid";
import useCohorts from "../hooks/useCohorts";
import { FaCaretRight } from "react-icons/fa6";

const Schedule = () => {
  const cohorts = useCohorts();

  return (
    <>
      <Flex direction="column" flexGrow={1} alignItems="center">
        <Stack alignItems="center" mx="14px" mb="32px" mt="50px" spacing={4}>
          <Heading textAlign="center" size={["xl", "2xl"]}>
            Teen Driving Program Schedule
          </Heading>
          <Text textAlign="center" fontSize={["sm", "md"]}>
            Have questions about our schedule or other programs?{" "}
            <ChakraLink
              as={ReactRouterLink}
              to="/contact"
              color={`${componentColorScheme}.500`}
            >
              Contact us
            </ChakraLink>
          </Text>
        </Stack>
        <Stack alignItems="center" mx="14px">
          <Text fontSize={["2xl", "3xl"]} textAlign="center">
            2024/2025 Winter Classes
          </Text>
          <Text textAlign="center" fontSize={["md", "lg"]}>
            All class times are 8am-4pm MST.
          </Text>
          <CohortsGrid cohorts={cohorts} />
        </Stack>
        <List
          textAlign="center"
          my="18px"
          p="12px"
          spacing={3}
          mx={["0px", "8px", "16px"]}
          fontStyle="italic"
        >
          <ListItem>
            <ListIcon as={FaCaretRight} color={`${componentColorScheme}.500`} />
            Drive-Right Academy requires students to be at least 14 years and 11
            months old at the time they attend class.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCaretRight} color={`${componentColorScheme}.500`} />
            Students are required to attend all four days of the session they
            sign up for.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCaretRight} color={`${componentColorScheme}.500`} />
            The fourth day of each class is the Skills-Based Driving Lab in the
            parking lot.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCaretRight} color={`${componentColorScheme}.500`} />
            Class sizes are limited and fill up quickly.
          </ListItem>
        </List>
      </Flex>
    </>
  );
};

export default Schedule;
