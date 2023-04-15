import React from "react";
import MainMenu from "../components/Menu/Menu";
import { Flex, Box } from "@chakra-ui/react";

const Landing = () => {
  return (
    <Flex height='100vh' justifyContent="space-evenly" alignItems="center">
      <Box maxW="50%">
            <img src="" alt="mi foto" />
            <img src="" alt="logo" />
            {/* aca irian un par de boludces sobre mi */}
      </Box>
      <Box maxW="50%">
        <MainMenu />
      </Box>
    </Flex>
  );
};

export default Landing
