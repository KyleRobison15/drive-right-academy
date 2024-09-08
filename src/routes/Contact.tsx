import { Flex, Stack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Flex flexGrow={1} direction="column" bg="gray.100">
      <Stack
        direction={["column", "column", "row", "row"]}
        justify="space-evenly"
        align="center"
        spacing={[8, 8, 12, 12]}
      ></Stack>
    </Flex>
  );
};

export default Contact;
