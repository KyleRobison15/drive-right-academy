import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { componentColorScheme } from "../theme";

interface Props {
  title: string;
  desc: string;
  justifyImage: "left" | "right";
}

const Feature = ({ title, desc, justifyImage }: Props) => {
  const imageOrder = justifyImage === "left" ? 1 : 2;
  const textOrder = justifyImage === "left" ? 2 : 1;

  return (
    <Stack
      direction={["column", "column", "row", "row"]}
      justify="space-evenly"
      align="center"
      spacing={[8, 8, 12, 12]}
    >
      <Box maxW="400px" minW="300px" order={[1, 1, textOrder, textOrder]}>
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
      <Box
        order={[2, 2, imageOrder, imageOrder]}
        minW="300px"
        boxSize="300px"
        bg={`${componentColorScheme}.50`}
      ></Box>
    </Stack>
  );
};

export default Feature;
