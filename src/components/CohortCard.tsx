import {
  Card,
  CardHeader,
  Flex,
  CardBody,
  Heading,
  CardFooter,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import EnrollNowButton from "./EnrollNowButton";
import { Cohort } from "../hooks/useCohorts";
import { FaCaretRight } from "react-icons/fa6";
import { componentColorScheme } from "../theme";

interface Props {
  cohort: Cohort;
}

const CohortCard = ({ cohort }: Props) => {
  const { label, cohortId, classDates } = cohort;

  return (
    <Card boxShadow="lg" variant="outline" p="24px" h="375px" bg="gray.50">
      <CardHeader>
        <Flex justifyContent="center">
          <Heading size="md" textAlign="center">
            {label}
          </Heading>
        </Flex>
      </CardHeader>
      <CardBody>
        <List spacing={2}>
          {classDates.map((classDate) => (
            <ListItem key={cohortId}>
              <ListIcon
                as={FaCaretRight}
                color={`${componentColorScheme}.500`}
              />
              {`${classDate.month} ${classDate.day}, ${classDate.year}`}
            </ListItem>
          ))}
        </List>
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
      >
        <EnrollNowButton />
      </CardFooter>
    </Card>
  );
};

export default CohortCard;
