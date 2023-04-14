import { Box } from "@chakra-ui/react";
import Landing from '../src/Views/Landing'
import {theme} from './theme'

function App() {

  return (
    <Box
    backgroundImage={`linear-gradient(to bottom right, ${theme.colors.bg1}, ${theme.colors.bg2})`}
      minHeight="100vh"
      minW="100vh"
    >
      <Landing/>
    </Box>
  )
}

export default App
