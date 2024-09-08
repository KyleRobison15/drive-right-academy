import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { AccordionItemDetail, Program } from "../hooks/usePrograms";
import { FaCaretRight, FaCheckCircle } from "react-icons/fa";
import { componentColorScheme } from "../theme";

interface Props {
  accordionItemDetail: AccordionItemDetail;
  program: Program;
}

const ProgramAccordionItem = ({ accordionItemDetail, program }: Props) => {
  const { label, highlights, text } = accordionItemDetail;

  return (
    <AccordionItem>
      <h2>
        <AccordionButton _expanded={{ bg: "gray.100" }}>
          <Box as="span" flex="1" textAlign="left" fontWeight="bold">
            {label}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      {highlights && (
        <AccordionPanel pb={4}>
          <List spacing={2}>
            {highlights.map((highlight, index) => (
              <ListItem key={`${program.name}-accordion-highlight-${index}`}>
                <ListIcon
                  as={FaCaretRight}
                  color={`${componentColorScheme}.500`}
                />
                {highlight}
              </ListItem>
            ))}
          </List>
        </AccordionPanel>
      )}
      {text && <AccordionPanel pb={4}>{text}</AccordionPanel>}
    </AccordionItem>
  );
};

export default ProgramAccordionItem;
