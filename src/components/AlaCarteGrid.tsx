import { SimpleGrid } from "@chakra-ui/react";
import { AlaCarte } from "../hooks/usePrograms";
import CardContainer from "./CardContainer";
import AlaCarteCard from "./AlaCarteCard";

interface Props {
  alaCarteList: AlaCarte[];
}

const AlaCarteGrid = ({ alaCarteList }: Props) => {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 1, lg: 2, xl: 3 }}
      padding="12px"
      spacing={8}
      mx={["0px", "8px", "16px"]}
    >
      {alaCarteList.map((alaCarte) => (
        <CardContainer key={alaCarte.name} borderRadius="10px">
          <AlaCarteCard alaCarte={alaCarte} />
        </CardContainer>
      ))}
    </SimpleGrid>
  );
};

export default AlaCarteGrid;
