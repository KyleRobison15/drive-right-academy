import { useColorModeValue } from "@chakra-ui/react";
// import SplashBgLight from "../assets/Splash_Bg_Light.jpg";
// import SplashBgDark from "../assets/Splash_Bg_Dark.jpeg";

// const splashBgImage = {
//   light: SplashBgLight,
//   dark: SplashBgDark,
// };

const navBarBgColors = {
  light: "rgba(255,255,255,0.9)",
  dark: "rgba(0,0,0,1)",
};

const formContainerBgColors = {
  light: "rgba(255,255,255,0.9)",
  dark: "rgba(0,0,0,0.8)",
};

export default function useCustomColorValues() {
  const formContainerBg = useColorModeValue(
    formContainerBgColors.light,
    formContainerBgColors.dark
  );

  const navBarBg = useColorModeValue(navBarBgColors.light, navBarBgColors.dark);

  // const splashBgIamge = useColorModeValue(
  //   splashBgImage.light,
  //   splashBgImage.dark
  // );

  const customColorValues = {
    formContainerBg: formContainerBg,
    navBarBg: navBarBg,
    // splashBgImage: splashBgIamge,
  };

  return customColorValues;
}
