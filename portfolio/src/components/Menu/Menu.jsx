import React from "react";
import { Flex, Link, Icon } from "@chakra-ui/react";
import { GoHome, GoProject, GoBriefcase, GoMention } from "react-icons/go";
import { theme } from "../../theme";
import { Link as routerlink } from "react-router-dom";
const MainMenu = () => {
  return (
    <Flex flexDirection="column" alignItems="left" fontSize={theme.fontSizes.xxl}>
      <Link
        color={theme.fontColors.primary}
        marginBottom={"2rem"}
        fontSize={theme.fontSizes.xxl}
        as={routerlink}
        to="/projects"
      >
        {/* listado de proyectos con sus respectivos links a github, call of whatever, pi, pf y pi mejorandose (no olvidarse de aclarar) */}
        <Icon as={GoProject} marginRight={"10px"} />
        Projects
      </Link>
      <Link
        color={theme.fontColors.primary}
        marginBottom={"2rem"}
        fontSize={theme.fontSizes.xxl}
        as={routerlink}
        to={'/about'}
      >
        {/* aca pondre una suerte de CV con tecnologias, algunos datos personales y va ir mi foto de la landing */}
        <Icon as={GoBriefcase} marginRight={"10px"} />
        About Me
      </Link>
      <Link
        color={theme.fontColors.primary}
        marginBottom={"2rem"}
        fontSize={theme.fontSizes.xxl}
        as={routerlink}
        to={'/contact'}
      >
        {/* aca va air formulario de contacto via mail, ver email.js */}
        <Icon as={GoMention} marginRight={"10px"} />
        Contact
      </Link>
    </Flex>
  );
};

export default MainMenu;
