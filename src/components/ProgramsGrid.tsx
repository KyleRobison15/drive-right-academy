import { SimpleGrid, Stack } from "@chakra-ui/react";
import CardContainer from "./CardContainer";
import ProgramCard from "./ProgramCard";
import { Program } from "../hooks/usePrograms";
import AllInclusiveAd from "./AllInclusiveAd";

interface Props {
  programs: Program[];
  mx: string | string[];
}

const ProgramsGrid = ({ programs, mx }: Props) => {
  return (
    <Stack padding="12px" mx={mx} spacing={8} maxW="550px">
      <AllInclusiveAd />
      <SimpleGrid columns={1} spacing={8}>
        {programs.map((program) => (
          <CardContainer key={program.name} borderRadius="10px">
            <ProgramCard program={program} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default ProgramsGrid;
