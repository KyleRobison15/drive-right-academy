import {
  Card,
  CardBody,
  CardHeader,
  Text,
  CardFooter,
  Button,
  Heading,
  Box,
  List,
  ListItem,
  ListIcon,
  HStack,
  Accordion,
} from "@chakra-ui/react";
import { Program } from "../hooks/usePrograms";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FaCheckCircle } from "react-icons/fa";
import { componentColorScheme } from "../theme";
import ProgramAccordionItem from "./ProgramAccordionItem";
import EnrollNowButton from "./EnrollNowButton";

interface Props {
  program: Program;
}

const ProgramCard = ({ program }: Props) => {
  const renderLinks = () => {
    if (program.links !== null) {
      return program.links.map((link, index) => (
        <Box
          as="a"
          href={link.url}
          flex="1"
          display="flex"
          justifyContent="center"
          key={`${program.name}-link-${index}`}
        >
          <Button
            flex="1"
            variant="solid"
            colorScheme={componentColorScheme}
            rightIcon={<ChevronRightIcon boxSize="20px" />}
            borderRadius="full"
          >
            {link.label}
          </Button>
        </Box>
      ));
    }

    return <EnrollNowButton />;
  };

  const renderProgramAccordionItems = () => {
    const { accordionItemDetails } = program;

    if (accordionItemDetails !== null && accordionItemDetails.length !== 0) {
      return (
        <Accordion allowMultiple pb={4}>
          {accordionItemDetails.map((item, index) => (
            <ProgramAccordionItem
              accordionItemDetail={item}
              program={program}
              key={`${program.name}-accordion-item-${index}`}
            />
          ))}
        </Accordion>
      );
    }
  };

  return (
    <Card
      boxShadow="lg"
      variant="outline"
      p="24px"
      bg="gray.50"
      borderRadius="2xl"
    >
      <CardHeader pb={0}>
        {program.price && (
          <Text
            fontSize="3xl"
            fontWeight="bold"
            color={`${componentColorScheme}.500`}
            mb={4}
          >
            {program.price}
          </Text>
        )}
        <Heading size={["md", "lg"]}>{program.label}</Heading>
      </CardHeader>
      <CardBody>
        <List spacing={2}>
          {program.highlights.map((highlight, index) => (
            <ListItem key={`${program.name}-highlight-${index}`}>
              <ListIcon
                as={FaCheckCircle}
                color={`${componentColorScheme}.500`}
              />
              {highlight.text}
            </ListItem>
          ))}
        </List>
        <Text m={0} fontSize="md" mt="24px">
          {program.description}
        </Text>
        <Box mt="24px">{renderProgramAccordionItems()}</Box>
        <Text mt="12px" fontStyle="italic">
          {program.footerText}
        </Text>
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
        <HStack flexGrow={1} spacing={4}>
          {renderLinks()}
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
