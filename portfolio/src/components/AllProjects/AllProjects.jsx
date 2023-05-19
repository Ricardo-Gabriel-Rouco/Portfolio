import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoLinkExternal, GoClippy, GoProject } from "react-icons/go";
import { Link as reactLink } from "react-router-dom";
import theme from "../../theme";
import {
  Box,
  Card,
  CardBody,
  Link,
  Icon,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tooltip,
  useToast,
  Flex,
} from "@chakra-ui/react";

function AllProjects() {

  const [allRepos, setAllRepos] = useState([]);
  const toast = useToast();

  function handleCopy(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log(`Copied to clipboard: ${text}`);
        toast({
          title: "Copied to clipboard",
          description: "You can clone the repo",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        console.error(`Error copying to clipboard: ${err}`);
      });
  }


  useEffect(() => {
    const fetchRepos = async () => {
      const repos = await axios.get(
        "https://api.github.com/users/ricardo-gabriel-rouco/repos"
        
      );
      setAllRepos(repos.data);
    };
    fetchRepos();
  }, []);

  return (
    <>
    <Flex justifyContent={"center"} alignItems={'center'} flexDirection={'column'}>
      <Box >
        <Link
          as={reactLink}
          to={"/projects"}
          fontSize={theme.fontSizes.xxl}
          color={theme.fontColors.primary}
        >
          <Icon as={GoProject} mr={2} />
          Projects
        </Link>
      </Box>
      <Card w={"80%"} backgroundColor={theme.colors.bg3} mt={"1.9rem"}>
        <CardBody>
          <TableContainer maxW="100%" whiteSpace={"nowrap"}>
            <Table size="sm" p={0}>
              <Thead>
                <Tr>
                  <Th px={0}>Repo Name</Th>
                  <Th px={0}>Clone</Th>
                </Tr>
              </Thead>
              <Tbody>
                {allRepos.map((repo) => (
                  <Tr key={repo.id}>
                    <Td px={0}>
                      {repo.name}{" "}
                      <Tooltip label="Go to">
                        <Link as={reactLink} to={repo.html_url}>
                          <Icon as={GoLinkExternal} />
                        </Link>
                      </Tooltip>
                    </Td>
                    <Td px={0}>
                      <Tooltip label="Copy to clipboard">
                        <Button onClick={() => handleCopy(repo.clone_url)}>
                          <Icon as={GoClippy} />
                        </Button>
                      </Tooltip>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </Flex>
    </>
  );
}

export default AllProjects;
