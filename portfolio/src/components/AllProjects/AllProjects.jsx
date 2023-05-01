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
  Flex,
} from "@chakra-ui/react";

function AllProjects() {
  const accessToken = import.meta.env.VITE_GITHUB_API;

  const [allRepos, setAllRepos] = useState([]);

  function handleCopy(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log(`Copied to clipboard: ${text}`);
      })
      .catch((err) => {
        console.error(`Error copying to clipboard: ${err}`);
      });
  }

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  useEffect(() => {
    const fetchRepos = async () => {
      const repos = await axios.get(
        "https://api.github.com/users/ricardo-gabriel-rouco/repos",
        config
      );
      setAllRepos(repos.data);
    };
    fetchRepos();
  }, []);

  return (
    <Flex justifyContent={"center"}>
      <Box position="absolute" top={0} left={0} padding={30} marginLeft={30}>
        <Link as={reactLink} to={"/projects"} fontSize={theme.fontSizes.xxl} color={theme.fontColors.primary}>
          <Icon as={GoProject} mr={2}/>
          Projects
        </Link>
      </Box>
      <Card w={"80%"} backgroundColor={theme.colors.bg3} mt={'8%'}>
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
  );
}

export default AllProjects;
