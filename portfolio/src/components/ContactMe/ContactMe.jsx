import React from "react";
import { Link as routerLink } from "react-router-dom";
import theme from "../../theme";
import { ImWhatsapp, ImLinkedin } from "react-icons/im";
import { GoHome, GoMarkGithub } from "react-icons/go";
import {
  Grid,
  Icon,
  GridItem,
  Link,
  CardBody,
  Card,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import qr from "../../assets/qrwhatsapp.png";
function ContactMe() {
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

      <GridItem marginLeft={"30%"}>
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
      <GridItem>Email</GridItem>
      <GridItem marginLeft={"30%"}>
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

      <GridItem >
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
