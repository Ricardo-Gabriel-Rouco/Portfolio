import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { theme } from "../../theme";
const Menu = () => {
  return (
    <Box>
      <Text color={theme.fontColors.main}>Home</Text>
      <Text color={theme.fontColors.main}>Projects</Text>
      <Text color={theme.fontColors.main}>AboutMe</Text>
      <Text color={theme.fontColors.main}>Contact</Text>
    </Box>
  );
};

export default Menu;
