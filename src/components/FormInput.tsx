/* eslint-disable  @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { componentColorScheme } from "../theme";

export interface FormInputProps {
  label?: string;
  placeholder?: string;
  id: string;
  type?: string;
  isInvalid: boolean;
  errorMessage?: string;
  register: any;
  isRequired?: boolean;
}

const FormInput = ({
  label,
  placeholder,
  type,
  isInvalid,
  errorMessage,
  id,
  register,
  isRequired,
}: FormInputProps) => {
  return (
    <FormControl
      colorScheme={componentColorScheme}
      isInvalid={isInvalid}
      isRequired={isRequired}
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input autoComplete={id} placeholder={placeholder} id={id} type={type} {...register} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export const FormTextArea = ({
  label,
  id,
  isInvalid,
  placeholder,
  errorMessage,
  isRequired,
  type,
  register,
}: FormInputProps) => {
  return (
    <FormControl
      colorScheme={componentColorScheme}
      isInvalid={isInvalid}
      isRequired={isRequired}
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Textarea placeholder={placeholder} id={id} type={type} {...register} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
