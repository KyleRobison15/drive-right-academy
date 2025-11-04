import {
  Flex,
  Heading,
  Stack,
  Text,
  Box,
  Image,
  useColorModeValue,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { componentColorScheme } from "../theme";
import MiniCooperImg from "../assets/mini_cooper.png";
import Fiat500Img from "../assets/fiat_500.png";
import { yearsInBusiness } from "../utils/dateUtils";
import {
  FaChalkboardUser,
  FaCalendarCheck,
  FaMoneyBill1,
} from "react-icons/fa6";
import { IoCarSportSharp } from "react-icons/io5";
import { GiSteeringWheel } from "react-icons/gi";



const About = () => {
  const sectionMargins: string[] = ["5%", "5%", "5%", "12%"];

  const vehicleCardBg = useColorModeValue("gray.50", "gray.700");

  const vehicles = [
    {
      name: "2022 Mini Cooper",
      img: MiniCooperImg,
    },
    {
      name: "2013 Fiat 500 (Manual Transmission)",
      img: Fiat500Img,
    },
  ];

  const features = [
    {
      icon: FaChalkboardUser,
      title: "Experienced and Patient Instructor",
      description: `Peter Gates is our certified instructor with over ${yearsInBusiness} years of teaching experience. Peter knows how to adapt to every learner's pace, whether you're nervous behind the wheel or just looking to fine-tune your skills.`,
    },
    {
      icon: FaCalendarCheck,
      title: "Flexible Scheduling",
      description:
        "We offer a wide range of lesson times to fit your busy life, including evenings and weekends! Scheduling is done over the phone with Susan. She will coordinate the best times available.",
    },
    {
      icon: FaMoneyBill1,
      title: "Affordable Pricing",
      description:
        "Quality instruction shouldn't break the bank. Our lesson packages are competitively priced with no hidden fees.",
    },
    {
      icon: IoCarSportSharp,
      title: "Modern Vehicles",
      description:
        "You'll learn in clean, well-maintained cars equipped with the latest safety features.",
    },
    {
      icon: GiSteeringWheel,
      title: "Real World Training",
      description:
        "Our programs focus on both city and highway driving to ensure you gain confidence and practical experience in real world scenarios.",
    },
  ];

  return (
    <Flex direction="column" flexGrow={1}>
      <Stack alignItems="center" mx="14px" mb="32px" mt="50px" spacing={4}>
        <Heading size={["xl", "2xl"]}>About</Heading>
      </Stack>
      <Stack mx={sectionMargins} mb="32px" spacing={6}>
        <Heading textColor={`${componentColorScheme}.500`}>
          Our Vehicles
        </Heading>

        <Text maxW="700px">
          Not only do our cars feature the highest safety and performance
          standards on the market, they're also cool and downright fun cars to
          drive!
        </Text>

        <Flex wrap="wrap" justify="space-around" gap={6}>
          {vehicles.map((vehicle) => (
            <Box
              key={vehicle.name}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg={vehicleCardBg}
              boxShadow="sm"
              maxW="400px"
              minW="400px"
            >
              <Image
                src={vehicle.img}
                alt={vehicle.name}
                objectFit="cover"
                w="100%"
                h="200px"
              />
              <Box p="4">
                <Text fontWeight="bold" fontSize="lg">
                  {vehicle.name}
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Stack>
      <Stack mx={sectionMargins} mt="24px">
        <Heading textColor={`${componentColorScheme}.500`}>
          Our Approach to Success
        </Heading>
        <Stack spacing={5}>
          <Text>
            Drive-Right Academy is locally owned and has been teaching teens and
            adults the skills necessary to become successful and legal drivers
            for the last {yearsInBusiness} years. Through the years, we've
            learned a thing or two about how to teach Driver's Education
            effectively.
          </Text>
          <Stack spacing={8} mx={["5%", "12%"]} my="28px">
            {features.map((feature) => (
              <Box
                key={feature.title}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="sm"
                bg="white"
                _hover={{
                  boxShadow: "md",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.2s"
              >
                <HStack align="center" spacing={3} mb={2}>
                  <Icon
                    as={feature.icon}
                    boxSize={7}
                    color={`${componentColorScheme}.500`}
                  />
                  <Heading
                    as="h3"
                    size="md"
                    color={`${componentColorScheme}.500`}
                  >
                    {feature.title}
                  </Heading>
                </HStack>
                <Text fontSize="md" color="gray.700">
                  {feature.description}
                </Text>
              </Box>
            ))}
          </Stack>

          <Text>
            Drive-Right Academy is your road to successful Driver's Education.
          </Text>
        </Stack>
      </Stack>
      <Stack mx={sectionMargins} mt="24px">
        <Heading textColor={`${componentColorScheme}.500`}>
          Insurance Discounts
        </Heading>
        <Stack spacing={5}>
          <Text>
            Many of our programs qualify for insurance discounts. The discounts
            vary among insurance companies, so you should check with your
            provider. Upon completion of the course, we issue a certificate for
            submission to your insurance company.
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default About;
