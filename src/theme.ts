import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const componentColorScheme = "brand";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
    brand: {
      50: "#ffe5e5",
      100: "#fbb9ba",
      200: "#f28c8d",
      300: "#ec6060",
      400: "#e53434",
      500: "#cb1b1a",
      600: "#9f1313",
      700: "#730c0d",
      800: "#460506",
      900: "#1e0000",
    },
    dark: {
      50: "#262626",
      100: "#262626",
      200: "#262626",
      300: "#262626",
      400: "#262626",
      500: "#262626",
      600: "#262626",
      700: "#262626",
      800: "#262626",
      900: "#262626",
    },
  },
});

export default theme;
