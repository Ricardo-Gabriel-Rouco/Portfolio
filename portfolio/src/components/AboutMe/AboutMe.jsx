import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Image,
  Text,
  Grid,
  GridItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
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
  const {
    isOpen: isSoftOpen,
    onOpen: onSoftOpen,
    onClose: onSoftClose,
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
      <GridItem
        maxW="50%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={"center"}
        marginLeft={300}
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
        justifyContent="center"
        alignContent={"center"}
        color={theme.fontColors.primary}
        marginLeft={100}
      >
        <Text fontSize={theme.fontSizes.xxl}>Tech Abilities</Text>
        <Box>
        <Text fontSize={theme.fontSizes.xl} marginTop={10}>
          Front-end
        </Text>
        {/* <Text>JavaScript</Text>
        <Text>React Js</Text>
        <Text>Redux</Text> */}
        <Button
          onClick={onFrontOpen}
          marginTop={25}
          style={{ alignSelf: "center" }}
        >
          View More
        </Button>
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
        <Text fontSize={theme.fontSizes.xl} marginTop={10}>
          Back-end
        </Text>
        {/* <Text>Sequelize</Text>
        <Text>Postgre SQL</Text>
        <Text>Express</Text> */}
        <Button
          onClick={onBackOpen}
          marginTop={25}
          style={{ alignSelf: "center" }}
        >
          View More
        </Button>
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
        </Box>
      </GridItem>
    </Grid>
  );
}

export default AboutMe;
