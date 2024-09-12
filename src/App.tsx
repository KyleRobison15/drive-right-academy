import { Flex, HStack, Hide, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBarMobile from "./components/NavBar/NavBarMobile";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const App = () => {
  const mainContainerMx = ["0px", "24px", "75px", "150px"];

  return (
    <Flex id="app-container" m="0" p="0" flexDir="column" minH="100vh">
      <HStack
        as="nav"
        id="navbar"
        h="75px"
        w="100%"
        px="24px"
        justifyContent="space-between"
        shadow="md"
        pos="fixed"
        top="0"
        zIndex="2000"
        bg="white"
      >
        <Show below="lg">
          <NavBarMobile />
        </Show>
        <Hide below="lg">
          <NavBar />
        </Hide>
      </HStack>
      <Flex
        as="main"
        id="main-container"
        flexGrow="1"
        mt="75px"
        mb="100px"
        mx={mainContainerMx}
      >
        <ScrollToTop />
        <Outlet />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default App;
