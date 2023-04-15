import React from "react";
import MainMenu from "../components/Menu/Menu";
import { Flex, Box, Card, CardBody, Image } from "@chakra-ui/react";
import image from "../assets/fotoprot.jpg";
import logo from "../assets/logo2.png";

const Landing = () => {
  return (
    <Flex height="100vh" justifyContent="space-evenly" alignItems="center">
      <Box maxW="50%">
        <Card maxW="sm">
          <CardBody>
            <Image src={image} maxH={"250px"} w={'200px'}/>
            <Image src={logo} maxH={"200px"} maxW={"200px"} />
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
