import {
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  Stack,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import usePrograms, { useAlaCarte } from "../hooks/usePrograms";
import ProgramsGrid from "../components/ProgramsGrid";
import { componentColorScheme } from "../theme";
import AlaCarteGrid from "../components/AlaCarteGrid";

const Programs = () => {
  const programs = usePrograms();
  const alaCarteList = useAlaCarte();

  const sectionMargins: string[] = ["2%", "5%", "8%", "12%"];

  return (
    <>
      <Flex direction="column" flexGrow={1} alignItems="center">
        <Stack alignItems="center" mx="14px" mb="32px" mt="50px" spacing={4}>
          <Heading size={["xl", "2xl"]}>Programs</Heading>
          <Text fontSize={["lg", "2xl"]} textAlign="center">
            Wherever you are in your Driver's Education journey, we're here to
            help.
          </Text>
          <Text fontSize={["sm", "md"]}>
            All of Drive-Right Academy's services are by appointment only.{" "}
            <ChakraLink
              as={ReactRouterLink}
              to="/contact"
              color={`${componentColorScheme}.500`}
            >
              Call us to get on the schedule!
            </ChakraLink>
          </Text>
        </Stack>
        <ProgramsGrid programs={programs} mx={sectionMargins} />
        <Stack alignItems="center" mb="32px" mt="50px" spacing={4}>
          <Heading size={["xl", "2xl"]}>A La Carte</Heading>
          <Text fontSize={["lg", "2xl"]} textAlign="center">
            Don't need any of our comprehensive programs? Pick and choose from
            these other services.
          </Text>
        </Stack>
        <AlaCarteGrid alaCarteList={alaCarteList} mx={sectionMargins} />
      </Flex>
    </>
  );
};

export default Programs;
