import React, { useState, useEffect } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { sendEmail } from "./sender";
import qr from "../../assets/qrwhatsapp.png";

function ContactMe() {
  const toast = useToast();

  const [mailData, setMailData] = useState({
    subject: "",
    from: "",
    message: "",
    fromName: "",
  });

  const handleInputChange = (e) => {
    setMailData({ ...mailData, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(mailData);
      toast({
        title: "E-mail sent.",
        description: "Your message have been sent.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setMailData({
        subject: "",
        from: "",
        message: "",
        fromName: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Flex justifyContent="space-around" alignItems="center" marginTop={'1rem'} marginBottom={'5rem'}>
        <Box >
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
      </Flex>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
          "2xl": "repeat(2, 1fr)",
        }}
        alignItems="center"
        gridColumnGap={5}
        gridRowGap={10}
      >
        {/* https://wa.me/5493484380831 */}
        <GridItem style={{
                display: "flex",
                justifyContent: "center",
              }}>
          <Card height={300} width={230} backgroundColor={theme.colors.bg3}>
            <CardBody textAlign="center">
              <Image src={qr} width={210} height={200} />
              <Text fontSize={theme.fontSizes.sm}>
                <Link as={routerLink} to={"https://wa.me/5493484380831"}>
                  <Icon as={ImWhatsapp} />
                  +549 3484-380831
                </Link>
              </Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem style={{
                display: "flex",
                justifyContent: "center",
              }}> 
          <Card height={300} width={300} backgroundColor={theme.colors.bg3}>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <Input
                  size={"sm"}
                  width={250}
                  variant={"filled"}
                  placeholder="Your name. ex: John Doe"
                  value={mailData.fromName}
                  onChange={handleInputChange}
                  name="fromName"
                />
                <Input
                  size={"sm"}
                  width={250}
                  variant={"filled"}
                  placeholder="Your email. ex: r.g.rouco1@gmail.com"
                  value={mailData.from}
                  onChange={handleInputChange}
                  marginTop={5}
                  name="from"
                />
                <Input
                  size={"sm"}
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
        <GridItem style={{
                display: "flex",
                justifyContent: "center",
                // marginTop: '3rem'
              }}>
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

        <GridItem style={{
                display: "flex",
                justifyContent: "center",
                // marginTop: '3rem'
                }}>
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
    </>
  );
}

export default ContactMe;
