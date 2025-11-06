import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";
import { FaCaretRight } from "react-icons/fa6";
import { componentColorScheme } from "../theme";
import { IoIosCall } from "react-icons/io";

const Contact = () => {
  return (
    <Flex
      direction={["column", "column", "column", "row"]}
      flexGrow={1}
      alignItems="center"
      justify="space-evenly"
      mt="50px"
    >
      <Flex
        h={["350px", "375px"]}
        align="center"
        justifyContent="space-evenly"
        direction="column"
      >
        <Stack align="center" spacing={5}>
          <Heading textAlign="center" size="2xl">
            Call Now to Enroll!
          </Heading>
          <ChakraLink href="tel:7192009298">
            <Button
              aria-label="Call Us"
              leftIcon={<IoIosCall fontSize="20px" />}
              colorScheme={componentColorScheme}
              size={["md", "md", "md", "lg"]}
              variant="solid"
              p="12px"
              borderRadius="full"
            >
              (719) 200-9298
            </Button>
          </ChakraLink>
        </Stack>
        <Stack align="center" spacing={3}>
          <Heading size={["md", "md", "lg"]}> We accept:</Heading>
          <List spacing={2} fontSize="lg">
            <ListItem>
              <ListIcon
                as={FaCaretRight}
                color={`${componentColorScheme}.500`}
              />
              Visa
            </ListItem>
            <ListItem>
              <ListIcon
                as={FaCaretRight}
                color={`${componentColorScheme}.500`}
              />
              Mastercard
            </ListItem>
            <ListItem>
              <ListIcon
                as={FaCaretRight}
                color={`${componentColorScheme}.500`}
              />
              Discover
            </ListItem>
          </List>
        </Stack>
      </Flex>
      <Flex justify="center">
        <Box
          p="28px"
          boxShadow="lg"
          borderWidth="1px"
          borderRadius="5px"
          minW={["340px", "425px", "450px"]}
          bg="gray.50"
        >
          <ContactForm />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Contact;
