import React from "react";
import { GoMarkGithub, GoHome } from "react-icons/go";
import { SiVercel } from "react-icons/si";
import {
  Box,
  Flex,
  Card,
  CardBody,
  Icon,
  Image,
  Grid,
  GridItem,
  Link,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link as reactLink } from "react-router-dom";
import callof from "../../assets/callofwhatever.jpg";
import videogames from "../../assets/videogames.jpg";
import books from "../../assets/books.jpg";
import theme from "../../theme";

function Projects() {
  const {
    isOpen: isOpencallof,
    onOpen: opencallof,
    onClose: closecallof,
  } = useDisclosure();
  const {
    isOpen: isOpenvideogames,
    onOpen: openvideogames,
    onClose: closevideogames,
  } = useDisclosure();
  const {
    isOpen: isOpenBooks,
    onOpen: openBooks,
    onClose: closeBooks,
  } = useDisclosure();
  return (
    <>
      <Flex justifyContent="space-around" alignItems="center" marginTop={'0.3rem'} marginBottom={'7rem'}>
        <Box
          top={0}
          left={0}
          // padding={30}
        >
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
        <Box>
          <Link
            as={reactLink}
            to="/all"
            fontSize={theme.fontSizes.xxl}
            color={theme.fontColors.primary}
          >
            All Projects
          </Link>
        </Box>
      </Flex>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
          '2xl': "repeat(4, 1fr)",
          
        }}
        gap={2}
        flexWrap="wrap"
      >
        {/* Call of whatever */}
        <GridItem style={{
                display: "flex",
                justifyContent: "center",
              }}>
          <Card width={"350px"} bgColor={theme.colors.bg3}>
            <CardBody
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={callof}
                width={"100%"}
                height={"200px"}
                border={"solid 1px black"}
              />
              <Text
                marginTop={25}
                fontWeight={theme.fontWeights.bold}
                fontSize={theme.fontSizes.xl}
                alignContent={"left"}
              >
                Call of Whatever I Want
              </Text>
              <Button
                onClick={opencallof}
                marginTop={25}
                style={{ alignSelf: "center" }}
              >
                Details
              </Button>
            </CardBody>
          </Card>
          <Modal isOpen={isOpencallof} onClose={closecallof}>
            <ModalOverlay />
            <ModalContent bgColor={theme.colors.bg3}>
              <ModalHeader>Call of Whatever</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Image src={callof} border={"solid 1px black"} />
                <Text marginTop={25}>
                  A mini game using pure JavaScript, a little of bit of css to
                  principal menu using Less. Made just to practive classes and
                  objects in JS. Actually is deployed in Vercel. Not responsive
                </Text>
                <ModalFooter justifyContent={"center"}>
                  <Link href="https://github.com/Ricardo-Gabriel-Rouco/callofwhatever">
                    <Icon as={GoMarkGithub} h={25} w={25} marginRight={30} />
                  </Link>
                  <Link href="https://callofwhatever.vercel.app/">
                    <Icon as={SiVercel} h={25} w={25} />
                  </Link>
                </ModalFooter>
              </ModalBody>
            </ModalContent>
          </Modal>
        </GridItem>
        {/* Pi */}
        <GridItem style={{
                display: "flex",
                justifyContent: "center",
              }}>
          <Card width={"350px"} bgColor={theme.colors.bg3}>
            <CardBody
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={videogames}
                width={"100%"}
                height={"200px"}
                border={"solid 1px black"}
              />
              <Text
                marginTop={25}
                fontWeight={theme.fontWeights.bold}
                fontSize={theme.fontSizes.xl}
                alignContent={"left"}
              >
                Pi videogames
              </Text>
              <Button
                onClick={openvideogames}
                marginTop={25}
                style={{ alignSelf: "center" }}
              >
                Details
              </Button>
            </CardBody>
          </Card>
          <Modal isOpen={isOpenvideogames} onClose={closevideogames}>
            <ModalOverlay />
            <ModalContent bgColor={theme.colors.bg3}>
              <ModalHeader>PI-VideoGames</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Image src={videogames} border={"solid 1px black"} />
                <Text marginTop={25}>
                  This is a Crud App made for the Individual Project at the
                  bootcamp of FullStack Developer in SoyHenry. It was made with
                  React, Js, Redux, Sequelize and Express server. The deploy is
                  in Railway and due to the restrictions of the free plan it
                  could be out of service. All the information comes from
                  Rawg.io api. Also the page is rendered in Vercel.
                </Text>
                <ModalFooter justifyContent={"center"}>
                  <Link href="https://github.com/Ricardo-Gabriel-Rouco/videoGameDeploy">
                    <Icon as={GoMarkGithub} h={25} w={25} marginRight={30} />
                  </Link>
                  <Link href="https://video-game-deploy.vercel.app/">
                    <Icon as={SiVercel} h={25} w={25} />
                  </Link>
                </ModalFooter>
              </ModalBody>
            </ModalContent>
          </Modal>
        </GridItem >
        {/* PF */}
        <GridItem style={{
                display: "flex",
                justifyContent: "center",
              }}>
          <Card width={"350px"} bgColor={theme.colors.bg3}>
            <CardBody
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={books}
                width={"100%"}
                height={"200px"}
                border={"solid 1px black"}
              />
              <Text
                marginTop={25}
                fontWeight={theme.fontWeights.bold}
                fontSize={theme.fontSizes.xl}
                alignContent={"left"}
              >
                Book's Kingdom
              </Text>
              <Button
                onClick={openBooks}
                marginTop={25}
                style={{ alignSelf: "center" }}
              >
                Details
              </Button>
            </CardBody>
          </Card>
          <Modal isOpen={isOpenBooks} onClose={closeBooks}>
            <ModalOverlay />
            <ModalContent bgColor={theme.colors.bg3}>
              <ModalHeader>Book's kingdom</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Image src={books} border={"solid 1px black"} />
                <Text marginTop={25}>
                  This is a e-commerce made for the final project of soyHenry
                  bootcamp. In this one, it was made with another six partners.
                  We use firebase to make the back-end and the user
                  authentication was with google Authentication service. Also
                  the front-end use Material Ui for styling, NodeMailer for the
                  mailing and finally import redux Toolkit for global states.
                  Team Members:
                  <br />
                  <Link href="https://github.com/fr0st1987">
                    Joaquin Oliveira
                  </Link>
                  <br />
                  <Link href="https://github.com/jgiampe">
                    Julian Giampetruzi
                  </Link>
                  <br />
                  <Link href="https://github.com/Alfredocgn">
                    Alfredo Gonzalez
                  </Link>
                  <br />
                  <Link href="https://github.com/MLSalerno">
                    Mauricio Salerno
                  </Link>
                  <br />
                  <Link href="https://github.com/ClaPeralta">
                    Claudio Peralta
                  </Link>
                  <br />
                  <Link href="https://github.com/mmitacc">Manuel Mittac</Link>
                </Text>
                <ModalFooter justifyContent={"center"}>
                  <Link href="https://github.com/Ricardo-Gabriel-Rouco/PFHENRY">
                    <Icon as={GoMarkGithub} h={25} w={25} marginRight={30} />
                  </Link>
                  <Link href="https://www.book-kingom.com.ar/">
                    <Icon as={SiVercel} h={25} w={25} />
                  </Link>
                </ModalFooter>
              </ModalBody>
            </ModalContent>
          </Modal>
        </GridItem>
      </Grid>
    </>
  );
}

export default Projects;
