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
  const { name, label, description, price, icon } = alaCarte;

  return (
    <Card boxShadow="lg" variant="outline" p="24px" h="375px" bg="gray.50">
      <CardHeader>
        <Flex justifyContent="center">
          {alaCarte.price && (
            <Badge
              px="8px"
              py="3px"
              mb="8px"
              colorScheme="green"
              fontSize="1.3rem"
              borderRadius="4px"
            >
              {alaCarte.price}
            </Badge>
          )}
        </Flex>
      </CardHeader>
      <CardBody mt="10px">
        <Stack alignItems="center" spacing={4}>
          <Icon as={alaCarte.icon} boxSize="32px" />
          <Heading textAlign="center" size="md">
            {label}
          </Heading>
        </Stack>
      </CardBody>
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
        pt={1}
        mx={["0px", "16px", "24px", "42px"]}
      >
        <EnrollNowButton />
      </CardFooter>
    </Card>
  );
};

export default AlaCarteCard;