import React from "react";
import MainMenu from "../components/Menu/Menu";
import { Flex, Box, Card, CardBody, Image } from "@chakra-ui/react";
import image from "../assets/gabrielRouco.jpg";
import logo from "../assets/recortado.png";
import theme from '../theme'

const Landing = () => {
  return (
    <Flex height="100vh" justifyContent="space-evenly" alignItems="center">
      <Box maxW="50%" >
        <Card maxW="sm" backgroundColor={theme.colors.bg3}>
          <CardBody paddingTop={'1rem'} paddingBottom={'1rem'}>
            <Image src={image} maxH={"300px"} w={'250px'} objectFit={'cover'}/>
            <Image src={logo} maxH={"200px"} w={"250px"} paddingTop={'1.5rem'} objectFit={'cover '}/>
          </CardBody>
        </Card>
        {/* aca irian un par de boludces sobre mi */}
      </Box>
      <Box maxW="50%">
        <MainMenu />
      </Box>
    </Flex>
  );
};

export default Landing;
