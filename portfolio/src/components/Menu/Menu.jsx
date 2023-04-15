import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { theme } from "../../theme";
const MainMenu = () => {
  return (
      <Flex  flexDirection='column' alignItems='center'>
        <Text color={theme.fontColors.main}>Home</Text>
        <Text color={theme.fontColors.main}>Projects</Text>
        <Text color={theme.fontColors.main}>AboutMe</Text>
        <Text color={theme.fontColors.main}>Contact</Text>
      </Flex>
  );
};

export default MainMenu;
