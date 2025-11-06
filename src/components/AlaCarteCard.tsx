import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Icon,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { AlaCarte } from "../hooks/usePrograms";
import EnrollNowButton from "./EnrollNowButton";
import { componentColorScheme } from "../theme";

interface Props {
  alaCarte: AlaCarte;
}

const AlaCarteCard = ({ alaCarte }: Props) => {
  const { label, aria, price, icon } = alaCarte;

  return (
    <Card
      boxShadow="lg"
      variant="outline"
      p="24px"
      h="390px"
      minW="300px"
      bg="gray.50"
      borderRadius="2xl"
    >
      <CardHeader>
        <Flex justifyContent="center">
          {price && (
            <Text
              fontSize="3xl"
              fontWeight="bold"
              color={`${componentColorScheme}.500`}
              mb={4}
            >
              {price}
            </Text>
          )}
        </Flex>
      </CardHeader>
      <CardBody mt="10px">
        <Stack alignItems="center" spacing={4}>
          <Icon as={icon} boxSize="42px" aria-label={aria} />
          <Heading textAlign="center" fontSize="1.3rem">
            {label}
          </Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <EnrollNowButton />
      </CardFooter>
    </Card>
  );
};

export default AlaCarteCard;
