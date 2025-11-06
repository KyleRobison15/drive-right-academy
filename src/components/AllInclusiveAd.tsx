import {
  Box,
  Heading,
  Text,
  Badge,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { componentColorScheme } from "../theme";
import EnrollNowButton from "./EnrollNowButton";

const AllInclusiveAd = () => {
  const bg = useColorModeValue("white", "gray.800");
  const border = useColorModeValue(`${componentColorScheme}.200`, "gray.700");

  return (
    <Box
      maxW="550px"
      mx="auto"
      p="32px"
      borderWidth="1px"
      borderRadius="2xl"
      boxShadow="xl"
      bg={bg}
      borderColor={border}
      textAlign="center"
    >
      <Badge
        colorScheme="green"
        fontSize="1rem"
        mb="8px"
        px="10px"
        py="4px"
        borderRadius="full"
      >
        Best Value
      </Badge>
      <Heading size="lg" mb={2}>
        All Inclusive Package
      </Heading>
      <Text fontSize="md" color="gray.600" mb={4}>
        Our most popular package, designed to cover all your Driver's Education requirements in one
        place.
      </Text>

      <Text
        fontSize="4xl"
        fontWeight="bold"
        color={`${componentColorScheme}.500`}
        mb={4}
      >
        $485
      </Text>

      <Divider my="16px" />

      <Heading size="sm" mb={3}>
        What’s Included
      </Heading>
      <List spacing={3} textAlign="left" mb={6} mx="auto" maxW="300px">
        <ListItem>
          <ListIcon
            as={CheckCircleIcon}
            color={`${componentColorScheme}.500`}
          />
          30 Hour Online Class
        </ListItem>
        <ListItem>
          <ListIcon
            as={CheckCircleIcon}
            color={`${componentColorScheme}.500`}
          />
          Permit Test
        </ListItem>
        <ListItem>
          <ListIcon
            as={CheckCircleIcon}
            color={`${componentColorScheme}.500`}
          />
          6 Hours Behind the Wheel
        </ListItem>
        <ListItem>
          <ListIcon
            as={CheckCircleIcon}
            color={`${componentColorScheme}.500`}
          />
          Driving Test
        </ListItem>
      </List>

      <EnrollNowButton />
    </Box>
  );
};

export default AllInclusiveAd;
