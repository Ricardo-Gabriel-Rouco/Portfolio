import React from "react";
import Menu from "../components/Menu/menu";
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
        <Menu />
      </Box>
    </Flex>
  );
};

export default Landing
