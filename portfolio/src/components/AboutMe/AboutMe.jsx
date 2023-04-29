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
} from "@chakra-ui/react";
import { Link as reactLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
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


  return (
    <Grid
      height="100vh"
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
      }}
      gap={3}
      alignItems="center"
    >
      <Box position="absolute" top={0} left={0} padding={30} marginLeft={30}>
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
      <GridItem
        maxW="50%"
        display={"flex"}
        flexDirection={"column"}
        alignContent={"center"}
        color={theme.fontColors.primary}
        justifyContent={{ base: "center", md: "flex-start" }} // centra verticalmente en pantallas pequeñas
        gap={3} // aumenta o disminuye el espacio entre los elementos
        margin={"0 auto"}
      >
        <Card maxW="sm" backgroundColor={theme.colors.bg3} marginRight={20}>
          <CardBody
            paddingTop={"1rem"}
            paddingBottom={"1rem"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            maxW={300}
          >
            <Image src={image} maxH={"300px"} w={"250px"} objectFit={"cover"} />
            <Text
              alignSelf={"center"}
              marginTop={15}
              fontSize={theme.fontSizes.xl}
              fontWeight={theme.fontWeights.bold}
            >
              Gabriel Rouco
            </Text>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem
        maxW="50%"
        display={"flex"}
        flexDirection={"column"}
        alignContent={"center"}
        color={theme.fontColors.primary}
        justifyContent={{ base: "center", md: "flex-start" }} // centra verticalmente en pantallas pequeñas
        gap={3} // aumenta o disminuye el espacio entre los elementos
      >
        <Box>
          <Text fontSize={theme.fontSizes.xxl}>How am I?</Text>
          <Text marginTop={8}>A web developer with experience in Javascript. Actually living with my girlfriend and two cats.
            I´m always looking for new knowledge, very proactive and very passionate for tecnology
          </Text>
        </Box>
        <Text fontSize={theme.fontSizes.xxl} margin={6}>Tech Abilities</Text>
        <Box>
          <Flex flexDirection="row" alignItems="center">
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
            <Flex flexDirection={"column"} marginLeft={20}>
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
  );
}

export default AboutMe;
