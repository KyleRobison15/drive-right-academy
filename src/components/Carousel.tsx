import { useState } from "react";
import { Box, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface Props {
  images: string[];
}

const Carousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSmallerScreen = useBreakpointValue({ base: true, md: false });

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box position="relative" maxW="600px" mx="auto" overflow="hidden">
      <Flex
        direction={isSmallerScreen ? "column" : "row"}
        align="center"
        justify="center"
        position="relative"
        w="full"
        h="full"
      >
        <IconButton
          aria-label="Previous Slide"
          icon={<ChevronLeftIcon />}
          onClick={goToPrev}
          position="absolute"
          left="0"
          top="50%"
          transform="translateY(-50%)"
          zIndex="1"
        />
        <Box
          as="img"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          w="full"
          h="auto"
          objectFit="cover"
        />
        <IconButton
          aria-label="Next Slide"
          icon={<ChevronRightIcon />}
          onClick={goToNext}
          position="absolute"
          right="0"
          top="50%"
          transform="translateY(-50%)"
          zIndex="1"
        />
      </Flex>
    </Box>
  );
};

export default Carousel;
