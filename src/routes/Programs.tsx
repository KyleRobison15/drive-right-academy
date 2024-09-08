import {
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  HStack,
  Stack,
} from "@chakra-ui/react";
import usePrograms, { useAlaCarte } from "../hooks/usePrograms";
import ProgramsGrid from "../components/ProgramsGrid";
import { componentColorScheme } from "../theme";
import AlaCarteGrid from "../components/AlaCarteGrid";

const Programs = () => {
  const programs = usePrograms();
  const alaCarteList = useAlaCarte();

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
            Don't know where to start?{" "}
            <ChakraLink
              href="tel:7192009298"
              color={`${componentColorScheme}.500`}
            >
              Contact us
            </ChakraLink>
          </Text>
        </Stack>
        <HStack>
          <ProgramsGrid programs={programs} />
        </HStack>
        <Stack alignItems="center" mx="14px" mb="32px" mt="50px" spacing={4}>
          <Heading size={["xl", "2xl"]}>A La Carte</Heading>
          <Text fontSize={["lg", "2xl"]} textAlign="center">
            Don't need any of our comprehensive programs? Pick and choose from
            these other services.
          </Text>
        </Stack>
        <AlaCarteGrid alaCarteList={alaCarteList} />
      </Flex>
    </>
  );
};

export default Programs;
