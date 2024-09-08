import { Box, Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { componentColorScheme } from "../theme";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface Props {
  title: string;
  desc: string;
  button_one?: FeatureButton;
  button_two?: FeatureButton;
  justifyImage: "left" | "right";
}

export interface FeatureButton {
  name: string;
  label: string;
  to?: string;
  url?: string;
}

const Feature = ({
  title,
  desc,
  justifyImage,
  button_one,
  button_two,
}: Props) => {
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
        <HStack
          justifyContent="center"
          mt={button_one || button_two ? "16px" : ""}
        >
          {button_one && (
            <Button
              as="a"
              size="sm"
              href={button_one.url}
              variant="solid"
              colorScheme={componentColorScheme}
              rightIcon={<ChevronRightIcon boxSize="20px" />}
              flex={1}
            >
              {button_one.label}
            </Button>
          )}
          {button_two && (
            <Button
              as="a"
              size="sm"
              href={button_two.url}
              variant="solid"
              colorScheme={componentColorScheme}
              rightIcon={<ChevronRightIcon boxSize="20px" />}
              flex={1}
            >
              {button_two.label}
            </Button>
          )}
        </HStack>
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
