import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../src/Views/Landing";
import { theme } from "./theme";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <Box
        backgroundImage={`linear-gradient(to bottom right, ${theme.colors.bg1}, ${theme.colors.bg2})`}
        minHeight="100vh"
        minW="100vw"
        display="flex"
        flexDirection="column"
      >
        <Box border={"1px solid black"} flex="1">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
