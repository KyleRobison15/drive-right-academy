import { SimpleGrid } from "@chakra-ui/react";
import { Cohort } from "../hooks/useCohorts";
import CardContainer from "./CardContainer";
import CohortCard from "./CohortCard";

interface Props {
  cohorts: Cohort[];
}

const CohortsGrid = ({ cohorts }: Props) => {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 1, lg: 2, xl: 3 }}
      padding="12px"
      spacing={6}
      mx={["0px", "8px", "16px"]}
    >
      {cohorts.map((cohort) => (
        <CardContainer key={cohort.cohortId} borderRadius="10px">
          <CohortCard cohort={cohort} />
        </CardContainer>
      ))}
    </SimpleGrid>
  );
};

export default CohortsGrid;
