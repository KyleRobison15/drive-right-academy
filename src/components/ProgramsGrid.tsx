import { SimpleGrid } from "@chakra-ui/react";
import CardContainer from "./CardContainer";
import ProgramCard from "./ProgramCard";
import { Program } from "../hooks/usePrograms";

interface Props {
  programs: Program[];
}

const ProgramsGrid = ({ programs }: Props) => {
  return (
    <SimpleGrid
      columns={1}
      padding="12px"
      spacing={4}
      mx={["0px", "8px", "16px"]}
    >
      {programs.map((program) => (
        <CardContainer key={program.name} borderRadius="10px">
          <ProgramCard program={program} />
        </CardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ProgramsGrid;
