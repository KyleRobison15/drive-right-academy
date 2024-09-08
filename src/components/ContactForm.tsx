import { Button, Heading, VStack, Text } from "@chakra-ui/react";
import { z } from "zod";
import useZodForm from "../hooks/useZodForm";
import FormInput, { FormTextArea } from "./FormInput";
import { componentColorScheme } from "../theme";
import { RiMailSendLine } from "react-icons/ri";

const registerFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),
  subject: z.string().min(1, { message: "Subject is required." }),
  message: z
    .string()
    .min(1, {
      message:
        "Message is required. Please let us know what we can help you with!",
    })
    .max(250, {
      message: "Please limit your message to 250 characters or less.",
    }),
});

// Define the shape of our form by creating a typescript type called "FormData"
// This is to provide type safety and intellisense
// In this example, z.infer returns a typescript type based on the shape of our schema
type FormData = z.infer<typeof registerFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm({ schema: registerFormSchema });

  const onRegister = (data: FormData) => console.log(data);

  return (
    <>
      <Text textAlign="center" fontStyle="italic">
        Don't want to call?
      </Text>
      <Heading textAlign="center" mb={4} size="lg">
        Email Us
      </Heading>
      <VStack
        as="form"
        onSubmit={handleSubmit(onRegister)}
        spacing={4}
        align="stretch"
      >
        <FormInput
          label="Name"
          isRequired
          id={"name"}
          type={"text"}
          isInvalid={errors.name ? true : false}
          register={{ ...register("name") }}
          errorMessage={errors.name?.message}
        />
        <FormInput
          label="Your Email Address"
          isRequired
          id={"email"}
          type={"text"}
          isInvalid={errors.email ? true : false}
          register={{ ...register("email") }}
          errorMessage={errors.email?.message}
        />
        <FormInput
          label={"Subject"}
          isRequired
          id={"subject"}
          type={"text"}
          isInvalid={errors.subject ? true : false}
          register={{ ...register("subject") }}
          errorMessage={errors.subject?.message}
        />
        <FormTextArea
          label={"Message"}
          isRequired
          id={"message"}
          isInvalid={errors.message ? true : false}
          register={{ ...register("message") }}
          errorMessage={errors.message?.message}
        />
        <Button
          type="submit"
          colorScheme={componentColorScheme}
          mt={4}
          rightIcon={<RiMailSendLine fontSize="18px" />}
        >
          Submit
        </Button>
      </VStack>
    </>
  );
};

export default ContactForm;
