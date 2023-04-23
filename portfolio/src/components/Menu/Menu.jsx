import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { theme } from "../../theme";
import { Link as routerlink } from "react-router-dom";
const MainMenu = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Link
        color={theme.fontColors.primary}
        marginBottom={"3rem"}
        fontSize={theme.fontSizes.lg}
      >
        Home
      </Link>
      <Link
        color={theme.fontColors.primary}
        marginBottom={"3rem"}
        fontSize={theme.fontSizes.lg}
        as={routerlink}
        to="/projects"
      >
        Projects
      </Link>
      <Link
        color={theme.fontColors.primary}
        marginBottom={"3rem"}
        fontSize={theme.fontSizes.lg}
      >
        AboutMe
      </Link>
      <Link
        color={theme.fontColors.primary}
        marginBottom={"3rem"}
        fontSize={theme.fontSizes.lg}
      >
        Contact
      </Link>
    </Flex>
  );
};

export default MainMenu;
