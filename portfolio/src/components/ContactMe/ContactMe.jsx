import React, { useState } from "react";
import { Link as routerLink } from "react-router-dom";
import theme from "../../theme";
import { ImWhatsapp, ImLinkedin } from "react-icons/im";
import { GoHome, GoMarkGithub, GoMail } from "react-icons/go";
import { BsSend } from "react-icons/bs";
import {
  Box,
  Button,
  Grid,
  Icon,
  GridItem,
  Link,
  CardBody,
  Card,
  Image,
  Text,
  Input,
  Textarea,
  Flex,
} from "@chakra-ui/react";

import qr from "../../assets/qrwhatsapp.png";

function ContactMe() {
  const [mailData, setMailData] = useState({
    subject: "",
    from: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setMailData({...mailData, [e.target.name] : [e.target.value]})
  };

  const handleSubmit = () => {

  };

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
      {/* https://wa.me/5493484380831 */}
      <Box position="absolute" top={0} left={0} padding={30} marginLeft={30}>
        <Link
          as={routerLink}
          to={"/"}
          fontSize={theme.fontSizes.xxl}
          color={theme.fontColors.primary}
        >
          <Icon as={GoHome} />
          Home
        </Link>
      </Box>
      <GridItem marginLeft={"40%"}>
        <Card height={260} width={220} backgroundColor={theme.colors.bg3}>
          <CardBody textAlign="center">
            <Image src={qr} width={200} height={200} />
            <Text fontSize={theme.fontSizes.sm}>
              <Link as={routerLink} to={"https://wa.me/5493484380831"}>
                <Icon as={ImWhatsapp} />
                +549 3484-380831
              </Link>
            </Text>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem marginLeft={"10%"}>
        <Card width={300} backgroundColor={theme.colors.bg3}>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <Input
                size={"sm"}
                htmlSize={3}
                width={250}
                variant={"filled"}
                placeholder="Your email. ex: r.g.rouco1@gmail.com"
                value={mailData.from}
                onChange={handleInputChange}
                name="from"
              />
              <Input
                size={"sm"}
                htmlSize={3}
                width={250}
                variant={"filled"}
                marginTop={5}
                placeholder="Subject. ex: I´ve seen your website"
                value={mailData.subject}
                onChange={handleInputChange}
                name="subject"
              />
              <Textarea
                size={"sm"}
                htmlSize={3}
                width={250}
                variant={"filled"}
                marginTop={5}
                rows={2}
                placeholder="Write your message here..."
                value={mailData.message}
                onChange={handleInputChange}
                name="message"
              />

              <Button marginTop={5} type="submit">
                <Icon as={BsSend} marginLeft={0} marginRight={2} />
                Send
              </Button>
            </form>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem marginLeft={"40%"}>
        <Link
          as={routerLink}
          to={"https://github.com/Ricardo-Gabriel-Rouco"}
          fontSize={theme.fontSizes.xxl}
          color={theme.fontColors.primary}
        >
          <Icon as={GoMarkGithub} marginRight={5} />
          Github
        </Link>
      </GridItem>

      <GridItem marginLeft={"10%"}>
        <Link
          as={routerLink}
          to={"https://www.linkedin.com/in/ricardo-gabriel-rouco/"}
          fontSize={theme.fontSizes.xxl}
          color={theme.fontColors.primary}
        >
          <Icon as={ImLinkedin} marginRight={5} />
          LinkedIn
        </Link>
      </GridItem>
    </Grid>
  );
}

export default ContactMe;
