import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Chakra UI
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Framer Motion
import { motion } from "framer-motion";

const theme = extendTheme({
  colors: {
    primary: "#161616",
    secondary: "#606470",
    tertiary: "#fff",
    quaternary: "#015AAA",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        <App />
      </motion.div>
    </ChakraProvider>
  </React.StrictMode>
);
