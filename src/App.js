import { Box } from "@chakra-ui/react";
import { About } from "./components/About";
import { Intro } from "./components/Intro";
import {Footer } from "./components/Footer";
import { ToggleColorMode } from "./components/ToggleColorMode";
import PortfolioItem from "./components/PortfolioItem";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Box>
      <ToggleColorMode />
      <Intro />
      <About />
      <PortfolioItem />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
