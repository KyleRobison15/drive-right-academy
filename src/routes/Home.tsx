import { Grid, GridItem, HStack } from "@chakra-ui/react";
import homeImage from "../assets/mini.jpg";

const Home = () => {
  return (
    <Grid
      templateAreas={`"top"
                      "bottom"`}
      gridTemplateRows={"50% 50%"}
      gridTemplateColumns={"1fr"}
      w="100%"
    >
      <GridItem area={"top"}>
        <HStack
          h="100%"
          w="100%"
          bgImage={homeImage}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          opacity="0.3"
        ></HStack>
      </GridItem>
      <GridItem p="20px" bg="gray.100" area={"bottom"}>
        Bottom
      </GridItem>
    </Grid>
  );
};

export default Home;
