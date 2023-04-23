import React from "react";
import { Flex, Link, Icon } from "@chakra-ui/react";
import { GoHome, GoProject, GoBriefcase, GoMention } from "react-icons/go";
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
        {/* link a la agina inicial, buscar icons de react icon o de chakra */}
        <Icon as={GoHome} marginRight={"10px"} />
        Home
      </Link>
      <Link
        color={theme.fontColors.primary}
        marginBottom={"3rem"}
        fontSize={theme.fontSizes.lg}
        as={routerlink}
        to="/projects"
      >
        {/* listado de proyectos con sus respectivos links a github, call of whatever, rick and morty, pi, pf y pi mejorandose (no olvidarse de aclarar) */}
        <Icon as={GoProject} marginRight={"10px"} />
        Projects
      </Link>
      <Link
        color={theme.fontColors.primary}
        marginBottom={"3rem"}
        fontSize={theme.fontSizes.lg}
      >
        {/* aca pondre una suerte de CV con tecnologias, algunos datos personales y va ir mi foto de la landing */}
        <Icon as={GoBriefcase} marginRight={"10px"} />
        AboutMe
      </Link>
      <Link
        color={theme.fontColors.primary}
        marginBottom={"3rem"}
        fontSize={theme.fontSizes.lg}
      >
        {/* aca va air formulario de contacto via mail, ver email.js */}
        <Icon as={GoMention} marginRight={"10px"} />
        Contact
      </Link>
    </Flex>
  );
};

export default MainMenu;
