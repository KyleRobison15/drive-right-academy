import { Flex, HStack, Hide, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import useCustomColorValues from "./hooks/useCustomColorValues";
import NavBarMobile from "./components/NavBar/NavBarMobile";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const { navBarBg } = useCustomColorValues();

  return (
    <Flex id="app-container" m="0" p="0" flexDir="column" h="100vh">
      <HStack
        as="nav"
        id="navbar"
        h="100px"
        w="100%"
        px="35px"
        justifyContent="space-between"
        shadow="md"
        bgColor={navBarBg}
        pos="fixed"
        top="0"
        zIndex="2000"
      >
        <Show below="md">
          <NavBarMobile />
        </Show>
        <Hide below="md">
          <NavBar />
        </Hide>
      </HStack>
      <Flex as="main" id="main-container" flexGrow="1" mt="100px">
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default App;
