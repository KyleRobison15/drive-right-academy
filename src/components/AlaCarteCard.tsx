import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Icon,
  Stack,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { AlaCarte } from "../hooks/usePrograms";
import EnrollNowButton from "./EnrollNowButton";

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
            <Badge
              px="8px"
              py="3px"
              mb="8px"
              colorScheme="green"
              fontSize="1.5rem"
              borderRadius="4px"
            >
              {price}
            </Badge>
          )}
        </Flex>
      </CardHeader>
      <CardBody mt="10px">
        <Stack alignItems="center" spacing={4}>
          <Icon as={icon} boxSize="32px" aria-label={aria} />
          <Heading textAlign="center" size="md">
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
