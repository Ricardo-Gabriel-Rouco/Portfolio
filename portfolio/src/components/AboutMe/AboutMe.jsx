import React from "react";
import {
  Box,
  Link,
  Icon,
  Button,
  Card,
  CardBody,
  Image,
  Text,
  Flex,
  Grid,
  GridItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Tooltip
} from "@chakra-ui/react";
import TruncatedText from "../TruncatedText/TruncatedText";
import { Link as reactLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { AiOutlineDownload } from "react-icons/ai";
import image from "../../assets/gabrielRouco.jpg";
import theme from "../../theme";

function AboutMe() {
  const {
    isOpen: isFrontOpen,
    onOpen: onFrontOpen,
    onClose: onFrontClose,
  } = useDisclosure();
  const {
    isOpen: isBackOpen,
    onOpen: onBackOpen,
    onClose: onBackClose,
  } = useDisclosure();

  const maxLength = 137

  const handleDownload = () => {
    const fileUrl = "../../assets/CV Gabriel Rouco.pdf"; // Reemplaza esto con la URL del archivo que deseas descargar
    const fileName = "CV Gabriel Rouco.pdf"; // Reemplaza esto con el nombre y la extensión del archivo

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <>
      <Flex
        justifyContent="space-around"
        alignItems="center"
        marginTop={"0.3rem"}
        marginBottom={"4rem"}
      >
        <Box top={0} left={0}>
          <Link
            as={reactLink}
            to={"/"}
            fontSize={theme.fontSizes.xxl}
            color={theme.fontColors.primary}
          >
            <Icon as={GoHome} />
            Home
          </Link>
        </Box>
      </Flex>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
          "2xl": "repeat(2, 1fr)",
        }}
        gridRowGap={3}
        gridColumnGap={3}
        flexWrap="wrap"
        alignItems="center"
        justifyContent={"center"}
      >
        <GridItem
          maxW="50%"
          display={"flex"}
          flexDirection={"column"}
          alignContent={"center"}
          marginLeft={"20%"}
          justifyContent={"flex-start"}
          color={theme.fontColors.primary}
          // justifyContent={{ base: "center", md: "flex-start" }} // centra verticalmente en pantallas pequeñas
          // margin={"0 auto"}
        >
          <Card maxW="sm" backgroundColor={theme.colors.bg3} marginRight={10}>
            <CardBody
              paddingTop={"1rem"}
              paddingBottom={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              // width={"400px"}
            >
              <Image
                src={image}
                maxH={"300px"}
                w={"250px"}
                objectFit={"cover"}
              />
              <Text
                alignSelf={"center"}
                marginTop={15}
                fontSize={theme.fontSizes.xl}
                fontWeight={theme.fontWeights.bold}
              >
                Gabriel Rouco
              </Text>
              <Tooltip label='Download CV'>
              <Button
                onClick={handleDownload}
                style={{ alignSelf: "center" }}
                color={"black"}
                
              >
                CV 
                <Icon as={AiOutlineDownload} w={6} h={6} marginLeft={'0.5rem'}/>
              </Button>
              </Tooltip>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem
          maxW="50%"
          display={"flex"}
          flexDirection={"column"}
          alignContent={"center"}
          marginLeft={"20%"}
          color={theme.fontColors.primary}
          // justifyContent={{ base: "center", md: "flex-start" }} // centra verticalmente en pantallas pequeñas
        >
          <Box>
            <Text fontSize={theme.fontSizes.xxl}>How am I?</Text>
            <Text fontSize={theme.fontSizes.md} marginTop={6} overflowX={'hidden'}>
              <TruncatedText/>
            </Text>
          </Box>
          <Text fontSize={theme.fontSizes.xxl} marginTop={6}>
            Tech Abilities
          </Text>
          <Box>
            <Flex flexDirection="column" alignItems="flex-start">
              <Flex flexDirection={"column"}>
                <Text fontSize={theme.fontSizes.xl} marginTop={6}>
                  Front-end
                </Text>
                <Button
                  onClick={onFrontOpen}
                  marginTop={25}
                  style={{ alignSelf: "center" }}
                  color={"black"}
                >
                  View More
                </Button>
              </Flex>
              <Modal isOpen={isFrontOpen} onClose={onFrontClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Front-End Skills</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>JavaScript</Text>
                    <Text>React Js</Text>
                    <Text>Redux</Text>
                    <Text>HTML</Text>
                    <Text>CSS</Text>
                    <Text>Material UI</Text>
                    <Text>Chakra UI</Text>
                  </ModalBody>
                </ModalContent>
              </Modal>
              <Flex flexDirection={"column"}>
                <Text fontSize={theme.fontSizes.xl} marginTop={6}>
                  Back-end
                </Text>
                <Button
                  onClick={onBackOpen}
                  marginTop={25}
                  style={{ alignSelf: "center" }}
                  color={"black"}
                >
                  View More
                </Button>
              </Flex>
              <Modal isOpen={isBackOpen} onClose={onBackClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Back-End Skills</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>Sequelize</Text>
                    <Text>Postgre SQL</Text>
                    <Text>Express</Text>
                    <Text>Python</Text>
                    <Text>Django</Text>
                    <Text>Microsoft SQL server</Text>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default AboutMe;
