import { Flex, Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import layout from "./layout";
import HeaderMobile from "./components/Header/HeaderMobile";
import HeaderDesktop from "./components/Header/HeaderDesktop";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: layout.mobile.areas,
        lg: layout.desktop.areas,
      }}
      gridTemplateRows={{
        base: layout.mobile.rows,
        lg: layout.desktop.rows,
      }}
      gridTemplateColumns={{
        base: layout.mobile.columns,
        lg: layout.desktop.columns,
      }}
      h="100vh"
      fontWeight="bold"
    >
      <GridItem bg="orange.300" area={"header"}>
        <Flex px="20px" justifyContent="space-between">
          <Show below="lg">
            <HeaderMobile />
          </Show>
          <Hide below="lg">
            <HeaderDesktop />
          </Hide>
        </Flex>
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" bg="pink.300" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};

export default App;
